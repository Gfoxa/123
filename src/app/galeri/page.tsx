import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { PublicPageHeader } from "@/components/ui/public-page-header";
import { getPublicGallery } from "@/server/cms/public-content";

export const metadata: Metadata = {
  title: "Galeri Kegiatan Outdoor",
  description: "Jelajahi kategori ilustrasi demo kegiatan outbound, petualangan, konservasi, edukasi, dan komunitas.",
  alternates: { canonical: "/galeri" },
};

export default async function GalleryPage() {
  const { items, isDemo } = await getPublicGallery();
  return (
    <main id="konten">
      <PublicPageHeader eyebrow="Galeri" title="Setiap kegiatan menyimpan cerita." description="Ruang dokumentasi untuk pengalaman di lapangan. Seluruh visual yang tampil sekarang adalah ilustrasi demo dan akan diganti dengan foto berizin." breadcrumbs={[{ label: "Galeri" }]} />
      <section className="gallery-section section-pad"><div className="container"><GalleryGrid items={items} isDemo={isDemo} /></div></section>
    </main>
  );
}
