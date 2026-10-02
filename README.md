# Ruang Rimba

Website profil dan pemasaran berbahasa Indonesia untuk organisasi petualangan alam, outdoor learning, dan konservasi. Nama, cerita, program, dan visual yang belum diisi admin ditandai sebagai demo atau placeholder.

## Fitur

- Homepage responsif, Tentang Kami, Program dan detail program, Konservasi, Galeri, Artikel dan detail artikel, FAQ, serta Kontak.
- Desain earthy dengan sistem warna CSS, navigasi mobile, galeri terfilter, dan lightbox yang dapat digunakan dengan keyboard.
- CMS admin untuk program, artikel, foto galeri, anggota tim, proyek konservasi, dan pengaturan situs.
- PostgreSQL melalui Prisma ORM 7; konten mempunyai status draft, terbit, dan arsip.
- Login admin Auth.js Credentials dengan password bcrypt dan pemeriksaan peran di server.
- Draft tidak ditampilkan ke halaman publik atau sitemap. Konten demo statis tetap menjadi fallback sampai tersedia konten CMS yang terbit.
- Validasi input Zod, UUID, indeks slug/status/tanggal, dan audit log perubahan admin.

## Teknologi

Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS 4, PostgreSQL, Prisma ORM 7, Auth.js, Zod, dan bcryptjs.

Gunakan Node.js 20.9 atau lebih baru. Prisma 7 memerlukan Node.js 20.19+.

## Menjalankan lokal

1. Pasang dependensi dan salin konfigurasi:

   ```bash
   npm install
   cp .env.example .env.local
   ```

2. Atur `POSTGRES_PASSWORD` dan samakan dengan kata sandi di `DATABASE_URL`. Isi `ADMIN_EMAIL`, `ADMIN_PASSWORD` (minimal 12 karakter), dan buat `AUTH_SECRET` acak, misalnya dengan `openssl rand -base64 32`.

3. Jalankan PostgreSQL lokal dengan Docker Compose:

   ```bash
   docker compose --env-file .env.local up -d postgres
   ```

   Jika PostgreSQL sudah disediakan oleh lingkunganmu, cukup atur `DATABASE_URL` dan lewati langkah ini.

4. Buat client, terapkan migrasi, lalu buat akun admin:

   ```bash
   npm run db:generate
   npm run db:deploy
   npm run db:seed
   ```

5. Jalankan situs:

   ```bash
   npm run dev
   ```

Buka http://localhost:3000. CMS berada di `/admin`; gunakan kredensial `ADMIN_EMAIL` dan `ADMIN_PASSWORD` yang dipakai saat seed.

Untuk konten contoh tambahan yang semuanya berstatus draft, atur `SEED_DEMO_CONTENT=true` sebelum menjalankan `npm run db:seed`. Akun admin tetap dibuat dari variabel lingkungan. Jangan gunakan kredensial demo di produksi.

## Environment variables

| Variabel | Fungsi |
| --- | --- |
| `DATABASE_URL` | Koneksi PostgreSQL Prisma |
| `AUTH_SECRET` | Kunci sesi Auth.js; harus acak dan rahasia |
| `AUTH_URL` | URL endpoint Auth.js; gunakan `http://localhost:3000/api/auth` lokal dan domain HTTPS situs saat deployment |
| `ADMIN_EMAIL` | Email bootstrap administrator |
| `ADMIN_PASSWORD` | Kata sandi bootstrap, minimal 12 karakter; disimpan sebagai hash bcrypt |
| `POSTGRES_PASSWORD` | Kata sandi untuk service PostgreSQL pada Compose |
| `SEED_DEMO_CONTENT` | Isi `true` hanya untuk menambahkan contoh konten draft |
| `NEXT_PUBLIC_SITE_URL` | URL canonical dan sitemap |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Fallback WhatsApp resmi, format angka internasional tanpa `+` |
| `NEXT_PUBLIC_ORGANIZATION_EMAIL` | Fallback email organisasi |
| `NEXT_PUBLIC_ORGANIZATION_ADDRESS` | Fallback alamat organisasi |
| `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_FACEBOOK_URL`, `NEXT_PUBLIC_YOUTUBE_URL` | Fallback tautan sosial |

Kontak yang diisi melalui CMS mengambil prioritas dari fallback lingkungan. `.env.local` diabaikan Git; jangan simpan kredensial di source code.

## Database dan CMS

- `prisma/schema.prisma` adalah sumber model dan relasi database.
- Migrasi awal ada di `prisma/migrations/20261002000000_init/`.
- `npm run db:migrate` dipakai saat pengembangan skema dan membuat migrasi baru.
- `npm run db:deploy` menerapkan migrasi yang sudah tersimpan, termasuk saat deployment.
- `npm run db:seed` membuat atau memperbarui administrator dari variabel lingkungan.
- Admin dapat membuat, mengedit, menerbitkan, dan mengarsipkan program, artikel, galeri, tim, dan proyek konservasi. Gambar CMS saat ini memakai path lokal di bawah `public/`; tambahkan file berizin di sana, lalu isi path seperti `/images/nama-file.jpg`.
- Perubahan CMS dicatat di `AuditLog`. Tidak ada pendaftaran admin publik.

## Pengujian dan build

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Build produksi:

```bash
npm run start
```

## Deployment

1. Siapkan PostgreSQL terkelola dan atur `DATABASE_URL`.
2. Atur `AUTH_SECRET`, `AUTH_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, dan `NEXT_PUBLIC_SITE_URL` pada secret/environment deployment. `AUTH_URL` harus menunjuk ke endpoint `/api/auth` pada domain HTTPS situs.
3. Jalankan `npm ci`, `npm run db:generate`, dan `npm run db:deploy`.
4. Jalankan seed admin satu kali melalui lingkungan deployment yang aman, lalu build dan start Next.js.
5. Isi profil, kontak, media lokal berizin, serta konten terverifikasi sebelum menerbitkan halaman.

## Batasan konten

Ruang Rimba, narasi organisasi, spesifikasi kegiatan, penulis demo, dan ilustrasi placeholder belum merupakan fakta organisasi nyata. Statistik, dampak konservasi, mitra, sertifikasi, penghargaan, testimoni, maupun kontak tidak dibuat-buat. Halaman publik tidak menampilkan angka dampak tanpa data terverifikasi.

## Tahap berikutnya

Penyimpanan permintaan kontak dan program, pengelolaan pesan masuk di admin, unggah media, serta penguatan produksi lanjutan tetap menjadi tahap terpisah.
