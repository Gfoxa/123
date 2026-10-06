export type ArticleSection = { heading: string; paragraphs: string[] };
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  coverAlt: string;
  author: string;
  publishedAt: string;
  publishedAtIso?: string;
  authorName?: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "mengapa-outdoor-learning-penting-untuk-team-building",
    title: "Mengapa Outdoor Learning Penting untuk Team Building?",
    excerpt: "Alam dapat menjadi ruang untuk mencoba, mengamati cara kelompok bekerja, lalu belajar dari pengalaman bersama.",
    category: "Edukasi",
    coverImage: "/images/story-learning.svg",
    coverAlt: "Ilustrasi demo kelompok belajar di alam",
    author: "Tim editorial demo",
    publishedAt: "Konten contoh",
    sections: [
      { heading: "Belajar dari pengalaman langsung", paragraphs: ["Aktivitas di luar ruang memberi kelompok situasi baru untuk dihadapi bersama. Dalam proses itu, peserta dapat melihat bagaimana mereka berbagi peran, menyampaikan gagasan, dan mengambil keputusan.", "Nilai belajar bukan muncul otomatis dari permainan. Fasilitasi dan percakapan setelah kegiatan membantu peserta menghubungkan pengalaman dengan keseharian mereka."] },
      { heading: "Rancangan tetap perlu tujuan", paragraphs: ["Sebelum memilih aktivitas, penyelenggara perlu memahami tujuan kelompok, kondisi peserta, dan karakter lokasi. Rancangan yang sesuai membuat pengalaman lebih bermakna dan tetap memperhatikan keselamatan."] },
      { heading: "Akhiri dengan refleksi", paragraphs: ["Pertanyaan sederhana seperti apa yang membantu kelompok bergerak bersama dapat menjadi awal diskusi. Jawaban peserta sebaiknya dihargai tanpa memaksakan satu kesimpulan."] },
    ],
  },
  {
    slug: "5-prinsip-bertualang-tanpa-merusak-alam",
    title: "5 Prinsip Bertualang Tanpa Merusak Alam",
    excerpt: "Persiapan dan perhatian pada tempat membantu kita menikmati perjalanan sambil mengurangi jejak kegiatan.",
    category: "Tips Outdoor",
    coverImage: "/images/story-outdoor.svg",
    coverAlt: "Ilustrasi demo jalur perjalanan alam",
    author: "Tim editorial demo",
    publishedAt: "Konten contoh",
    sections: [
      { heading: "Kenali aturan lokasi", paragraphs: ["Setiap kawasan dapat memiliki aturan, kondisi, dan kebutuhan yang berbeda. Cari informasi dari pengelola sebelum berangkat dan ikuti arahan setempat."] },
      { heading: "Rencanakan kebutuhan dengan cermat", paragraphs: ["Bawa perlengkapan sesuai kegiatan, siapkan cara membawa kembali sampah, dan hindari mengambil tumbuhan atau benda dari alam."] },
      { heading: "Bergerak sesuai kondisi", paragraphs: ["Sesuaikan rencana dengan cuaca, kemampuan kelompok, dan kondisi jalur. Bersedia mengubah atau menghentikan kegiatan adalah bagian dari perjalanan yang bertanggung jawab."] },
      { heading: "Jaga ruang bersama", paragraphs: ["Perhatikan kenyamanan pengunjung lain dan masyarakat setempat. Suara, jalur, serta interaksi dengan satwa perlu dijaga dengan penuh hormat."] },
      { heading: "Belajar terus dari tempat yang dikunjungi", paragraphs: ["Panduan umum tidak menggantikan arahan lokal. Tanyakan bagaimana kegiatan dapat memberi dampak yang baik dan hindari membuat klaim tanpa data."] },
    ],
  },
  {
    slug: "belajar-konservasi-dari-sungai",
    title: "Belajar Konservasi dari Sungai",
    excerpt: "Sungai menghubungkan lanskap, kehidupan sehari-hari, dan pengetahuan warga di sekitarnya.",
    category: "Konservasi",
    coverImage: "/images/story-nature.svg",
    coverAlt: "Ilustrasi demo sungai dan lingkungan sekitarnya",
    author: "Tim editorial demo",
    publishedAt: "Konten contoh",
    sections: [
      { heading: "Sungai berada dalam konteks yang luas", paragraphs: ["Aliran air dipengaruhi oleh kondisi di sepanjang daerah alirannya. Mengamati sungai dapat menjadi pintu untuk bertanya tentang vegetasi, penggunaan lahan, dan hubungan manusia dengan air."] },
      { heading: "Mulai dengan mendengar", paragraphs: ["Pengetahuan masyarakat sekitar penting dalam memahami perubahan dan kebutuhan suatu tempat. Kegiatan belajar sebaiknya dibangun bersama, bukan sekadar datang untuk mengambil gambar atau membuat klaim dampak."] },
      { heading: "Utamakan keselamatan", paragraphs: ["Kondisi sungai dapat berubah cepat. Pengamatan dilakukan dari titik aman dan mengikuti arahan pengelola maupun pendamping yang memahami lokasi."] },
    ],
  },
  {
    slug: "melangkah-dengan-ritme-alam",
    title: "Melangkah dengan Ritme Alam",
    excerpt: "Perjalanan luar ruang terasa lebih utuh saat rencana memberi ruang untuk mengamati, beristirahat, dan menyesuaikan diri.",
    category: "Petualangan",
    coverImage: "/images/program-adventure.svg",
    coverAlt: "Ilustrasi demo jalur perjalanan di perbukitan",
    author: "Tim editorial demo",
    publishedAt: "Konten contoh",
    sections: [
      { heading: "Rencana memberi arah, bukan memaksa", paragraphs: ["Persiapan membantu kelompok memahami rute dan kebutuhan. Namun cuaca, kondisi jalur, dan kesiapan peserta tetap perlu menjadi pertimbangan sepanjang perjalanan."] },
      { heading: "Sisakan ruang untuk mengamati", paragraphs: ["Berjalan dengan ritme kelompok memberi kesempatan untuk melihat hal-hal kecil di sekitar. Berhenti sejenak juga dapat menjadi bagian dari pengalaman, bukan gangguan terhadap rencana."] },
      { heading: "Pulang tanpa meninggalkan jejak", paragraphs: ["Ikuti aturan lokasi, hormati pengguna jalur lain, dan bawa kembali barang yang dibawa masuk. Arahan pengelola setempat tetap menjadi acuan utama."] },
    ],
  },
  {
    slug: "berkolaborasi-dengan-komunitas-setempat",
    title: "Berkolaborasi dengan Komunitas Setempat",
    excerpt: "Kegiatan di alam menjadi lebih bermakna ketika dirancang dengan mendengar kebutuhan dan pengetahuan orang-orang yang hidup di sekitarnya.",
    category: "Komunitas",
    coverImage: "/images/program-team.svg",
    coverAlt: "Ilustrasi demo kelompok yang bekerja sama",
    author: "Tim editorial demo",
    publishedAt: "Konten contoh",
    sections: [
      { heading: "Mulai dari mendengar", paragraphs: ["Sebelum merancang kegiatan, pahami apa yang dianggap penting oleh komunitas setempat. Percakapan awal dapat membantu menghindari asumsi tentang kebutuhan maupun dampak."] },
      { heading: "Sepakati peran dan harapan", paragraphs: ["Tujuan, tanggung jawab, dokumentasi, dan tindak lanjut sebaiknya dibicarakan secara terbuka sebelum kegiatan dilaksanakan."] },
      { heading: "Jaga hubungan setelah kegiatan", paragraphs: ["Kolaborasi tidak berhenti saat peserta pulang. Komunikasi dan evaluasi bersama membantu semua pihak memahami apa yang berjalan baik dan apa yang perlu diperbaiki."] },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
