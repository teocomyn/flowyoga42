import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FAQ } from "@/components/ui/FAQ";
import { ReservationButton } from "@/components/ui/Button";
import { FinalCTASection } from "@/components/shared/FinalCTASection";
import type { BlogPost } from "@/content/blog/types";

type BlogArticleLayoutProps = {
  post: BlogPost;
};

export function BlogArticleLayout({ post }: BlogArticleLayoutProps) {
  return (
    <>
      <section className="px-4 pb-4 pt-24 md:px-6 md:pt-28">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-hero hero-grain shadow-[0_24px_60px_rgba(28,26,23,0.1)]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/55 to-blush-900/20"
            aria-hidden="true"
          />
          <Container className="relative z-10 flex min-h-[48vh] flex-col justify-end pb-12 pt-24 md:min-h-[52vh] md:pb-16">
            <p className="pill-tag w-fit border-sand-100/20 bg-sand-50/10 text-sand-100/90 backdrop-blur-sm">
              {post.category}
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] text-sand-50">
              {post.title}
            </h1>
            <p className="mt-4 text-[14px] text-sand-100/80">
              {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · {post.readingTimeMinutes} min de lecture
            </p>
          </Container>
        </div>
      </section>

      <article className="pb-[var(--spacing-section)]">
        <Container>
          <nav aria-label="Fil d'Ariane" className="label mb-10 pt-10">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="hover:text-clay-600">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-clay-600">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="line-clamp-1">
                {post.title}
              </li>
            </ol>
          </nav>

          <Reveal className="surface-card mx-auto max-w-3xl rounded-shell p-8 md:p-10">
            <p className="text-[18px] font-medium leading-relaxed text-ink-900">
              {post.intro}
            </p>
          </Reveal>

          <div className="mx-auto mt-12 max-w-3xl">
            {post.sections.map((section, index) => (
              <Reveal key={section.id} delay={index * 0.04} className="mt-12 first:mt-0">
                <h2
                  id={section.id}
                  className="heading-section text-[clamp(1.75rem,4vw,2.25rem)]"
                >
                  {section.heading}
                </h2>
                <div className="mt-6 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-[17px] leading-[1.75] text-ink-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((item) => (
                      <li
                        key={item.slice(0, 40)}
                        className="border-l-2 border-clay-400 pl-4 text-[15px] leading-relaxed text-ink-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            ))}

            <Reveal className="surface-card mt-14 rounded-card p-8 text-center">
              <p className="label text-clay-600">Réserver</p>
              <p className="mt-3 font-serif text-2xl tracking-tight">
                Prêt à rejoindre un cours ?
              </p>
              <p className="mx-auto mt-4 max-w-md text-[15px] text-ink-600">
                Séance d&apos;essai à 19 € · 13 élèves maximum · réservation sur
                Momoyoga.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ReservationButton location={`blog-${post.slug}`} />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-sand-200 px-6 py-3 text-[15px] font-medium transition-colors hover:border-clay-400 hover:bg-sand-100"
                >
                  Nous contacter
                </Link>
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <FAQ items={post.faq} title="Questions fréquentes" />
            </Reveal>

            <Reveal className="mt-10 flex flex-wrap gap-4 text-[14px]">
              <Link
                href="/blog"
                className="text-ink-900 underline decoration-clay-400 underline-offset-2"
              >
                ← Tous les articles
              </Link>
              <Link
                href="/cours"
                className="text-ink-900 underline decoration-clay-400 underline-offset-2"
              >
                Voir les cours
              </Link>
              <Link
                href="/tarifs"
                className="text-ink-900 underline decoration-clay-400 underline-offset-2"
              >
                Consulter les tarifs
              </Link>
            </Reveal>
          </div>
        </Container>
      </article>

      <FinalCTASection primaryLocation={`blog-${post.slug}-final`} />
    </>
  );
}
