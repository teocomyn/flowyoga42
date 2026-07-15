import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { ReservationButton } from "@/components/ui/Button";
import { FEATURED_PRACTICES } from "@/content/practices";

export function PracticesSection() {
  return (
    <section className="border-t border-sand-200 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
      <Container>
        <Reveal>
          <p className="label mb-6">Pratiques</p>
          <h2 className="font-serif">Quatre façons de pratiquer</h2>
          <p className="prose-body mt-6">
            Quels cours de yoga sont proposés à Saint-Just-Saint-Rambert ?
            Vinyasa, yin, restauratif et prénatal · chaque pratique répond à un
            besoin différent, du dynamisme à la récupération profonde.
          </p>
        </Reveal>

        <div className="mt-12 space-y-[var(--spacing-section-inner)]">
          {FEATURED_PRACTICES.map((practice, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={practice.slug}
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-6"
              >
                <Reveal
                  className={
                    isReversed
                      ? "lg:col-span-5 lg:col-start-8"
                      : "lg:col-span-5"
                  }
                >
                  <p className="label mb-4">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="font-serif">{practice.title}</h3>
                  <p className="prose-body mt-6">{practice.summary}</p>
                  <Link
                    href={`/cours/${practice.slug}`}
                    className="label mt-6 inline-block transition-colors hover:text-clay-600"
                  >
                    Découvrir le cours →
                  </Link>
                </Reveal>

                <div
                  className={
                    isReversed
                      ? "lg:col-span-6 lg:col-start-1 lg:row-start-1"
                      : "lg:col-span-6 lg:col-start-7"
                  }
                >
                  <ParallaxImage
                    src={practice.image}
                    alt={practice.imageAlt}
                    aspectRatio="3/2"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center gap-6">
          <ReservationButton location="practices" />
          <Link
            href="/cours"
            className="label transition-colors hover:text-clay-600"
          >
            Voir tous les cours →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
