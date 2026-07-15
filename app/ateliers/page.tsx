import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { AtelierCard } from "@/components/ateliers/AtelierCard";
import { PageHero } from "@/components/shared/PageHero";
import { FinalCTASection } from "@/components/shared/FinalCTASection";
import { ReservationButton } from "@/components/ui/Button";
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
        align="left"
      />

      <div className="pb-[var(--spacing-section)]">
        <section className="py-[var(--spacing-section)]">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-8">
                <Reveal>
                  <nav aria-label="Fil d'Ariane" className="label mb-8">
                    <ol className="flex flex-wrap gap-2">
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

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {sortedAteliers.map((atelier, index) => (
                    <Reveal key={atelier.slug} delay={index * 0.06}>
                      <AtelierCard
                        atelier={atelier}
                        priority={index < 2}
                      />
                    </Reveal>
                  ))}
                </div>

                <Reveal className="mt-16">
                  <ReservationButton location="ateliers" />
                </Reveal>
              </div>

              <aside className="lg:col-span-4">
                <Reveal>
                  <div className="sticky top-28 space-y-8 surface-card rounded-sm p-8">
                    <div>
                      <p className="label mb-4 text-blush-600">Mois de mai</p>
                      <p className="font-serif text-lg leading-relaxed text-ink-900">
                        <em>{LAO_TSEU_QUOTE}</em>
                      </p>
                    </div>

                    <hr className="divider" />

                    <div>
                      <p className="label mb-4">Pourquoi venir ?</p>
                      <p className="text-[15px] leading-relaxed text-ink-600">
                        Des ateliers pour sortir du quotidien, explorer de
                        nouvelles pratiques et partager des moments uniques en
                        petit groupe, avec bienveillance.
                      </p>
                      <a
                        href="https://www.youtube.com/embed/RzwVqP_fg5o"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label mt-4 inline-block transition-colors hover:text-blush-600"
                      >
                        Voir la vidéo sur YouTube →
                      </a>
                    </div>

                    <hr className="divider" />

                    <div className="text-center">
                      <p className="font-serif text-xl tracking-tight text-ink-900">
                        Une question sur un atelier ?
                      </p>
                      <Link
                        href="/contact"
                        className="label mt-4 inline-block transition-colors hover:text-blush-600"
                      >
                        Prendre contact →
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </aside>
            </div>
          </Container>
        </section>
      </div>
      <FinalCTASection primaryLocation="ateliers-final" />
    </>
  );
}
