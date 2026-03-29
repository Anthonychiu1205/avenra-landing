import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Footer } from "@/components/landing";
import { ScrollReveal } from "@/components/ScrollReveal";

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

const PAIN_ITEMS = [
  "預約確認與改期靠人工協調",
  "顧客資料分散，查詢慢又容易漏",
  "術後追蹤與回診提醒不穩定",
  "營收與回診表現難以快速掌握",
];

const WORKFLOW_STEPS = [
  { step: "1", title: "接住預約", text: "從預約進來的那一刻起，資料不再散落。" },
  { step: "2", title: "建立顧客脈絡", text: "療程與互動都能延續，不必每次重講一次。" },
  { step: "3", title: "安排追蹤與回診", text: "術後關懷與提醒成為固定節奏。" },
  { step: "4", title: "回到數據決策", text: "用數據看見該優化的流程。" },
];

/** 產品圖：固定尺寸、不位移、不 scale，避免與文字重疊 */
const PRODUCT_IMG_CLASS = "h-auto w-full max-w-[620px] object-contain";

const IMAGE_SHELL_CLASS = "relative flex items-center justify-center overflow-visible";

export default function ProductPage() {
  return (
    <>
      <Navbar locale="zh" />

      <main className="bg-white text-slate-900">
        {/* 1. Hero */}
        <section className="border-b border-slate-200">
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
            <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2 lg:gap-16">
              <ScrollReveal className="min-w-0">
                <div className="relative z-20 max-w-[620px]">
                  <p className="text-sm font-medium tracking-wide text-[#14827f]">診所營運管理系統</p>
                  <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                    讓診所少花時間協調
                    <br />
                    把預約、顧客與回診
                    <br />
                    放進同一套系統
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    Avenra 將預約、顧客資料、術後追蹤與營運分析整合在一起，讓
                    <span className="block">診所不再依賴 LINE、Excel 與人工記憶維持流程。</span>
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-2xl bg-[#14827f] px-6 py-3 text-base font-medium text-white transition duration-300 hover:opacity-90"
                    >
                      免費預約 Demo
                    </Link>
                    <Link
                      href="/blog"
                      className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-base font-medium text-slate-700 transition duration-300 hover:bg-slate-50"
                    >
                      先看知識專欄
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              <div className="relative flex justify-center lg:hidden">
                <Image
                  src="/images/hero/schedule-dashboard-v2.png"
                  alt="排程系統畫面"
                  width={1200}
                  height={800}
                  className="h-auto w-full max-w-none object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.10)]"
                  priority
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden lg:flex lg:w-[56%] lg:items-center lg:justify-end">
              <Image
                src="/images/hero/schedule-dashboard-v2.png"
                alt="排程系統畫面"
                width={1200}
                height={800}
                className="relative z-10 h-auto w-[150%] max-w-none object-contain translate-x-16 translate-y-5 drop-shadow-[0_35px_70px_rgba(0,0,0,0.12)]"
                priority
              />
            </div>
          </div>
        </section>

        {/* 2. 痛點 */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                  問題通常不是客人太多
                  <br />
                  而是資訊散在不同地方
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  當預約在 LINE、資料在 Excel、追蹤靠人工提醒時，
                  每增加一位顧客，營運複雜度就會再上升一點。
                </p>
              </div>
            </ScrollReveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {PAIN_ITEMS.map((item, i) => (
                <ScrollReveal key={item} delay={i * 50}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-base font-medium leading-7 text-slate-800">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. 模組一：預約 */}
        <section className="bg-white">
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(760px,1.35fr)] lg:gap-24">
            <ScrollReveal className="min-w-0">
              <div className="min-w-0">
                <p className="text-sm font-medium tracking-wide text-teal-600">
                  模組一
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-[1.15] text-slate-900 sm:text-5xl">
                  預約流程先穩定
                  <br />
                  <span className="whitespace-nowrap">櫃檯壓力就會先下降</span>
                </h2>

                <p className="mt-6 max-w-[520px] text-lg leading-9 text-slate-700">
                  將預約來源、時段與療程整合管理，
                  <br />
                  讓預約不再只是收件，
                  <br />
                  而是進入可追蹤的流程。
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="min-w-0 overflow-visible" delay={80}>
              <div className="relative flex items-center justify-end overflow-visible">
                {/* eslint-disable-next-line @next/next/no-img-element -- 固定像素寬避免 Next/Image 與外層限制導致視覺無法放大 */}
                <img
                  src="/images/feature/booking-form.png"
                  alt="診所預約表單畫面"
                  className="relative z-10 block h-auto max-w-none object-contain transition duration-500 hover:scale-[1.03]"
                  style={{
                    width: "980px",
                    transform: "translateX(140px)",
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <div className="bg-white">
          <section className="bg-[#96ced0] rounded-t-[40px] sm:rounded-t-[56px] pt-8 pb-10">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
                <div className="relative z-10 flex items-center justify-start overflow-visible">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/feature/crm-dashboard.png"
                    alt="診所 CRM 顧客管理畫面"
                    className="block h-auto max-w-none object-contain"
                    style={{ width: "920px", marginLeft: "-8px", marginTop: "-8px" }}
                  />
                </div>

                <div className="relative z-10 max-w-[460px] lg:ml-[-40px]">
                  <p className="text-sm text-slate-500">模組二</p>

                  <h2 className="mt-2 text-4xl font-semibold leading-tight text-slate-900">
                    顧客資料的價值
                    <br />
                    在於持續被使用
                  </h2>

                  <p className="mt-6 text-base leading-relaxed text-slate-700">
                    將療程、回診與互動紀錄整合進 CRM，
                    <br />
                    每一次接觸都能延續顧客脈絡。
                  </p>

                  <p className="mt-4 text-base leading-relaxed text-slate-700">
                    系統自動記錄歷程與關鍵節點，
                    <br />
                    讓追蹤與回診不再依賴人工整理。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 5. 模組三：LINE 串接與自動化 */}
        <div className="bg-[#96ced0]">
          <section className="relative z-10 overflow-hidden bg-[#00a29a] rounded-t-[40px] sm:rounded-t-[56px] pt-20 pb-12 sm:pt-24 sm:pb-16">
            <div className="relative z-10 mx-auto max-w-7xl px-6">
              <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.32fr)] lg:gap-16">
                <div className="max-w-[640px]">
                  <p className="text-sm font-medium tracking-wide text-white/75">模組三</p>
                  <h2 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight text-white">
                    不是把 LINE 拿掉
                    <br />
                    <span className="whitespace-nowrap">而是把 LINE 接進系統裡</span>
                  </h2>
                  <p className="mt-6 text-lg leading-9 text-white/90">
                    顧客仍然可以用熟悉的 LINE 溝通，診所端則把提醒、問卷、術後關懷與
                    回診節點接回可管理的流程中，不再只停留在聊天紀錄裡。
                  </p>
                </div>

                <div className="flex items-center justify-end">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/section/line-automation-flow.png"
                    alt="LINE 自動化流程圖"
                    className="block h-auto w-full max-w-[1820px] object-contain scale-[1.2]"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 6. 模組四：營運分析 */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2">
            <ScrollReveal className="min-w-0">
              <div>
                <p className="text-sm font-medium tracking-wide text-[#14827f]">模組四</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                  經營不是憑感覺
                  <br />
                  要看得到哪些流程正在產生成果
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  把營收、回診與療程分布整理成清楚的數據畫面，
                  讓經營決策不是事後回想，而是每天都能看見。
                </p>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-lg font-semibold text-slate-900">常見會開始改善的三件事</p>
                  <ul className="mt-4 space-y-3 text-slate-600">
                    <li>知道哪一類療程帶來主要營收</li>
                    <li>快速看出回診與流失的變化</li>
                    <li>不用再手動整理報表才知道發生什麼事</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="min-w-0" delay={80}>
              <div className={`${IMAGE_SHELL_CLASS} lg:justify-end`}>
                <Image
                  src="/images/analytics/analytics-dashboard.png"
                  alt="診所營運分析畫面"
                  width={1200}
                  height={1000}
                  className={PRODUCT_IMG_CLASS}
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 7. 流程整合 */}
        <section className="border-b border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                  不是多一套工具
                  <br />
                  而是把診所營運流程接起來
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  預約、顧客、LINE 串接與追蹤到數據，在同一條流程上接力完成。
                </p>
              </div>
            </ScrollReveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4 items-stretch">
              {WORKFLOW_STEPS.map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 60}>
                  <div className="flex h-full flex-col rounded-2xl bg-slate-900 p-6 text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00a29a] text-sm font-semibold text-white">
                      {item.step}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 flex-1 leading-7 text-slate-300">{item.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CTA */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <ScrollReveal>
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-10 text-center sm:p-14">
                <p className="text-sm font-medium tracking-wide text-[#14827f]">準備把營運流程收回到系統裡</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                  先看一次 Demo
                  <br />
                  就能知道這套系統適不適合你的診所
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  不用先大改流程，也不用一次導入全部。
                  先把最核心的預約、顧客與回診流程穩定下來。
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#14827f] px-6 py-3 text-base font-medium text-white transition duration-300 hover:opacity-90"
                  >
                    預約 Demo
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-base font-medium text-slate-700 transition duration-300 hover:bg-white"
                  >
                    先看知識專欄
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer locale="zh" />
    </>
  );
}
