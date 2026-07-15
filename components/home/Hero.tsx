"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { ReservationButton } from "@/components/ui/Button";

const HERO_HIGHLIGHTS = [
  "Essai · 19 €",
  "13 max",
  "Mar.–Ven.",
  "Loire (42)",
] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-wash-cream md:mx-5 md:mt-28 md:overflow-hidden md:rounded-hero md:shadow-[0_28px_70px_rgba(28,26,23,0.12)]">
      {/* Mobile : image visible dès l'arrivée */}
      <div className="md:hidden">
        <div className="relative px-4 pt-[5.25rem]">
          <div className="relative aspect-[5/4] min-h-[42svh] max-h-[360px] overflow-hidden rounded-[1.75rem] shadow-[0_16px_40px_rgba(28,26,23,0.1)]">
            <Image
              src="/images/hero-cours.jpg"
              alt="Cours de yoga vinyasa à Saint-Just-Saint-Rambert · Flow Yoga Loire"
              fill
              className="scale-105 object-cover object-[42%_38%]"
              priority
              sizes="100vw"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-900/80 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
              <p className="pill-tag w-fit border-sand-100/25 bg-sand-50/15 text-sand-50/90">
                Saint-Just-Saint-Rambert
              </p>
              <h1 className="mt-3 font-serif text-[clamp(2rem,7.5vw,2.75rem)] leading-[0.98] text-sand-50">
                Yoga au bord de la Loire
              </h1>
            </div>
          </div>
        </div>

        <div className="px-5 pb-6 pt-4">
          <p className="text-[16px] font-medium leading-snug text-ink-900">
            Vinyasa, yin, restauratif & prénatal · Floriane Relave Jamon
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
            Cours du mardi au vendredi · séance d&apos;essai 19 € sur Momoyoga.
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {HERO_HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-sand-200/90 bg-sand-50 px-3 py-1 text-[12px] font-medium text-ink-700"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ReservationButton location="hero" className="w-full sm:w-auto" />
            <Link
              href="/cours"
              className="inline-flex w-full items-center justify-center rounded-full border border-sand-200 bg-sand-50 px-6 py-3 text-[15px] font-medium transition-colors hover:border-clay-400 hover:bg-wash-cream sm:w-auto"
            >
              Voir les cours
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop : split texte + image */}
      <div className="hidden min-h-[80vh] md:flex md:flex-row">
        <div className="relative z-10 flex max-w-[50%] flex-1 flex-col justify-center px-10 py-16 lg:px-14 lg:py-20">
          <p className="pill-tag w-fit border-sand-200/80 bg-sand-50 text-clay-600">
            Saint-Just-Saint-Rambert · Loire (42)
          </p>

          <SplitHeading
            as="h1"
            className="mt-5 max-w-xl text-[clamp(2.25rem,4vw,4.5rem)] text-ink-900"
            delay={0.08}
          >
            Yoga au bord de la Loire
          </SplitHeading>

          <p className="mt-5 max-w-lg text-[18px] font-medium leading-snug text-ink-900">
            Cours de yoga à Saint-Just-Saint-Rambert · vinyasa, yin,
            restauratif et prénatal avec Floriane.
          </p>

          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-ink-600">
            Du mardi au vendredi, en petit groupe bienveillant. Réservez votre
            séance d&apos;essai à 19 € sur Momoyoga.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {HERO_HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-sand-200/90 bg-sand-50 px-3.5 py-1.5 text-[13px] font-medium text-ink-700"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <ReservationButton location="hero" />
            <Link
              href="/cours"
              className="inline-flex items-center justify-center rounded-full border border-sand-200 bg-sand-50 px-6 py-3 text-[15px] font-medium transition-colors hover:border-clay-400 hover:bg-wash-cream"
            >
              Voir les cours
            </Link>
          </div>
        </div>

        <div className="relative min-h-[80vh] flex-1 overflow-hidden bg-sand-100">
          <Image
            src="/images/hero-cours.jpg"
            alt="Cours de yoga vinyasa à Saint-Just-Saint-Rambert · Flow Yoga Loire"
            fill
            className="scale-[1.18] object-cover object-[42%_38%]"
            priority
            sizes="55vw"
          />
        </div>
      </div>

      <motion.div
        className="mx-auto hidden h-10 w-px bg-clay-400/50 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden="true"
      >
        <motion.div
          className="h-full w-full origin-top"
          animate={prefersReducedMotion ? undefined : { scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
