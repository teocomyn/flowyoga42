import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Button, ReservationButton } from "@/components/ui/Button";

type FinalCTASectionProps = {
  primaryLocation?: string;
  showAteliersLink?: boolean;
};

export function FinalCTASection({
  primaryLocation = "final-cta",
  showAteliersLink = true,
}: FinalCTASectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-sand-200 py-[var(--spacing-section)]">
      <Image
        src="/images/cta-mandala.jpg"
        alt=""
        fill
        className="object-cover object-bottom opacity-50"
        sizes="100vw"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-blush-50/95 via-sand-50/90 to-sand-50/75"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal className="surface-card mx-auto max-w-3xl rounded-shell p-10 text-center md:p-14">
          <p className="label mb-6 text-clay-600">Réserver</p>
          <SplitHeading as="h2" className="heading-section mx-auto">
            Cours ou atelier ?
          </SplitHeading>
          <p className="prose-body mx-auto mt-8">
            Choisissez votre créneau sur Momoyoga et venez avec votre tapis.
            Séance d&apos;essai à 19 €, sans engagement.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ReservationButton location={primaryLocation} />
            <Button href="/tarifs" variant="secondary">
              Voir les tarifs
            </Button>
            {showAteliersLink ? (
              <Button href="/ateliers" variant="ghost">
                Voir les ateliers
              </Button>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
