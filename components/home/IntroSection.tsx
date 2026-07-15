import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

export function IntroSection() {
  return (
    <section className="py-[var(--spacing-section)]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5">
            <p className="label mb-6">Qui anime les cours ?</p>
            <h2 className="font-serif">
              Floriane Relave Jamon
            </h2>
            <p className="prose-body mt-8">
              Qui est la professeure de Flow Yoga ? Floriane Relave Jamon,
              éducatrice de jeunes enfants depuis 22 ans, vous accompagne en
              vinyasa, yin, yoga restauratif et prénatal à Saint-Just-Saint-Rambert.
            </p>
            <p className="prose-body mt-6">
              Entrée par le Qi-Gong et la méditation, elle a trouvé dans le yoga
              un espace pour lâcher prise et se recentrer. Certifiée en Vinyasa,
              Yin Yoga et Yoga restauratif, elle accompagne aussi les femmes enceintes,
              les seniors et les sportifs de haut niveau.
            </p>
            <div className="mt-8">
              <Button href="/qui-suis-je" variant="secondary">
                Découvrir son parcours
              </Button>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <ParallaxImage
              src="/images/floriane-portrait.jpg"
              alt="Floriane Relave Jamon, professeure de yoga certifiée à Saint-Just-Saint-Rambert"
              aspectRatio="4/5"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </div>

        <Reveal className="surface-card mt-20 rounded-shell p-8 md:p-10">
          <p className="label mb-4">Première fois ?</p>
          <h3 className="font-serif text-2xl tracking-tight">
            Votre séance d&apos;essai à 19 €
          </h3>
          <p className="prose-body mt-4">
            Jamais fait de yoga ? Chaque séance dure 1h, dans un groupe de 13
            élèves maximum. Apportez un tapis, 2 briques et une sangle · Floriane
            adapte les postures à l&apos;énergie du groupe, quel que soit votre
            niveau.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 text-[15px] text-ink-600 md:grid-cols-2">
            <li>· Tapis de yoga + 2 briques + 1 sangle</li>
            <li>· Pratique idéalement à jeun</li>
            <li>· Matériel expliqué en début de séance</li>
            <li>· Annulation possible 24h avant sur Momoyoga</li>
          </ul>
          <p className="mt-6 text-[14px] text-ink-600">
            Questions ?{" "}
            <Link
              href="/contact"
              className="text-ink-900 underline decoration-clay-400 underline-offset-2"
            >
              Contactez {CONTACT.founder}
            </Link>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
