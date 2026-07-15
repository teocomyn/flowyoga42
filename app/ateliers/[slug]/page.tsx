import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ReservationButton } from "@/components/ui/Button";
import { DetailHero } from "@/components/shared/DetailHero";
import { FinalCTASection } from "@/components/shared/FinalCTASection";
import { getAtelierBySlug, getAllAtelierSlugs } from "@/content/ateliers";
import { getBreadcrumbJsonLd, getEventJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

const StickyCTA = dynamic(() =>
  import("@/components/ui/StickyCTA").then((mod) => mod.StickyCTA),
);

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllAtelierSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const atelier = getAtelierBySlug(slug);
  if (!atelier) return {};

  return createPageMetadata({
    title: atelier.title,
    description: atelier.metaDescription,
    path: `/ateliers/${slug}`,
  });
}

export default async function AtelierDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const atelier = getAtelierBySlug(slug);

  if (!atelier) notFound();

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Ateliers", path: "/ateliers" },
    { name: atelier.title, path: `/ateliers/${slug}` },
  ]);
  const eventJsonLd = getEventJsonLd(atelier);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />

      <DetailHero
        image={atelier.image}
        imageAlt={atelier.imageAlt}
        label="Atelier · Flow Yoga"
        title={atelier.title}
        meta={
          <time dateTime={atelier.date} className="label text-sand-100/90">
            {atelier.dateDisplay} · {atelier.time}
          </time>
        }
      />

      <div className="pb-[var(--spacing-section)]">
        <Container>
          <nav aria-label="Fil d'Ariane" className="label mb-12 pt-10">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="hover:text-clay-600">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/ateliers" className="hover:text-clay-600">
                  Ateliers
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="line-clamp-1">
                {atelier.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6">
            <Reveal className="lg:col-span-5">
              <p className="prose-body font-medium text-ink-900">{atelier.intro}</p>
              {atelier.content.map((paragraph) => (
                <p key={paragraph.slice(0, 30)} className="prose-body mt-6">
                  {paragraph}
                </p>
              ))}

              <dl className="surface-card mt-10 space-y-4 rounded-card p-8">
                <div className="flex justify-between gap-4 text-[15px]">
                  <dt className="text-ink-600">Durée</dt>
                  <dd className="font-medium text-ink-900">{atelier.duration}</dd>
                </div>
                <div className="flex justify-between gap-4 text-[15px]">
                  <dt className="text-ink-600">Lieu</dt>
                  <dd className="text-right font-medium text-ink-900">
                    {atelier.location}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 text-[15px]">
                  <dt className="text-ink-600">Tarif</dt>
                  <dd className="font-medium text-ink-900">
                    {atelier.priceLabel ??
                      (atelier.price !== null ? `${atelier.price} €` : "Sur inscription")}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 text-[15px]">
                  <dt className="text-ink-600">Places</dt>
                  <dd className="font-medium text-ink-900">
                    {atelier.maxParticipants} max.
                  </dd>
                </div>
              </dl>

              <div className="mt-10">
                <ReservationButton location={`atelier-${slug}`} />
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
              <div className="surface-card relative aspect-[4/5] overflow-hidden rounded-card bg-wash-cream">
                <Image
                  src={atelier.image}
                  alt={atelier.imageAlt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
              </div>

              <div className="surface-card mt-8 rounded-card p-8">
                <p className="label mb-4">Au programme</p>
                <ul className="space-y-3">
                  {atelier.highlights.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-clay-400 pl-4 text-[15px] leading-relaxed text-ink-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>

      <FinalCTASection
        primaryLocation={`atelier-${slug}-final`}
        showAteliersLink={false}
      />
      <StickyCTA />
    </>
  );
}
