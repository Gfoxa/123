# Ruang Rimba

Website profil dan pemasaran untuk organisasi petualangan alam dan konservasi. Nama, cerita, program, dan visual di situs ini adalah konten demo yang perlu diganti sebelum publikasi.

## Fase 1 dan Fase 2

- Homepage berbahasa Indonesia dengan desain responsif.
- Sistem warna, tipografi, tombol, kartu, header, dan footer yang dapat digunakan ulang.
- Metadata dasar, Open Graph, robots, dan sitemap.
- Konten placeholder yang tidak mengklaim dampak atau kredensial organisasi.
- Halaman Tentang Kami, Program, detail program, Konservasi, Galeri, Artikel, detail artikel, FAQ, dan Kontak.
- Filter kategori dan lightbox galeri yang dapat digunakan dengan keyboard.
- Sitemap mencantumkan semua halaman demo dan detail program/artikel yang statis.

## Teknologi

Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS 4, dan CSS variables.

## Menjalankan aplikasi

Gunakan Node.js 20.9 atau lebih baru.

```bash
npm install
cp .env.example .env.local
npm run dev -- --webpack
```

Buka http://localhost:3000. Perintah pemeriksaan:

```bash
npm run lint
npm run typecheck
npm run build
```

## Konfigurasi

`NEXT_PUBLIC_SITE_URL` digunakan untuk canonical URL dan sitemap. Nomor WhatsApp dan tautan sosial bersifat opsional dan dikosongkan sampai organisasi memberikan kontak resminya.

## Konten demo

`Ruang Rimba`, cerita organisasi, kategori program, spesifikasi program, judul artikel, penulis, dan visual placeholder bukan fakta tentang organisasi nyata. Ganti data pada `src/lib/content.ts`, `src/lib/programs.ts`, `src/lib/articles.ts`, `src/lib/gallery.ts`, dan aset dalam `public/images/` sebelum peluncuran. Tidak ada statistik, testimoni, sertifikasi, mitra, anggota tim, atau kontak yang dikarang.

## Tahap berikutnya

Database PostgreSQL/Prisma, CMS admin, autentikasi, penyimpanan formulir permintaan program, dan manajemen konten berada di luar Fase 1 dan 2.
