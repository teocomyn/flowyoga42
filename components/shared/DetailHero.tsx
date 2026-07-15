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
    <section className="relative flex min-h-[50vh] items-end overflow-hidden hero-grain md:min-h-[58vh]">
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
      <Container className="relative z-10 pb-14 pt-32 md:pb-20">
        <p className="label text-sand-100/90">{label}</p>
        {meta ? <div className="mt-3">{meta}</div> : null}
        <SplitHeading as="h1" className="mt-4 max-w-4xl text-sand-50">
          {title}
        </SplitHeading>
      </Container>
    </section>
  );
}
