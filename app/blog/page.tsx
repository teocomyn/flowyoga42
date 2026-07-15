import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/shared/PageHero";
import { BLOG_POSTS } from "@/content/blog";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { PAGE_HEROES } from "@/lib/media";

export const metadata = createPageMetadata({
  title: "Blog yoga · conseils et guides Loire (42)",
  description:
    "Articles yoga à Saint-Just-Saint-Rambert : guide local, débutant, prénatal, tarifs, yoga en extérieur et ateliers Flow Yoga en Loire.",
  path: "/blog",
});

export default function BlogPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        image={PAGE_HEROES.cours}
        imageAlt="Blog Flow Yoga · cours de yoga en Loire"
        label="Conseils & guides · Loire (42)"
        title="Blog Flow Yoga"
        description="Guides pratiques pour choisir votre yoga, comprendre les tarifs et découvrir les cours à Saint-Just-Saint-Rambert."
        align="left"
        tone="light"
      />

      <section className="pb-[var(--spacing-section)]">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {sortedPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05}>
                <article className="group surface-card flex h-full flex-col overflow-hidden rounded-card transition-transform duration-500 hover:-translate-y-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden rounded-t-card bg-wash-cream"
                  >
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <p className="label text-clay-600">{post.category}</p>
                    <h2 className="mt-3 font-serif text-2xl tracking-tight">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition-colors hover:text-clay-600"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-600">
                      {post.excerpt}
                    </p>
                    <p className="label mt-6 text-ink-600">
                      {post.readingTimeMinutes} min ·{" "}
                      {new Date(post.publishedAt).toLocaleDateString("fr-FR")}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
