import type { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/landing";
import {
  BLOG_INDEX_GROUPS,
  getBlogPostsNotInIndexGroups,
  getBlogPostsBySlugsInOrder,
} from "@/app/blog/blogData";

export const metadata: Metadata = {
  title: "知識專欄｜Avenra",
  description: "提供診所預約、回診追蹤與營運管理的實用文章與最佳實務。",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "知識專欄｜Avenra",
    description: "提供診所預約、回診追蹤與營運管理的實用文章與最佳實務。",
    url: "/blog",
    type: "website",
    images: [{ url: "/logo/avenra-logo.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "知識專欄｜Avenra",
    description: "提供診所預約、回診追蹤與營運管理的實用文章與最佳實務。",
    images: ["/logo/avenra-logo.svg"],
  },
};

function BlogPostCard({
  slug,
  title,
  description,
  dateISO,
}: {
  slug: string;
  title: string;
  description: string;
  dateISO: string;
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="site-card-hover block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-200 sm:p-7"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold leading-snug text-slate-900 sm:text-xl">{title}</h2>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
        <p className="text-xs text-slate-500">{dateISO}</p>
      </div>
    </Link>
  );
}

export default function BlogIndexPage() {
  const ungroupedPosts = getBlogPostsNotInIndexGroups();

  return (
    <div className="min-h-screen bg-white">
      <Navbar locale="zh" />
      <main>
        <section className="border-b border-slate-200 bg-white px-4 pt-16 pb-10 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8 lg:pt-24 lg:pb-14">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              知識專欄
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
              聚焦預約、回診追蹤與營運流程，提供可落地的改善方法。
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-10">
              {BLOG_INDEX_GROUPS.map((group) => {
                const groupedPosts = getBlogPostsBySlugsInOrder(group.slugs);
                if (groupedPosts.length === 0) return null;
                return (
                  <section key={group.title}>
                    <h2 className="text-xl font-semibold text-slate-900">{group.title}</h2>
                    <div className="mt-4 space-y-4">
                      {groupedPosts.map((post) => (
                        <BlogPostCard
                          key={post.slug}
                          slug={post.slug}
                          title={post.title}
                          description={post.description}
                          dateISO={post.dateISO}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}

              {ungroupedPosts.length > 0 && (
                <section className="border-t border-slate-200 pt-8">
                  <h2 className="text-xl font-semibold text-slate-900">其他文章</h2>
                  <div className="mt-4 space-y-4">
                    {ungroupedPosts.map((post) => (
                      <BlogPostCard
                        key={post.slug}
                        slug={post.slug}
                        title={post.title}
                        description={post.description}
                        dateISO={post.dateISO}
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </section>

        <Footer locale="zh" />
      </main>
    </div>
  );
}

