"use client";

import Link from "next/link";
import { useState } from "react";
import { HeroEntranceItem, HeroEntranceStyle } from "@/components/HeroEntrance";

const SCALE_OPTIONS = [
  "1 間診所，1–3 位醫師",
  "1–2 間診所，3–8 位醫師",
  "2 間以上分店",
  "其他",
];

const INTEREST_OPTIONS = [
  "預約排程管理",
  "顧客 CRM",
  "電子化病例",
  "Before / After 管理",
  "LINE 顧客追蹤",
  "營運分析",
  "多分店管理",
];

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500";

const LINE_URL = "https://lin.ee/oORnpv6";
const EMAIL = "avenra.platform@gmail.com";

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactPageClient() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const interests = formData.getAll("interests") as string[];
    const payload = {
      clinicName: formData.get("clinicName") ?? "",
      contactName: formData.get("contactName") ?? "",
      phone: formData.get("phone") ?? "",
      lineId: formData.get("lineId") ?? "",
      email: formData.get("email") ?? "",
      scale: formData.get("scale") ?? "",
      interests,
      other: formData.get("other") ?? "",
    };

    setSubmitState("loading");
    setErrorMessage("");

    try {
      console.log("[contact] submitting payload", payload);
      const contactApiUrl = new URL("/api/contact", window.location.origin).href;
      const res = await fetch(contactApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const rawText = await res.text().catch(() => "");
      let data: { success?: boolean; message?: string; error?: string } = {};
      if (rawText) {
        try {
          data = JSON.parse(rawText) as { success?: boolean; message?: string; error?: string };
        } catch {
          data = { error: rawText };
        }
      }
      console.log("[contact] response status", res.status);
      console.log("[contact] response body", data);

      if (!res.ok) {
        setSubmitState("error");
        setErrorMessage(data.error ?? data.message ?? "送出失敗，請稍後再試。");
        return;
      }
      form.reset();
      setSubmitState("success");
    } catch (error) {
      console.error("[contact] submit failed", error);
      setSubmitState("error");
      setErrorMessage("網路錯誤，請稍後再試。");
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
            Avenra
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
            返回首頁
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-slate-200 bg-white px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
          <HeroEntranceStyle />
          <div className="mx-auto max-w-3xl text-center">
            <HeroEntranceItem delay={0}>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                聯絡我們
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                想了解 Avenra 是否適合你的診所？歡迎留下資訊，我們會依照診所規模與需求，提供合適的導入建議。
              </p>
            </HeroEntranceItem>
          </div>
        </section>

        {/* Form section */}
        <section className="bg-white px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              填寫聯絡資訊
            </h2>
            <p className="-mt-3 mb-6 text-sm leading-relaxed text-slate-500">
              我們會依診所規模與需求提供導入建議，通常 1 個工作日內回覆
            </p>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              {submitState === "success" ? (
                <div className="rounded-xl border border-teal-200 bg-teal-50 p-8 text-center">
                  <p className="font-medium text-teal-800">已收到您的需求，我們會盡快與您聯繫。</p>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-btn-transition mt-6 inline-flex rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
                  >
                    加入 LINE 立即諮詢
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-2 space-y-5 sm:mt-4">
                  <div>
                    <label htmlFor="clinic-name" className="block text-sm font-medium text-slate-700">
                      診所名稱
                    </label>
                    <input
                      id="clinic-name"
                      type="text"
                      name="clinicName"
                      className={inputClass}
                      placeholder="請輸入診所名稱"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">
                      聯絡人姓名
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="contactName"
                      className={inputClass}
                      placeholder="請輸入聯絡人姓名"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                      聯絡電話
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className={inputClass}
                      placeholder="請輸入聯絡電話"
                    />
                  </div>

                  <div>
                    <label htmlFor="line-id" className="block text-sm font-medium text-slate-700">
                      LINE ID
                    </label>
                    <input
                      id="line-id"
                      type="text"
                      name="lineId"
                      className={inputClass}
                      placeholder="請輸入 LINE ID"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className={inputClass}
                      placeholder="請輸入 Email"
                    />
                  </div>

                  <div>
                    <label htmlFor="scale" className="block text-sm font-medium text-slate-700">
                      診所規模
                    </label>
                    <select id="scale" name="scale" className={inputClass}>
                      <option value="">請選擇</option>
                      {SCALE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <span className="block text-sm font-medium text-slate-700">想了解的功能</span>
                    <div className="mt-2 space-y-2">
                      {INTEREST_OPTIONS.map((opt) => (
                        <label key={opt} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="interests"
                            value={opt}
                            className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                          />
                          <span className="text-sm text-slate-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="other" className="block text-sm font-medium text-slate-700">
                      其他需求
                    </label>
                    <textarea
                      id="other"
                      name="other"
                      rows={4}
                      className={inputClass}
                      placeholder="請描述其他需求或想了解的內容"
                    />
                  </div>

                  {submitState === "error" && errorMessage && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                      {errorMessage}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitState === "loading"}
                      className="site-btn-transition w-full rounded-xl bg-teal-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
                    >
                      {submitState === "loading" ? "送出中…" : "送出聯絡資訊"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

