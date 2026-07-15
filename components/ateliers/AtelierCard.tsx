import Image from "next/image";
import Link from "next/link";
import type { Atelier } from "@/content/ateliers";

type AtelierCardProps = {
  atelier: Atelier;
  priority?: boolean;
};

export function AtelierCard({ atelier, priority = false }: AtelierCardProps) {
  const priceDisplay =
    atelier.priceLabel ??
    (atelier.price !== null ? `${atelier.price} €` : "Sur inscription");

  return (
    <article className="group surface-card flex h-full flex-col overflow-hidden rounded-card transition-transform duration-500 hover:-translate-y-1">
      <Link
        href={`/ateliers/${atelier.slug}`}
        className="relative block aspect-[4/5] overflow-hidden rounded-t-card bg-wash-cream"
      >
        <Image
          src={atelier.image}
          alt={atelier.imageAlt}
          fill
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <time dateTime={atelier.date} className="label text-blush-600">
          {atelier.dateDisplay} · {atelier.time}
        </time>
        <h2 className="mt-3 font-serif text-xl tracking-tight md:text-2xl">
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
        <div className="mt-5 flex flex-wrap items-center gap-3 text-[13px] text-ink-600">
          <span>{atelier.duration}</span>
          <span aria-hidden="true">·</span>
          <span className="font-medium text-ink-900">{priceDisplay}</span>
        </div>
        <Link
          href={`/ateliers/${atelier.slug}`}
          className="label mt-6 inline-flex items-center gap-2 transition-colors hover:text-blush-600"
        >
          En savoir plus
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
