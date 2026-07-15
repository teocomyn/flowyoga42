import dynamic from "next/dynamic";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { LocationCard } from "@/components/ui/LocationCard";
import { ReservationButton } from "@/components/ui/Button";
import { TestimonialMarquee } from "@/components/ui/TestimonialMarquee";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { FinalCTASection } from "@/components/shared/FinalCTASection";
import { CONTACT, LOCATIONS, SOCIAL } from "@/lib/constants";
import { LOCATION_IMAGES, PAGE_HEROES } from "@/lib/media";
import { getBreadcrumbJsonLd, getReviewsJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { TESTIMONIALS } from "@/content/testimonials";

const ContactMap = dynamic(() =>
  import("@/components/contact/ContactMap").then((mod) => mod.ContactMap),
);

const StickyCTA = dynamic(() =>
  import("@/components/ui/StickyCTA").then((mod) => mod.StickyCTA),
);

export const metadata = createPageMetadata({
  title: "Contact & Avis · Flow Yoga",
  description:
    "Contactez Flow Yoga à Saint-Just-Saint-Rambert : adresses Kin'Espace et Pôle Ressources, téléphone, email, avis clients et formulaire de contact.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);
  const reviewsJsonLd = getReviewsJsonLd([...TESTIMONIALS]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />

      <PageHero
        image={PAGE_HEROES.contact}
        imageAlt="Salle Kin'Espace · Flow Yoga Saint-Just-Saint-Rambert"
        label="Nous trouver · Loire (42)"
        title="Contact"
        description="Une question sur les cours, les tarifs ou les ateliers ? Floriane vous répond sous 48h."
        align="left"
      />

      <section className="pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <nav aria-label="Fil d'Ariane" className="label mb-12">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="hover:text-clay-600">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Contact</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-6">
            <Reveal className="lg:col-span-5">
              <p className="label mb-6">Écrire</p>
              <h2 className="heading-section">Formulaire</h2>
              <p className="prose-body mt-6">
                Réservation, renseignement, cours particulier ou intervention en
                structure : décrivez votre demande, nous revenons vers vous
                rapidement.
              </p>
              <div className="mt-8 surface-card rounded-card p-6 md:p-8">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
              <p className="label mb-6">Coordonnées</p>
              <h2 className="heading-section">Floriane Relave Jamon</h2>
              <address className="mt-8 not-italic">
                <ul className="space-y-4 text-[17px] text-ink-600">
                  <li>
                    <a
                      href={`tel:${CONTACT.phone}`}
                      className="font-medium text-ink-900 transition-colors hover:text-clay-600"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="font-medium text-ink-900 transition-colors hover:text-clay-600"
                    >
                      {CONTACT.email}
                    </a>
                  </li>
                  <li>{CONTACT.headquarters}</li>
                  <li className="label">SIREN {CONTACT.siren}</li>
                </ul>
              </address>
              <div className="mt-10 flex flex-wrap gap-6">
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label transition-colors hover:text-clay-600"
                >
                  Facebook
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label transition-colors hover:text-clay-600"
                >
                  Instagram
                </a>
              </div>
              <div className="mt-10">
                <ReservationButton location="contact-hero" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-sand-200 bg-wash-sky pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <Reveal>
            <p className="label mb-6">Carte</p>
            <h2 className="heading-section">Kin&apos;Espace</h2>
            <p className="prose-body mt-4">
              15 place Gapiand · Saint-Just-Saint-Rambert
            </p>
          </Reveal>
          <Reveal className="mt-8 overflow-hidden rounded-card border border-sand-200">
            <ContactMap />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-sand-200 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <Reveal>
            <p className="label mb-6">Lieux de pratique</p>
            <h2 className="heading-section">Deux salles en ville</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
            {LOCATIONS.map((location, index) => (
              <Reveal key={location.id} delay={index * 0.08}>
                <LocationCard
                  name={location.name}
                  address={location.address}
                  city={location.city}
                  landmark={location.landmark}
                  mapsUrl={location.mapsUrl}
                  image={LOCATION_IMAGES[location.id].src}
                  imageAlt={LOCATION_IMAGES[location.id].alt}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-sand-200 bg-blush-50/50 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
        <Container>
          <Reveal>
            <p className="label mb-6">Avis</p>
            <h2 className="heading-section">Ce qu&apos;en disent les élèves</h2>
          </Reveal>
        </Container>
        <div className="mt-12">
          <TestimonialMarquee />
        </div>
      </section>

      <FinalCTASection primaryLocation="contact-final" />
      <StickyCTA />
    </>
  );
}
