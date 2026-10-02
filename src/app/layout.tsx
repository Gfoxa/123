import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ruang Rimba | Petualangan, Pembelajaran, dan Alam",
    template: "%s | Ruang Rimba",
  },
  description: "Konten demo organisasi kegiatan outdoor, pembelajaran alam, dan konservasi. Identitas dan informasi organisasi perlu diganti sebelum publikasi.",
  applicationName: "Ruang Rimba",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Ruang Rimba",
    title: "Ruang Rimba | Petualangan, Pembelajaran, dan Alam",
    description: "Bertualang, belajar, dan menjaga alam bersama. Situs demo yang siap disesuaikan dengan identitas organisasi.",
    images: [{ url: "/images/hero-rimba.png", width: 1536, height: 1024, alt: "Perjalanan bersama menyusuri hutan dan pegunungan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruang Rimba | Petualangan, Pembelajaran, dan Alam",
    description: "Bertualang, belajar, dan menjaga alam bersama.",
    images: ["/images/hero-rimba.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f3ec",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <a className="skip-link" href="#konten">Lewati ke konten</a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
