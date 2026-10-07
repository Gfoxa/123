import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getPublicArticle, getPublicArticles } from "@/server/cms/public-content";
import { canonicalUrl, robotsForDemoContent } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";

export async function generateStaticParams() {
  const { items } = await getPublicArticles();
  return items.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { item: article, isDemo } = await getPublicArticle(slug);
  if (!article) return { title: "Artikel tidak ditemukan" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/artikel/${article.slug}` },
    robots: robotsForDemoContent(isDemo),
    openGraph: { type: "article", title: `${article.title} | Ruang Rimba`, description: article.excerpt, url: `/artikel/${article.slug}`, images: [{ url: article.coverImage, alt: article.coverAlt }] },
    twitter: { card: "summary_large_image", title: `${article.title} | Ruang Rimba`, description: article.excerpt, images: [article.coverImage] },
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { item: article, isDemo } = await getPublicArticle(slug);
  if (!article) notFound();

  const articleJsonLd = !isDemo && article.publishedAtIso ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: canonicalUrl(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000", article.coverImage),
    datePublished: article.publishedAtIso,
    articleSection: article.category,
    mainEntityOfPage: canonicalUrl(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000", `/artikel/${article.slug}`),
    ...(article.authorName ? { author: { "@type": "Person", name: article.authorName } } : {}),
  } : null;

  return (
    <main id="konten" className="article-detail">
      {articleJsonLd && <StructuredData data={articleJsonLd} />}
      <div className="container"><Breadcrumbs items={[{ label: "Artikel", href: "/artikel" }, { label: article.title }]} /><header className="article-detail__header"><p className="eyebrow">{article.category}{isDemo ? " · Artikel demo" : ""}</p><h1>{article.title}</h1><p>{article.excerpt}</p><div className="article-detail__byline"><span>{article.author}</span><span>{article.publishedAt}</span></div></header><figure className="article-detail__cover"><Image src={article.coverImage} alt={article.coverAlt} fill priority sizes="(max-width: 900px) 90vw, 1200px" />{isDemo && <figcaption>Foto demo, bukan dokumentasi organisasi.</figcaption>}</figure><div className="article-detail__body">{isDemo && <p className="article-detail__notice">Artikel contoh. Tinjau isi dan lengkapi sumber sebelum dipublikasikan.</p>}{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<p className="article-detail__back"><Link href="/artikel">← Kembali ke artikel</Link></p></div></div>
    </main>
  );
}
