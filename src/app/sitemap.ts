import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/app/blog/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://avenra.health";
  const now = new Date();
  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/product`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...blogEntries,
  ];
}

