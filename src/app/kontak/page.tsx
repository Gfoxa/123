import type { Metadata } from "next";
import { PublicPageHeader } from "@/components/ui/public-page-header";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Kontak dan Konsultasi Program",
  description: "Informasi kontak Ruang Rimba. Lengkapi alamat, email, WhatsApp, dan area layanan resmi sebelum situs dipublikasikan.",
  alternates: { canonical: "/kontak" },
};

export default function ContactPage() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const email = process.env.NEXT_PUBLIC_ORGANIZATION_EMAIL;
  const address = process.env.NEXT_PUBLIC_ORGANIZATION_ADDRESS;
  const socialLinks = [
    { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
    { label: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK_URL },
    { label: "YouTube", href: process.env.NEXT_PUBLIC_YOUTUBE_URL },
  ].filter((item): item is { label: string; href: string } => Boolean(item.href));

  return (
    <main id="konten">
      <PublicPageHeader eyebrow="Kontak" title="Mari bicarakan pengalaman yang ingin dibuat." description="Ceritakan kebutuhan kelompok atau minat untuk ikut kegiatan. Kontak pada halaman ini akan aktif setelah organisasi melengkapinya." breadcrumbs={[{ label: "Kontak" }]} />
      <section className="contact-page-section section-pad"><div className="container contact-page-grid"><div><SectionHeading eyebrow="Hubungi organisasi" title="Kami siap mendengar rencanamu." description="Nama, kontak, dan alamat berikut perlu dilengkapi dengan informasi resmi." /><div className="contact-details">{address ? <div><span>Alamat</span><p>{address}</p></div> : <div><span>Alamat dan area layanan</span><p>[Tambahkan alamat serta area layanan resmi]</p></div>}{email ? <div><span>Email</span><a href={`mailto:${email}`}>{email}</a></div> : <div><span>Email</span><p>[Tambahkan email resmi]</p></div>}{whatsapp ? <div><span>WhatsApp</span><a href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Halo, saya ingin berdiskusi tentang program outdoor.")}`} target="_blank" rel="noreferrer">Mulai percakapan ↗</a></div> : <div><span>WhatsApp</span><p>[Tambahkan nomor WhatsApp resmi]</p></div>}{socialLinks.length ? <div><span>Media sosial</span><p>{socialLinks.map((item, index) => <span key={item.label}>{index > 0 ? " · " : ""}<a href={item.href} target="_blank" rel="noreferrer">{item.label}</a></span>)}</p></div> : <div><span>Media sosial</span><p>[Tambahkan tautan akun resmi]</p></div>}</div></div><aside className="contact-placeholder-card"><span className="contact-placeholder-card__mark" aria-hidden="true">R</span><p className="eyebrow">Informasi organisasi</p><h2>Kontak resmi belum diatur.</h2><p>Situs menggunakan konfigurasi contoh. Lengkapi variabel kontak pada berkas lingkungan lokal sebelum mengundang pengunjung untuk menghubungi organisasi.</p><a href="/faq" className="text-link">Baca pertanyaan umum <span aria-hidden="true">↗</span></a></aside></div></section>
    </main>
  );
}
