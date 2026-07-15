"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

type SessionTypeCardProps = {
  title: string;
  image: string;
  imageAlt: string;
  href?: string;
  delay?: number;
  imageClassName?: string;
  featured?: boolean;
};

export function SessionTypeCard({
  title,
  image,
  imageAlt,
  href = "/contact",
  delay = 0,
  imageClassName = "object-cover",
  featured = false,
}: SessionTypeCardProps) {
  return (
    <Reveal delay={delay} className={featured ? "lg:col-span-2" : undefined}>
      <Link
        href={href}
        className="group surface-card flex h-full flex-col overflow-hidden rounded-sm transition-transform duration-500 hover:-translate-y-1"
      >
        <p className="px-5 pt-5 text-center font-serif text-lg text-clay-600">
          {title}
        </p>
        <div
          className={`relative mt-4 w-full overflow-hidden ${
            featured ? "aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={`transition-transform duration-700 group-hover:scale-[1.04] ${imageClassName}`}
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-blush-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>
        <p className="label px-5 py-4 text-center transition-colors group-hover:text-clay-600">
          En savoir plus →
        </p>
      </Link>
    </Reveal>
  );
}
