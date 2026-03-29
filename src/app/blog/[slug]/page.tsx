import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar, Footer } from "@/components/landing";
import { getBlogPost } from "@/app/blog/blogData";

type Props = { params: Promise<{ slug: string }> };

const CRM_GUIDE_HIGHLIGHTS = new Set([
  "CRM 的價值，在於把分散的資訊與流程整合成一個可以運作的結構。",
  "LINE 負責溝通，而 CRM 負責決定什麼時候該溝通。",
  "回診不應該靠記憶，而應該是系統的一部分。",
  "營運開始變亂，通常不是因為人不夠努力，而是沒有結構。",
  "CRM 的導入，是把混亂逐步收斂的過程。",
  "重點不是工具本身，而是你是否建立了一個能持續運作的系統。",
]);

const CUSTOMER_DATA_HIGHLIGHTS = new Set([
  "診所真正需要的，不是更多資料，而是能被持續使用的資料結構。",
  "資料一旦失去脈絡，就很難再支撐後續決策。",
  "顧客資料不是存檔，而是要能支撐下一步行動。",
  "亂不是因為資料太多，而是因為資料沒有被定義。",
  "當資料開始拖累營運，而不是幫助營運，就代表你需要重新建立系統。",
  "好的資料整理，不是讓系統看起來整齊，而是讓診所之後每一次決策都更容易。",
  "多數診所不是沒有資料，而是沒有一套能讓資料持續運作的方式。",
]);

const CUSTOMER_SEGMENTATION_HIGHLIGHTS = new Set([
  "當所有人收到一樣的訊息，代表你其實沒有在經營顧客。",
  "分群的本質，是讓溝通變得有意義，而不是更複雜。",
  "分群不是為了分類，而是為了決定下一步該做什麼。",
  "如果分群不能帶來行動，那它就只是整理過的名單。",
  "分群的目的，是讓每一個訊息都有對象，而不是對所有人說話。",
  "分群不是一次設定，而是一個需要持續更新的結構。",
  "沒有分群的溝通，是隨機的；有分群的溝通，才是經營。",
  "分群真正的價值，在於讓每一個顧客都有對應的下一步。",
]);

const LINE_VS_CRM_HIGHLIGHTS = new Set([
  "但當顧客數量開始增加，LINE 很快就會變成一個「混亂的訊息盒」。",
  "當資料無法被整理，所有決策都會變成臨時判斷。",
  "沒有 CRM，溝通只是隨機發生；有 CRM，溝通才會有策略。",
  "工具再方便，如果沒有結構，最後都會變成負擔。",
  "當營運開始依賴記憶與手動操作，就代表系統已經不夠用了。",
  "LINE 是工具，CRM 才是系統。",
  "真正能讓診所穩定成長的，是一套可運作的系統，而不是單一工具。",
]);

const CRM_SELECTION_ARTICLE_HIGHLIGHTS = new Set([
  "問題通常不在於系統不好，而是在選擇的時候就已經選錯方向。",
  "CRM 不是越多功能越好，而是要能支撐你的營運流程。",
  "選系統前，先定義問題，比比較系統更重要。",
  "如果一套系統無法處理這三件事，就不算真正的 CRM。",
  "CRM 應該被當作營運投資，而不是成本。",
  "CRM 應該從最核心的流程開始，而不是一次導入所有功能。",
  "好的 CRM，會讓事情變簡單，而不是更複雜。",
]);

const CRM_IMPLEMENTATION_HIGHLIGHTS = new Set([
  "CRM 導入真正的難點，不是上線，而是讓系統能和現有營運接起來。",
  "導入失敗通常不是因為功能太少，而是因為一開始做得太多。",
  "如果資料本身是亂的，再好的 CRM 也只會把混亂數位化。",
  "CRM 的價值不只是記錄顧客，而是讓顧客的下一步變得清楚。",
  "與其一次做十件事，不如先把一條會影響營收的流程做對。",
  "能被使用的系統，才算真正完成導入。",
  "導入 CRM 不是一次性專案，而是一個逐步穩定營運的過程。",
  "好的導入，不是一次做完，而是每一步都真的被接住。",
  "導入真正的目的，不是把系統裝進診所，而是讓診所開始用系統運作。",
]);

