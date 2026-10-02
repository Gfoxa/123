import Image from "next/image";
import Link from "next/link";

type ProgramCardProps = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  tone: string;
};

export function ProgramCard({ number, title, description, image, alt, tone, href }: ProgramCardProps) {
  return (
    <article className={`program-card program-card--${tone}`}>
      <div className="program-card__image">
        <Image src={image} alt={alt} fill sizes="(max-width: 700px) 88vw, (max-width: 1050px) 42vw, 30vw" />
        <span className="program-card__number">{number}</span>
      </div>
      <div className="program-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href} className="text-link">Kenali program <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
