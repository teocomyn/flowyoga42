import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FinalCTASection } from "@/components/shared/FinalCTASection";
import { ReservationButton } from "@/components/ui/Button";
import { PageHero } from "@/components/shared/PageHero";
import { getBreadcrumbJsonLd, getPersonJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { LOCATION_IMAGES, PAGE_HEROES } from "@/lib/media";

export const metadata = createPageMetadata({
  title: "Présentations · lieux et professeur",
  description:
    "Bienvenue chez Flow Yoga : deux espaces lumineux à Saint-Just-Saint-Rambert (Kin'Espace, Pôle Ressources). Découvrez Floriane Relave Jamon, instructrice certifiée.",
  path: "/qui-suis-je",
});

const CERTIFICATIONS = [
  "Vinyasa Yoga · formation certifiée",
  "Yin Yoga · formation certifiée",
  "Yoga Restauratif · adapté aux pathologies (cancers, endométriose, burn-out)",
  "Lymphe Flow experts · certification en cours",
  "Spécialisation petite enfance (crèches, MAM, jardins d'enfants, RAM)",
];

const EXPERTISE = [
  "Femmes enceintes et post-partum",
  "Seniors et EHPAD",
  "Sportifs de haut niveau (natation, triathlon, course, football)",
  "Yoga enfants dès 18 mois en structure, dès 4 ans en collectif",
];

const ROOMS = [
  {
    id: "kinespace" as const,
    title: "Kin'Espace",
  },
  {
    id: "pole-ressources" as const,
    title: "Pôle Ressources",
  },
];

export default function QuiSuisJePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Présentations", path: "/qui-suis-je" },
  ]);
  const personJsonLd = getPersonJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <PageHero
        image={PAGE_HEROES.presentations}
        imageAlt="Espace de pratique yoga Flow Yoga en Loire"
        label="Saint-Just-Saint-Rambert · Loire (42)"
        title="Présentations"
        description="Lieux de pratique et portrait de Floriane Relave Jamon, votre instructrice certifiée."
      />

      <section className="bg-sand-50 py-[var(--spacing-section)]">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-section text-clay-600">
              Bienvenue chez Flow yoga
            </h2>
            <div className="prose-body mt-8 space-y-6 text-left">
              <p>
                Je vous accueille dans 2 espaces lumineux qui vous feront vibrer
                durant votre pratique. Ces 2 salles sont idéalement situées :{" "}
                <strong>Kin&apos;Espace</strong> : 15 place Gapiand, à côté de la
                MJC de St Just St Rambert ; <strong>Pôle Ressources</strong> : 25
                chemin de la Bénédiction, à côté du cabinet dentaire et face au
                cabinet médical à St Rambert.
              </p>
              <p>
                Lorsqu&apos;il fait beau, la pratique se déroule en extérieur, sous
                la Guinguette, vers les bords de Loire.
              </p>
              <p>
                Vous devrez{" "}
                <strong className="underline">apporter votre propre matériel</strong>{" "}
                : tapis adapté à la pratique du yoga, 2 briques en liège ou mousse,
                une sangle…
              </p>
              <p>
                Dans l&apos;idéal, la pratique doit se faire <strong>à jeun</strong>.
                On évitera de <strong>boire</strong> durant la pratique.
              </p>
              <p>
                <strong>Pratique plus calme lors de la Pleine Lune et/ou Nouvelle Lune !</strong>
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {ROOMS.map((room, index) => (
              <Reveal key={room.title} delay={index * 0.08}>
                <figure className="group surface-card overflow-hidden rounded-sm">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={LOCATION_IMAGES[room.id].src}
                      alt={LOCATION_IMAGES[room.id].alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-[15px] font-medium text-ink-700">
                    {room.title}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-blush-50/80 to-sand-50 py-[var(--spacing-section)]">
        <Container>
          <Reveal className="text-center">
            <h2 className="heading-section">Une instructrice certifiée</h2>
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-3xl" delay={0.1}>
            <div className="surface-card overflow-hidden rounded-sm p-8 md:p-14">
              <div className="mx-auto w-48">
                <div className="relative aspect-square overflow-hidden rounded-full">
                  <Image
                    src="/images/floriane-portrait.jpg"
                    alt="Floriane Relave Jamon, professeure de yoga certifiée"
                    fill
                    className="object-cover object-[33%_40%]"
                    sizes="200px"
                  />
                </div>
              </div>

              <h3 className="mt-8 text-center font-serif text-2xl">Floriane</h3>

              <div className="prose-body mt-6 space-y-4 text-justify">
                <p>
                  <strong>Éducatrice de jeunes enfants</strong> depuis 22 ans et
                  directrice d&apos;un jardin d&apos;enfants, j&apos;ai tout
                  d&apos;abord commencé à pratiquer le Qi-Gong et la méditation puis
                  le Yoga pour apprendre à lâcher-prise, me délester, me recentrer sur
                  moi-même, connaître et respecter mon corps, adopter les bonnes
                  postures dans le milieu professionnel dans lequel j&apos;exerçais.
                  Puis, voulant aller plus loin dans ma pratique et comprendre
                  l&apos;histoire du yoga (et des différents styles), je me suis formée
                  tout d&apos;abord pour moi-même puis pour enseigner le{" "}
                  <strong>Vinyasa</strong> (et ses Flows), le <strong>Yin Yoga</strong>
                  , et enfin je me suis formée au <strong>Yoga restauratif</strong> pour
                  adapter la pratique aux différentes pathologies rencontrées par les
                  élèves (cancers, endométriose, burn-out…). Je suis en cours de
                  formation certifiée « Lymphe Flow experts » pour accompagner les
                  femmes durant les différents cycles de la vie.
                </p>
                <p>Toutes mes formations sont reconnues et certifiées.</p>
                <p>
                  Je me suis tout naturellement formée et spécialisée chez les{" "}
                  <strong>enfants</strong> (j&apos;interviens dans les crèches, MAM,
                  jardins d&apos;enfants, Relais d&apos;Assistants Maternels…), les{" "}
                  <strong>femmes enceintes</strong> et les <strong>seniors</strong>{" "}
                  (EHPAD et interventions dans différentes associations sportives).
                </p>
                <p>
                  <strong>Ancienne sportive de haut niveau en natation</strong>, je suis
                  formée et j&apos;anime des séances individuelles et/ou collectives
                  dans différentes disciplines sportives (triathlon, course à pieds,
                  football…) afin de préparer les sportifs aux diverses compétitions et
                  grands évènements.
                </p>
              </div>

              <div className="mt-10 text-center">
                <ReservationButton location="qui-suis-je" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-[var(--spacing-section)]">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-6">
            <Reveal className="lg:col-span-5">
              <p className="label mb-6">Formations</p>
              <h2 className="font-serif">Certifications</h2>
              <ul className="mt-8 space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <li
                    key={cert}
                    className="border-l-2 border-clay-400 pl-4 text-[15px] leading-relaxed text-ink-600"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
              <p className="label mb-6">Spécialités</p>
              <h2 className="font-serif">Domaines d&apos;expertise</h2>
              <ul className="mt-8 space-y-4">
                {EXPERTISE.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] leading-relaxed text-ink-600"
                  >
                    · {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-sand-200 bg-sand-100 py-[var(--spacing-section)]">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="label mb-6">Philosophie</p>
            <h2 className="font-serif">Une pédagogie humaine</h2>
            <p className="prose-body mt-8">
              Chaque séance est préparée selon l&apos;énergie du groupe. Floriane
              accueille 13 élèves maximum pour garantir un accompagnement
              personnalisé. Que vous soyez débutant, enceinte, sportif ou en
              convalescence, vous trouverez une pratique adaptée à votre situation.
            </p>
            <p className="prose-body mt-6">
              Découvrez le{" "}
              <Link
                href="/cours"
                className="text-ink-900 underline decoration-clay-400 underline-offset-2"
              >
                planning des cours
              </Link>{" "}
              et les{" "}
              <Link
                href="/ateliers"
                className="text-ink-900 underline decoration-clay-400 underline-offset-2"
              >
                ateliers thématiques
              </Link>{" "}
              tout au long de l&apos;année.
            </p>
          </Reveal>
        </Container>
      </section>

      <FinalCTASection primaryLocation="qui-suis-je-final" />
    </>
  );
}
