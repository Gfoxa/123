import Link from "next/link";
import { navigation, organization } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
    { label: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK_URL },
    { label: "YouTube", href: process.env.NEXT_PUBLIC_YOUTUBE_URL },
  ].filter((item): item is { label: string; href: string } => Boolean(item.href));
  const address = process.env.NEXT_PUBLIC_ORGANIZATION_ADDRESS;
  const email = process.env.NEXT_PUBLIC_ORGANIZATION_EMAIL;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand brand--footer" href="/">
              <span className="brand__mark" aria-hidden="true">R</span>
              <span className="brand__text"><strong>{organization.name}</strong><small>Nama identitas demo</small></span>
            </Link>
            <p>Ruang untuk bertualang, belajar dari alam, dan menumbuhkan kepedulian bersama.</p>
          </div>
          <div className="footer-links">
            <h2>Jelajahi</h2>
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
          <div className="footer-contact">
            <h2>Kontak organisasi</h2>
            <p>{address || "[Tambahkan alamat dan area layanan]"}</p>
            {email ? <a href={`mailto:${email}`}>{email}</a> : <p>[Tambahkan email resmi]</p>}
            {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}>WhatsApp resmi</a> : <p>[Tambahkan WhatsApp resmi]</p>}
            <div className="footer-social">
              <h2>Media sosial</h2>
              {socialLinks.length ? socialLinks.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label} ↗</a>) : <p>[Tambahkan tautan resmi]</p>}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} {organization.name}. Konten demo, ganti sebelum publikasi.</p>
          <p>Bertualang dengan bijak. Menjaga alam bersama.</p>
        </div>
      </div>
    </footer>
  );
}
