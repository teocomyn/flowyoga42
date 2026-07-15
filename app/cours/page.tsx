import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SessionTypeCard } from "@/components/cours/SessionTypeCard";
import { FAQ } from "@/components/ui/FAQ";
import { ScheduleTable } from "@/components/ui/ScheduleTable";
import { ReservationButton } from "@/components/ui/Button";
import { PageHero } from "@/components/shared/PageHero";
import { FinalCTASection } from "@/components/shared/FinalCTASection";
import { COURS_FAQ } from "@/content/faq-cours";
import { COURSES } from "@/content/courses";
import { MOMOYOGA_URL } from "@/lib/constants";
import { PAGE_HEROES } from "@/lib/media";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Cours & Planning",
  description:
    "Cours de yoga pour tous à Saint-Just-Saint-Rambert : vinyasa, yin, restauratif, prénatal, enfants. Planning 2026-2027 et réservation Momoyoga.",
  path: "/cours",
});

const StickyCTA = dynamic(() =>
  import("@/components/ui/StickyCTA").then((mod) => mod.StickyCTA),
);

const SESSION_TYPES = [
  {
    title: "Séances collectives",
    image: "/images/planning-2026-2027.png",
    imageAlt: "Planning des cours collectifs Flow Yoga 2026-2027",
    href: MOMOYOGA_URL,
    imageClassName: "object-contain bg-white p-2",
    featured: true,
  },
  {
    title: "Séances individuelles",
    image: "/images/seance-individuelle.jpg",
    imageAlt: "Séance de yoga individuelle à Saint-Just-Saint-Rambert",
    href: "/contact",
  },
  {
    title: "Séances Duo ou Famille",
    image: "/images/seance-duo.jpg",
    imageAlt: "Séance de yoga duo ou en famille",
    href: "/contact",
  },
  {
    title: "Yoga prénatal",
    image: "/images/yoga-prenatal.png",
    imageAlt: "Cours de yoga prénatal Flow Yoga",
    href: "/contact",
    imageClassName: "object-contain bg-white p-2",
  },
  {
    title: "Séances collectives Adultes Zoom en direct ou replay",
    image: "/images/zoom-logo.jpg",
    imageAlt: "Cours de yoga en visioconférence Zoom",
    href: "/contact",
    imageClassName: "object-contain bg-white p-6",
  },
];

const ENFANTS_BENEFITS = [
  "Respiration calme",
  "Découverte du corps",
  "Améliorer sa coordination",
  "Prendre confiance",
];

