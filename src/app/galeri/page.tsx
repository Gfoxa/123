import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { PublicPageHeader } from "@/components/ui/public-page-header";
import { getPublicGallery } from "@/server/cms/public-content";
import { pageMetadata, robotsForDemoContent } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { isDemo } = await getPublicGallery();
  return { ...pageMetadata("Galeri Kegiatan Outdoor", "Jelajahi dokumentasi outbound, petualangan, konservasi, edukasi, dan komunitas.", "/galeri"), robots: robotsForDemoContent(isDemo) };
}

export default async function GalleryPage() {
  const { items, isDemo } = await getPublicGallery();
  return (
    <main id="konten">
      <PublicPageHeader eyebrow="Galeri" title="Setiap kegiatan menyimpan cerita." description="Ruang dokumentasi untuk pengalaman di lapangan. Foto yang tampil adalah contoh, bukan dokumentasi kegiatan organisasi. Ganti dengan foto kegiatan yang telah mendapat izin." breadcrumbs={[{ label: "Galeri" }]} backgroundSrc="/images/demo-team-building.webp" />
      <section className="gallery-section section-pad"><div className="container"><GalleryGrid items={items} isDemo={isDemo} /></div></section>
    </main>
  );
}
