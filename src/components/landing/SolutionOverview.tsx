import { getLandingContent } from "@/content/getLandingContent";
import type { Locale } from "./types";

const solutionContent: Record<
  Locale,
  { title: string; body: string; features: { title: string; desc: string }[] }
> = {
  zh: {
    title: "用一個平台整合診所的關鍵流程",
    body: "Avenra 不只是預約工具，而是診所的營運中樞：涵蓋預約排班、顧客 CRM、電子化病例與療程紀錄、Before / After 案例管理、LINE 顧客追蹤與行銷、以及營運數據分析，讓診所從日常作業到決策都有據可依。",
    features: [
      {
        title: "智慧預約與排班管理",
        desc: "告別紙本與群組混亂，醫師班表、可約時段與預約一鍵掌握。",
      },
      {
        title: "顧客 CRM 與療程追蹤",
        desc: "顧客資料、到診與療程歷史集中管理，回診追蹤不再遺漏。",
      },
      {
        title: "電子化病例與療程紀錄",
        desc: "病例與療程結構化儲存，查閱與合規一次到位。",
      },
      {
        title: "Before / After 案例管理",
        desc: "療程前後照片與案例安全歸檔，權限可控、搜尋即得。",
      },
      {
        title: "LINE 顧客追蹤與行銷自動化",
        desc: "預約提醒、顧客分群與訊息整合，減少手動重複作業。",
      },
      {
        title: "營運數據分析",
        desc: "預約率、營收與績效可視化，支援即時決策。",
      },
    ],
  },
  en: {
    title: "One platform for your clinic's key workflows",
    body: "Avenra is not just a booking tool—it's a clinic operating system. It covers scheduling, customer CRM, electronic medical records and treatment history, before/after case management, LINE customer follow-up and marketing, and operations analytics, so your clinic can run and decide with data in one place.",
    features: [
      {
        title: "Smart scheduling",
        desc: "One place for staff rosters, availability, and bookings—no more scattered sheets and chats.",
      },
      {
        title: "Customer CRM & treatment tracking",
        desc: "Centralized customer data, visits, and treatment history so follow-ups don't slip.",
      },
      {
        title: "Electronic records & treatment history",
        desc: "Structured clinical and treatment records for fast lookup and compliance.",
      },
      {
        title: "Before / After case management",
        desc: "Secure before/after photos and cases with controlled access and search.",
      },
      {
        title: "LINE follow-up & marketing automation",
        desc: "Appointment reminders, customer segments, and messaging in one flow.",
      },
      {
        title: "Operations analytics",
        desc: "Appointment rates, revenue, and performance visualized for real-time decisions.",
      },
    ],
  },
};

function FeatureIcon() {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-600"
      aria-hidden
    >
      <span className="h-2 w-2 rounded-full bg-teal-500" />
    </span>
  );
}

type Props = { locale: Locale };

export function SolutionOverview({ locale }: Props) {
  const content = solutionContent[locale];

  return (
    <section id="solutions" className="border-t border-slate-200 bg-white px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            {content.body}
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.features.map((f) => (
            <div
              key={f.title}
              className="site-card-hover flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <FeatureIcon />
              <div className="min-w-0">
                <h3 className="font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
