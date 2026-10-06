import type { MetadataRoute } from "next";
import { getPublicArticles, getPublicConservationProjects, getPublicFAQs, getPublicGallery, getPublicPrograms, getPublicSettings } from "@/server/cms/public-content";
import { canonicalUrl, hasConfiguredOrganizationIdentity } from "@/lib/seo";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const [programs, articles, gallery, faqs, projects, settings] = await Promise.all([
    getPublicPrograms(), getPublicArticles(), getPublicGallery(), getPublicFAQs(),
    getPublicConservationProjects(), getPublicSettings(),
  ]);
  const identityReady = hasConfiguredOrganizationIdentity(settings.organizationName, settings.description);
  const contactReady = Boolean(settings.email || settings.whatsapp || settings.address || settings.operationalArea);
  const routes = [
    ...(identityReady && !programs.isDemo && !articles.isDemo && !gallery.isDemo ? [""] : []),
    ...(!programs.isDemo ? ["/program"] : []),
    ...(projects.length ? ["/konservasi"] : []),
    ...(!gallery.isDemo ? ["/galeri"] : []),
    ...(!articles.isDemo ? ["/artikel"] : []),
    ...(!faqs.isDemo ? ["/faq"] : []),
    ...(identityReady && contactReady ? ["/kontak"] : []),
  ];
  return [
    ...routes.map((route) => ({ url: canonicalUrl(siteUrl, route || "/"), changeFrequency: "monthly" as const, priority: route ? 0.7 : 1 })),
    ...(!programs.isDemo ? programs.items.map((program) => ({ url: canonicalUrl(siteUrl, `/program/${program.slug}`), changeFrequency: "monthly" as const, priority: 0.6 })) : []),
    ...(!articles.isDemo ? articles.items.map((article) => ({ url: canonicalUrl(siteUrl, `/artikel/${article.slug}`), changeFrequency: "monthly" as const, priority: 0.6 })) : []),
  ];
}
