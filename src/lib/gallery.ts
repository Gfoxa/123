export const galleryCategories = ["Semua", "Outbound", "Adventure", "Konservasi", "Edukasi", "Komunitas"] as const;

export type GalleryCategory = (typeof galleryCategories)[number];
export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  caption: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "outbound-01", title: "Tantangan kelompok", category: "Outbound", image: "/images/demo-team-building.webp", alt: "Foto demo: kelompok mengikuti tantangan kolaborasi; bukan dokumentasi Ruang Rimba", caption: "Foto demo, bukan dokumentasi kegiatan Ruang Rimba." },
  { id: "team-01", title: "Belajar berkolaborasi", category: "Outbound", image: "/images/demo-team-building.webp", alt: "Foto demo: peserta bekerja sama di hutan; bukan dokumentasi Ruang Rimba", caption: "Foto demo, bukan dokumentasi kegiatan Ruang Rimba." },
  { id: "adventure-01", title: "Menyusuri jalur alam", category: "Adventure", image: "/images/demo-forest-trail.webp", alt: "Foto demo: pendaki menyusuri jalur hutan; bukan dokumentasi Ruang Rimba", caption: "Foto demo, bukan dokumentasi kegiatan Ruang Rimba." },
  { id: "camp-01", title: "Ruang untuk berkemah", category: "Adventure", image: "/images/demo-camp.webp", alt: "Foto demo: kelompok berkumpul di area kemah saat malam; bukan dokumentasi Ruang Rimba", caption: "Foto demo, bukan dokumentasi kegiatan Ruang Rimba." },
  { id: "river-01", title: "Mengenal aliran sungai", category: "Konservasi", image: "/images/demo-river.webp", alt: "Foto demo: air terjun kecil di tengah hutan; bukan dokumentasi Ruang Rimba", caption: "Foto demo, bukan dokumentasi kegiatan Ruang Rimba." },
  { id: "tree-01", title: "Merawat tunas", category: "Konservasi", image: "/images/demo-planting.webp", alt: "Foto demo: bibit tanaman yang sedang dirawat; bukan dokumentasi Ruang Rimba", caption: "Foto demo, bukan dokumentasi kegiatan Ruang Rimba." },
  { id: "learning-01", title: "Mengamati lingkungan", category: "Edukasi", image: "/images/demo-forest-trail.webp", alt: "Foto demo: kelompok menjelajahi jalur hutan; bukan dokumentasi Ruang Rimba", caption: "Foto demo, bukan dokumentasi kegiatan Ruang Rimba." },
  { id: "learning-02", title: "Belajar dari sekitar", category: "Edukasi", image: "/images/demo-team-building.webp", alt: "Foto demo: kegiatan kelompok di hutan; bukan dokumentasi Ruang Rimba", caption: "Foto demo, bukan dokumentasi kegiatan Ruang Rimba." },
  { id: "community-01", title: "Beraktivitas bersama", category: "Komunitas", image: "/images/demo-forest-trail.webp", alt: "Foto demo: pendaki berjalan bersama di hutan; bukan dokumentasi Ruang Rimba", caption: "Foto demo, bukan dokumentasi kegiatan Ruang Rimba." },
];
