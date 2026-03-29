import type { Metadata } from "next";

type BlogArticleMetaInput = {
  title: string;
  description: string;
  slug: string;
};

export function buildBlogArticleMetadata({ title, description, slug }: BlogArticleMetaInput): Metadata {
  const url = `/blog/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: "/logo/avenra-logo.svg" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo/avenra-logo.svg"],
    },
  };
}
