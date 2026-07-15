import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { SplitHeading } from "@/components/motion/SplitHeading";

type PageHeroProps = {
  image: string;
  imageAlt: string;
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "default" | "tall";
  children?: ReactNode;
};

export function PageHero({
  image,
  imageAlt,
  label,
  title,
  description,
  align = "center",
  size = "tall",
  children,
}: PageHeroProps) {
  const heightClass =
    size === "tall"
      ? "min-h-[68vh] md:min-h-[78vh]"
      : "min-h-[55vh] md:min-h-[60vh]";
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section
      className={`relative flex ${heightClass} items-end overflow-hidden hero-grain`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover scale-105"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink-900/88 via-blush-900/45 to-blush-600/15"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink-900/30 via-transparent to-transparent"
        aria-hidden="true"
      />
      <Container
        className={`relative z-10 flex flex-col pb-20 pt-36 md:pb-28 ${alignClass}`}
      >
        <p
          className={`label mb-4 text-sand-100/90 ${align === "center" ? "mx-auto" : ""}`}
        >
          {label}
        </p>
        <SplitHeading
          as="h1"
          className={`max-w-4xl text-sand-50 ${align === "center" ? "mx-auto" : ""}`}
        >
          {title}
        </SplitHeading>
        {description ? (
          <p
            className={`mt-6 max-w-xl text-[17px] leading-relaxed text-sand-100/90 ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        ) : null}
        {children ? (
          <div className={`mt-10 ${align === "center" ? "mx-auto" : ""}`}>
            {children}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
