import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { AtelierCard } from "@/components/ateliers/AtelierCard";
import { PageHero } from "@/components/shared/PageHero";
import { FinalCTASection } from "@/components/shared/FinalCTASection";
import { Button, ReservationButton } from "@/components/ui/Button";
import { ATELIERS } from "@/content/ateliers";
import { PAGE_HEROES } from "@/lib/media";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Ateliers & Événements Yoga Loire",
  description:
    "Ateliers et événements yoga en Loire (42) avec Flow Yoga : yoga brunch, yog'hypnose, tarot-yoga et stages à Saint-Just-Saint-Rambert.",
  path: "/ateliers",
});

const LAO_TSEU_QUOTE =
  "« Quand je lâche ce que je suis, je deviens ce que je pourrais être » · Lao Tseu";

export default function AteliersPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Ateliers", path: "/ateliers" },
  ]);

  const sortedAteliers = [...ATELIERS].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        image={PAGE_HEROES.ateliers}
        imageAlt="Ateliers et événements yoga Flow Yoga en Loire"
        label="Infos & événements · Loire (42)"
        title="Ateliers & évènements"
        description="Stages, ateliers thématiques et moments spéciaux autour du yoga, de la méditation et du bien-être à Saint-Just-Saint-Rambert."
        align="center"
        tone="light"
      />

      <section className="pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <Reveal>
            <nav aria-label="Fil d'Ariane" className="label mb-10">
              <ol className="flex flex-wrap justify-center gap-2">
                <li>
                  <Link href="/" className="hover:text-blush-600">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Ateliers</li>
              </ol>
            </nav>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            <Reveal>
              <div className="surface-card h-full rounded-card p-5 md:p-6">
                <p className="label mb-3 text-blush-600">Mois de mai</p>
                <p className="font-serif text-[17px] leading-relaxed text-ink-900">
                  <em>{LAO_TSEU_QUOTE}</em>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="surface-card h-full rounded-card p-5 md:p-6">
                <p className="label mb-3">Pourquoi venir ?</p>
                <p className="text-[15px] leading-relaxed text-ink-600">
                  Sortir du quotidien, explorer de nouvelles pratiques et
                  partager des moments uniques en petit groupe, avec bienveillance.
                </p>
                <a
                  href="https://www.youtube.com/embed/RzwVqP_fg5o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label mt-4 inline-block transition-colors hover:text-blush-600"
                >
                  Voir la vidéo →
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-between rounded-card border border-clay-400/25 bg-gradient-to-br from-blush-50/80 to-wash-cream p-5 md:p-6">
                <div>
                  <p className="label mb-3 text-clay-600">Contact</p>
                  <p className="font-serif text-xl tracking-tight text-ink-900">
                    Une question sur un atelier ?
                  </p>
                </div>
                <Button href="/contact" variant="secondary" className="mt-5 w-full">
                  Prendre contact
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 space-y-5 md:mt-14">
            {sortedAteliers.map((atelier, index) => (
              <Reveal key={atelier.slug} delay={index * 0.05}>
                <AtelierCard
                  atelier={atelier}
                  priority={index < 2}
                  layout="horizontal"
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-wrap justify-center gap-4">
            <ReservationButton location="ateliers" />
            <Link
              href="/contact"
              className="label inline-flex items-center self-center transition-colors hover:text-blush-600"
            >
              Nous écrire →
            </Link>
          </Reveal>
        </Container>
      </section>

      <FinalCTASection primaryLocation="ateliers-final" />
    </>
  );
}
