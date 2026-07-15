import Image from "next/image";
import Link from "next/link";
import type { Atelier } from "@/content/ateliers";

type AtelierCardProps = {
  atelier: Atelier;
  priority?: boolean;
  layout?: "vertical" | "horizontal";
};

export function AtelierCard({
  atelier,
  priority = false,
  layout = "vertical",
}: AtelierCardProps) {
  const priceDisplay =
    atelier.priceLabel ??
    (atelier.price !== null ? `${atelier.price} €` : "Sur inscription");

  const body = (
    <div className="flex flex-1 flex-col p-5 md:p-6">
      <time dateTime={atelier.date} className="label text-blush-600">
        {atelier.dateDisplay} · {atelier.time}
      </time>
      <h2 className="mt-2 font-serif text-xl tracking-tight md:text-2xl">
        <Link
          href={`/ateliers/${atelier.slug}`}
          className="transition-colors hover:text-blush-600"
        >
          {atelier.title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-600">
        {atelier.excerpt}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-[13px] text-ink-600">
        <span>{atelier.duration}</span>
        <span aria-hidden="true">·</span>
        <span className="font-medium text-ink-900">{priceDisplay}</span>
      </div>
      <Link
        href={`/ateliers/${atelier.slug}`}
        className="label mt-5 inline-flex items-center gap-2 transition-colors hover:text-blush-600"
      >
        En savoir plus
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );

  const imageLink = (
    <Link
      href={`/ateliers/${atelier.slug}`}
      className={`relative block shrink-0 overflow-hidden bg-wash-cream ${
        layout === "horizontal"
          ? "aspect-[3/4] w-full rounded-t-card sm:aspect-auto sm:h-auto sm:w-[38%] sm:max-w-[240px] sm:rounded-none sm:rounded-l-card"
          : "aspect-[3/4] w-full rounded-t-card sm:aspect-[4/5]"
      }`}
    >
      <Image
        src={atelier.image}
        alt={atelier.imageAlt}
        fill
        className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02] sm:p-3"
        sizes={
          layout === "horizontal"
            ? "(max-width: 640px) 100vw, 220px"
            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
        priority={priority}
      />
    </Link>
  );

  return (
    <article
      className={`group surface-card overflow-hidden rounded-card transition-transform duration-500 hover:-translate-y-1 ${
        layout === "horizontal"
          ? "flex flex-col sm:min-h-[260px] sm:flex-row"
          : "flex h-full flex-col"
      }`}
    >
      {imageLink}
      {body}
    </article>
  );
}
