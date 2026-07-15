"use client";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";

const REVEAL_ITEMS = [
  "Reveal au scroll · opacity 0→1",
  "Translation Y 24px→0",
  "Duration 0.8s · ease [0.16, 1, 0.3, 1]",
  "viewport once · margin -15%",
] as const;

export function StyleguideAnimations() {
  return (
    <section id="animations" className="scroll-mt-32 py-[var(--spacing-section)]">
      <Container>
        <p className="label mb-6">07</p>
        <h2 className="font-serif">Animations</h2>
        <div className="divider mt-10" />

        <div className="mt-16 grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <p className="label mb-6">Reveal</p>
            <p className="prose-body mb-10">
              Wrapper générique Motion. Scroll vers le bas pour voir les
              éléments apparaître.
            </p>
            <div className="space-y-4">
              {REVEAL_ITEMS.map((item, index) => (
                <Reveal key={item} delay={index * 0.1} as="div">
                  <div className="border border-sand-200 px-6 py-4">
                    <p className="text-[15px] text-ink-900">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="label mb-6">SplitHeading</p>
            <p className="prose-body mb-10">
              Titre serif révélé ligne par ligne. Mesure automatique des retours
              à la ligne · stagger 0.08s.
            </p>
            <SplitHeading
              as="h2"
              className="text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-[-0.03em]"
            >
              Respirer, bouger, se retrouver au bord de la Loire
            </SplitHeading>
            <div className="mt-16">
              <SplitHeading
                as="h3"
                className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.1] tracking-[-0.03em]"
                delay={0.2}
              >
                Flow Yoga · Saint-Just-Saint-Rambert
              </SplitHeading>
            </div>
          </div>
        </div>

        <Reveal delay={0.2} className="mt-20">
          <div className="border border-sand-200 p-8">
            <p className="label mb-4">prefers-reduced-motion</p>
            <p className="prose-body">
              Toutes les animations sont neutralisées si l&apos;utilisateur
              préfère moins de mouvement. Le contenu reste immédiatement
              visible et accessible.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
