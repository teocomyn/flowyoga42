import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FAQ } from "@/components/ui/FAQ";
import { ScheduleTable } from "@/components/ui/ScheduleTable";
import { Button, ReservationButton } from "@/components/ui/Button";
import { DetailHero } from "@/components/shared/DetailHero";
import { FinalCTASection } from "@/components/shared/FinalCTASection";
import { COURS_FAQ } from "@/content/faq-cours";
import {
  COURSE_SLUGS,
  getCourseBySlug,
  isCourseSlug,
} from "@/content/courses";
import { getScheduleBySlug } from "@/content/schedule";
import { getBreadcrumbJsonLd, getCourseJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

const StickyCTA = dynamic(() =>
  import("@/components/ui/StickyCTA").then((mod) => mod.StickyCTA),
);

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return COURSE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  if (!isCourseSlug(slug)) return {};

  const course = getCourseBySlug(slug);
  if (!course) return {};

  return createPageMetadata({
    title: `Cours de Yoga ${course.shortTitle} à Saint-Just-Saint-Rambert`,
    description: course.metaDescription,
    path: `/cours/${slug}`,
  });
}

function getCourseFAQ(slug: string) {
  const relevant = COURS_FAQ.filter(
    (item) =>
      item.id === "ou" ||
      item.id === "materiel" ||
      item.id === "debutant" ||
      item.id === "reservation" ||
      (slug === "prenatal" && item.id === "prenatal") ||
      (slug === "enfants" && item.id === "materiel"),
  );
  return relevant.length > 0 ? relevant : COURS_FAQ.slice(0, 5);
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isCourseSlug(slug)) notFound();

  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const courseSchedule = getScheduleBySlug(slug);
  const courseFaq = getCourseFAQ(slug);

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Cours", path: "/cours" },
    { name: course.title, path: `/cours/${slug}` },
  ]);

  const courseJsonLd = getCourseJsonLd(course);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      <DetailHero
        image={course.image}
        imageAlt={course.imageAlt}
        label="Pratique · Flow Yoga"
        title={`Cours de ${course.title}`}
      />

      <div className="pb-[var(--spacing-section)]">
        <Container>
          <nav aria-label="Fil d'Ariane" className="label mb-12 pt-10">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="hover:text-clay-600">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/cours" className="hover:text-clay-600">
                  Cours
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{course.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6">
            <Reveal className="lg:col-span-5">
              <p className="prose-body font-medium text-ink-900">{course.intro}</p>
              {course.description.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="prose-body mt-6">
                  {paragraph}
                </p>
              ))}
              <div className="mt-10 flex flex-wrap gap-4">
                <ReservationButton location={`cours-${slug}`} />
                <Button href="/tarifs" variant="secondary">
                  Voir les tarifs
                </Button>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
              <div className="surface-card relative aspect-[4/5] overflow-hidden rounded-card">
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </Container>

        <section className="pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
          <Container>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Reveal className="surface-card rounded-card p-8">
                <p className="label mb-4">Pour qui ?</p>
                <ul className="space-y-3">
                  {course.forWho.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-clay-400 pl-4 text-[15px] leading-relaxed text-ink-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="surface-card rounded-card p-8" delay={0.1}>
                <p className="label mb-4">Bénéfices</p>
                <ul className="space-y-3">
                  {course.benefits.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-clay-400 pl-4 text-[15px] leading-relaxed text-ink-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="surface-card rounded-card p-8" delay={0.2}>
                <p className="label mb-4">Infos pratiques</p>
                <ul className="space-y-3">
                  {course.practical.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-clay-400 pl-4 text-[15px] leading-relaxed text-ink-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="border-t border-sand-200 bg-wash-sky pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6">
              <Reveal className="lg:col-span-5">
                <p className="label mb-6">Tarifs</p>
                <h2 className="heading-section">Tarifs {course.title}</h2>
                <p className="prose-body mt-6">
                  Quel est le prix d&apos;un cours de {course.title.toLowerCase()}{" "}
                  ? Les tarifs saison 2026-2027 sont affichés ci-contre. Early
                  bird jusqu&apos;au 27/09/2026.
                </p>
              </Reveal>
              <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
                <ul className="surface-card divide-y divide-sand-200 overflow-hidden rounded-card">
                  {course.pricing.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between px-6 py-4"
                    >
                      <span className="text-[15px] text-ink-900">
                        {item.label}
                      </span>
                      <span className="font-medium text-ink-900">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[14px] text-ink-600">
                  <Link
                    href="/tarifs"
                    className="underline decoration-clay-400 underline-offset-2"
                  >
                    Grille tarifaire complète
                  </Link>{" "}
                  ·{" "}
                  <Link
                    href="/cgv"
                    className="underline decoration-clay-400 underline-offset-2"
                  >
                    CGV
                  </Link>
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {courseSchedule.length > 0 && (
          <section className="border-t border-sand-200 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
            <Container>
              <Reveal>
                <p className="label mb-6">Créneaux</p>
                <h2 className="heading-section">Planning {course.title}</h2>
              </Reveal>
              <div className="mt-10">
                <ScheduleTable filterSlug={slug} showNote={false} />
              </div>
              <Reveal className="mt-10">
                <ReservationButton location={`cours-${slug}-planning`} />
              </Reveal>
            </Container>
          </section>
        )}

        <section className="border-t border-sand-200 bg-sand-100 pb-[var(--spacing-section)] pt-[var(--spacing-section-inner)]">
          <Container>
            <Reveal>
              <FAQ items={courseFaq} title="Questions sur ce cours" />
            </Reveal>
          </Container>
        </section>
      </div>

      <FinalCTASection primaryLocation={`cours-${slug}-final`} />
      <StickyCTA />
    </>
  );
}
