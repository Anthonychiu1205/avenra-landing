import { getLandingContent } from "@/content/getLandingContent";
import type { Locale } from "./types";

const problemItems: Record<Locale, string[]> = {
  zh: [
    "預約與排班混亂",
    "顧客資料分散",
    "療程紀錄難追蹤",
    "營運數據不透明",
  ],
  en: [
    "Chaotic appointments and schedules",
    "Customer data scattered",
    "Treatment records hard to track",
    "Operations data not transparent",
  ],
};

type Props = { locale: Locale };

export function PainPoints({ locale }: Props) {
  const { painPoints } = getLandingContent(locale);
  const items = problemItems[locale];

  return (
    <section id="product" className="border-t border-slate-200 bg-gray-50 px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {painPoints.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((text) => (
            <div
              key={text}
              className="site-card-hover rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="font-medium text-slate-800">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
