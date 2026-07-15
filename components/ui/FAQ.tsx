import type { FAQItem } from "@/content/faq";
import { getFAQJsonLd } from "@/lib/json-ld";

type FAQProps = {
  items: FAQItem[];
  title?: string;
};

export function FAQ({ items, title = "Questions fréquentes" }: FAQProps) {
  const faqJsonLd = getFAQJsonLd(items);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h2 className="font-serif">{title}</h2>
      <div className="surface-card mt-8 divide-y divide-sand-200 overflow-hidden rounded-card px-6 md:px-8">
        {items.map((item) => (
          <details key={item.id} className="group py-6">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[17px] font-medium text-ink-900 [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <span
                className="mt-1 shrink-0 text-clay-400 transition-transform duration-300 group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="prose-body mt-4 max-w-none">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
