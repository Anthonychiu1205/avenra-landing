import Link from "next/link";
import { Navbar, Footer } from "@/components/landing";
import { PillarFlowStepCard } from "@/components/blog/PillarFlowStepCard";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "診所 CRM 系統完整指南：從顧客管理到留存提升",
  description:
    "診所 CRM 系統完整指南，整理顧客管理、導入流程與回診留存策略，幫助診所建立可持續經營的營運系統。",
  alternates: {
    canonical: "https://avenra.health/blog/clinic-crm-guide",
  },
  openGraph: {
    title: "診所 CRM 系統完整指南：從顧客管理到留存提升",
    description:
      "診所 CRM 系統完整指南，整理顧客管理、導入流程與回診留存策略，幫助診所建立可持續經營的營運系統。",
    url: "https://avenra.health/blog/clinic-crm-guide",
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
            診所 CRM 系統完整指南：從顧客管理到留存提升
          </h1>

          <ScrollReveal className="mt-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 leading-relaxed text-slate-700">
              這篇指南適合正在用 LINE、Excel 或零散方式管理顧客資料的診所經營者。
              如果你正在思考 CRM 是否值得導入，這篇會幫你快速看懂問題、流程與導入重點。
            </div>
          </ScrollReveal>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900">這篇指南會回答三件事</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <ScrollReveal>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-slate-900">CRM 到底在管理什麼</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    不是只存顧客資料，而是整合互動、療程與後續追蹤。
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-slate-900">診所為什麼會需要 CRM</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    當顧客數量增加，沒有系統就會開始出現遺漏、斷裂與重工。
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-slate-900">導入 CRM 之後會改善什麼</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    資料集中、流程穩定、提醒可追蹤，回診與留存更容易提升。
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          <div className={bodyClass}>
            <p className={pClass}>
              診所 CRM 並不是單純的客戶名單工具，而是一套讓營運可以被「管理與預測」的系統。
              當顧客數量增加，沒有 CRM 的診所通常會陷入資訊分散、流程斷裂與效率下降的問題。
            </p>

            <h2 className={h2FirstClass}>診所 CRM 是什麼</h2>
            <p className={pClass}>
              CRM（Customer Relationship Management）在診所場景中，指的是整合顧客資料、療程紀錄、互動歷史與回診流程的系統。
            </p>
            <p className={pClass}>它的核心不是「記錄資料」，而是讓每一次與顧客的接觸都能延續與優化。</p>

            <h2 className={h2Class}>為什麼診所需要 CRM</h2>
            <p className={pClass}>
              當顧客資料分散在 LINE、紙本或 Excel 中時，團隊無法快速取得完整資訊，導致溝通品質不一致。
            </p>
            <p className={pClass}>CRM 的價值在於集中資訊，讓每位人員都能基於相同資料做決策。</p>
            <div className="mt-5 rounded-2xl border-l-4 border-[#00a29a] bg-[#f4fbfa] px-5 py-4 text-slate-700">
              沒有 CRM 的問題不是資料少，而是資料無法被穩定延續。
            </div>

            <h2 className={h2Class}>沒有 CRM 會遇到什麼問題</h2>
            <p className={pClass}>
              常見問題包含：顧客資料遺漏、回診提醒不穩定、服務體驗不一致，以及無法追蹤營運表現。
            </p>
            <p className={pClass}>這些問題會直接影響顧客留存與營收。</p>

            <h2 className={h2Class}>CRM 可以解決哪些核心問題</h2>
            <p className={pClass}>CRM 可以解決三件事：資料整合、流程標準化、以及追蹤自動化。</p>
            <p className={pClass}>當這三件事建立後，診所營運會從「依賴人」轉為「依賴系統」。</p>
            <div className="mt-5 rounded-2xl border-l-4 border-[#00a29a] bg-[#f4fbfa] px-5 py-4 text-slate-700">
              CRM 真正解決的，是跨人員、跨時段、跨流程的資訊斷點。
            </div>

            <h2 className={h2Class}>診所 CRM 導入流程</h2>
            <p className={pClass}>
              導入 CRM 的第一步是盤點現有流程，接著建立顧客分類與標籤，最後設定追蹤節點與提醒。
            </p>
            <p className={pClass}>重點不是一次導入全部，而是先讓核心流程穩定運作。</p>

            <section>
              <h3 className="mt-12 mb-5 text-xl font-semibold text-slate-900">一套 CRM 流程通常會長這樣</h3>
              <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-4 items-stretch">
                <PillarFlowStepCard
                  step={1}
                  title="盤點現有顧客資料"
                  description="把 LINE、Excel、表單中的資料整理成可管理狀態。"
                />
                <PillarFlowStepCard
                  step={2}
                  title="建立分群與標籤"
                  description="讓不同顧客能進入不同追蹤節奏。"
                  delayMs={80}
                />
                <PillarFlowStepCard
                  step={3}
                  title="設定提醒與追蹤節點"
                  description="把回診、術後與長期經營流程接起來。"
                  delayMs={160}
                />
                <PillarFlowStepCard
                  step={4}
                  title="持續優化回流流程"
                  description="依據實際成效調整節點與溝通方式。"
                  delayMs={240}
                />
              </div>
            </section>

            <h2 className={h2AfterFlowClass}>CRM 如何提升回診率</h2>
            <p className={pClass}>
              回診率的提升來自於持續且正確的接觸。CRM 能在關鍵時間點自動提醒與追蹤，降低遺漏。
            </p>
            <p className={pClass}>當顧客被持續關心，回流自然提高。</p>
            <div className="mt-5 rounded-2xl border-l-4 border-[#00a29a] bg-[#f4fbfa] px-5 py-4 text-slate-700">
              回診率不是偶然上升，而是流程被固定後自然出現的結果。
            </div>

            <h2 className={h2Class}>CRM 與 LINE 的差異</h2>
            <p className={pClass}>LINE 是溝通工具，但不是管理系統。CRM 則是讓資料與流程可以被追蹤與分析。</p>
            <p className={pClass}>兩者應該是整合關係，而不是替代。</p>

            <h2 className={h2Class}>如何選擇適合的 CRM 系統</h2>
            <p className={pClass}>
              選擇 CRM 時應評估：是否支援診所流程、是否能整合 LINE、是否具備自動化功能，以及操作是否直覺。
            </p>
            <p className={pClass}>系統應該降低複雜度，而不是增加負擔。</p>

            <h2 className="pt-10 text-2xl font-semibold text-slate-900">延伸閱讀</h2>
            <div className="space-y-3">
              <p className="text-sm leading-7 text-slate-500">
                延伸閱讀：
                <Link
                  href="/blog/clinic-crm-selection"
                  className="ml-1 font-medium text-[#14827f] underline underline-offset-4"
                >
                  診所 CRM 系統怎麼選？
                </Link>
              </p>
              <p className="text-sm leading-7 text-slate-500">
                延伸閱讀：
                <Link
                  href="/blog/clinic-customer-segmentation"
                  className="ml-1 font-medium text-[#14827f] underline underline-offset-4"
                >
                  診所顧客分群怎麼做
                </Link>
              </p>
              <p className="text-sm leading-7 text-slate-500">
                延伸閱讀：
                <Link
                  href="/blog/clinic-tagging-system"
                  className="ml-1 font-medium text-[#14827f] underline underline-offset-4"
                >
                  診所顧客標籤怎麼設計
                </Link>
              </p>
            </div>

            <div className={ctaOuterClass}>
              <h2 className={ctaTitleClass}>如果你已經開始覺得顧客資料太散，代表該建立系統了</h2>
              <p className={ctaBodyClass}>
                當資料、提醒與顧客狀態開始分散，問題通常不在人，而在流程。
                先建立一套可管理的 CRM 結構，後續的回診與留存才有機會穩定成長。
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
