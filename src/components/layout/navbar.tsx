import Link from "next/link";
import { organization, navigation } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";

export function Navbar() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/" aria-label={`${organization.name}, beranda`}>
          <span className="brand__mark" aria-hidden="true">R</span>
          <span className="brand__text">
            <strong>{organization.name}</strong>
            <small>Petualangan · Pembelajaran · Alam</small>
          </span>
        </Link>
        <nav className="primary-nav" aria-label="Navigasi utama">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <ButtonLink className="site-header__cta" href="/kontak" variant="outline">Diskusikan program <span aria-hidden="true">↗</span></ButtonLink>
        <details className="mobile-menu">
          <summary aria-label="Buka navigasi">Menu <span aria-hidden="true">+</span></summary>
          <nav className="mobile-menu__panel" aria-label="Navigasi seluler">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link className="mobile-menu__contact" href="/kontak">Diskusikan program <span aria-hidden="true">↗</span></Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
