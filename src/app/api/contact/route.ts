import { NextResponse } from "next/server";

type ContactPayload = {
  clinicName: string;
  contactName: string;
  phone: string;
  lineId: string;
  email: string;
  scale: string;
  interests: string[];
  other: string;
};

function maskUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname;
    const visiblePath = path.length > 18 ? `${path.slice(0, 12)}...${path.slice(-6)}` : path;
    return `${parsed.origin}${visiblePath}`;
  } catch {
    if (url.length <= 16) return "***";
    return `${url.slice(0, 8)}...${url.slice(-4)}`;
  }
}

function normalizeString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function normalizePayload(body: unknown): ContactPayload {
  const data = (body ?? {}) as Record<string, unknown>;
  const interestsRaw = data.interests;
  const interests = Array.isArray(interestsRaw)
    ? interestsRaw.filter((item): item is string => typeof item === "string").map((item) => item.trim())
    : [];

  return {
    clinicName: normalizeString(data.clinicName),
    contactName: normalizeString(data.contactName),
    phone: normalizeString(data.phone),
    lineId: normalizeString(data.lineId),
    email: normalizeString(data.email),
    scale: normalizeString(data.scale),
    interests,
    other: normalizeString(data.other),
  };
}

function validatePayload(payload: ContactPayload): string | null {
  if (!payload.contactName) return "請填寫聯絡人姓名";
  if (!payload.phone) return "請填寫聯絡電話";
  return null;
}

export async function GET() {
  return NextResponse.json({ ok: true, route: "contact" });
}

export async function POST(request: Request) {
  console.log("[api/contact] request received");
  console.log("[api/contact] deployment runtime", {
    hasWebhookUrl: Boolean(process.env.CONTACT_WEBHOOK_URL),
    vercelEnv: process.env.VERCEL_ENV ?? null,
    vercelUrl: process.env.VERCEL_URL ?? null,
    nodeEnv: process.env.NODE_ENV ?? null,
  });

  let parsedBody: unknown;
  try {
    parsedBody = await request.json();
  } catch (error) {
    console.error("[api/contact] invalid json body", error);
    return NextResponse.json(
      { success: false, error: "請求格式錯誤（JSON）" },
      { status: 400 },
    );
  }

  const payload = normalizePayload(parsedBody);
  console.log("[api/contact] normalized payload", {
    ...payload,
    email: payload.email ? "[provided]" : "",
    phone: payload.phone ? "[provided]" : "",
  });

  const validationError = validatePayload(payload);
  if (validationError) {
    console.log("[api/contact] validation failed", validationError);
    return NextResponse.json(
      { success: false, error: validationError },
      { status: 400 },
    );
  }

  console.log("[api/contact] validation passed");

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  console.log("[api/contact] webhook url exists:", Boolean(webhookUrl));
  console.log("[api/contact] webhook url masked", webhookUrl ? maskUrl(webhookUrl) : null);
  if (!webhookUrl) {
    console.error("[api/contact] missing required env CONTACT_WEBHOOK_URL");
    return NextResponse.json(
      {
        success: false,
        error: "伺服器尚未完成表單設定（CONTACT_WEBHOOK_URL）",
        debug: {
          vercelEnv: process.env.VERCEL_ENV ?? null,
          vercelUrl: process.env.VERCEL_URL ?? null,
        },
      },
      { status: 500 },
    );
  }

  const outboundPayload = {
    source: "contact-form",
    submittedAt: new Date().toISOString(),
    ...payload,
  };
  console.log("[api/contact] outbound payload", {
    ...outboundPayload,
    email: outboundPayload.email ? "[provided]" : "",
    phone: outboundPayload.phone ? "[provided]" : "",
  });
  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(outboundPayload),
      cache: "no-store",
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });
    const webhookResponseText = await webhookResponse.text().catch(() => "");
    console.log("[api/contact] webhook status", webhookResponse.status);
    console.log("[api/contact] webhook transport", {
      redirected: webhookResponse.redirected,
      finalUrl: maskUrl(webhookResponse.url || webhookUrl),
    });
    console.log("[api/contact] webhook raw response", webhookResponseText);

    let webhookParsedResponse: unknown = null;
    if (webhookResponseText) {
      try {
        webhookParsedResponse = JSON.parse(webhookResponseText);
      } catch (parseError) {
        console.log("[api/contact] webhook parsed response", {
          parsed: null,
          parseError: String(parseError),
          rawText: webhookResponseText,
          redirected: webhookResponse.redirected,
          finalUrl: maskUrl(webhookResponse.url || webhookUrl),
        });
      }
    }
    if (webhookParsedResponse !== null) {
      console.log("[api/contact] webhook parsed response", webhookParsedResponse);
    }

    if (!webhookResponse.ok) {
      console.error("[api/contact] webhook request failed", {
        status: webhookResponse.status,
        body: webhookResponseText,
      });
      return NextResponse.json(
        { success: false, error: "外部通知服務失敗，請稍後再試或聯絡我們" },
        { status: 502 },
      );
    }

    console.log("[api/contact] request completed", { status: 200 });
    return NextResponse.json(
      { success: true, message: "已收到您的需求，我們會盡快與您聯繫。" },
      { status: 200 },
    );
  } catch (error) {
    console.error("[api/contact] submit failed error", {
      error,
      maskedUrl: maskUrl(webhookUrl),
    });
    return NextResponse.json(
      { success: false, error: "無法連線到外部通知服務" },
      { status: 502 },
    );
  }
}
