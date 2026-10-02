import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/breadcrumbs";

type PublicPageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
};

export function PublicPageHeader({ eyebrow, title, description, breadcrumbs }: PublicPageHeaderProps) {
  return (
    <div className="public-page-header">
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="public-page-header__description">{description}</p>
      </div>
    </div>
  );
}
