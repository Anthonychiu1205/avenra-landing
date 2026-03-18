import type { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/landing";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroEntranceItem, HeroEntranceStyle } from "@/components/HeroEntrance";

const LINE_URL = "https://lin.ee/oORnpv6";

export const metadata: Metadata = {
  title: "診所預約與回診管理改善案例｜Avenra",
  description: "查看診所如何透過 Avenra 改善預約流程、提升回診率與營運效率。",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "診所預約與回診管理改善案例｜Avenra",
    description: "查看診所如何透過 Avenra 改善預約流程、提升回診率與營運效率。",
    url: "/case-studies",
    type: "website",
    images: [{ url: "/logo/avenra-logo.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "診所預約與回診管理改善案例｜Avenra",
    description: "查看診所如何透過 Avenra 改善預約流程、提升回診率與營運效率。",
    images: ["/logo/avenra-logo.svg"],
  },
};

type GrowthMetric = {
  label: string;
  value: string;
  description?: string;
};

type CaseStudy = {
  clinicType: string;
  background: string;
  challenges: string;
  implementation: string;
  implementationModules: string[];
  improvements: string;
  growthMetrics: GrowthMetric[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    clinicType: "醫美診所",
    background:
      "台北市區醫美診所，2 位醫師、約 5 位護理與行政人員，每月預約量約 400 人次，療程涵蓋微整形、皮膚雷射與術後追蹤。",
    challenges:
      "預約多以 LINE 或電話登記，容易重複或遺漏；療程前後照片與顧客資料分散，查詢耗時；高客單價顧客的回訪與再行銷缺乏系統化追蹤。",
    implementation:
      "導入單一作業介面與權限控管，預約、顧客與療程資料集中管理，回訪與再消費流程自動化。",
    implementationModules: [
      "預約與醫師排班",
      "顧客 CRM",
      "Before / After 照片管理",
      "LINE 預約提醒與顧客標籤",
    ],
    improvements:
      "預約衝突與遺漏減少，顧客資料查詢時間縮短，回訪提醒與再消費轉換流程自動化，營運數據可即時檢視。",
    growthMetrics: [
      { label: "預約利用率提升", value: "+32%", description: "排程集中、衝突減少" },
      { label: "顧客回訪率提升", value: "+26%", description: "標籤與提醒自動化" },
      { label: "No-show 率下降", value: "-38%", description: "LINE 預約提醒" },
    ],
  },
  {
    clinicType: "牙醫診所",
    background:
      "新北地區牙醫診所，3 間診療椅、2 位醫師與 3 位助理，以一般牙科與矯正為主，每月約 600 診次，需頻繁安排回診與追蹤。",
    challenges:
      "多椅位排程依賴紙本或試算表，醫師與助理協調耗時；回診提醒多靠人工，容易遺漏；病患資料與療程紀錄分散，就診時查閱不便。",
    implementation:
      "可視化班表與集中病歷查閱，排程與回診提醒在系統內完成，減少遺漏並提升診間運用效率。",
    implementationModules: [
      "椅位與醫師排程",
      "病患 CRM",
      "電子病例",
      "回診追蹤與 LINE 提醒",
    ],
    improvements:
      "排班與協調時間縮短，回診到診率提升，病患資料查詢效率改善，診間運用率與營運流程穩定性提升。",
    growthMetrics: [
      { label: "診間利用率提升", value: "+28%", description: "可視化排程" },
      { label: "回診到診率提升", value: "+24%", description: "自動提醒" },
      { label: "No-show 率下降", value: "-35%", description: "LINE 回診提醒" },
    ],
  },
  {
    clinicType: "皮膚科診所",
    background:
      "台中皮膚科診所，1 位醫師、2 位護理人員，醫療與美容療程並重，每月約 350 診次，需管理病歷、療程照片與回診追蹤。",
    challenges:
      "醫療與美容流程紀錄方式不統一；病患照片與療程紀錄分散，比對與追蹤困難；回診提醒與營運數據多靠人工整理，難以掌握整體狀況。",
    implementation:
      "預約、病歷與照片於同一系統內區分與追蹤，營運分析儀表板提供即時數據。",
    implementationModules: [
      "預約與排班",
      "病患 CRM",
      "電子病例與照片管理",
      "回診追蹤",
      "營運分析",
    ],
    improvements:
      "病歷與療程管理集中，照片與紀錄查詢時間縮短，回診追蹤與營運可視度提升，診所營運效率與病患照護品質同步改善。",
    growthMetrics: [
      { label: "預約安排效率提升", value: "+30%", description: "排程集中管理" },
      { label: "顧客回訪率提升", value: "+22%", description: "追蹤與提醒" },
      { label: "No-show 率下降", value: "-32%", description: "自動提醒" },
    ],
  },
];

function MetricCard({ label, value, description }: GrowthMetric) {
  return (
    <div className="site-card-hover flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50/80 px-4 py-3 text-center">
      <p className="break-words text-xl font-bold tabular-nums leading-none tracking-tight text-teal-600">
        {value}
      </p>
      <p className="mt-1 break-words text-sm font-medium leading-snug text-slate-800">{label}</p>
      {description && <p className="mt-1 break-words text-xs leading-relaxed text-slate-500">{description}</p>}
    </div>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="site-card-hover rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-semibold text-slate-900">{study.clinicType}</h3>
      <div className="mt-6 space-y-6">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">背景</h4>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{study.background}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">問題</h4>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{study.challenges}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">導入內容</h4>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{study.implementation}</p>
          <ul className="mt-3 space-y-1.5">
            {study.implementationModules.map((mod) => (
              <li key={mod} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                {mod}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">導入 3 個月後的成果</h4>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{study.improvements}</p>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {study.growthMetrics.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar locale="zh" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-white px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
          <HeroEntranceStyle />
          <div className="mx-auto max-w-4xl text-center">
            <HeroEntranceItem delay={0}>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                診所如何透過 Avenra 提升營運效率
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                從預約管理到顧客追蹤，以數據與流程改善為導向的診所案例。
              </p>
            </HeroEntranceItem>
          </div>
        </section>

        {/* 導入方式 by clinic scale */}
        <section className="border-t border-slate-200 bg-white px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-24 lg:pt-14">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              你現在的診所，很可能正卡在這些問題
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
              不論規模大小，常見的卡點大多集中在預約、資訊查找與回診追蹤。
            </p>
            <div className="mt-8 grid items-stretch justify-center gap-5 sm:grid-cols-3">
              <div className="flex h-full max-w-[270px] flex-col rounded-xl border border-slate-200 bg-white px-5 py-6">
                <div className="flex min-h-[2rem] items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  </span>
                  <h3 className="text-sm font-semibold leading-[1.8] text-slate-900">小型診所</h3>
                </div>
                <div className="mt-4 space-y-3 text-sm leading-[1.8] text-slate-700">
                  <p>預約依賴 LINE 或電話，容易漏單或重複</p>
                  <p>顧客資料分散，回診與紀錄難以追蹤</p>
                  <p>營運依賴人工處理，效率難以提升</p>
                </div>
                <div className="flex-1" />
              </div>
              <div className="flex h-full max-w-[270px] flex-col rounded-xl border border-slate-200 bg-white px-5 py-6">
                <div className="flex min-h-[2rem] items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  </span>
                  <h3 className="text-sm font-semibold leading-[1.8] text-slate-900">成長型診所</h3>
                </div>
                <div className="mt-4 space-y-3 text-sm leading-[1.8] text-slate-700">
                  <p>排班與流程變複雜，錯誤率逐漸上升</p>
                  <p>顧客增加，回診與追蹤難以管理</p>
                  <p>行銷與回診缺乏系統化支援</p>
                </div>
                <div className="flex-1" />
              </div>
              <div className="flex h-full max-w-[270px] flex-col rounded-xl border border-slate-200 bg-white px-5 py-6">
                <div className="flex min-h-[2rem] items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  </span>
                  <h3 className="text-sm font-semibold leading-[1.8] text-slate-900">大型 / 多分店</h3>
                </div>
                <div className="mt-4 space-y-3 text-sm leading-[1.8] text-slate-700">
                  <p>跨店排程不同步，資訊分散</p>
                  <p>資料與權限管理複雜，難以控管</p>
                  <p>營運狀況難以即時掌握</p>
                </div>
                <div className="flex-1" />
              </div>
            </div>
          </div>
        </section>

        {/* 導入流程 */}
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              我們如何協助導入
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
              讓團隊照著步驟走，就能在不打亂營運的情況下完成導入。
            </p>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2">
              <li className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">
                    1
                  </span>
                  <p className="text-sm font-semibold text-slate-900">理解診所現況</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  先把現有預約、櫃檯與療程流程畫出來，確認真正卡住的位置。
                </p>
              </li>
              <li className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">
                    2
                  </span>
                  <p className="text-sm font-semibold text-slate-900">規劃流程與設定</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  逐一對應每個環節，在系統裡決定要怎麼排程、記錄與提醒。
                </p>
              </li>
              <li className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">
                    3
                  </span>
                  <p className="text-sm font-semibold text-slate-900">建立系統與測試</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  建立帳號、資源與權限，先選一小部分實際預約與看診情境來試跑。
                </p>
              </li>
              <li className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">
                    4
                  </span>
                  <p className="text-sm font-semibold text-slate-900">上線與持續優化</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  正式上線後，定期檢視數據與團隊回饋，微調流程與報表追蹤方式。
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Case studies */}
        <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-center text-sm text-slate-600 sm:text-base">
              以下是不同類型診所實際導入後的情況
            </p>
            <div className="mt-10 space-y-14">
            {CASE_STUDIES.map((study) => (
              <ScrollReveal key={study.clinicType}>
                <CaseStudyCard study={study} />
              </ScrollReveal>
            ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="overflow-hidden rounded-t-[48px] border-t border-slate-200 bg-gray-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                我們可以協助你評估最適合的導入方式
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
                預約一個 15 分鐘的 Demo，了解你的診所目前可以優化的地方。
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="site-btn-transition inline-flex rounded-xl bg-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
                >
                  預約 Demo
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer locale="zh" />
    </div>
  );
}
