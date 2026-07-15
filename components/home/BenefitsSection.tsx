import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { BENEFITS } from "@/content/benefits";

const BENEFIT_LAYOUT = [
  "sm:col-span-2 lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
] as const;

function BenefitGlyph({ id }: { id: (typeof BENEFITS)[number]["id"] }) {
  const className = "h-5 w-5 text-clay-600";

  switch (id) {
    case "sante":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M12 20c-4-3.2-7-6.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 3.6-3 6.8-7 10Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "sommeil":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M20 14.5A7.5 7.5 0 0 1 9.5 4 6.5 6.5 0 1 0 20 14.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "esprit":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M12 3v18M7 8h10M8 12h8M9 16h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "tonus":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M8 14l3-6 3 4 2-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "dos":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M12 4v16M9 7h6M8.5 12h7M9 17h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "souplesse":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M4 14c3-6 6-8 10-8s5 3 6 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden border-t border-sand-200 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
      <div
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-blush-400/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-wash-sky/80 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-6">
          <Reveal className="lg:col-span-7">
            <p className="pill-tag mb-5 w-fit text-clay-600">Bienfaits</p>
            <h2 className="heading-section max-w-2xl">
              Ce que le yoga vous apporte
            </h2>
            <p className="prose-body mt-6 max-w-xl">
              Pourquoi pratiquer le yoga à Saint-Just-Saint-Rambert ? Six
              bénéfices concrets, ressentis dès les premières séances par les
              élèves de Flow Yoga.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <div className="surface-card rounded-shell p-6 md:p-8">
              <p className="font-serif text-4xl tracking-tight text-ink-900">
                6
              </p>
              <p className="label mt-2 text-clay-600">dimensions du bien-être</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
                Corps, souffle, esprit : la pratique agit sur tout ce qui compte
                au quotidien, sans performance ni compétition.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-12 lg:gap-5">
          {BENEFITS.map((benefit, index) => {
            const isFeatured = index === 0;

            return (
              <Reveal
                key={benefit.id}
                delay={index * 0.05}
                className={`group relative overflow-hidden rounded-card border border-sand-200/80 bg-sand-50/90 p-7 shadow-[0_14px_36px_rgba(28,26,23,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-clay-400/35 hover:shadow-[0_22px_48px_rgba(173,31,95,0.12)] md:p-8 ${BENEFIT_LAYOUT[index]} ${isFeatured ? "min-h-[280px] lg:min-h-[360px]" : ""}`}
              >
                <span
                  className="pointer-events-none absolute -right-2 -top-4 font-serif text-[5.5rem] leading-none text-blush-400/20 transition-transform duration-500 group-hover:scale-105"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-clay-400/70 via-blush-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-blush-400/25 bg-blush-50/80 shadow-[0_8px_20px_rgba(173,31,95,0.08)]">
                  <BenefitGlyph id={benefit.id} />
                </div>

                <h3
                  className={`relative mt-6 font-serif tracking-tight text-ink-900 ${isFeatured ? "text-2xl md:text-3xl" : "text-xl"}`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`relative mt-4 leading-relaxed text-ink-600 ${isFeatured ? "max-w-md text-[16px]" : "text-[15px]"}`}
                >
                  {benefit.description}
                </p>

                {isFeatured ? (
                  <p className="label relative mt-8 text-clay-600">
                    Le pilier de votre vitalité
                  </p>
                ) : null}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
