import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { AtelierCard } from "@/components/ateliers/AtelierCard";
import { Button } from "@/components/ui/Button";
import { getUpcomingAteliers } from "@/content/ateliers";

export function EventsSection() {
  const events = getUpcomingAteliers(3);

  return (
    <section className="border-t border-sand-200 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
      <Image
        src="/images/cta-mandala.jpg"
        alt=""
        fill
        className="object-cover object-bottom opacity-30"
        sizes="100vw"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-blush-50/95 via-sand-50/80 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal>
          <p className="label mb-6">Nouveautés</p>
          <h2 className="heading-section">Ateliers & évènements</h2>
          <p className="prose-body mt-6">
            Retraites urbaines, yoga brunch, yog&apos;hypnose, tarot-yoga…
            Découvrez les prochains rendez-vous Flow Yoga en Loire.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((atelier, index) => (
            <Reveal key={atelier.slug} delay={index * 0.08}>
              <AtelierCard atelier={atelier} priority={index === 0} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button href="/ateliers" variant="secondary">
            Voir tous les ateliers
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
