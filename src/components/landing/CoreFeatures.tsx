import { getLandingContent } from "@/content/getLandingContent";
import type { Locale } from "./types";

const capabilityFeatures: Record<
  Locale,
  { title: string; desc: string }[]
> = {
  zh: [
    {
      title: "智慧預約與排班管理",
      desc: "醫師與資源排班、可約時段、預約流程與衝突檢查，一站完成。",
    },
    {
      title: "顧客 CRM 與療程追蹤",
      desc: "顧客檔案、到診紀錄、療程歷史與回診提醒，不漏接。",
    },
    {
      title: "電子化病例與療程紀錄",
      desc: "病例與療程電子化、結構化儲存與權限管理。",
    },
    {
      title: "Before / After 案例管理",
      desc: "療程前後照片與案例歸檔、標籤與權限控管。",
    },
    {
      title: "LINE 顧客追蹤與行銷自動化",
      desc: "預約提醒、顧客標籤、群發與自動化流程。",
    },
    {
      title: "營運數據分析",
      desc: "預約、營收、療程與績效儀表板，即時掌握營運狀況。",
    },
  ],
  en: [
    {
      title: "Smart scheduling",
      desc: "Staff and resource rosters, availability, booking flow, and conflict checks in one place.",
    },
    {
      title: "Customer CRM & treatment tracking",
      desc: "Customer profiles, visit records, treatment history, and follow-up reminders so nothing slips.",
    },
    {
      title: "Electronic records & treatment history",
      desc: "Electronic, structured clinical and treatment records with access control.",
    },
    {
      title: "Before / After case management",
      desc: "Before/after photos and cases with tagging and permission controls.",
    },
    {
      title: "LINE follow-up & marketing automation",
      desc: "Appointment reminders, customer tags, broadcast messages, and automated flows.",
    },
    {
      title: "Operations analytics",
      desc: "Dashboards for appointments, revenue, treatments, and performance—real-time visibility.",
    },
  ],
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

export function CoreFeatures({ locale }: Props) {
  const { coreFeatures } = getLandingContent(locale);
  const features = capabilityFeatures[locale];

  return (
    <section className="border-t border-slate-200 bg-gray-50 px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {coreFeatures.sectionTitle}
        </h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <FeatureIcon />
              <div className="min-w-0">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
