import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import type { LegalSection } from "@/content/cgv";

type LegalLayoutProps = {
  title: string;
  label: string;
  intro?: string[];
  sections: LegalSection[];
  lastUpdated?: string;
  children?: ReactNode;
};

function flattenSections(sections: LegalSection[]) {
  const items: { id: string; title: string; level: number }[] = [];

  for (const section of sections) {
    items.push({ id: section.id, title: section.title, level: 1 });
    if (section.subsections) {
      for (const sub of section.subsections) {
        items.push({ id: sub.id, title: sub.title, level: 2 });
      }
    }
  }

  return items;
}

function renderParagraphs(paragraphs: string[]) {
  return paragraphs.map((paragraph) => (
    <p
      key={paragraph.slice(0, 40)}
      className="mt-4 text-[17px] leading-[1.7] text-ink-600 first:mt-0"
    >
      {paragraph}
    </p>
  ));
}

export function LegalLayout({
  title,
  label,
  intro,
  sections,
  lastUpdated,
}: LegalLayoutProps) {
  const toc = flattenSections(sections);

  return (
    <div className="pb-[var(--spacing-section)] pt-32">
      <Container>
        <nav aria-label="Fil d'Ariane" className="label mb-8">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-clay-600">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>

        <p className="label mb-6">{label}</p>
        <h1 className="font-serif">{title}</h1>

        {intro?.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="prose-body mt-8">
            {paragraph}
          </p>
        ))}

        {lastUpdated && (
          <p className="mt-4 text-[14px] text-ink-600">
            Dernière mise à jour : {lastUpdated}
          </p>
        )}

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6">
          <aside className="lg:col-span-3">
            <nav
              className="lg:sticky lg:top-28"
              aria-label="Sommaire"
            >
              <p className="label mb-4">Sommaire</p>
              <ul className="space-y-2 border-l border-sand-200 pl-4">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block text-[14px] leading-snug transition-colors hover:text-clay-600 ${
                        item.level === 2
                          ? "mt-1 pl-3 text-ink-600"
                          : "font-medium text-ink-900"
                      }`}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="max-w-[70ch] lg:col-span-8 lg:col-start-5">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-32 border-t border-sand-200 py-10 first:border-t-0 first:pt-0"
              >
                <h2 className="font-serif text-2xl tracking-tight text-ink-900">
                  {section.title}
                </h2>
                {section.paragraphs && renderParagraphs(section.paragraphs)}

                {section.subsections?.map((sub) => (
                  <div
                    key={sub.id}
                    id={sub.id}
                    className="scroll-mt-32 mt-8"
                  >
                    <h3 className="font-serif text-xl tracking-tight text-ink-900">
                      {sub.title}
                    </h3>
                    {renderParagraphs(sub.paragraphs)}
                  </div>
                ))}
              </section>
            ))}
          </article>
        </div>
      </Container>
    </div>
  );
}
