import Link from "next/link";
import { Navbar, Footer } from "@/components/landing";
import { PillarFlowStepCard } from "@/components/blog/PillarFlowStepCard";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "診所預約系統完整指南：從 LINE 到自動化排程",
  description:
    "診所預約系統完整指南，解析 LINE 預約問題、排程混亂原因與自動化解法，幫助診所建立穩定預約流程。",
  alternates: {
    canonical: "https://avenra.health/blog/clinic-booking-system-guide",
  },
  openGraph: {
    title: "診所預約系統完整指南：從 LINE 到自動化排程",
    description:
      "診所預約系統完整指南，解析 LINE 預約問題、排程混亂原因與自動化解法，幫助診所建立穩定預約流程。",
    url: "https://avenra.health/blog/clinic-booking-system-guide",
    type: "article",
  },
};

const bodyClass =
  "mt-10 max-w-3xl space-y-8 text-slate-700 leading-relaxed [&>h2]:mt-0 [&>h2+p]:mt-4 [&>section]:mt-0";
const pClass = "text-[17px] leading-8 text-slate-700";
const h2Class = "pt-10 text-2xl font-semibold text-slate-900";
const h2FirstClass = "pt-12 text-2xl font-semibold text-slate-900";
const h2AfterFlowClass = "pt-12 text-2xl font-semibold text-slate-900";
const ctaOuterClass =
  "mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10";