export default function CoursPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Cours & Planning", path: "/cours" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        image={PAGE_HEROES.cours}
        imageAlt="Cours de yoga Flow Yoga en Loire"
        label="Saint-Just-Saint-Rambert · Loire (42)"
        title="Cours & Planning"
        description="Vinyasa, yin, restauratif, prénatal et enfants · 13 élèves maximum · planning 2026-2027."
        tone="light"
        align="left"
      />

      <section className="bg-sand-50 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-xl text-ink-700">
              COURS DE YOGA POUR TOUS : Pré/post natal, Doux, Vinyasa, Yin, Yoga
              Restauratif
            </p>
            <h2 className="heading-section mt-4">Adultes</h2>
            <div className="prose-body mt-8 space-y-4 text-left">
              <p>
                Chaque séance est préparée en fonction de l&apos;énergie du groupe
                et selon le public concerné et il n&apos;y aura jamais plus de{" "}
                <strong>13 élèves en même temps</strong>. Les séances durent{" "}
                <strong>1h</strong> et se déroulent à la salle{" "}
                <strong>Kin&apos;Espace</strong> place Gapiand, à Saint Just Saint
                Rambert, et au <strong>Pôle Ressources</strong>, 25 chemin de la
                Bénédiction, à St Rambert. Lorsque le temps le permettra, elles
                pourront se dérouler aux bords de Loire sur la même commune.
              </p>
              <p>
                Les <strong>femmes enceintes</strong> et en début de grossesse
                peuvent pratiquer tant qu&apos;elles le peuvent avec les autres
                élèves. Des cours de yoga prénatal peuvent être rajoutés au planning
                selon la période et avec un minimum de 4 futures mamans (des
                abonnements sur-mesure). Si grossesse pendant tout abonnement, il
                n&apos;y aura <strong className="text-clay-600">pas de déduction ni de remboursement possibles</strong>{" "}
                (voir les <Link href="/cgv" className="underline">CGV</Link>).
              </p>
              <p>
                Concernant les <strong>sportifs</strong>, les séances peuvent être
                collectives ou individuelles sur réservation.
              </p>
              <p>
                <strong className="text-clay-600">
                  Toute annulation de séance ne sera pas remplacée ou reportée
                </strong>{" "}
                des abonnements (voir les CGV).
              </p>
              <p>
                <strong className="text-clay-600">
                  Les annulations de dernière minute (au plus tard 24h avant la séance)
                  sont facturées et/ou déduites des cartes d&apos;abonnement
                </strong>{" "}
                (voir les CGV).
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SESSION_TYPES.map((session, index) => (
              <SessionTypeCard
                key={session.title}
                title={session.title}
                image={session.image}
                imageAlt={session.imageAlt}
                href={session.href}
                delay={index * 0.06}
                imageClassName={session.imageClassName}
                featured={session.featured}
              />
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <ReservationButton location="cours-adultes" />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-sand-200 bg-gradient-to-b from-blush-50/40 via-sand-50 to-sand-50 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-5">
              <p className="label text-clay-600">Flow Yoga propose également</p>
              <h2 className="heading-section mt-4">Du Yoga Enfants</h2>
              <div className="prose-body mt-6 space-y-4 text-ink-600">
                <p>
                  Spécialisée dans la petite enfance, je propose des séances pour les{" "}
                  <strong>enfants</strong> (dès l&apos;âge de 4 ans en cours
                  collectifs ou à partir de 18 mois en crèche, jardins
                  d&apos;enfants, Maisons d&apos;Assistantes Maternelles, Relais
                  d&apos;Assistants Maternels).
                </p>
                <p>
                  Nous reprenons des <strong>postures d&apos;animaux</strong> et de{" "}
                  <strong>végétation</strong> de manière ludique, avec des{" "}
                  <strong>cartes</strong>, des <strong>balles massantes</strong>, des{" "}
                  <strong>bols tibétains</strong> et du <strong>Koshi</strong>.
                </p>
                <p>
                  Les séances durent entre <strong>45 min et 1h</strong> au{" "}
                  <strong>Kin&apos;Espace</strong> ou <strong>en extérieur</strong> selon
                  la météo. Pensez à apporter un tapis ou une serviette.
                </p>
              </div>

              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ENFANTS_BENEFITS.map((text) => (
                  <li
                    key={text}
                    className="surface-card rounded-soft border border-sand-200/80 px-4 py-3 text-[15px] text-ink-700"
                  >
                    {text}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/cours/enfants"
                  className="inline-flex items-center justify-center rounded-full border border-sand-200 bg-sand-50 px-6 py-3 text-[15px] font-medium transition-colors hover:border-clay-400 hover:bg-wash-cream"
                >
                  Découvrir le cours
                </Link>
                <Link
                  href="/tarifs"
                  className="label transition-colors hover:text-clay-600"
                >
                  Tarifs enfants →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-7">
              <div className="relative">
                <div className="surface-card overflow-hidden rounded-card shadow-[0_20px_50px_rgba(28,26,23,0.08)]">
                  <p className="border-b border-sand-200/80 px-6 py-4 text-center font-serif text-lg text-clay-600">
                    Ateliers enfants
                  </p>
                  <div className="relative aspect-[4/3] w-full bg-wash-cream">
                    <Image
                      src="/images/enfants-atelier.jpg"
                      alt="Atelier yoga enfants Flow Yoga"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <p className="px-6 py-4 text-center text-[14px] text-ink-600">
                    Dès 4 ans en collectif · 15 € · 12 € dès 2 enfants
                  </p>
                </div>

                <div className="absolute -bottom-5 -left-3 hidden w-[38%] max-w-[180px] overflow-hidden rounded-image border-4 border-sand-50 shadow-[0_16px_40px_rgba(28,26,23,0.12)] md:block">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/yoga-enfants-bg.jpg"
                      alt="Enfant en méditation lors d'un cours yoga"
                      fill
                      className="object-cover object-top"
                      sizes="180px"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-sand-200 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-section">Cours Particulier & Duo</h2>
            <p className="prose-body mt-6">
              <strong>Sur demande</strong> et sur <strong>réservation</strong>, la
              séance se déroule à domicile (rajout des frais kilométriques si
              extérieur à St Just St Rambert et Chambles) ou à la salle{" "}
              <strong>Kin&apos;Espace</strong> ou <strong>Pôle ressources</strong>.{" "}
              <strong>Durée de la prestation : 1h.</strong>
            </p>
            <p className="prose-body mt-6">
              <strong>Prendre du temps</strong> entre amis, en couple,{" "}
              <strong>offrir un cadeau à prix raisonnable</strong>, se faire plaisir…
              Les séances duo (ou trio), sont des séances axées sur la{" "}
              <strong>connaissance de soi</strong>, de son corps, du lâcher prise.
              Ensemble vous apprécierez ce moment de plaisir où je suis{" "}
              <strong>présente pour réajuster vos postures</strong>, vous donner
              confiance et articuler la pratique du Vinyasa Yoga en fonction de votre
              niveau. La <strong>séance dure 1h</strong>, avec un moment de méditation
              guidée en début et en fin de séance.
            </p>
            <div className="mt-10">
              <ReservationButton location="cours-duo" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-sand-200 bg-sand-100 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <Reveal>
            <p className="label mb-6">Toutes les pratiques</p>
            <h2 className="font-serif">Choisir sa pratique</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {COURSES.map((course, index) => (
              <Reveal key={course.slug} delay={index * 0.05}>
                <Link
                  href={`/cours/${course.slug}`}
                  className="group surface-card flex h-full flex-col overflow-hidden rounded-card transition-transform duration-500 hover:-translate-y-1 md:flex-row"
                >
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-t-card md:aspect-auto md:h-auto md:w-52 md:rounded-l-card md:rounded-tr-none">
                    <Image
                      src={course.image}
                      alt={course.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 200px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-8">
                    <h3 className="font-serif text-2xl tracking-tight transition-colors group-hover:text-clay-600">
                      {course.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                      {course.intro}
                    </p>
                    <span className="label mt-4 transition-colors group-hover:text-clay-600">
                      Voir le cours →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-sand-200 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <Reveal>
            <p className="label mb-6">Planning</p>
            <h2 className="font-serif">Horaires de la semaine</h2>
            <p className="prose-body mt-6">
              Du mardi au vendredi, en séances d&apos;1 heure. Consultez le planning
              ci-dessous et réservez votre créneau sur Momoyoga.
            </p>
          </Reveal>
          <div className="mt-10">
            <ScheduleTable />
          </div>
          <Reveal className="mt-10">
            <ReservationButton location="cours-planning" />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-sand-200 bg-sand-100 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <Reveal>
            <FAQ items={COURS_FAQ} />
          </Reveal>
          <Reveal className="mt-12">
            <ReservationButton location="cours-faq" />
          </Reveal>
        </Container>
      </section>

      <FinalCTASection primaryLocation="cours-final" />
      <StickyCTA />
    </>
  );
}
