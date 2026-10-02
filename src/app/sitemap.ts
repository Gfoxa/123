import type { MetadataRoute } from "next";
import { getPublicArticles, getPublicPrograms } from "@/server/cms/public-content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, "");
  const staticRoutes = ["", "/tentang-kami", "/program", "/konservasi", "/galeri", "/artikel", "/faq", "/kontak"];
  const [{ items: programs }, { items: articles }] = await Promise.all([getPublicPrograms(), getPublicArticles()]);
  return [
    ...staticRoutes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route ? 0.7 : 1 })),
    ...programs.map((program) => ({ url: `${siteUrl}/program/${program.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 })),
    ...articles.map((article) => ({ url: `${siteUrl}/artikel/${article.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
