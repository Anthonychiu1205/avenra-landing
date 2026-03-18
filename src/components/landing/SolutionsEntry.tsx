import Link from "next/link";
import type { Locale } from "./types";

type ClinicCard = {
  label: string;
  description: string;
  href: string;
};

const content: Record<Locale, { title: string; linkLabel: string; cards: ClinicCard[] }> = {
  zh: {
    title: "適用不同類型的診所",
    linkLabel: "查看客戶案例 →",
    cards: [
      {
        label: "醫美診所",
        description: "預約、顧客管理、Before / After 與 LINE 顧客經營，一站整合。",
        href: "/case-studies",
      },
      {
        label: "牙醫診所",
        description: "椅位排程、病患 CRM、回診追蹤與營運流程整合。",
        href: "/case-studies",
      },
      {
        label: "皮膚科",
        description: "病患紀錄、照片管理、回診追蹤與營運分析。",
        href: "/case-studies",
      },
      {
        label: "眼科",
        description: "預約排程、檢查流程、病患資料與流程管理。",
        href: "/case-studies",
      },
    ],
  },
  en: {
    title: "Solutions for different clinic types",
    linkLabel: "View case studies →",
    cards: [
      {
        label: "Aesthetic clinics",
        description: "Scheduling, CRM, before/after and LINE customer engagement in one place.",
        href: "/case-studies",
      },
      {
        label: "Dental clinics",
        description: "Chair scheduling, patient CRM, recall tracking and workflow integration.",
        href: "/case-studies",
      },
      {
        label: "Dermatology",
        description: "Patient records, photo management, recall and analytics.",
        href: "/case-studies",
      },
      {
        label: "Ophthalmology",
        description: "Scheduling, exam workflow, patient data and process management.",
        href: "/case-studies",
      },
    ],
  },
};

type Props = { locale: Locale };

export function SolutionsEntry({ locale }: Props) {
  const { title, linkLabel, cards } = content[locale];

  return (
    <section className="border-t border-slate-200 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ label, description, href }) => (
            <Link
              key={href}
              href={href}
              className="site-card-hover group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-teal-200"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              </span>
              <span className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-teal-700">
                {label}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
              <span className="mt-3 text-sm font-medium text-teal-600 group-hover:text-teal-700">
                {linkLabel}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
