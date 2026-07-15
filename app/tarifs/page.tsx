import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FAQ } from "@/components/ui/FAQ";
import { EarlyBirdBadge, EarlyBirdDeadline } from "@/components/ui/EarlyBirdBadge";
import { PricingCard } from "@/components/ui/PricingCard";
import { PricingTableFull } from "@/components/ui/PricingTable";
import { SpecialPricingSection } from "@/components/tarifs/SpecialPricingSection";
import { Button, ReservationButton } from "@/components/ui/Button";
import { PageHero } from "@/components/shared/PageHero";
import { FinalCTASection } from "@/components/shared/FinalCTASection";
import { TARIFS_FAQ } from "@/content/faq-tarifs";
import { FEATURED_PLANS, SEASON_START } from "@/content/tarifs";
import { PAGE_HEROES } from "@/lib/media";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

const StickyCTA = dynamic(() =>
  import("@/components/ui/StickyCTA").then((mod) => mod.StickyCTA),
);

export const metadata = createPageMetadata({
  title: "Tarifs Yoga Saint-Just-Saint-Rambert 2026-2027",
  description:
    "Tarifs des cours de yoga à Saint-Just-Saint-Rambert : séances à l'unité, carnets 10/20/30 séances, zoom, prénatal, enfants. Early bird jusqu'au 27/09.",
  path: "/tarifs",
});

const FEATURED_CONFIG = [
  { planId: "10-seances", recommended: false, cta: "tarifs-10" },
  { planId: "30-seances", recommended: true, cta: "tarifs-30" },
  { planId: "unite", recommended: false, cta: "tarifs-unite" },
] as const;

export default function TarifsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Tarifs", path: "/tarifs" },
  ]);

  const featuredPlans = FEATURED_CONFIG.map((config) => {
    const plan = FEATURED_PLANS.find((p) => p.id === config.planId)!;
    return { ...config, plan };
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <EarlyBirdDeadline />

      <PageHero
        image={PAGE_HEROES.tarifs}
        imageAlt="Tarifs des cours de yoga Flow Yoga en Loire"
        label={`Saison 2026-2027 · dès le ${SEASON_START}`}
        title="Tarifs"
        description="Séances à l'unité, carnets et formules prénatal, enfants et zoom. Early bird jusqu'au 27 septembre."
        tone="light"
        align="center"
      />

      <section className="bg-wash-sky pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <EarlyBirdBadge />
            <h2 className="heading-section mt-8">Adultes</h2>
            <div className="prose-body mt-6 max-w-2xl space-y-3">
              <p>
                <strong>6 personnes inscrites mini/cours</strong>
              </p>
              <p>
                <strong>
                  Tarif pour les couples ou 1 parent-1 ado + 14 ans
                </strong>{" "}
                vivant sous le même toit (me contacter)
              </p>
              <p className="italic">
                Possibilité de régler en plusieurs fois à partir de 20 séances
                (voir les{" "}
                <Link href="/cgv" className="underline">
                  CGV
                </Link>
                ).
              </p>
            </div>
            <Button href="/contact" variant="ghost" className="mt-6">
              Une question ?
            </Button>
          </Reveal>

          <Reveal delay={0.08} className="mx-auto mt-10 max-w-4xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-card border border-sand-200 bg-white shadow-[0_20px_50px_rgba(28,26,23,0.06)]">
              <Image
                src="/images/planning-vinyasa.png"
                alt="Planning Vinyasa 12h30-13h30 · tarifs Flow Yoga"
                fill
                className="object-contain p-3 md:p-4"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-wash-cream pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <Reveal>
            <p className="label mb-6">Formules adultes</p>
            <h2 className="font-serif">Choisir son carnet</h2>
            <p className="prose-body mt-6">
              Le carnet 10 séances convient pour tester sur 3 mois. L&apos;année 30
              séances (1×/semaine) offre le meilleur prix par séance · 11,67 € en
              early bird.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredPlans.map(({ plan, recommended, cta }, index) => (
              <Reveal key={plan.id} delay={index * 0.08}>
                <PricingCard
                  plan={plan}
                  recommended={recommended}
                  ctaLocation={cta}
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <p className="text-[14px] text-ink-600">
              Carnets nominatifs et non remboursables.{" "}
              <Link
                href="/cgv"
                className="underline decoration-clay-400 underline-offset-2"
              >
                Conditions générales de vente
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-sand-200 bg-sand-50 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <Reveal>
            <p className="label mb-6">Comparatif</p>
            <h2 className="font-serif">Tous les tarifs</h2>
            <p className="prose-body mt-6">
              Zoom, prénatal, enfants, séances individuelles et interventions en
              structure : retrouvez l&apos;ensemble de la grille tarifaire ci-dessous.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <PricingTableFull />
          </Reveal>
        </Container>
      </section>

      <SpecialPricingSection />

      <section className="border-t border-sand-200 bg-sand-100 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <Reveal>
            <FAQ items={TARIFS_FAQ} title="Questions sur les tarifs" />
          </Reveal>
          <Reveal className="mt-12 flex flex-wrap items-center gap-6">
            <ReservationButton location="tarifs-faq" />
            <Link
              href="/cgv"
              className="label transition-colors hover:text-clay-600"
            >
              Lire les CGV →
            </Link>
          </Reveal>
        </Container>
      </section>

      <FinalCTASection primaryLocation="tarifs-final" />
      <StickyCTA />
    </>
  );
}
