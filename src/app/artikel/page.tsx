import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicPageHeader } from "@/components/ui/public-page-header";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Artikel dan Jurnal Alam",
  description: "Baca contoh catatan tentang outdoor learning, konservasi, komunitas, dan tips beraktivitas di alam.",
  alternates: { canonical: "/artikel" },
};

export default function ArticlesPage() {
  return (
    <main id="konten">
      <PublicPageHeader eyebrow="Jurnal alam" title="Cerita dan pengetahuan untuk dibawa pulang." description="Artikel contoh untuk edukasi dan dokumentasi. Nama penulis, tanggal terbit, serta isi perlu ditinjau oleh organisasi sebelum tayang." breadcrumbs={[{ label: "Artikel" }]} />
      <section className="article-list-section section-pad"><div className="container"><p className="demo-note">Semua artikel di halaman ini adalah konten demo.</p><div className="article-list">{articles.map((article, index) => <article className="article-card" key={article.slug}><Link href={`/artikel/${article.slug}`} className="article-card__link"><span className="article-card__image"><Image src={article.coverImage} alt={article.coverAlt} fill sizes="(max-width: 700px) 90vw, 35vw" /></span><span className="article-card__meta"><span className="article-card__category">{article.category}</span><span className="article-card__number">Catatan 0{index + 1}</span></span><strong>{article.title}</strong><span className="article-card__excerpt">{article.excerpt}</span><span className="text-link">Baca artikel <span aria-hidden="true">↗</span></span></Link></article>)}</div></div></section>
    </main>
  );
}
