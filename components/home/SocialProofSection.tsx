import dynamic from "next/dynamic";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TestimonialMarquee } from "@/components/ui/TestimonialMarquee";

const PracticeFinder = dynamic(() =>
  import("@/components/ui/PracticeFinder").then((mod) => mod.PracticeFinder),
);

export function TestimonialsSection() {
  return (
    <section className="border-t border-sand-200 py-[var(--spacing-section)]">
      <Container>
        <Reveal>
          <p className="label mb-6">Avis</p>
          <h2 className="font-serif">Ce qu&apos;en disent les élèves</h2>
        </Reveal>
      </Container>
      <div className="mt-12">
        <TestimonialMarquee />
      </div>
    </section>
  );
}

export function PracticeFinderSection() {
  return (
    <section className="border-t border-sand-200 py-[var(--spacing-section)]">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5">
            <p className="label mb-6">Parcours personnalisé</p>
            <h2 className="font-serif">Quelle pratique vous correspond ?</h2>
            <p className="prose-body mt-6">
              Vous hésitez entre vinyasa, yin ou restauratif ? Répondez à trois
              questions pour obtenir une recommandation de pratique et de
              formule tarifaire adaptée à votre situation.
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <PracticeFinder />
          </div>
        </div>
      </Container>
    </section>
  );
}