const ctaTitleClass = "text-2xl font-semibold leading-tight text-slate-900";
const ctaBodyClass = "mt-4 max-w-2xl text-[17px] leading-8 text-slate-600";
const ctaLinkClass =
  "mt-6 inline-flex items-center gap-2 font-medium text-[#14827f] underline underline-offset-4 transition hover:opacity-80";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    description: metadata.description,
    url: metadata.alternates.canonical,
    datePublished: "2026-03-27",
    author: {
      "@type": "Organization",
      name: "Avenra",
    },
    publisher: {
      "@type": "Organization",
      name: "Avenra",
    },
  };

  return (
    <>
      <Navbar locale="zh" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-slate-500">2026-03-27</p>

          <h1 className="mt-2 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            診所預約系統完整指南：從 LINE 到自動化排程
          </h1>

          <ScrollReveal className="mt-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 leading-relaxed text-slate-700">
              這篇指南適合正在用 LINE、電話或人工排程管理預約的診所經營者。
              如果你正在思考預約系統是否值得導入，這篇會幫你快速看懂問題、流程與選擇重點。
            </div>
          </ScrollReveal>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900">這篇指南會回答三件事</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <ScrollReveal>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-slate-900">預約系統到底在解決什麼</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    不是只排時間，而是整合時段、顧客與後續提醒流程。
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-slate-900">為什麼 LINE 管理預約會變亂</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    聊天工具可以溝通，但無法穩定承接排程、改期與狀態追蹤。
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-slate-900">導入系統之後會改善什麼</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    時段更清楚、提醒更穩定、櫃檯壓力更低，整體流程更可控。
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          <div className={bodyClass}>
            <p className={pClass}>
              多數診所一開始都是用 LINE 或電話管理預約，但當顧客數量增加後，
              時段確認、改期、取消與資訊同步會迅速變得混亂。
              問題不是工具不夠，而是缺乏一套穩定的預約管理流程。
            </p>

            <h2 className={h2FirstClass}>診所預約系統是什麼</h2>
            <p className={pClass}>
              預約系統不只是排時間，而是整合顧客、療程與資源（醫師、設備、時段）的管理工具。
            </p>
            <p className={pClass}>一個好的預約系統，應該能確保每一個時段都被正確安排，並減少人工溝通成本。</p>

            <h2 className={h2Class}>為什麼 LINE 預約會變得混亂</h2>
            <p className={pClass}>
              LINE 本質是聊天工具，不具備排程邏輯。當預約量增加時，訊息容易被洗掉，
              時段確認依賴人工記憶，導致錯誤與遺漏。
            </p>
            <p className={pClass}>常見情況包括：重複預約、漏記預約、或不同人回覆造成資訊不一致。</p>
            <div className="mt-5 rounded-2xl border-l-4 border-[#00a29a] bg-[#f4fbfa] px-5 py-4 text-slate-700">
              預約真正混亂的原因，不是客人太多，而是流程沒有被系統接住。
            </div>

            <h2 className={h2Class}>常見預約管理問題</h2>
            <p className={pClass}>
              多數診所會遇到：時段衝突、臨時取消難以補位、顧客遲到或未到，以及櫃檯壓力過大。
            </p>
            <p className={pClass}>這些問題會直接影響每日營運效率與顧客體驗。</p>

            <h2 className={h2Class}>一套完整的預約流程應該包含什麼</h2>
            <p className={pClass}>完整流程應包含：預約建立、時段確認、自動提醒、當日管理與後續追蹤。</p>
            <p className={pClass}>每一個環節都需要清楚定義，否則流程會斷裂。</p>
            <div className="mt-5 rounded-2xl border-l-4 border-[#00a29a] bg-[#f4fbfa] px-5 py-4 text-slate-700">
              只要流程被標準化，預約管理就能從混亂轉為可預測。
            </div>

            <section>
              <h3 className="mt-12 mb-5 text-xl font-semibold text-slate-900">
                一套穩定的預約流程通常會這樣運作
              </h3>
              <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-4 items-stretch">
                <PillarFlowStepCard
                  step={1}
                  title="顧客送出預約需求"
                  description="從 LINE、表單或電話進入系統。"
                />
                <PillarFlowStepCard
                  step={2}
                  title="系統建立時段與狀態"
                  description="自動記錄預約、確認與變更狀態。"
                  delayMs={80}
                />
                <PillarFlowStepCard
                  step={3}
                  title="安排提醒與當日管理"
                  description="降低忘記、遲到與未到的機率。"
                  delayMs={160}
                />
                <PillarFlowStepCard
                  step={4}
                  title="接續後續追蹤"
                  description="把預約與顧客經營流程接在一起。"
                  delayMs={240}
                />
              </div>
            </section>

            <h2 className={h2AfterFlowClass}>自動化排程如何改善效率</h2>
            <p className={pClass}>
              自動化排程可以讓系統根據條件分配時段，例如醫師班表、療程長度與資源限制。
            </p>
            <p className={pClass}>這能大幅降低人工安排錯誤，並提升整體運作效率。</p>
            <div className="mt-5 rounded-2xl border-l-4 border-[#00a29a] bg-[#f4fbfa] px-5 py-4 text-slate-700">
              自動化的價值不是取代人，而是讓人不再被重複確認與補洞拖慢。
            </div>

            <h2 className={h2Class}>預約提醒的重要性</h2>
            <p className={pClass}>
              多數未到（No-show）並不是故意，而是忘記。透過自動提醒（例如前一天與當天提醒），
              可以有效降低未到率。
            </p>
            <p className={pClass}>提醒應該是系統自動執行，而不是依賴人工。</p>

            <h2 className={h2Class}>預約系統與 CRM 的關係</h2>
            <p className={pClass}>
              預約只是顧客旅程的一部分，CRM 則是整體管理。
              當預約系統與 CRM 整合時，診所可以更完整地掌握顧客狀態。
            </p>
            <p className={pClass}>這也是為什麼單一工具通常無法解決所有問題。</p>

            <h2 className={h2Class}>如何選擇適合的預約系統</h2>
            <p className={pClass}>
              選擇時應考慮：是否支援診所流程、是否可與 LINE 整合、
              是否具備提醒與自動化功能，以及是否容易上手。
            </p>
            <p className={pClass}>系統應該讓流程變簡單，而不是增加學習成本。</p>

            <h2 className="pt-10 text-2xl font-semibold text-slate-900">延伸閱讀</h2>
            <div className="space-y-3">
              <p className="text-sm leading-7 text-slate-500">
                延伸閱讀：
                <Link
                  href="/blog/clinic-booking-system-selection"
                  className="ml-1 font-medium text-[#14827f] underline underline-offset-4"
                >
                  診所預約系統怎麼選？
                </Link>
              </p>
              <p className="text-sm leading-7 text-slate-500">
                延伸閱讀：
                <Link
                  href="/blog/line-booking-problems"
                  className="ml-1 font-medium text-[#14827f] underline underline-offset-4"
                >
                  LINE 預約會遇到什麼問題？
                </Link>
              </p>
              <p className="text-sm leading-7 text-slate-500">
                延伸閱讀：
                <Link
                  href="/blog/clinic-line-automation"
                  className="ml-1 font-medium text-[#14827f] underline underline-offset-4"
                >
                  診所 LINE 自動化怎麼做？
                </Link>
              </p>
              <p className="text-sm leading-7 text-slate-500">
                延伸閱讀：
                <Link
                  href="/blog/clinic-line-vs-crm"
                  className="ml-1 font-medium text-[#14827f] underline underline-offset-4"
                >
                  LINE vs CRM：診所該怎麼選
                </Link>
              </p>
            </div>

            <div className={ctaOuterClass}>
              <h2 className={ctaTitleClass}>如果你已經開始靠人工補預約流程，代表系統該升級了</h2>
              <p className={ctaBodyClass}>
                當預約、改期、提醒與當日管理開始分散，問題通常不在工具不夠，而在流程沒有被接住。
                先建立一套可管理的預約結構，後續營運才會穩定。
              </p>
              <Link href="/product" className={ctaLinkClass}>
                查看產品頁 →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer locale="zh" />
    </>
  );
}
