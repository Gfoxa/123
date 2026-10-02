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
    image: "/images/program-outbound.svg",
    alt: "Ilustrasi placeholder aktivitas outbound di alam",
    href: "/program/outbound-team-building",
    tone: "moss",
  },
  {
    number: "02",
    title: "Team building",
    description: "Belajar berkomunikasi dan saling percaya lewat pengalaman bersama.",
    image: "/images/program-team.svg",
    alt: "Ilustrasi placeholder kegiatan kelompok di alam",
    href: "/program/outbound-team-building",
    tone: "clay",
  },
  {
    number: "03",
    title: "Jelajah alam",
    description: "Mengenal lanskap, membaca jejak, dan melangkah dengan bijak.",
    image: "/images/program-adventure.svg",
    alt: "Ilustrasi placeholder penjelajahan hutan",
    href: "/program/forest-exploration",
    tone: "fern",
  },
  {
    number: "04",
    title: "Edukasi lingkungan",
    description: "Belajar dari alam melalui pengamatan dan kegiatan langsung.",
    image: "/images/program-learning.svg",
    alt: "Ilustrasi placeholder pembelajaran lingkungan di luar ruang",
    href: "/program/edukasi-lingkungan",
    tone: "sand",
  },
  {
    number: "05",
    title: "Aksi konservasi",
    description: "Berpartisipasi dalam kegiatan merawat alam bersama komunitas.",
    image: "/images/program-conservation.svg",
    alt: "Ilustrasi placeholder kegiatan konservasi alam",
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
  { title: "Belajar di bawah tajuk hutan", category: "Edukasi alam", image: "/images/activity-forest.svg", alt: "Ilustrasi placeholder belajar di hutan" },
  { title: "Merawat aliran sungai", category: "Konservasi", image: "/images/activity-river.svg", alt: "Ilustrasi placeholder kegiatan sungai" },
  { title: "Bermalam dan mengenal alam", category: "Petualangan", image: "/images/activity-camp.svg", alt: "Ilustrasi placeholder kegiatan kemah" },
] as const;

export const stories = [
  { category: "Catatan belajar", title: "Mengapa belajar di alam terasa berbeda?", image: "/images/story-learning.svg", alt: "Ilustrasi placeholder artikel belajar di alam" },
  { category: "Panduan ringan", title: "Langkah kecil bertualang dengan bijak", image: "/images/story-outdoor.svg", alt: "Ilustrasi placeholder artikel etika beraktivitas di alam" },
  { category: "Cerita konservasi", title: "Mengenal alam lewat hal-hal di sekitar kita", image: "/images/story-nature.svg", alt: "Ilustrasi placeholder artikel konservasi" },
] as const;
