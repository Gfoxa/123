import Image from "next/image";
import { ActivityCard } from "@/components/activity-card";
import { ProgramCard } from "@/components/program-card";
import { StoryCard } from "@/components/story-card";
import { GalleryPreview } from "@/components/gallery-preview";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { activities, organization, principles } from "@/lib/content";
import { getPublicArticles, getPublicGallery, getPublicPrograms, getPublicSettings } from "@/server/cms/public-content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Metadata } from "next";
import { hasConfiguredOrganizationIdentity, robotsForDemoContent } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [programs, articles, gallery, settings] = await Promise.all([
    getPublicPrograms(), getPublicArticles(), getPublicGallery(), getPublicSettings(),
  ]);
  const isDemo = programs.isDemo || articles.isDemo || gallery.isDemo
    || !hasConfiguredOrganizationIdentity(settings.organizationName, settings.description);
  return { robots: robotsForDemoContent(isDemo) };
}

export default async function HomePage() {
  const [{ items: featuredPrograms, isDemo: programsDemo }, { items: featuredArticles, isDemo: articlesDemo }, { items: galleryItems, isDemo: galleryDemo }, settings] = await Promise.all([
    getPublicPrograms(), getPublicArticles(), getPublicGallery(), getPublicSettings(),
  ]);
  const tones = ["moss", "clay", "fern", "sand", "stone"];
  const whatsappUrl = buildWhatsAppUrl(settings.whatsapp, "Halo, saya ingin berdiskusi tentang program outdoor.");
  return (
    <main id="konten">
      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero__image"
          src="/images/hero-rimba.png"
          alt="Rombongan kecil berjalan di jalur hutan berkabut di antara pegunungan"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero__scrim" />
        <div className="container hero__content">
          <p className="eyebrow eyebrow--light">{settings.organizationName || "Ruang Rimba"}</p>
          <h1 id="hero-title">Bertualang,<br />Belajar, dan<br /><em>Menjaga Alam.</em></h1>
          <p className="hero__description">Pengalaman outbound, petualangan, dan pembelajaran alam yang bermakna, sekaligus menumbuhkan kepedulian pada lingkungan.</p>
          <div className="hero__actions">
            <ButtonLink href="#program" variant="light">Jelajahi program <span aria-hidden="true">↗</span></ButtonLink>
            <ButtonLink href="/tentang-kami" variant="outline">Kenali kami <span aria-hidden="true">↗</span></ButtonLink>
          </div>
          <p className="hero__note">Foto demo · ganti dengan dokumentasi kegiatan organisasi</p>
        </div>
        <div className="hero__index" aria-hidden="true"><span>01</span><span className="hero__index-line" /><span>Alam sebagai ruang belajar</span></div>
      </section>

      <section className="intro section-pad" id="tentang">
        <div className="container intro__grid">
          <div className="intro__marker"><span>01</span><span className="marker-line" /><span>Tentang kami</span></div>
          <div className="intro__copy">
            <p className="eyebrow">Kenalan dengan {organization.name}</p>
            <h2>Pengalaman di alam bisa mengubah cara kita <em>melihat sekitar.</em></h2>
            <div className="intro__bottom">
              <p>{settings.description || organization.description}</p>
              <ButtonLink href="/tentang-kami" variant="outline">Kenali kami <span aria-hidden="true">↗</span></ButtonLink>
            </div>
          </div>
          <div className="intro__image-wrap">
            <Image src="/images/demo-forest-trail.webp" alt="Foto demo: pendaki menyusuri jalur hutan berkabut; bukan dokumentasi Ruang Rimba" fill sizes="(max-width: 800px) 90vw, 36vw" />
            <span className="image-caption">Foto demo, bukan dokumentasi kegiatan Ruang Rimba</span>
          </div>
        </div>
      </section>

      <section className="program-section section-pad" id="program">
        <div className="container">
          <div className="section-topline"><span>02 / Program</span><span>Dirancang untuk dijalani bersama</span></div>
          <SectionHeading title="Temukan cara baru untuk terhubung." description="Mulai dari membangun kekompakan hingga mengenal lingkungan lebih dekat. Program dapat disesuaikan bersama organisasi." />
          <div className="program-grid">
            {featuredPrograms.slice(0, 5).map((program, index) => <ProgramCard key={program.slug} number={String(index + 1).padStart(2, "0")} title={program.title} description={program.excerpt} image={program.image} alt={program.imageAlt} href={`/program/${program.slug}`} tone={tones[index % tones.length]} />)}
          </div>
          <div className="program-section__bottom"><p>{programsDemo ? "Program berikut merupakan konten demo." : "Program terbit dari CMS organisasi."}</p><ButtonLink href="/program" variant="outline">Jelajahi semua program <span aria-hidden="true">↗</span></ButtonLink></div>
        </div>
      </section>

      <section className="manifesto" id="konservasi">
        <div className="manifesto__visual">
          <Image src="/images/demo-river.webp" alt="Foto demo air terjun dan hutan; bukan dokumentasi Ruang Rimba" fill sizes="100vw" />
          <div className="manifesto__shade" />
        </div>
        <div className="container manifesto__content">
          <p className="eyebrow eyebrow--light">Petualangan dengan kepedulian</p>
          <h2>Lebih dari<br />sekadar <em>perjalanan.</em></h2>
          <p>Setiap perjalanan di alam adalah kesempatan untuk belajar cara merawatnya bersama.</p>
          <ButtonLink href="/konservasi" variant="light">Lihat kegiatan konservasi <span aria-hidden="true">↗</span></ButtonLink>
        </div>
        <span className="manifesto__caption">Foto demo, bukan dokumentasi kegiatan Ruang Rimba</span>
      </section>

      <section className="values section-pad" id="nilai">
        <div className="container values__grid">
          <div className="values__intro">
            <div className="section-topline"><span>03 / Cara kami bekerja</span></div>
            <SectionHeading title="Bertumbuh dengan rasa hormat." description="Prinsip untuk memandu setiap rancangan kegiatan. Ganti dengan nilai dan prosedur organisasi yang telah disepakati." />
          </div>
          <div className="values__list">
            {principles.map((principle, index) => (
              <article className="value-item" key={principle.title}>
                <span className="value-item__number">0{index + 1}</span>
                <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
                <span className="value-item__arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="activities section-pad">
        <div className="container">
          <div className="section-topline"><span>04 / Di lapangan</span><span>Contoh aktivitas, bukan dokumentasi nyata</span></div>
          <SectionHeading title="Ruang untuk pengalaman yang berkesan." description="Setiap kelompok punya cerita yang berbeda. Berikut inspirasi kegiatan yang dapat dikembangkan bersama." />
          <div className="activity-grid">{activities.map((activity, index) => <ActivityCard key={activity.title} {...activity} index={index} />)}</div>
        </div>
      </section>

      <section className="impact-note" aria-labelledby="impact-title">
        <div className="container impact-note__inner">
          <span className="impact-note__symbol" aria-hidden="true">i</span>
          <div><p className="eyebrow">Dampak yang bertanggung jawab</p><h2 id="impact-title">Data dampak terverifikasi belum tersedia.</h2><p>Kami tidak menampilkan angka kegiatan atau konservasi sebelum data organisasi dikonfirmasi.</p></div>
        </div>
      </section>

      <section className="gallery-journal section-pad" aria-labelledby="gallery-title">
        <div className="container">
          <span className="visually-hidden" id="gallery-title">Galeri kegiatan</span>
          <div className="section-topline"><span>Jurnal visual</span><span>{galleryDemo ? "Foto demo, bukan dokumentasi kegiatan Ruang Rimba" : "Dokumentasi kegiatan organisasi"}</span></div>
          <div className="gallery-journal__heading"><SectionHeading title="Fragmen perjalanan." description="Sekilas tentang pengalaman luar ruang yang dapat dirancang bersama." /><ButtonLink href="/galeri" variant="outline">Kunjungi galeri <span aria-hidden="true">↗</span></ButtonLink></div>
          <GalleryPreview items={galleryItems.slice(0, 3)} isDemo={galleryDemo} />
        </div>
      </section>

      <section className="stories section-pad" id="cerita">
        <div className="container">
          <div className="section-topline"><span>05 / Jurnal alam</span><span>Pengetahuan tumbuh saat dibagikan</span></div>
          <div className="stories__heading"><SectionHeading title="Catatan kecil dari alam." description="Ruang untuk berbagi pengetahuan, panduan, dan cerita kegiatan." /><ButtonLink href="/artikel" variant="outline">Lihat semua cerita <span aria-hidden="true">↗</span></ButtonLink></div>
          <div className="story-grid">{featuredArticles.slice(0, 3).map((article) => <StoryCard key={article.slug} category={article.category} title={article.title} image={article.coverImage} alt={article.coverAlt} href={`/artikel/${article.slug}`} />)}</div>
          {articlesDemo && <p className="demo-note">Artikel yang ditampilkan adalah konten demo.</p>}
        </div>
      </section>

      <section className="contact-band" id="hubungi">
        <div className="container contact-band__inner">
          <div><p className="eyebrow eyebrow--light">Mari mulai percakapan</p><h2>Ada rencana kegiatan<br />di alam?</h2><p>Ceritakan kebutuhan program dan rencana kegiatanmu.</p></div>
          <div className="contact-band__actions">
            {whatsappUrl && <a className="button button--light contact-band__button" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Hubungi organisasi melalui WhatsApp, membuka tab baru">Mulai di WhatsApp <span aria-hidden="true">↗</span></a>}
            <ButtonLink href="/kontak" variant="light" className="contact-band__button">Kirim permintaan program <span aria-hidden="true">↗</span></ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
