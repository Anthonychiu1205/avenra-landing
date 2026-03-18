import type { Locale } from "./types";

type MetricCard = {
  value: string;
  label: string;
  description: string;
};

const content: Record<Locale, { title: string; subtitle: string; metrics: MetricCard[] }> = {
  zh: {
    title: "Avenra 帶來的營運提升",
    subtitle:
      "透過整合預約、顧客管理與營運分析，診所可以更清楚掌握營運狀況並持續優化流程。",
    metrics: [
      {
        value: "+35%",
        label: "預約安排效率提升",
        description: "透過智慧排程與醫師班表管理減少排程衝突。",
      },
      {
        value: "+28%",
        label: "顧客回訪率提升",
        description: "透過顧客追蹤與自動提醒提升回診率。",
      },
      {
        value: "100%",
        label: "營運數據可視化",
        description: "透過 dashboard 即時掌握診所營運。",
      },
      {
        value: "-40%",
        label: "資料查詢時間",
        description: "顧客資料與病例集中管理。",
      },
    ],
  },
  en: {
    title: "Operational impact with Avenra",
    subtitle:
      "By integrating scheduling, customer management and analytics, clinics gain clearer visibility and can continuously optimize workflows.",
    metrics: [
      {
        value: "+35%",
        label: "Scheduling efficiency",
        description: "Fewer conflicts with smart scheduling and staff roster management.",
      },
      {
        value: "+28%",
        label: "Follow-up rate",
        description: "Higher recall rates with customer tracking and automated reminders.",
      },
      {
        value: "100%",
        label: "Operations visibility",
        description: "Real-time clinic operations via dashboard.",
      },
      {
        value: "-40%",
        label: "Data lookup time",
        description: "Unified customer and medical records.",
      },
    ],
  },
};

type Props = { locale: Locale };

export function GrowthMetrics({ locale }: Props) {
  const { title, subtitle, metrics } = content[locale];

  return (
    <section className="border-t border-slate-200 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-slate-600">
          {subtitle}
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(({ value, label, description }) => (
            <div
              key={label}
              className="site-card-hover flex h-full flex-col rounded-xl border border-slate-200 bg-gray-50 p-6 text-center shadow-sm"
            >
              <p className="break-words text-3xl font-bold tabular-nums leading-none tracking-tight text-teal-600 sm:text-4xl">
                {value}
              </p>
              <h3 className="mt-3 break-words text-sm font-semibold leading-snug text-slate-900">
                {label}
              </h3>
              <p className="mt-2 break-words text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
