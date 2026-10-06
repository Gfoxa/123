import Image from "next/image";
import Link from "next/link";
import type { GalleryItem } from "@/lib/gallery";

type GalleryPreviewProps = { items: GalleryItem[]; isDemo: boolean };

export function GalleryPreview({ items, isDemo }: GalleryPreviewProps) {
  return (
    <div className="gallery-preview" data-demo={isDemo}>
      {items.map((item, index) => (
        <Link className={`gallery-preview__item gallery-preview__item--${index + 1}`} href="/galeri" key={item.id}>
          <span className="gallery-preview__image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 90vw, (max-width: 1000px) 48vw, 34vw" /></span>
          <span className="gallery-preview__caption"><span>{item.category}</span><strong>{item.title}</strong><span aria-hidden="true">↗</span></span>
        </Link>
      ))}
    </div>
  );
}
