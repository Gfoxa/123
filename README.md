# Ruang Rimba

Website editorial berbahasa Indonesia untuk organisasi petualangan alam, outdoor learning, dan konservasi. Nama, cerita, program, dan visual yang belum diisi admin ditandai sebagai demo atau placeholder.

## Fitur

- Homepage responsif, Tentang Kami, Program dan detail program, Konservasi, Galeri, Artikel dan detail artikel, FAQ, serta Kontak.
- Desain editorial dengan warna hangat, tipografi serif, navigasi mobile, galeri terfilter, dan lightbox yang dapat digunakan dengan keyboard.
- CMS admin untuk program, artikel, foto galeri, anggota tim, proyek konservasi, FAQ, pengaturan situs, dan permintaan kontak.
- Login admin Auth.js Credentials dengan password bcrypt, sesi aman, dan otorisasi di server.
- Konten dapat dibuat, diubah, diterbitkan, diarsipkan, atau dihapus permanen; perubahan dicatat di audit log.
- PostgreSQL melalui Prisma ORM 7 dan adapter `@prisma/adapter-pg`.
- Formulir kontak divalidasi di server, dilindungi honeypot, dan dibatasi pengirimannya per email.
- Tombol WhatsApp tampil dari konfigurasi organisasi dan otomatis tersembunyi saat nomor belum diisi.
- Konten demo statis tetap menjadi fallback sampai konten CMS diterbitkan.
- Metadata per halaman mencakup canonical, Open Graph, kartu X, serta JSON-LD organisasi, artikel, dan FAQ; sitemap hanya mencantumkan program dan artikel CMS yang terbit. Halaman admin tidak diindeks.
- Header respons keamanan mencakup perlindungan MIME, framing, referrer, dan permission; HSTS aktif untuk build produksi dengan origin HTTPS.

## Teknologi

Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS 4, PostgreSQL, Prisma ORM 7, Auth.js, Zod, dan bcryptjs. Gunakan Node.js 20.19 atau lebih baru.

## Menjalankan lokal

1. Pasang dependensi dan salin konfigurasi:

   ```bash
   npm install
   cp .env.example .env.local
   ```

2. Buat database PostgreSQL kosong bernama `outdoor_adventure` (atau gunakan nama lain), lalu isi `DATABASE_URL`, `AUTH_SECRET`, `ADMIN_EMAIL`, dan `ADMIN_PASSWORD` di `.env.local`. Kata sandi admin minimal 12 karakter. Buat secret acak, misalnya dengan `openssl rand -base64 32`.

3. Buat Prisma Client, terapkan migrasi, lalu buat akun admin:

   ```bash
   npm run db:generate
   npm run db:deploy
   npm run db:seed
   ```

4. Jalankan situs:

   ```bash
   npm run dev
   ```

Buka http://localhost:3000. CMS berada di `/admin`; gunakan kredensial `ADMIN_EMAIL` dan `ADMIN_PASSWORD` yang dipakai saat seed. Untuk membuat contoh konten berstatus draf, atur `SEED_DEMO_CONTENT=true` sebelum menjalankan seed. Jangan gunakan kredensial demo di produksi.

## Environment variables

| Variabel | Fungsi |
| --- | --- |
| `DATABASE_URL` | URL PostgreSQL, misalnya `postgresql://USER:PASSWORD@127.0.0.1:5432/outdoor_adventure?schema=public` |
| `AUTH_SECRET` | Kunci sesi Auth.js; harus acak dan rahasia |
| `AUTH_URL` | URL endpoint Auth.js; gunakan `http://localhost:3000/api/auth` lokal dan domain HTTPS saat deployment |
| `ADMIN_EMAIL` | Email bootstrap administrator |
| `ADMIN_PASSWORD` | Kata sandi bootstrap minimal 12 karakter; disimpan sebagai hash bcrypt |
| `SEED_DEMO_CONTENT` | Isi `true` hanya untuk menambahkan konten contoh berstatus draf |
| `NEXT_PUBLIC_SITE_URL` | URL canonical dan sitemap |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Nomor WhatsApp format angka internasional tanpa `+` |
| `NEXT_PUBLIC_ORGANIZATION_EMAIL` | Fallback email organisasi |
| `NEXT_PUBLIC_ORGANIZATION_ADDRESS` | Fallback alamat organisasi |
| `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_FACEBOOK_URL`, `NEXT_PUBLIC_YOUTUBE_URL` | Fallback tautan sosial |

`.env.local` diabaikan Git. Jangan simpan kredensial di source code.

## Database dan CMS

- `prisma/schema.prisma` adalah sumber model dan relasi PostgreSQL.
- Migrasi PostgreSQL aktif berada di `prisma/migrations-postgresql/`; riwayat SQLite lama dan file database lokal dipertahankan sebagai arsip, dan tidak dipakai oleh aplikasi.
- `npm run db:migrate -- --name nama_perubahan` membuat migrasi saat pengembangan. `npm run db:deploy` menerapkan migrasi tersimpan.
- `npm run db:generate` memperbarui Prisma Client; `npm run db:seed` membuat atau memperbarui administrator dari variabel lingkungan.
- Model CMS mencakup pengguna, kategori dan program, kategori dan artikel, kategori dan gambar galeri, tim, proyek konservasi, FAQ, pengaturan, permintaan kontak, dan audit log.
- Admin dapat mengelola konten dari `/admin`. Gambar CMS menggunakan path lokal di bawah `public/`; tambahkan file berizin lalu isi path seperti `/images/nama-file.jpg`.
- Permintaan pengunjung tersimpan di `ContactSubmission` dan dapat ditinjau pada `/admin/permintaan`. Statusnya: Baru, Sudah dihubungi, Dalam proses, Selesai, atau Diarsipkan.
- Form kontak memvalidasi masukan di server, memakai pemeriksaan Origin bawaan Server Action Next.js, honeypot, serta batas tiga permintaan per email per jam. Data kontak hanya tampil di area admin.
- Tidak ada pendaftaran admin publik.

## Pengujian dan build

```bash
npm run lint
npm run typecheck
npm test
npm run test:integration # membutuhkan PostgreSQL dan migrasi yang sudah diterapkan
npm run build
```

Jalankan server hasil build dengan `npm run start`. Untuk deployment, siapkan PostgreSQL persisten, atur environment server, jalankan `npm ci`, `npm run db:generate`, `npm run db:deploy`, lalu seed admin dengan kredensial server yang aman sebelum build dan start Next.js. Atur `NEXT_PUBLIC_SITE_URL` ke origin HTTPS produksi. Tinjau serta ganti konten demo sebelum publikasi.

## Batasan konten

Ruang Rimba, narasi organisasi, spesifikasi kegiatan, penulis demo, dan ilustrasi placeholder belum merupakan fakta organisasi nyata. Statistik dampak, mitra, sertifikasi, penghargaan, testimoni, maupun kontak tidak dibuat-buat. Halaman publik tidak menampilkan angka dampak tanpa data terverifikasi.
