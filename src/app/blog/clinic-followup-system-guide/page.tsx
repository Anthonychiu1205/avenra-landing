import Link from "next/link";
import { Navbar, Footer } from "@/components/landing";
import { PillarFlowStepCard } from "@/components/blog/PillarFlowStepCard";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "診所回診與術後追蹤完整指南：讓顧客自然回流",
  description:
    "診所回診與術後追蹤完整指南，整理提醒節點、流程設計與自動化做法，幫助診所建立穩定回流與留存機制。",
  alternates: {
    canonical: "https://avenra.health/blog/clinic-followup-system-guide",
  },
  openGraph: {
    title: "診所回診與術後追蹤完整指南：讓顧客自然回流",
    description:
      "診所回診與術後追蹤完整指南，整理提醒節點、流程設計與自動化做法，幫助診所建立穩定回流與留存機制。",
    url: "https://avenra.health/blog/clinic-followup-system-guide",
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
            診所回診與術後追蹤完整指南：讓顧客自然回流
          </h1>

          <ScrollReveal className="mt-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 leading-relaxed text-slate-700">
              這篇指南適合正在用人工或零散方式做回診提醒與術後追蹤的診所。
              如果你發現顧客做完療程後就消失，這篇會幫你看懂問題與解法。
            </div>
          </ScrollReveal>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900">這篇指南會幫你釐清三件事</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <ScrollReveal>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-slate-900">為什麼顧客不會自然回診</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    不是療程不好，而是沒有持續接觸與正確節奏。
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-slate-900">術後追蹤應該做什麼</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    從關懷、提醒到回診引導，每個時間點都不同。
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-slate-900">系統如何讓回診變穩定</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    當流程被固定，回診就不再依賴人工記憶。
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          <div className={bodyClass}>
            <p className={pClass}>
              回診與術後追蹤的關鍵不在於「有沒有提醒」，而在於是否建立一套穩定且可持續運作的流程。
              多數診所的問題不是不努力，而是流程斷裂，導致顧客在療程後自然流失。
            </p>

            <h2 className={h2FirstClass}>為什麼診所回診率會下降</h2>
            <p className={pClass}>
              顧客完成療程後，若沒有持續接觸，很容易被生活節奏或其他診所取代。多數流失並不是因為不滿意，而是「沒有被提醒」與「沒有被持續關心」。
            </p>
            <p className={pClass}>
              特別是在醫美或需要多次療程的情境中，回診本質上是「長期關係管理」，而不是單次交易。缺乏系統化追蹤，回診率自然下降。
            </p>
            <div className="mt-5 rounded-2xl border-l-4 border-[#00a29a] bg-[#f4fbfa] px-5 py-4 text-slate-700">
              回診率下降通常不是單一問題，而是流程沒有被持續執行。
            </div>

            <h2 className={h2Class}>傳統人工追蹤的問題</h2>
            <p className={pClass}>
              許多診所依賴櫃檯或客服手動記錄與提醒，但這種方式高度依賴個人，容易遺漏，也難以擴張。
            </p>
            <p className={pClass}>
              當顧客數量增加，人工追蹤會變成負擔，最終導致「只追重要客戶」，其他人自然流失。
            </p>

            <h2 className={h2Class}>術後追蹤應該包含哪些節點（時間軸）</h2>
            <p className={pClass}>一套完整的術後追蹤應該依據時間節點設計，例如：</p>
            <p className={pClass}>
              第 1 天：確認基本狀況與注意事項
              <br />
              第 3 天：關心恢復狀態
              <br />
              第 7 天：提醒回診或評估
              <br />
              第 30 天：引導下一次療程
            </p>
            <p className={pClass}>關鍵不是頻率，而是節奏穩定且可預測。</p>
            <div className="mt-5 rounded-2xl border-l-4 border-[#00a29a] bg-[#f4fbfa] px-5 py-4 text-slate-700">
              術後追蹤不是多發幾則訊息，而是每個節點都有明確目的與下一步。
            </div>

            <h2 className={h2Class}>診所回診流程設計（完整流程）</h2>
            <p className={pClass}>回診流程應從療程結束就開始設計，而不是等到顧客消失才追。</p>
            <p className={pClass}>基本流程應包含：療程完成 → 建立標籤 → 設定追蹤節點 → 自動提醒 → 回診轉換。</p>

            <section>
              <h3 className="mt-12 mb-5 text-xl font-semibold text-slate-900">一套完整的回診流程通常會這樣設計</h3>
              <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-4 items-stretch">
                <PillarFlowStepCard
                  step={1}
                  title="療程完成建立標籤"
                  description="將顧客分類並進入追蹤流程。"
                />
                <PillarFlowStepCard
                  step={2}
                  title="設定術後節點"
                  description="例如第 1 天、第 3 天、第 7 天。"
                  delayMs={80}
                />
                <PillarFlowStepCard
                  step={3}
                  title="自動提醒與關懷"
                  description="降低遺漏與人為不穩定。"
                  delayMs={160}
                />
                <PillarFlowStepCard
                  step={4}
                  title="引導回診與下一療程"
                  description="讓關係持續延伸。"
                  delayMs={240}
                />
              </div>
            </section>

            <h2 className={h2AfterFlowClass}>LINE 與自動化在追蹤中的角色</h2>
            <p className={pClass}>
              LINE 是診所最常用的溝通工具，但單靠人工回覆無法支撐規模。透過自動化，可以在正確時間發送正確訊息。
            </p>
            <p className={pClass}>例如自動發送術後關懷、問卷與回診提醒，讓整個流程穩定運作。</p>

            <h2 className={h2Class}>常見錯誤（診所最容易做錯的地方）</h2>
            <p className={pClass}>常見錯誤包含：只做單次提醒、沒有分群、過度依賴人工，以及沒有建立長期節奏。</p>
            <p className={pClass}>這些問題會讓追蹤變成「臨時行為」，而不是系統。</p>

            <h2 className={h2Class}>如何建立穩定回診系統（實務做法）</h2>
            <p className={pClass}>
              建立回診系統的關鍵在於「標準化」與「自動化」。先定義流程，再用工具讓流程穩定執行。
            </p>
            <p className={pClass}>一旦流程固定，回診率會變成可預測的結果，而不是運氣。</p>
            <div className="mt-5 rounded-2xl border-l-4 border-[#00a29a] bg-[#f4fbfa] px-5 py-4 text-slate-700">
              穩定回診來自可重複的流程，而不是偶爾加強的追蹤力度。
            </div>

            <h2 className="pt-10 text-2xl font-semibold text-slate-900">延伸閱讀</h2>
            <div className="space-y-3">
              <p className="text-sm leading-7 text-slate-500">
                延伸閱讀：
                <Link
                  href="/blog/clinic-followup-reminder"
                  className="ml-1 font-medium text-[#14827f] underline underline-offset-4"
                >
                  診所回診提醒怎麼做？
                </Link>
              </p>
              <p className="text-sm leading-7 text-slate-500">
                延伸閱讀：
                <Link
                  href="/blog/clinic-post-treatment-care"
                  className="ml-1 font-medium text-[#14827f] underline underline-offset-4"
                >
                  診所術後關懷怎麼做？
                </Link>
              </p>
            </div>

            <div className={ctaOuterClass}>
              <h2 className={ctaTitleClass}>如果你發現顧客做完療程就消失，問題通常在流程</h2>
              <p className={ctaBodyClass}>
                回診不是提醒一次就會發生，而是需要穩定節奏與系統支撐。
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
