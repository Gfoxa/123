export type Program = {
  slug: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  description: string[];
  duration: string;
  participants: string;
  location: string;
  difficulty: string;
  highlights: string[];
  activities: string[];
  schedule: string[];
  included: string[];
  excluded: string[];
  safety: string[];
  gallery: { src: string; alt: string }[];
};

const demoNote = "Rincian ini adalah contoh konten dan perlu disesuaikan dengan kapasitas, lokasi, serta prosedur organisasi.";

export const programs: Program[] = [
  {
    slug: "outbound-team-building",
    title: "Outbound & Team Building",
    category: "Team Building",
    image: "/images/demo-team-building.webp",
    imageAlt: "Foto demo: kelompok bekerja sama dalam tantangan tali di hutan; bukan dokumentasi Ruang Rimba",
    excerpt: "Ruang bagi kelompok untuk berkomunikasi, berkolaborasi, dan belajar melalui tantangan bersama.",
    description: ["Program ini menggunakan aktivitas luar ruang sebagai pemantik percakapan dan kerja sama.", "Tantangan, alur, dan refleksi dapat dirancang sesuai tujuan kelompok setelah kebutuhan peserta dibahas bersama."],
    duration: "Contoh: 1 hari",
    participants: "Ditentukan bersama berdasarkan rancangan kegiatan",
    location: "Lokasi kegiatan belum ditentukan",
    difficulty: "Dapat disesuaikan",
    highlights: ["Komunikasi dalam kelompok", "Kolaborasi dan kepercayaan", "Refleksi setelah aktivitas"],
    activities: ["Ice breaking", "Tantangan kelompok", "Diskusi dan refleksi"],
    schedule: ["Orientasi dan pengenalan tujuan", "Aktivitas kolaborasi", "Istirahat dan makan", "Refleksi dan penutupan"],
    included: ["Fasilitasi kegiatan sesuai kesepakatan", "Peralatan aktivitas yang disepakati"],
    excluded: ["Transportasi menuju lokasi", "Konsumsi dan akomodasi, kecuali disepakati", "Kebutuhan pribadi peserta"],
    safety: ["Kondisi peserta dan aksesibilitas perlu diinformasikan sebelum kegiatan.", "Aktivitas dan perlengkapan harus ditinjau kembali sesuai lokasi serta cuaca.", demoNote],
    gallery: [{ src: "/images/demo-team-building.webp", alt: "Foto demo: peserta membantu rekan melewati tantangan tali; bukan dokumentasi Ruang Rimba" }, { src: "/images/demo-camp.webp", alt: "Foto demo: kelompok berkegiatan di ruang terbuka; bukan dokumentasi Ruang Rimba" }],
  },
  {
    slug: "adventure-camp",
    title: "Adventure Camp",
    category: "Adventure",
    image: "/images/demo-camp.webp",
    imageAlt: "Foto demo: kelompok berkumpul di area kemah saat malam; bukan dokumentasi Ruang Rimba",
    excerpt: "Pengalaman berkemah untuk mengenal ritme alam, persiapan lapangan, dan kebersamaan.",
    description: ["Adventure Camp mengajak peserta mengenal kegiatan luar ruang dengan ritme yang lebih pelan dan penuh perhatian.", "Rencana camp perlu disesuaikan dengan izin, kondisi cuaca, kemampuan peserta, dan fasilitas lokasi."],
    duration: "Contoh: 2 hari 1 malam",
    participants: "Ditentukan bersama berdasarkan kapasitas area",
    location: "Area camp belum ditentukan",
    difficulty: "Dapat disesuaikan",
    highlights: ["Pengenalan perlengkapan dasar", "Pengalaman tinggal di alam", "Belajar tanggung jawab bersama"],
    activities: ["Pengenalan area", "Pendirian tenda", "Jelajah sekitar", "Refleksi kelompok"],
    schedule: ["Kedatangan dan orientasi", "Persiapan area camp", "Aktivitas luar ruang", "Penutupan dan pemeriksaan area"],
    included: ["Fasilitasi sesuai rancangan kegiatan", "Daftar perlengkapan yang disepakati"],
    excluded: ["Perlengkapan pribadi", "Transportasi", "Konsumsi dan tiket lokasi, kecuali disepakati"],
    safety: ["Lokasi dan rencana bermalam perlu disetujui sebelum pemesanan.", "Periksa cuaca dan akses evakuasi sebelum kegiatan.", demoNote],
    gallery: [{ src: "/images/demo-camp.webp", alt: "Foto demo: kelompok berkumpul di area kemah saat malam; bukan dokumentasi Ruang Rimba" }, { src: "/images/demo-forest-trail.webp", alt: "Foto demo: pendaki menyusuri jalur hutan; bukan dokumentasi Ruang Rimba" }],
  },
  {
    slug: "forest-exploration",
    title: "Forest Exploration",
    category: "Adventure",
    image: "/images/demo-forest-trail.webp",
    imageAlt: "Foto demo: pendaki menyusuri jalur hutan di perbukitan; bukan dokumentasi Ruang Rimba",
    excerpt: "Menjelajahi lanskap sambil mengamati hubungan antara jalur, tumbuhan, dan kehidupan sekitar.",
    description: ["Jelajah hutan merupakan kegiatan pengamatan dan perjalanan kelompok di alam.", "Rute, jarak, pendamping, dan perlengkapan ditentukan setelah lokasi serta kesiapan peserta diketahui."],
    duration: "Contoh: setengah hari",
    participants: "Ditentukan berdasarkan karakter jalur",
    location: "Rute belum ditentukan",
    difficulty: "Perlu asesmen rute",
    highlights: ["Pengamatan lingkungan", "Etika beraktivitas di alam", "Perjalanan dengan ritme kelompok"],
    activities: ["Orientasi rute", "Jelajah dan pengamatan", "Istirahat terencana", "Refleksi"],
    schedule: ["Pemeriksaan perlengkapan", "Pengenalan rute dan etika", "Jelajah terpandu", "Pendinginan dan refleksi"],
    included: ["Fasilitasi dan pengarahan sebelum berangkat", "Informasi perlengkapan setelah rute ditentukan"],
    excluded: ["Transportasi", "Tiket atau izin masuk kawasan", "Perlengkapan pribadi"],
    safety: ["Kondisi rute harus diperiksa oleh tim lapangan.", "Kegiatan dapat berubah atau dihentikan jika kondisi tidak mendukung.", demoNote],
    gallery: [{ src: "/images/demo-forest-trail.webp", alt: "Foto demo: pendaki menjelajahi hutan berkabut; bukan dokumentasi Ruang Rimba" }, { src: "/images/demo-forest-trail.webp", alt: "Foto demo: kelompok berjalan di hutan; bukan dokumentasi Ruang Rimba" }],
  },
  {
    slug: "edukasi-lingkungan",
    title: "Edukasi Lingkungan",
    category: "Edukasi Alam",
    image: "/images/demo-team-building.webp",
    imageAlt: "Foto demo: kelompok berkolaborasi dalam sesi luar ruang; bukan dokumentasi Ruang Rimba",
    excerpt: "Belajar melalui pengamatan, percakapan, dan aktivitas yang dekat dengan keseharian peserta.",
    description: ["Kegiatan edukasi menghubungkan topik lingkungan dengan pengalaman langsung di sekitar peserta.", "Materi dan metode dapat disesuaikan dengan usia, tujuan belajar, serta konteks lokasi."],
    duration: "Contoh: 2–4 jam",
    participants: "Ditentukan bersama berdasarkan metode belajar",
    location: "Dapat dirancang di ruang luar atau lokasi yang disepakati",
    difficulty: "Ramah pemula",
    highlights: ["Belajar melalui pengamatan", "Percakapan berbasis pengalaman", "Aktivitas yang sesuai kelompok"],
    activities: ["Jelajah pengamatan", "Permainan belajar", "Diskusi kelompok", "Rangkuman pembelajaran"],
    schedule: ["Pembukaan dan pertanyaan pemantik", "Pengamatan atau eksplorasi", "Aktivitas belajar", "Rangkuman bersama"],
    included: ["Rancangan sesi sesuai kesepakatan", "Bahan belajar yang disetujui"],
    excluded: ["Transportasi", "Konsumsi", "Kebutuhan khusus peserta, kecuali disepakati"],
    safety: ["Informasikan kebutuhan aksesibilitas dan pendampingan peserta.", "Aktivitas menyesuaikan cuaca dan karakter lokasi.", demoNote],
    gallery: [{ src: "/images/demo-team-building.webp", alt: "Foto demo: kelompok mengikuti tantangan kolaborasi di hutan; bukan dokumentasi Ruang Rimba" }, { src: "/images/demo-team-building.webp", alt: "Foto demo: peserta mengamati lingkungan hutan; bukan dokumentasi Ruang Rimba" }],
  },
  {
    slug: "tanam-pohon",
    title: "Kegiatan Tanam Pohon",
    category: "Konservasi",
    image: "/images/demo-planting.webp",
    imageAlt: "Foto demo: bibit tanaman yang sedang dirawat; bukan dokumentasi Ruang Rimba",
    excerpt: "Kegiatan belajar dan berpartisipasi dalam penanaman yang dirancang bersama pengelola setempat.",
    description: ["Kegiatan penanaman perlu dimulai dengan memahami lokasi, jenis tanaman, tujuan, dan rencana perawatan.", "Jenis bibit maupun target dampak tidak ditentukan dalam contoh ini. Semua rincian harus dikonfirmasi bersama mitra dan pengelola lokasi."],
    duration: "Contoh: setengah hari",
    participants: "Ditentukan berdasarkan kapasitas lokasi",
    location: "Lokasi belum ditentukan",
    difficulty: "Dapat disesuaikan",
    highlights: ["Pengenalan konteks lokasi", "Praktik penanaman dengan pendampingan", "Diskusi tentang perawatan lanjutan"],
    activities: ["Orientasi lokasi", "Pengenalan tanaman dan cara kerja", "Kegiatan lapangan", "Pembersihan area dan refleksi"],
    schedule: ["Pengantar konteks konservasi", "Persiapan alat dan area", "Aktivitas lapangan", "Pemeriksaan dan penutupan"],
    included: ["Fasilitasi sesuai rancangan", "Peralatan yang telah disepakati"],
    excluded: ["Bibit dan biaya lokasi sebelum disepakati", "Transportasi dan konsumsi", "Perawatan setelah kegiatan kecuali direncanakan"],
    safety: ["Rencana kegiatan perlu dikonfirmasi dengan pengelola lokasi.", "Pilih jenis tanaman berdasarkan panduan pihak yang memahami kondisi setempat.", demoNote],
    gallery: [{ src: "/images/demo-planting.webp", alt: "Foto demo: bibit tanaman yang sedang dirawat; bukan dokumentasi Ruang Rimba" }, { src: "/images/demo-forest-trail.webp", alt: "Foto demo: kelompok berjalan di hutan; bukan dokumentasi Ruang Rimba" }],
  },
  {
    slug: "konservasi-sungai",
    title: "Belajar dan Menjaga Sungai",
    category: "Konservasi",
    image: "/images/demo-river.webp",
    imageAlt: "Foto demo: air terjun kecil di tengah hutan; bukan dokumentasi Ruang Rimba",
    excerpt: "Mengenal sungai melalui pengamatan, diskusi, dan aksi yang dirancang bersama komunitas setempat.",
    description: ["Program ini membuka ruang untuk mengenal sungai sebagai bagian dari lingkungan dan kehidupan masyarakat.", "Bentuk kegiatan, titik lokasi, dan koordinasi perlu disepakati dengan komunitas serta pengelola setempat."],
    duration: "Contoh: setengah hari",
    participants: "Ditentukan berdasarkan kondisi titik kegiatan",
    location: "Lokasi sungai belum ditentukan",
    difficulty: "Perlu asesmen lokasi",
    highlights: ["Pengamatan lingkungan sungai", "Belajar dari konteks lokal", "Aksi lapangan sesuai kebutuhan lokasi"],
    activities: ["Orientasi dan pengarahan", "Pengamatan lingkungan", "Aksi yang telah disepakati", "Refleksi dan penutupan"],
    schedule: ["Pengenalan konteks dan aturan lokasi", "Pengamatan terpandu", "Aktivitas lapangan", "Rangkuman dan penutupan"],
    included: ["Fasilitasi sesuai rancangan kegiatan", "Perlengkapan yang disepakati"],
    excluded: ["Transportasi dan konsumsi", "Peralatan pribadi", "Biaya izin lokasi sebelum disepakati"],
    safety: ["Jangan memasuki aliran sungai tanpa asesmen dan pendamping yang sesuai.", "Kondisi cuaca, arus, dan akses keluar harus diperiksa sebelum kegiatan.", demoNote],
    gallery: [{ src: "/images/demo-river.webp", alt: "Foto demo: air terjun kecil di tengah hutan; bukan dokumentasi Ruang Rimba" }, { src: "/images/demo-river.webp", alt: "Foto demo: air terjun kecil di tengah hutan; bukan dokumentasi Ruang Rimba" }],
  },
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}
