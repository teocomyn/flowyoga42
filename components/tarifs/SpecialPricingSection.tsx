import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import {
  ENFANTS_PLANS,
  INDIVIDUEL_PLANS,
  STRUCTURES_INFO,
  ZOOM_PLANS,
  formatPrice,
} from "@/content/tarifs";

function FormatIcon({ type }: { type: "enfants" | "solo" | "duo" | "zoom" | "structure" }) {
  const className = "h-5 w-5 text-clay-600";

  switch (type) {
    case "enfants":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "solo":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="7" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M5 21c.8-4 3.4-6 7-6s6.2 2 7 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "duo":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="9" cy="8" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="8" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M3 20c.5-3 2.5-5 6-5M15 15c3.5 0 5.5 2 6 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "zoom":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect
            x="3"
            y="6"
            width="18"
            height="12"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 10h8M8 14h5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "structure":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M4 20V9l8-4 8 4v11M9 20v-6h6v6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

type PriceTileProps = {
  title: string;
  price: string;
  detail: string;
  highlight?: boolean;
};

function PriceTile({ title, price, detail, highlight = false }: PriceTileProps) {
  return (
    <div
      className={`rounded-soft px-4 py-4 ${
        highlight
          ? "border border-clay-400/40 bg-blush-50/80"
          : "border border-sand-200/80 bg-sand-50/80"
      }`}
    >
      <p className="text-[14px] font-medium text-ink-700">{title}</p>
      <p className="mt-2 font-serif text-3xl tracking-tight text-ink-900">{price}</p>
      <p className="label mt-2 text-ink-600">{detail}</p>
    </div>
  );
}

type FormatCardProps = {
  icon: "solo" | "duo" | "zoom" | "structure";
  title: string;
  price: string;
  description: string;
  details?: string[];
  href?: string;
  ctaLabel?: string;
};

function FormatCard({
  icon,
  title,
  price,
  description,
  details,
  href = "/contact",
  ctaLabel = "Me contacter",
}: FormatCardProps) {
  return (
    <article className="surface-card flex h-full flex-col rounded-card p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blush-50">
          <FormatIcon type={icon} />
        </span>
        <p className="font-serif text-3xl tracking-tight text-ink-900">{price}</p>
      </div>
      <h3 className="mt-5 font-serif text-xl tracking-tight">{title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-600">
        {description}
      </p>
      {details ? (
        <ul className="mt-4 space-y-2">
          {details.map((item) => (
            <li
              key={item}
              className="border-l-2 border-clay-400/50 pl-3 text-[14px] text-ink-600"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-6">
        <Button href={href} variant="ghost" className="w-full sm:w-auto">
          {ctaLabel}
        </Button>
      </div>
    </article>
  );
}

export function SpecialPricingSection() {
  const individuelRestauratif = INDIVIDUEL_PLANS.find(
    (p) => p.id === "individuel-restauratif",
  )!;
  const duoRestauratif = INDIVIDUEL_PLANS.find((p) => p.id === "duo-restauratif")!;
  const zoomUnite = ZOOM_PLANS.find((p) => p.id === "zoom-unite")!;

  return (
    <section className="border-t border-sand-200 bg-gradient-to-b from-sand-50 via-wash-cream/60 to-sand-50 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label mb-6 text-clay-600">Sur mesure</p>
          <h2 className="heading-section">Enfants & formules privées</h2>
          <p className="prose-body mt-6">
            Ateliers ludiques pour les plus jeunes, séances individuelles ou en
            duo, cours Zoom et interventions en structure — chaque format a son
            tarif et sa modalité de réservation.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <article className="surface-card overflow-hidden rounded-shell shadow-[0_24px_60px_rgba(28,26,23,0.08)]">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative min-h-[240px] md:min-h-full">
                  <Image
                    src="/images/enfants-atelier.jpg"
                    alt="Atelier yoga enfants à Saint-Just-Saint-Rambert"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink-900/25 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-sand-50/20"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-col p-7 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blush-50">
                      <FormatIcon type="enfants" />
                    </span>
                    <span className="pill-tag text-clay-600">Dès 4 ans</span>
                  </div>

                  <h3 className="mt-5 font-serif text-[clamp(1.75rem,4vw,2.25rem)] tracking-tight">
                    Yoga enfants
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
                    Ateliers collectifs de 45 min à 1h au Kin&apos;Espace. Postures
                    d&apos;animaux, cartes, bols tibétains — le yoga devient un jeu.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {ENFANTS_PLANS.map((plan, index) => (
                      <PriceTile
                        key={plan.id}
                        title={plan.title}
                        price={formatPrice(plan.priceRegular)}
                        detail={plan.description}
                        highlight={index === 1}
                      />
                    ))}
                  </div>

                  <p className="label mt-5 text-ink-600">
                    Ateliers proposés · jours à déterminer · règlement à
                    l&apos;inscription
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button href="/cours/enfants" variant="secondary">
                      Découvrir le cours
                    </Button>
                    <Link
                      href="/contact"
                      className="label inline-flex items-center self-center transition-colors hover:text-clay-600"
                    >
                      Réserver un atelier →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-5">
            <article className="surface-card flex h-full flex-col overflow-hidden rounded-shell">
              <div className="relative aspect-[16/10] w-full bg-wash-cream">
                <Image
                  src="/images/seance-duo.jpg"
                  alt="Séance de yoga duo ou en famille"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <p className="label text-clay-600">Réservation obligatoire</p>
                <h3 className="mt-3 font-serif text-2xl tracking-tight">
                  Séances privées
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
                  Chaque séance se planifie sur mesure : contactez Floriane pour
                  fixer la date et régler la prestation.
                </p>

                <div className="mt-6 space-y-3">
                  {INDIVIDUEL_PLANS.map((plan) => (
                    <div
                      key={plan.id}
                      className="flex items-center justify-between gap-4 rounded-soft border border-sand-200/80 bg-sand-50/70 px-4 py-3"
                    >
                      <div>
                        <p className="text-[14px] font-medium text-ink-800">
                          {plan.title}
                        </p>
                        <p className="label mt-1 text-ink-600">{plan.description}</p>
                      </div>
                      <p className="shrink-0 font-serif text-2xl text-ink-900">
                        {formatPrice(plan.priceRegular)}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="label mt-5 text-ink-600">
                  Kin&apos;Espace, Pôle Ressources ou extérieur · frais km hors
                  Saint-Just & Chambles
                </p>

                <div className="mt-6">
                  <Button href="/contact" className="w-full sm:w-auto">
                    Planifier une séance
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.08}>
            <FormatCard
              icon="zoom"
              title="Cours Zoom"
              price={formatPrice(zoomUnite.priceRegular)}
              description="Suivez les cours en direct ou en replay depuis chez vous. Carnets dédiés disponibles dans le comparatif."
              details={[
                `Séance à l'unité · ${formatPrice(zoomUnite.priceRegular)}`,
                "Carnet 20 séances · 190 €",
                "Carnet 30 séances · 220 € early bird",
              ]}
              href="/contact"
              ctaLabel="Obtenir le lien Zoom"
            />
          </Reveal>

          <Reveal delay={0.12}>
            <FormatCard
              icon="structure"
              title={STRUCTURES_INFO.title}
              price={STRUCTURES_INFO.priceRange}
              description={STRUCTURES_INFO.description}
              details={[
                "Crèches, MAM, jardins d'enfants",
                "EHPAD, entreprises, événements",
                "Devis sur mesure",
              ]}
              href="/contact"
              ctaLabel="Demander un devis"
            />
          </Reveal>

          <Reveal delay={0.16}>
            <article className="flex h-full flex-col justify-between rounded-shell border border-clay-400/30 bg-gradient-to-br from-blush-50/90 via-sand-50 to-wash-cream p-7 md:p-8">
              <div>
                <p className="label text-clay-600">Bon à savoir</p>
                <h3 className="mt-3 font-serif text-2xl tracking-tight">
                  Avant de réserver
                </h3>
                <ul className="mt-5 space-y-3">
                  {[
                    "Réservation obligatoire pour toute formule privée",
                    "Individuel dès 60 € · Duo famille dès 80 €",
                    `Restauratif individuel ${formatPrice(individuelRestauratif.priceRegular)} · Duo ${formatPrice(duoRestauratif.priceRegular)}`,
                    "Paiement et annulation selon les CGV",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[14px] leading-relaxed text-ink-600"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay-400"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/cgv"
                  className="label transition-colors hover:text-clay-600"
                >
                  Lire les CGV →
                </Link>
                <Link
                  href="/contact"
                  className="label transition-colors hover:text-clay-600"
                >
                  Nous contacter →
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
