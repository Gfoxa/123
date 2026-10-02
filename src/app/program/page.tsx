import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicPageHeader } from "@/components/ui/public-page-header";
import { ButtonLink } from "@/components/ui/button-link";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Program Outdoor dan Konservasi",
  description: "Jelajahi contoh program outbound, team building, adventure, edukasi alam, dan konservasi Ruang Rimba.",
  alternates: { canonical: "/program" },
};

export default function ProgramsPage() {
  return (
    <main id="konten">
      <PublicPageHeader eyebrow="Program" title="Pilih pengalaman yang ingin dibangun bersama." description="Program berikut adalah contoh awal. Rincian, lokasi, durasi, dan kebutuhan peserta perlu dikonfirmasi bersama organisasi." breadcrumbs={[{ label: "Program" }]} />
      <section className="program-listing section-pad"><div className="container"><p className="demo-note">Semua deskripsi dan spesifikasi pada halaman ini adalah konten demo, bukan penawaran final.</p><div className="listing-grid">{programs.map((program, index) => <article className="listing-card" key={program.slug}><Link href={`/program/${program.slug}`} className="listing-card__link"><span className="listing-card__image"><Image src={program.image} alt={program.imageAlt} fill sizes="(max-width: 680px) 90vw, (max-width: 1000px) 44vw, 31vw" /></span><span className="listing-card__body"><span className="listing-card__eyebrow">0{index + 1} / {program.category}</span><strong>{program.title}</strong><span className="listing-card__description">{program.excerpt}</span><span className="text-link">Lihat detail <span aria-hidden="true">↗</span></span></span></Link></article>)}</div><div className="listing-cta"><div><p className="eyebrow">Punya kebutuhan khusus?</p><h2>Rancang kegiatan bersama tim.</h2></div><ButtonLink href="/kontak" variant="solid">Diskusikan program <span aria-hidden="true">↗</span></ButtonLink></div></div></section>
    </main>
  );
}
