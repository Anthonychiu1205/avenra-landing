import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "預約診所系統導入諮詢｜Avenra",
  description: "想了解 Avenra 是否適合你的診所？立即填寫表單，取得專屬導入建議。",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "預約診所系統導入諮詢｜Avenra",
    description: "想了解 Avenra 是否適合你的診所？立即填寫表單，取得專屬導入建議。",
    url: "/contact",
    type: "website",
    images: [{ url: "/logo/avenra-logo.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "預約診所系統導入諮詢｜Avenra",
    description: "想了解 Avenra 是否適合你的診所？立即填寫表單，取得專屬導入建議。",
    images: ["/logo/avenra-logo.svg"],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
