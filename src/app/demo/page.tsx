import Link from "next/link";
import { Navbar, Footer } from "@/components/landing";
import { HeroEntranceItem, HeroEntranceStyle } from "@/components/HeroEntrance";
import {
  DemoCoreSection,
  DemoFeatureCardMarquee,
  DemoUsageFlowWithIndicator,
} from "./DemoSections";

const LINE_URL = "https://lin.ee/oORnpv6";

const PAIN_CARDS = [
  {
    title: "小型診所",
    bullets: [
      "預約仍依賴 LINE 或電話，容易漏單或重複預約",
      "顧客資料分散，回診與紀錄難以追蹤",
      "日常營運依賴人工，效率難以提升",
    ],
  },
  {
    title: "成長型診所",
    bullets: [
      "排班與流程逐漸複雜，錯誤率上升",
      "顧客增加，回診與追蹤難以管理",
      "行銷與回診缺乏系統化支持",
    ],
  },
  {
    title: "大型 / 多分店",
    bullets: [
      "跨店排程不同步，資訊分散",
      "資料與權限管理複雜，難以控管",
      "營運狀況難以即時掌握",
    ],
  },
];

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar locale="zh" />

      <main>
        {/* 1. Hero — no CTA */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8 lg:pt-28 lg:pb-28">
          <HeroEntranceStyle />
          <div className="mx-auto max-w-4xl text-center">
            <HeroEntranceItem delay={0}>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                所有預約、顧客與營運，一個畫面就能掌握
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                從排班、回診到營運數據，全部集中在同一個系統中
              </p>
            </HeroEntranceItem>
          </div>
        </section>

        {/* 3. Transition — bridge to demo */}
        <section className="border-b border-slate-200 bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base font-normal leading-relaxed text-slate-700 sm:text-lg">
              不用再切換 LINE、Excel、手寫紀錄
            </p>
            <p className="mt-1.5 text-base font-medium leading-relaxed text-teal-600 sm:text-lg">
              所有流程，都在同一個地方完成
            </p>
          </div>
        </section>

        {/* 4. Core interactive demo — 3 modules (immediately after transition) */}
        <section className="border-b border-slate-200 bg-gray-50/80 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-10 max-w-5xl">
              <DemoFeatureCardMarquee />
            </div>
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              實際看看診所如何在系統中完成預約與管理
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
              讓排程、顧客與營運同步運作
              <br />
              每一筆預約、每一次療程、每一次回診，都能被系統記錄與追蹤
            </p>
            <div className="mt-12">
              <DemoCoreSection />
            </div>
          </div>
        </section>

        {/* 5. Usage flow — timeline + moving indicator */}
        <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              診所使用流程
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
              不需要改變你的流程
              <br />
              只需要把它放進系統
            </p>
            <div className="mt-10">
              <DemoUsageFlowWithIndicator />
            </div>
          </div>
        </section>

        {/* 6. Final CTA — only strong CTA on page */}
        <section className="overflow-hidden rounded-t-[48px] border-t border-slate-200 bg-gray-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              這就是診所實際使用時的運作方式
            </h2>
            <p className="mt-4 text-slate-600 sm:text-lg leading-relaxed">
              如果你也希望預約、顧客與營運流程能這樣運作
              <br className="hidden sm:block" />
              我們可以依你的診所情況幫你規劃導入方式
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
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
                className="site-btn-transition inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
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
