import Link from "next/link";
import { Navbar, Footer } from "@/components/landing";

export const metadata = {
  title: "為什麼診所顧客不回診？5 個常見原因與改善方法",
  description:
    "診所顧客為什麼不回診？本篇解析顧客流失的常見原因，並提供可落地的改善方法，幫助提升回診率與營收穩定性。",
  alternates: {
    canonical: "https://avenra.health/blog/clinic-customer-churn",
  },
  openGraph: {
    title: "為什麼診所顧客不回診？5 個常見原因與改善方法",
    description:
      "從顧客流失原因到實際改善策略，建立診所可執行的回診機制，讓營收更穩定。",
    type: "article",
    url: "https://avenra.health/blog/clinic-customer-churn",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    description: metadata.description,
    url: "https://avenra.health/blog/clinic-customer-churn",
    datePublished: "2026-03-27",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar locale="zh" />

      <main className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm text-slate-500">2026-03-27</p>

        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
          為什麼診所顧客不回診？5 個常見原因與改善方法
        </h1>

        <div className="mt-10 space-y-6 text-slate-700 leading-relaxed">
          <p>
            很多診所在營運一段時間後，會開始出現一個問題：顧客來過一次，但沒有再回來。
          </p>

          <p>
            有些人會直覺認為是價格、療程或服務品質，但實際上，大多數的流失並不是單一原因造成的。
          </p>

          <p>
            <span className="text-[#14827f] font-medium">
              顧客流失，通常是因為沒有被持續管理，而不是單次體驗不好。
            </span>
          </p>

          <h2 className="pt-6 text-xl font-semibold text-slate-900">
            原因一：沒有回診提醒機制
          </h2>

          <p>
            很多診所仍然依賴人工記錄或當下提醒，但實際上，顧客離開診所後，很快就會忘記下一次回診時間。
          </p>

          <p>
            如果沒有系統化提醒，大部分顧客就會自然流失，而不是主動回來。
          </p>

          <p>
            <span className="text-[#14827f] font-medium">
              回診不是顧客的責任，而是診所的系統設計。
            </span>
          </p>

          <p className="mt-4 text-sm text-slate-500">
            延伸閱讀：
            <Link
              href="/blog/clinic-followup-reminder"
              className="ml-1 font-medium text-[#14827f] underline underline-offset-4 hover:opacity-80 transition"
            >
              診所回診提醒怎麼做
            </Link>
          </p>

          <h2 className="pt-6 text-xl font-semibold text-slate-900">
            原因二：顧客資料分散，無法持續追蹤
          </h2>

          <p>
            當顧客資料分散在 LINE、Excel 或不同工具中，就很難完整掌握顧客狀態。
          </p>

          <p>
            結果就是，每一次互動都像重新開始，沒有累積。
          </p>

          <p>
            <span className="text-[#14827f] font-medium">
              沒有資料整合，就沒有真正的顧客經營。
            </span>
          </p>

          <p className="mt-4 text-sm text-slate-500">
            延伸閱讀：
            <Link
              href="/blog/clinic-customer-data-management"
              className="ml-1 font-medium text-[#14827f] underline underline-offset-4 hover:opacity-80 transition"
            >
              診所顧客資料怎麼整理
            </Link>
          </p>

          <h2 className="pt-6 text-xl font-semibold text-slate-900">
            原因三：沒有顧客分群，溝通沒有針對性
          </h2>

          <p>
            當所有顧客收到一樣的訊息時，大多數人會直接忽略。
          </p>

          <p>
            因為內容與他們當下的需求沒有關聯。
          </p>

          <p>
            <span className="text-[#14827f] font-medium">
              沒有分群的溝通，本質上就是隨機投放。
            </span>
          </p>

          <p className="mt-4 text-sm text-slate-500">
            延伸閱讀：
            <Link
              href="/blog/clinic-customer-segmentation"
              className="ml-1 font-medium text-[#14827f] underline underline-offset-4 hover:opacity-80 transition"
            >
              診所顧客分群怎麼做
            </Link>
          </p>

          <h2 className="pt-6 text-xl font-semibold text-slate-900">
            原因四：療程結束後沒有後續設計
          </h2>

          <p>
            很多診所把療程當作一次性服務，但實際上，大多數醫美或醫療服務都具有延續性。
          </p>

          <p>
            如果沒有設計下一步，顧客自然不會回來。
          </p>

          <p>
            <span className="text-[#14827f] font-medium">
              顧客流失，很多時候只是因為「沒有下一步」。
            </span>
          </p>

          <h2 className="pt-6 text-xl font-semibold text-slate-900">
            原因五：過度依賴 LINE，缺乏系統管理
          </h2>

          <p>
            LINE 是很好的溝通工具，但它不是管理系統。
          </p>

          <p>
            當所有事情都靠人工對話，很難建立穩定的流程。
          </p>

          <p>
            <span className="text-[#14827f] font-medium">
              LINE 可以負責對話，但不能負責營運。
            </span>
          </p>

          <p className="mt-4 text-sm text-slate-500">
            延伸閱讀：
            <Link
              href="/blog/clinic-line-vs-crm"
              className="ml-1 font-medium text-[#14827f] underline underline-offset-4 hover:opacity-80 transition"
            >
              LINE 就夠了嗎？診所為什麼還需要 CRM 系統
            </Link>
          </p>
          <p className="mt-4 text-sm text-slate-500">
            延伸閱讀：
            <Link
              href="/blog/clinic-retention-rate"
              className="ml-1 font-medium text-[#14827f] underline underline-offset-4 hover:opacity-80 transition"
            >
              診所如何提升回診率？從流程設計到實際執行
            </Link>
          </p>
          <p className="mt-4 text-sm text-slate-500">
            延伸閱讀：
            <Link
              href="/blog/clinic-crm-guide"
              className="ml-1 font-medium text-[#14827f] underline underline-offset-4 hover:opacity-80 transition"
            >
              診所 CRM 系統完整指南
            </Link>
          </p>

          <h2 className="pt-6 text-xl font-semibold text-slate-900">
            如何改善顧客流失？
          </h2>

          <p>
            顧客流失不是單一問題，而是整體流程沒有建立。
          </p>

          <p>
            你需要的是一個能夠持續運作的系統，而不是依賴人力補漏洞。
          </p>

          <p>
            <span className="text-[#14827f] font-medium">
              當資料、分群與提醒串在一起，回診才會變成自然結果。
            </span>
          </p>

          <h2 className="pt-6 text-xl font-semibold text-slate-900">
            結論
          </h2>

          <p>
            顧客不回診，通常不是因為不滿意，而是因為沒有被持續經營。
          </p>

          <p>
            當系統不存在，每一個顧客都會逐漸流失。
          </p>

          <p>
            <span className="text-[#14827f] font-medium">
              真正穩定的診所，不是靠新客，而是靠回診。
            </span>
          </p>

          <div className="mt-6 flex justify-start">
            <a
              href="/clinic-crm-system"
              className="inline-flex items-center gap-2 font-medium text-[#14827f] underline underline-offset-4 hover:opacity-80 transition"
            >
              查看 CRM 系統 →
            </a>
          </div>
        </div>
      </main>

      <Footer locale="zh" />
    </>
  );
}
