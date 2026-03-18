import type { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/landing";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  SECTION_SCHEDULE,
  SECTION_CUSTOMERS,
  SECTION_AUTOMATION,
  SECTION_ANALYTICS,
  type ProductSectionCard,
  type ProductSection,
} from "@/content/productSections";

const LINE_URL = "https://lin.ee/oORnpv6";

export const metadata: Metadata = {
  title: "醫美診所預約與 CRM 系統｜排班、回診、營運整合｜Avenra",
  description:
    "專為醫美診所設計的 CRM 與預約管理系統，整合排班、顧客管理與回診追蹤，提升營運效率。",
  alternates: { canonical: "/product" },
  openGraph: {
    title: "醫美診所預約與 CRM 系統｜排班、回診、營運整合｜Avenra",
    description:
      "專為醫美診所設計的 CRM 與預約管理系統，整合排班、顧客管理與回診追蹤，提升營運效率。",
    url: "/product",
    type: "website",
    images: [{ url: "/logo/avenra-logo.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "醫美診所預約與 CRM 系統｜排班、回診、營運整合｜Avenra",
    description:
      "專為醫美診所設計的 CRM 與預約管理系統，整合排班、顧客管理與回診追蹤，提升營運效率。",
    images: ["/logo/avenra-logo.svg"],
  },
};

const FLOW_LINKS = [
  { label: "排程", id: "schedule" },
  { label: "顧客", id: "customers" },
  { label: "自動化", id: "automation" },
  { label: "分析", id: "analytics" },
];

function StaticProductCard({
  card,
  delay,
  highlight,
}: {
  card: ProductSectionCard;
  delay: number;
  highlight?: boolean;
}) {
  const Icon = card.icon;
  return (
    <ScrollReveal delay={delay}>
      <div
        className={`flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${
          highlight ? "border-teal-200 ring-1 ring-teal-100/80 sm:p-7" : ""
        }`}
      >
        <div
          className={`mb-4 flex items-center justify-center rounded-2xl bg-teal-100 ${
            highlight ? "h-14 w-14" : "h-12 w-12"
          }`}
        >
          <Icon
            className={highlight ? "h-7 w-7 text-teal-700" : "h-6 w-6 text-teal-700"}
            strokeWidth={1.5}
          />
        </div>
        <h3
          className={
            highlight
              ? "text-xl font-semibold text-slate-900"
              : "text-lg font-semibold text-slate-900"
          }
        >
          {card.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
        {card.hint && (
          <p className="mt-3 text-xs leading-relaxed text-slate-500">{card.hint}</p>
        )}
      </div>
    </ScrollReveal>
  );
}

function SectionBlock({
  id,
  section,
  highlightFirst,
}: {
  id: string;
  section: ProductSection;
  highlightFirst?: boolean;
}) {
  return (
    <section
      id={id}
      className={`border-b border-slate-200 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16 ${
        id === "schedule" || id === "automation" ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {section.title}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-base font-medium text-teal-700 sm:text-lg">
            {section.punchline}
          </p>
          {section.description && (
            <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600 sm:text-base leading-relaxed">
              {section.description}
            </p>
          )}
        </ScrollReveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {section.cards.map((card, i) => (
            <StaticProductCard
              key={card.title}
              card={card}
              delay={i * 60}
              highlight={highlightFirst && i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar locale="zh" />

      <main>
        {/* Hero — no CTA, static intro */}
        <section className="border-b border-slate-200 bg-white px-4 pt-16 pb-6 sm:px-6 sm:pt-20 sm:pb-8 lg:px-8 lg:pt-24 lg:pb-10">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                把營運節奏抓回自己手上
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                預約、顧客、提醒與營運數字都在同一系統裡，
                <br className="hidden sm:block" />
                不用再切換多個畫面或工具。
              </p>
            </ScrollReveal>
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-500">
              許多診所從混亂的表格與群組，轉成一套可預期、可追蹤的流程。
            </p>
          </div>
        </section>

        {/* Static feature sections */}
        <SectionBlock id="schedule" section={SECTION_SCHEDULE} />
        <SectionBlock id="customers" section={SECTION_CUSTOMERS} highlightFirst />
        <SectionBlock id="automation" section={SECTION_AUTOMATION} />
        <SectionBlock id="analytics" section={SECTION_ANALYTICS} />

        {/* Final section — only CTA on page */}
        <section className="overflow-hidden rounded-t-[48px] border-t border-slate-200 bg-gray-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                想確認這套系統是否適合你的診所？
              </h2>
              <p className="mt-4 text-slate-600 sm:text-lg">
                降低導入風險與說明
              </p>
            </ScrollReveal>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <Link
                href="/contact"
                className="site-btn-transition inline-flex rounded-xl bg-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
              >
                預約導入諮詢
              </Link>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn-transition inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                加入 LINE 詢問
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="zh" />
    </div>
  );
}
