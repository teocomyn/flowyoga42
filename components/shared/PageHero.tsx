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
  tone?: "dark" | "light";
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
  tone = "dark",
  children,
}: PageHeroProps) {
  if (tone === "light") {
    const alignClass =
      align === "center" ? "text-center items-center" : "text-left items-start";

    return (
      <section className="bg-wash-cream px-4 pb-4 pt-24 md:px-6 md:pt-28">
        <div className="mx-auto max-w-[1320px] overflow-hidden rounded-hero bg-wash-cream shadow-[0_24px_60px_rgba(28,26,23,0.1)]">
          <div
            className={`flex flex-col ${
              size === "tall" ? "md:min-h-[64vh]" : "md:min-h-[52vh]"
            } md:flex-row`}
          >
            <Container
              className={`flex flex-1 flex-col justify-center py-10 md:max-w-[48%] md:py-14 ${alignClass}`}
            >
              <p
                className={`pill-tag mb-5 w-fit border-sand-200/80 bg-sand-50 text-clay-600 ${
                  align === "center" ? "mx-auto" : ""
                }`}
              >
                {label}
              </p>
              <SplitHeading
                as="h1"
                className={`max-w-3xl text-ink-900 ${align === "center" ? "mx-auto" : ""}`}
              >
                {title}
              </SplitHeading>
              {description ? (
                <p
                  className={`mt-5 max-w-xl text-[17px] leading-relaxed text-ink-600 ${
                    align === "center" ? "mx-auto" : ""
                  }`}
                >
                  {description}
                </p>
              ) : null}
              {children ? (
                <div className={`mt-8 ${align === "center" ? "mx-auto" : ""}`}>
                  {children}
                </div>
              ) : null}
            </Container>

            <div className="relative aspect-[4/3] max-h-[280px] w-full md:aspect-auto md:max-h-none md:min-h-[52vh] md:flex-1">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover object-[center_18%] saturate-[1.04]"
                priority
                sizes="(max-width: 768px) 100vw, 52vw"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const heightClass =
    size === "tall"
      ? "min-h-[52vh] md:min-h-[68vh]"
      : "min-h-[44vh] md:min-h-[54vh]";
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section className="px-4 pb-4 pt-24 md:px-6 md:pt-28">
      <div
        className={`relative mx-auto flex max-w-[1320px] ${heightClass} items-end overflow-hidden rounded-hero shadow-[0_24px_60px_rgba(28,26,23,0.1)]`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/35 to-ink-900/5"
          aria-hidden="true"
        />
        <Container
          className={`relative z-10 flex flex-col pb-10 pt-16 md:pb-16 md:pt-20 ${alignClass}`}
        >
          <p
            className={`pill-tag mb-5 border-sand-100/20 bg-sand-50/10 text-sand-100/90 backdrop-blur-sm ${
              align === "center" ? "mx-auto" : ""
            }`}
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
              className={`mt-5 max-w-xl text-[17px] leading-relaxed text-sand-100/90 ${
                align === "center" ? "mx-auto" : ""
              }`}
            >
              {description}
            </p>
          ) : null}
          {children ? (
            <div className={`mt-8 ${align === "center" ? "mx-auto" : ""}`}>
              {children}
            </div>
          ) : null}
        </Container>
      </div>
    </section>
  );
}
