import type { Metadata } from "next";
import { PublicPageHeader } from "@/components/ui/public-page-header";
import { getPublicFAQs } from "@/server/cms/public-content";
import { pageMetadata, robotsForDemoContent } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";

export async function generateMetadata(): Promise<Metadata> {
  const { isDemo } = await getPublicFAQs();
  return { ...pageMetadata("Pertanyaan Umum", "Jawaban atas pertanyaan seputar program outdoor, persiapan, konservasi, dan pemesanan.", "/faq"), robots: robotsForDemoContent(isDemo) };
}

export default async function FAQPage() {
  const { items, isDemo } = await getPublicFAQs();
  const categories = [...new Set(items.map((item) => item.category))];
  return (
    <main id="konten">
      {!isDemo && items.length > 0 && <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }} />}
      <PublicPageHeader eyebrow="Pertanyaan umum" title="Sebelum merencanakan kegiatan." description={isDemo ? "Informasi operasional organisasi belum tersedia. Jawaban berikut adalah contoh yang perlu dikonfirmasi." : "Jawaban atas pertanyaan seputar program dan kegiatan organisasi."} breadcrumbs={[{ label: "FAQ" }]} />
      <section className="faq-page-section section-pad"><div className="container faq-page-grid">{categories.map((category) => <section className="faq-category" key={category}><h2>{category}</h2><div className="faq-list">{items.filter((item) => item.category === category).map((item) => <details key={`${category}-${item.question}`}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>)}</div></section>
    </main>
  );
}
