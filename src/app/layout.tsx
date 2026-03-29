import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://avenra.health/";

export const metadata: Metadata = {
  metadataBase: new URL("https://avenra.health"),
  title: "診所CRM預約管理系統｜Avenra",
  description:
    "專為各類診所設計的 CRM 與預約管理系統，整合顧客資料、療程紀錄與回診流程，讓營運更清晰、回診穩定成長。",
  alternates: {
    canonical: "https://avenra.health",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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
        logo: "https://avenra.health/images/logo-search.png",
      },
      {
        "@type": "WebSite",
        name: "Avenra",
        url: SITE_URL,
      },
      {
        "@type": "SoftwareApplication",
        name: "Avenra",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://avenra.health/",
        description:
          "Avenra 是一套為診所設計的 CRM 與預約管理系統，整合排程、回診追蹤與營運數據分析。",
        publisher: {
          "@type": "Organization",
          name: "Avenra",
          url: "https://avenra.health/",
        },
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
