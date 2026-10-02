import Image from "next/image";

type ActivityCardProps = { title: string; category: string; image: string; alt: string; index: number };

export function ActivityCard({ title, category, image, alt, index }: ActivityCardProps) {
  return (
    <article className={`activity-card activity-card--${index + 1}`}>
      <div className="activity-card__image"><Image src={image} alt={alt} fill sizes="(max-width: 700px) 88vw, (max-width: 1050px) 43vw, 31vw" /></div>
      <div className="activity-card__meta"><span>{category}</span><h3>{title}</h3></div>
    </article>
  );
}
