import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import "./globals.css";
import { getPublicSettings } from "@/server/cms/public-content";
import { buildOrganizationJsonLd } from "@/lib/structured-data";
import { StructuredData } from "@/components/seo/structured-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getPublicSettings();
  const organizationName = settings.organizationName || "Ruang Rimba";
  const title = settings.seoTitle || `${organizationName} | Petualangan, Pembelajaran, dan Alam`;
  const description = settings.seoDescription || settings.description;
  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s | ${organizationName}` },
    description,
    applicationName: organizationName,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website", locale: "id_ID", url: "/", siteName: organizationName, title, description,
      images: [{ url: "/images/hero-rimba.png", width: 1536, height: 1024, alt: "Perjalanan bersama menyusuri hutan dan pegunungan" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/hero-rimba.png"] },
  };
}

export const viewport: Viewport = {
  themeColor: "#f4f3e7",
  colorScheme: "light",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const settings = await getPublicSettings();
  const organizationJsonLd = buildOrganizationJsonLd(settings, siteUrl);
  return (
    <html lang="id">
      <body>
        <a className="skip-link" href="#konten">Lewati ke konten</a>
        {organizationJsonLd && <StructuredData data={organizationJsonLd} />}
        <Navbar settings={settings} />
        {children}
        <Footer settings={settings} />
        <WhatsAppButton settings={settings} />
      </body>
    </html>
  );
}
