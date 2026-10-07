export const organization = {
  name: "Ruang Rimba",
  label: "Nama dan identitas demo",
  description:
    "[Ganti dengan deskripsi organisasi] Kami merancang pengalaman di alam yang mempertemukan petualangan, pembelajaran, dan kepedulian terhadap lingkungan.",
};

export const navigation = [
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Program", href: "/program" },
  { label: "Konservasi", href: "/konservasi" },
  { label: "Galeri", href: "/galeri" },
  { label: "Artikel", href: "/artikel" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/kontak" },
];

export const programs = [
  {
    number: "01",
    title: "Outbound",
    description: "Ruang bergerak, mencoba hal baru, dan membangun kebersamaan.",
    image: "/images/demo-team-building.webp",
    alt: "Foto demo: kelompok mengikuti tantangan kolaborasi di hutan; bukan dokumentasi Ruang Rimba",
    href: "/program/outbound-team-building",
    tone: "moss",
  },
  {
    number: "02",
    title: "Team building",
    description: "Belajar berkomunikasi dan saling percaya lewat pengalaman bersama.",
    image: "/images/demo-team-building.webp",
    alt: "Foto demo: peserta bekerja sama dalam tantangan luar ruang; bukan dokumentasi Ruang Rimba",
    href: "/program/outbound-team-building",
    tone: "clay",
  },
  {
    number: "03",
    title: "Jelajah alam",
    description: "Mengenal lanskap, membaca jejak, dan melangkah dengan bijak.",
    image: "/images/demo-forest-trail.webp",
    alt: "Foto demo: pendaki menyusuri jalur hutan; bukan dokumentasi Ruang Rimba",
    href: "/program/forest-exploration",
    tone: "fern",
  },
  {
    number: "04",
    title: "Edukasi lingkungan",
    description: "Belajar dari alam melalui pengamatan dan kegiatan langsung.",
    image: "/images/demo-forest-trail.webp",
    alt: "Foto demo: lanskap hutan untuk kegiatan belajar luar ruang; bukan dokumentasi Ruang Rimba",
    href: "/program/edukasi-lingkungan",
    tone: "sand",
  },
  {
    number: "05",
    title: "Aksi konservasi",
    description: "Berpartisipasi dalam kegiatan merawat alam bersama komunitas.",
    image: "/images/demo-river.webp",
    alt: "Foto demo: aliran sungai di tengah hutan; bukan dokumentasi Ruang Rimba",
    href: "/program/konservasi-sungai",
    tone: "stone",
  },
] as const;

export const principles = [
  { title: "Keselamatan lebih dulu", text: "Rencana kegiatan mempertimbangkan kesiapan peserta dan kondisi lapangan." },
  { title: "Belajar sambil mengalami", text: "Pengalaman langsung menjadi pintu untuk bertanya, mencoba, dan memahami." },
  { title: "Menghormati alam", text: "Setiap kegiatan dirancang dengan perhatian pada tempat dan lingkungan sekitar." },
  { title: "Tumbuh bersama", text: "Kolaborasi membuka ruang bagi kelompok dan komunitas untuk saling belajar." },
];

export const activities = [
  { title: "Belajar di bawah tajuk hutan", category: "Edukasi alam", image: "/images/demo-forest-trail.webp", alt: "Foto demo: kelompok menjelajahi jalur hutan; bukan dokumentasi Ruang Rimba" },
  { title: "Merawat aliran sungai", category: "Konservasi", image: "/images/demo-river.webp", alt: "Foto demo: aliran sungai dan hutan; bukan dokumentasi Ruang Rimba" },
  { title: "Bermalam dan mengenal alam", category: "Petualangan", image: "/images/demo-camp.webp", alt: "Foto demo: kelompok berkumpul di area kemah; bukan dokumentasi Ruang Rimba" },
] as const;

export const stories = [
  { category: "Catatan belajar", title: "Mengapa belajar di alam terasa berbeda?", image: "/images/demo-team-building.webp", alt: "Foto demo: kelompok bekerja sama di hutan; bukan dokumentasi Ruang Rimba" },
  { category: "Panduan ringan", title: "Langkah kecil bertualang dengan bijak", image: "/images/demo-forest-trail.webp", alt: "Foto demo: perjalanan di jalur hutan; bukan dokumentasi Ruang Rimba" },
  { category: "Cerita konservasi", title: "Mengenal alam lewat hal-hal di sekitar kita", image: "/images/demo-river.webp", alt: "Foto demo: sungai di kawasan hutan; bukan dokumentasi Ruang Rimba" },
] as const;
