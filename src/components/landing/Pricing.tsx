import Link from "next/link";
import { getLandingContent } from "@/content/getLandingContent";
import type { Locale } from "./types";
import { HeroEntranceItem, HeroEntranceStyle } from "@/components/HeroEntrance";

type PlanData = {
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  footerNote?: string;
};

const PLANS: PlanData[] = [
  {
    title: "Starter",
    price: "NT$5,000 – 8,000 / 月",
    description: "適合單一診所或剛導入數位管理的診所",
    footerNote: "適合剛開始導入數位管理的診所",
    features: [
      "預約排程管理",
      "醫師班表管理",
      "顧客 CRM",
      "基本營運報表",
      "LINE 預約提醒",
    ],
  },
  {
    title: "Growth",
    price: "NT$10,000 – 18,000 / 月",
    description: "適合成長型診所與多醫師團隊",
    features: [
      "包含 Starter 全部功能",
      "Before / After 照片管理",
      "電子病例",
      "顧客標籤",
      "LINE 顧客經營",
      "營運分析 Dashboard",
    ],
    footerNote: "適合已建立客源、需要優化營運效率的診所",
    recommended: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "適合多分店診所或醫療體系",
    footerNote: "適合多分店或大型醫療體系",
    features: [
      "多分店管理",
      "API 整合",
      "客製流程",
      "資料遷移",
      "專屬導入與技術支援",
    ],
  },
];

type PlanCell = "✓" | "—" | "基本" | "進階";

const comparisonRows: { feature: string; starter: PlanCell; growth: PlanCell; enterprise: PlanCell }[] = [
  { feature: "預約排程管理", starter: "✓", growth: "✓", enterprise: "✓" },
  { feature: "醫師排班管理", starter: "✓", growth: "✓", enterprise: "✓" },
  { feature: "顧客 CRM", starter: "✓", growth: "✓", enterprise: "✓" },
  { feature: "電子化病例", starter: "✓", growth: "✓", enterprise: "✓" },
  { feature: "療程紀錄", starter: "✓", growth: "✓", enterprise: "✓" },
  { feature: "Before / After 管理", starter: "—", growth: "✓", enterprise: "✓" },
  { feature: "顧客回診追蹤", starter: "—", growth: "✓", enterprise: "✓" },
  { feature: "LINE 預約提醒", starter: "✓", growth: "✓", enterprise: "✓" },
  { feature: "LINE 顧客分群", starter: "—", growth: "✓", enterprise: "✓" },
  { feature: "LINE 行銷自動化", starter: "—", growth: "—", enterprise: "✓" },
  { feature: "營運分析", starter: "基本", growth: "✓", enterprise: "進階" },
  { feature: "團隊帳號管理", starter: "—", growth: "✓", enterprise: "✓" },
  { feature: "多分店管理", starter: "—", growth: "—", enterprise: "✓" },
  { feature: "客製流程", starter: "—", growth: "—", enterprise: "✓" },
];

function PlanCard({ plan }: { plan: PlanData }) {
  const { title, price, description, features, recommended } = plan;
  return (
    <div
      className={`site-card-hover flex h-full flex-col rounded-xl border-2 p-8 shadow-sm ${
        recommended
          ? "border-teal-200 bg-white ring-2 ring-teal-100"
          : "border-slate-200 bg-white"
      }`}
    >
      {/* 1. Badge space — fixed height so all cards align */}
      <div className="h-7 shrink-0">
        {recommended && (
          <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
            Most Popular
          </span>
        )}
      </div>

      {/* 2. Title */}
      <h3 className="mt-3 shrink-0 text-xl font-semibold text-slate-900">{title}</h3>

      {/* 3. Price section — fixed min-height for horizontal alignment */}
      <div className="mt-2 min-h-[100px] shrink-0 flex flex-col">
        <p className="text-2xl font-bold tracking-tight text-slate-900">{price}</p>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>

      {/* 4. Divider */}
      <div className="mt-6 shrink-0 border-t border-slate-200" aria-hidden />

      {/* 5. Feature list — fixed min-height for same start height */}
      <ul className="mt-6 min-h-[220px] flex-1 shrink-0 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* 6. Plan note — margin-top auto for bottom alignment */}
      <div className="mt-auto shrink-0 pt-6">
        {plan.footerNote && (
          <p className="text-center text-sm font-normal text-gray-400">
            {plan.footerNote}
          </p>
        )}
      </div>
    </div>
  );
}

function ComparisonCell({ value }: { value: PlanCell }) {
  if (value === "✓") {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-600" aria-hidden>
        ✓
      </span>
    );
  }
  if (value === "基本" || value === "進階") {
    return <span className="text-sm font-medium text-slate-600">{value}</span>;
  }
  return <span className="text-slate-300">—</span>;
}

type Props = { locale: Locale };

export function Pricing({ locale }: Props) {
  const { pricing } = getLandingContent(locale);

  return (
    <section id="pricing" className="border-t border-slate-200 bg-gray-50 px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <HeroEntranceStyle />
      <div className="mx-auto max-w-6xl">
        <HeroEntranceItem delay={0}>
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            彈性方案，適合不同規模的診所
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-slate-600">
            Avenra 提供可擴充的診所營運管理平台，
            從單一診所到多分店醫療體系都能使用。
          </p>
        </HeroEntranceItem>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.title} plan={plan} />
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-gray-50">
                  <th className="px-4 py-4 text-sm font-semibold text-slate-700 sm:px-6">
                    功能
                  </th>
                  <th className="px-4 py-4 text-sm font-semibold text-slate-700 sm:px-6">
                    Starter
                  </th>
                  <th className="px-4 py-4 text-sm font-semibold text-slate-700 sm:px-6">
                    Growth
                  </th>
                  <th className="px-4 py-4 text-sm font-semibold text-slate-700 sm:px-6">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-slate-100 last:border-b-0"
                  >
                    <td className="px-4 py-3 text-sm text-slate-700 sm:px-6">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 sm:px-6">
                      <ComparisonCell value={row.starter} />
                    </td>
                    <td className="px-4 py-3 sm:px-6">
                      <ComparisonCell value={row.growth} />
                    </td>
                    <td className="px-4 py-3 sm:px-6">
                      <ComparisonCell value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
