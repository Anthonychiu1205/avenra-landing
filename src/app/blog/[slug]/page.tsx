import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar, Footer } from "@/components/landing";
import { getBlogPost } from "../blogData";

type Props = { params: Promise<{ slug: string }> };

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
                  <p
                    key={`lead-${i}`}
                    className={i === 0 ? "text-lg leading-[1.8] text-slate-600 whitespace-pre-line" : "text-base leading-[1.8] text-slate-700 whitespace-pre-line"}
                  >
                    {b.type === "p" ? b.text : ""}
                  </p>
                ))}
            </div>

            <div className="mt-10 space-y-10">
              {preSectionBlocks.map((b, i) => {
                if (b.type === "hr") {
                  return <hr key={`pre-hr-${i}`} className="border-slate-200" />;
                }
                if (b.type === "p") {
                  return (
                    <p key={`pre-p-${i}`} className="text-base leading-[1.8] text-slate-700 whitespace-pre-line">
                      {b.text}
                    </p>
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
                          return (
                            <p
                              key={`p-${startIdx}-${i}`}
                              className="text-base leading-[1.8] text-slate-700 whitespace-pre-line"
                            >
                              {b.text}
                            </p>
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

