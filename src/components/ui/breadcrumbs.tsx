import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><Link href="/">Beranda</Link></li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} aria-current={!item.href ? "page" : undefined}>
            <span className="breadcrumbs__separator" aria-hidden="true">/</span>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
