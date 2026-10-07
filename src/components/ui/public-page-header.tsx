import Image from "next/image";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/breadcrumbs";

type PublicPageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundSrc?: string;
};

export function PublicPageHeader({ eyebrow, title, description, breadcrumbs, backgroundSrc }: PublicPageHeaderProps) {
  const isPhotoHeader = Boolean(backgroundSrc);

  return (
    <header className={`public-page-header${isPhotoHeader ? " public-page-header--photo" : ""}`}>
      {backgroundSrc && (
        <>
          <Image className="public-page-header__image" src={backgroundSrc} alt="" fill priority sizes="100vw" />
          <div className="public-page-header__scrim" aria-hidden="true" />
          <span className="public-page-header__photo-note">Foto demo · bukan dokumentasi Ruang Rimba</span>
        </>
      )}
      <div className="public-page-header__top">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>
      <div className="container public-page-header__body">
        <div className="public-page-header__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="public-page-header__description">{description}</p>
        </div>
      </div>
    </header>
  );
}
