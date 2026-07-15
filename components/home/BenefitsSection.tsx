import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { BENEFITS } from "@/content/benefits";

export function BenefitsSection() {
  return (
    <section className="border-t border-sand-200 bg-sand-100 py-[var(--spacing-section)]">
      <Container>
        <Reveal>
          <p className="label mb-6">Bienfaits</p>
          <h2 className="font-serif">Ce que le yoga vous apporte</h2>
          <p className="prose-body mt-6">
            Pourquoi pratiquer le yoga à Saint-Just-Saint-Rambert ? Six
            bénéfices concrets, ressentis dès les premières séances par les
            élèves de Flow Yoga.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px bg-sand-200 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <Reveal
              key={benefit.id}
              delay={index * 0.05}
              className="bg-sand-100 p-8"
            >
              <p className="label mb-4">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="font-serif text-xl tracking-tight">
                {benefit.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
                {benefit.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
