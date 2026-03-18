import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Avenra | 診所 CRM 與預約管理平台",
  description:
    "專為現代診所打造的 CRM 與預約管理平台，整合預約排程、顧客資料、療程紀錄與營運分析。",
  openGraph: {
    type: "website",
    siteName: "Avenra",
    images: [
      {
        url: "/logo/avenra-logo.svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo/avenra-logo.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Avenra",
        url: SITE_URL,
        logo: `${SITE_URL}/logo/avenra-logo.svg`,
      },
      {
        "@type": "WebSite",
        name: "Avenra",
        url: SITE_URL,
      },
    ],
  };

  return (
    <html lang="zh-Hant">
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is intended for crawlers.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
