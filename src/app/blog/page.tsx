import type { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/landing";
import { BLOG_POSTS } from "./blogData";

export const metadata: Metadata = {
  title: "診所經營專欄｜Avenra",
  description: "提供診所預約、回診追蹤與營運管理的實用文章與最佳實務。",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "診所經營專欄｜Avenra",
    description: "提供診所預約、回診追蹤與營運管理的實用文章與最佳實務。",
    url: "/blog",
    type: "website",
    images: [{ url: "/logo/avenra-logo.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "診所經營專欄｜Avenra",
    description: "提供診所預約、回診追蹤與營運管理的實用文章與最佳實務。",
    images: ["/logo/avenra-logo.svg"],
  },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar locale="zh" />
      <main>
        <section className="border-b border-slate-200 bg-white px-4 pt-16 pb-10 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8 lg:pt-24 lg:pb-14">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              診所經營專欄
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
              聚焦預約、回診追蹤與營運流程，提供可落地的改善方法。
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-4">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="site-card-hover block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-200 sm:p-7"
                >
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-600">{post.description}</p>
                    <p className="text-xs text-slate-500">{post.dateISO}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer locale="zh" />
      </main>
    </div>
  );
}

