import {
  ShieldCheck,
  SlidersHorizontal,
  Zap,
  Headset,
} from "lucide-react";
import type { Locale } from "./types";

const content: Record<
  Locale,
  {
    title: string;
    subtitle: string;
    items: { title: string; body: string; icon: typeof ShieldCheck }[];
  }
> = {
  zh: {
    title: "穩定、可擴充、可落地的診所系統",
    subtitle:
      "從導入到日常營運，Avenra 以可靠性與流程一致性為核心，讓診所用得久、用得穩。",
    items: [
      {
        title: "可靠性與可維運",
        body: "流程與資料集中管理，權限清楚、操作一致，降低日常出錯與溝通成本。",
        icon: ShieldCheck,
      },
      {
        title: "支援客製化流程",
        body: "依專科與診所習慣調整欄位、流程與視圖，保留既有作業邏輯再升級。",
        icon: SlidersHorizontal,
      },
      {
        title: "快速導入與上線",
        body: "以標準模組快速落地，從最重要的流程開始，上線後逐步擴充。",
        icon: Zap,
      },
      {
        title: "導入支援與陪跑",
        body: "導入期協助梳理流程、建立使用習慣，讓團隊能更快穩定運作。",
        icon: Headset,
      },
    ],
  },
  en: {
    title: "Reliable, configurable, and fast to onboard",
    subtitle:
      "Avenra focuses on operational consistency so clinics can adopt quickly and run confidently.",
    items: [
      {
        title: "Reliability",
        body: "Clear permissions and consistent workflows help reduce daily mistakes and coordination overhead.",
        icon: ShieldCheck,
      },
      {
        title: "Customization",
        body: "Adapt fields, workflows, and views by specialty while preserving your existing operating habits.",
        icon: SlidersHorizontal,
      },
      {
        title: "Fast onboarding",
        body: "Start with the highest-impact modules, go live quickly, and expand step by step.",
        icon: Zap,
      },
      {
        title: "Support",
        body: "Implementation guidance that helps your team build stable day-to-day usage habits.",
        icon: Headset,
      },
    ],
  },
};

type Props = { locale: Locale };

export function TrustPillars({ locale }: Props) {
  const { title, subtitle, items } = content[locale];

  return (
    <section className="border-t border-slate-200 bg-gray-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title: itemTitle, body, icon: Icon }) => (
            <div
              key={itemTitle}
              className="site-card-hover rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                {itemTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

