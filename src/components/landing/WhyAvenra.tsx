import type { Locale } from "./types";

type BenefitCard = {
  title: string;
  description: string;
};

const content: Record<Locale, { title: string; cards: BenefitCard[] }> = {
  zh: {
    title: "診所為什麼選擇 Avenra",
    cards: [
      {
        title: "更直覺的排程管理",
        description: "讓診所能快速安排醫師與療程時間。",
      },
      {
        title: "顧客資料與病例整合",
        description: "顧客 CRM、療程紀錄與電子病例集中管理。",
      },
      {
        title: "LINE 顧客經營能力",
        description: "透過 LINE 與顧客保持聯繫並提升回訪率。",
      },
      {
        title: "適用不同專科診所",
        description: "支援醫美、牙醫、皮膚科與眼科等診所。",
      },
    ],
  },
  en: {
    title: "Why Avenra",
    cards: [
      {
        title: "Intuitive scheduling",
        description: "Quickly arrange staff and treatment times.",
      },
      {
        title: "Unified customer data",
        description: "CRM, treatment records and EMR in one place.",
      },
      {
        title: "LINE customer engagement",
        description: "Stay connected and improve follow-up rates via LINE.",
      },
      {
        title: "Built for your specialty",
        description: "Supports aesthetic, dental, dermatology and ophthalmology clinics.",
      },
    ],
  },
};

type Props = { locale: Locale };

export function WhyAvenra({ locale }: Props) {
  const { title, cards } = content[locale];

  return (
    <section className="border-t border-slate-200 bg-gray-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ title: cardTitle, description }) => (
            <div
              key={cardTitle}
              className="site-card-hover rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{cardTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
