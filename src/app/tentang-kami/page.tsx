import type { Metadata } from "next";
import Image from "next/image";
import { PublicPageHeader } from "@/components/ui/public-page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { organization, principles } from "@/lib/content";
import { getPublicTeam } from "@/server/cms/public-content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = { ...pageMetadata("Tentang Kami", "Kenali pendekatan organisasi dalam kegiatan outdoor, pembelajaran alam, dan konservasi.", "/tentang-kami"), robots: { index: false, follow: false } };

const missions = [
  "Merancang pengalaman luar ruang yang aman, inklusif, dan sesuai kebutuhan kelompok.",
  "Menghubungkan pengalaman langsung dengan pembelajaran yang relevan.",
  "Mendorong kepedulian terhadap alam melalui kegiatan yang bertanggung jawab.",
  "Membuka ruang kolaborasi dan pembelajaran bersama komunitas setempat.",
];

const demoTeamProfiles = [
  { photo: "/images/team-example-01.webp", alt: "Potret demo perempuan berhijab di area hutan; bukan anggota tim Ruang Rimba" },
  { photo: "/images/team-example-02.webp", alt: "Potret demo laki-laki di tengah dedaunan; bukan anggota tim Ruang Rimba" },
  { photo: "/images/team-example-03.webp", alt: "Potret demo perempuan duduk di hutan; bukan anggota tim Ruang Rimba" },
] as const;

export default async function AboutPage() {
  const team = await getPublicTeam();
  return (
    <main id="konten">
      <PublicPageHeader eyebrow="Tentang kami" title="Mengenal alam, mengenal cara kita bertumbuh." description="Ruang Rimba adalah identitas demo. Ganti narasi berikut dengan cerita, sejarah, dan konteks organisasi yang telah diverifikasi." breadcrumbs={[{ label: "Tentang Kami" }]} backgroundSrc="/images/demo-forest-trail.webp" />
      <section className="about-story section-pad">
        <div className="container about-story__grid">
          <div className="about-story__image"><Image src="/images/demo-forest-trail.webp" alt="Foto demo: pendaki menyusuri jalur hutan; bukan dokumentasi Ruang Rimba" fill sizes="(max-width: 800px) 90vw, 45vw" /><span>Foto demo, bukan dokumentasi Ruang Rimba</span></div>
          <div className="about-story__copy"><p className="eyebrow">Cerita organisasi</p><h2>Pengalaman langsung membuat alam terasa lebih dekat.</h2><p>{organization.description}</p><p>Bagian ini perlu dilengkapi dengan kisah pendirian organisasi, wilayah kerja, dan pengalaman yang dapat dibuktikan.</p><ButtonLink href="/program" variant="outline">Lihat program <span aria-hidden="true">↗</span></ButtonLink></div>
        </div>
      </section>
      <section className="vision-section">
        <div className="container vision-section__inner"><p className="eyebrow eyebrow--light">Visi organisasi</p><h2>[Tambahkan visi resmi organisasi]</h2><p>Visi pada halaman ini adalah placeholder dan perlu diganti sebelum publikasi.</p></div>
      </section>
      <section className="mission-section section-pad">
        <div className="container mission-section__grid"><SectionHeading eyebrow="Arah kerja" title="Misi yang bisa dijalani bersama." description="Contoh rumusan misi berikut bukan pernyataan resmi organisasi." /><ol className="mission-list">{missions.map((mission, index) => <li key={mission}><span>0{index + 1}</span><p>{mission}</p></li>)}</ol></div>
      </section>
      <section className="values section-pad">
        <div className="container"><SectionHeading eyebrow="Nilai yang dijaga" title="Cara kami ingin hadir di alam." description="Nilai berikut adalah titik awal untuk ditinjau bersama tim organisasi." /><div className="public-values-grid">{principles.map((item, index) => <article className="public-value" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div>
      </section>
      <section className="team-section section-pad">
        <div className="container">
          <div className={`team-section__inner${team.length > 0 ? " team-section__inner--published" : ""}`}>
            <div className="team-section__intro"><p className="eyebrow">Tim kami</p><h2>Orang-orang di balik setiap pengalaman.</h2><p>Kenalkan anggota dan peran mereka setelah informasi disetujui organisasi.</p></div>
            {team.length === 0 && <figure className="team-example__visual"><Image src="/images/demo-team-building.webp" alt="Foto demo peserta melakukan tantangan kerja sama di hutan, bukan potret anggota Ruang Rimba" fill sizes="(max-width: 760px) 90vw, 58vw" /><figcaption>Contoh suasana kegiatan · bukan foto anggota Ruang Rimba</figcaption></figure>}
          </div>
          {team.length > 0 ? <div className="public-team-grid">{team.map((member) => <article key={member.id}><div className="public-team-grid__photo">{member.photoUrl ? <Image src={member.photoUrl} alt={member.photoAlt || `Foto ${member.name}`} fill sizes="(max-width: 650px) 80vw, 30vw" /> : <span aria-hidden="true">R</span>}</div><p className="eyebrow">{member.role}</p><h3>{member.name}</h3><p>{member.biography}</p></article>)}</div> : <><p className="team-example__note">Foto contoh dari Unsplash. Orang dalam foto bukan anggota Ruang Rimba.</p><div className="team-example__profiles" aria-label="Contoh profil untuk dilengkapi">{demoTeamProfiles.map((profile, index) => <article key={profile.photo}><div className="team-example__portrait"><Image src={profile.photo} alt={profile.alt} fill sizes="(max-width: 560px) 112px, 144px" /><span aria-hidden="true">DEMO</span></div><span className="team-example__number">0{index + 1} /</span><div className="team-example__details"><h3>[Nama Anggota]</h3><p>[Posisi]</p></div><p>[Tambahkan bio singkat setelah dikonfirmasi.]</p></article>)}</div></>}
        </div>
      </section>
    </main>
  );
}
