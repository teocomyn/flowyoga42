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
      />

      <section className="bg-sand-50 py-[var(--spacing-section)]">
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

      <section className="relative overflow-hidden py-[var(--spacing-section)]">
        <Image
          src="/images/yoga-enfants-bg.jpg"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-blush-900/85 via-blush-900/70 to-transparent"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="label text-sand-100">Flow Yoga propose également</p>
              <h2 className="heading-section mt-4 text-sand-50">
                Du Yoga Enfants
              </h2>
              <div className="prose-body mt-8 space-y-4 text-sand-100">
                <p>
                  Spécialisée dans la petite enfance, je propose des séances pour les{" "}
                  <strong>enfants</strong> (dès l&apos;âge de 4 ans en cours
                  collectifs ou à partir de 18 mois en crèche, jardins
                  d&apos;enfants, Maisons d&apos;Assistantes Maternelles, Relais
                  d&apos;Assistants Maternels).
                </p>
                <p>
                  Ils se déroulent en fonction du nombre d&apos;inscrits et nous
                  reprenons des <strong>postures d&apos;animaux</strong>, de{" "}
                  <strong>végétation</strong> de manière ludique avec des supports
                  tels que des <strong>cartes</strong>, des{" "}
                  <strong>balles massantes</strong>, le son des{" "}
                  <strong>bols tibétains</strong>, du <strong>Koshi</strong>…
                </p>
                <p>
                  Les séances durent entre <strong>45 min et 1h à Kin&apos;Espace</strong>{" "}
                  ou <strong>en extérieur</strong> quand le temps le permet. Il est
                  nécessaire d&apos;<strong>apporter son tapis ou une serviette</strong>.
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {ENFANTS_BENEFITS.map((text) => (
                  <li
                    key={text}
                    className="border-l-2 border-sand-100/60 pl-4 text-[15px] italic text-sand-50"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="surface-card overflow-hidden rounded-sm">
                <p className="px-5 pt-5 text-center font-serif text-lg text-clay-600">
                  Ateliers enfants
                </p>
                <div className="relative mt-4 aspect-[4/3] w-full">
                  <Image
                    src="/images/enfants-atelier.jpg"
                    alt="Atelier yoga enfants Flow Yoga"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-sand-200 py-[var(--spacing-section)]">
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

      <section className="border-t border-sand-200 bg-sand-100 py-[var(--spacing-section)]">
        <Container>
          <Reveal>
            <p className="label mb-6">Toutes les pratiques</p>
            <h2 className="font-serif">Choisir sa pratique</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px bg-sand-200 md:grid-cols-2">
            {COURSES.map((course, index) => (
              <Reveal
                key={course.slug}
                delay={index * 0.05}
                className="group bg-sand-50"
              >
                <Link
                  href={`/cours/${course.slug}`}
                  className="flex h-full flex-col md:flex-row"
                >
                  <div className="relative aspect-[16/10] w-full shrink-0 md:aspect-auto md:h-auto md:w-48">
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

      <section className="border-t border-sand-200 py-[var(--spacing-section)]">
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

      <section className="border-t border-sand-200 bg-sand-100 py-[var(--spacing-section)]">
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