function renderParagraph(text: string, slug: string, className: string, key: string) {
  const systemCtaMatch = text.match(/^查看(.+)（(\/[^）]+)）$/);
  if (systemCtaMatch) {
    const [, label, href] = systemCtaMatch;
    return (
      <div key={key} className="mt-6 flex justify-start">
        <Link
          href={href}
          className="inline-flex items-center gap-2 font-medium text-[#14827f] underline underline-offset-4 transition hover:opacity-80"
        >
          {`查看${label}→`}
        </Link>
      </div>
    );
  }

  const crmCtaMatch = text.match(/^查看 CRM 系統（(\/[^）]+)）$/);
  if (crmCtaMatch) {
    const [, href] = crmCtaMatch;
    return (
      <div key={key} className="mt-6 flex justify-start">
        <Link
          href={href}
          className="inline-flex items-center gap-2 font-medium text-[#14827f] underline underline-offset-4 transition hover:opacity-80"
        >
          查看 CRM 系統 →
        </Link>
      </div>
    );
  }

  const readMoreMatch = text.match(/^延伸閱讀：(.+)（(\/blog\/[^）]+)）$/);
  if (readMoreMatch) {
    const [, label, href] = readMoreMatch;
    return (
      <p key={key} className="mt-4 text-sm text-slate-500">
        延伸閱讀：
        <Link
          href={href}
          className="ml-1 font-medium text-[#14827f] underline underline-offset-4 transition hover:opacity-80"
        >
          {label}
        </Link>
      </p>
    );
  }

  if (slug === "clinic-crm-guide" && CRM_GUIDE_HIGHLIGHTS.has(text)) {
    return (
      <p key={key} className={className}>
        <span className="text-[#00a29a]">{text}</span>
      </p>
    );
  }

  if (slug === "clinic-customer-data-management" && CUSTOMER_DATA_HIGHLIGHTS.has(text)) {
    return (
      <p key={key} className={className}>
        <span className="font-medium text-[#14827f]">{text}</span>
      </p>
    );
  }

  if (slug === "clinic-customer-segmentation" && CUSTOMER_SEGMENTATION_HIGHLIGHTS.has(text)) {
    return (
      <p key={key} className={className}>
        <span className="font-medium text-[#14827f]">{text}</span>
      </p>
    );
  }

  if (slug === "clinic-line-vs-crm" && LINE_VS_CRM_HIGHLIGHTS.has(text)) {
    return (
      <p key={key} className={className}>
        <span className="font-medium text-[#14827f]">{text}</span>
      </p>
    );
  }

  if (slug === "clinic-crm-selection" && CRM_SELECTION_ARTICLE_HIGHLIGHTS.has(text)) {
    return (
      <p key={key} className={className}>
        <span className="font-medium text-[#14827f]">{text}</span>
      </p>
    );
  }

  if (slug === "clinic-crm-implementation" && CRM_IMPLEMENTATION_HIGHLIGHTS.has(text)) {
    return (
      <p key={key} className={className}>
        <span className="font-medium text-[#14827f]">{text}</span>
      </p>
    );
  }

  return (
    <p key={key} className={className}>
      {text}
    </p>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const title = post.meta?.title ?? `${post.title}｜Avenra`;
  return {
    title,
    description: post.meta?.description ?? post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description: post.meta?.description ?? post.description,
      url: `/blog/${post.slug}`,
      type: "website",
      images: [{ url: "/logo/avenra-logo.svg" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.meta?.description ?? post.description,
      images: ["/logo/avenra-logo.svg"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://avenra.health").replace(
    /\/+$/,
    "",
  );
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta?.title ?? post.title,
    description: post.meta?.description ?? post.description,
    url: `${siteUrl}/blog/${post.slug}`,
    datePublished: post.dateISO,
  };

  const blocks = post.content;
  const headingIndexes = blocks
    .map((b, idx) => (b.type === "h2" ? idx : -1))
    .filter((idx) => idx !== -1);
  const firstHeadingIdx = headingIndexes[0] ?? blocks.length;
  const preSectionBlocks = blocks.slice(3, firstHeadingIdx);
  const ctaText =
    post.slug === "line-booking-problems"
      ? "如果你的診所也開始感覺 LINE 難以管理預約，可以了解 Avenra 如何整合預約、顧客資料與營運流程。"
      : "如果你的診所也遇到預約混亂或漏單問題，可以透過 Avenra 了解更完整的解決方案。";

  return (
    <div className="min-h-screen bg-white">
      <Navbar locale="zh" />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article className="bg-white px-4 pt-16 pb-14 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8 lg:pt-24 lg:pb-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-slate-500">{post.dateISO}</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-8 space-y-4">
              {blocks
                .filter((b) => b.type === "p")
                .slice(0, 3)
                .map((b, i) => (
                  renderParagraph(
                    b.type === "p" ? b.text : "",
                    post.slug,
                    i === 0
                      ? "text-lg leading-[1.8] text-slate-600 whitespace-pre-line"
                      : "text-base leading-[1.8] text-slate-700 whitespace-pre-line",
                    `lead-${i}`,
                  )
                ))}
            </div>

            <div className="mt-10 space-y-10">
              {preSectionBlocks.map((b, i) => {
                if (b.type === "hr") {
                  return <hr key={`pre-hr-${i}`} className="border-slate-200" />;
                }
                if (b.type === "p") {
                  return renderParagraph(
                    b.text,
                    post.slug,
                    "text-base leading-[1.8] text-slate-700 whitespace-pre-line",
                    `pre-p-${i}`,
                  );
                }
                if (b.type === "ul") {
                  return (
                    <ul key={`pre-ul-${i}`} className="list-disc space-y-2 pl-5 text-base leading-[1.8] text-slate-700">
                      {b.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
              {headingIndexes.map((startIdx, sectionNum) => {
                const endIdx =
                  sectionNum + 1 < headingIndexes.length
                    ? headingIndexes[sectionNum + 1]
                    : blocks.length;
                const heading = blocks[startIdx];
                const sectionBlocks = blocks.slice(startIdx + 1, endIdx);
                if (heading.type !== "h2") return null;

                return (
                  <section key={`sec-${startIdx}`}>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      {heading.text}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {sectionBlocks.map((b, i) => {
                        if (b.type === "p") {
                          return renderParagraph(
                            b.text,
                            post.slug,
                            "text-base leading-[1.8] text-slate-700 whitespace-pre-line",
                            `p-${startIdx}-${i}`,
                          );
                        }
                        if (b.type === "ul") {
                          return (
                            <ul
                              key={`ul-${startIdx}-${i}`}
                              className="list-disc space-y-2 pl-5 text-base leading-[1.8] text-slate-700"
                            >
                              {b.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          );
                        }
                        if (b.type === "hr") {
                          return (
                            <hr
                              key={`hr-${startIdx}-${i}`}
                              className="border-slate-200"
                            />
                          );
                        }
                        return null;
                      })}
                    </div>
                  </section>
                );
              })}

              <section className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-7">
                <h2 className="text-base font-semibold leading-[1.8] text-slate-900">下一步</h2>
                <p className="mt-2 text-sm leading-[1.8] text-slate-700">
                  {ctaText}
                </p>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="site-btn-transition inline-flex rounded-xl bg-teal-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
                  >
                    預約導入諮詢
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>

        <Footer locale="zh" />
      </main>
    </div>
  );
}

