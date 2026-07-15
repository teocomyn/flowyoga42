import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { SplitHeading } from "@/components/motion/SplitHeading";

type DetailHeroProps = {
  image: string;
  imageAlt: string;
  label: string;
  title: string;
  meta?: ReactNode;
};

export function DetailHero({
  image,
  imageAlt,
  label,
  title,
  meta,
}: DetailHeroProps) {
  return (
    <section className="px-4 pb-4 pt-24 md:px-6 md:pt-28">
      <div className="relative flex min-h-[48vh] items-end overflow-hidden rounded-hero hero-grain shadow-[0_24px_60px_rgba(28,26,23,0.1)] md:min-h-[54vh]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/50 to-blush-900/25"
          aria-hidden="true"
        />
        <Container className="relative z-10 pb-12 pt-20 md:pb-16 md:pt-24">
          <p className="pill-tag border-sand-100/20 bg-sand-50/10 text-sand-100/90 backdrop-blur-sm">
            {label}
          </p>
          {meta ? <div className="mt-4">{meta}</div> : null}
          <SplitHeading as="h1" className="mt-4 max-w-4xl text-sand-50">
            {title}
          </SplitHeading>
        </Container>
      </div>
    </section>
  );
}
