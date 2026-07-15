"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { ReservationButton } from "@/components/ui/Button";

const HERO_HIGHLIGHTS = [
  "Séance d'essai · 19 €",
  "13 élèves max",
  "Mar. → Ven.",
  "Saint-Just · Loire",
] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-wash-cream md:mx-5 md:mt-28 md:overflow-hidden md:rounded-hero md:shadow-[0_28px_70px_rgba(28,26,23,0.12)]">
      <div className="flex flex-col md:min-h-[80vh] md:flex-row">
        <div className="relative z-10 flex flex-col justify-center px-5 pb-8 pt-[5.75rem] md:max-w-[50%] md:flex-1 md:px-10 md:py-16 lg:px-14 lg:py-20">
          <p className="pill-tag w-fit border-sand-200/80 bg-sand-50 text-clay-600">
            Saint-Just-Saint-Rambert · Loire (42)
          </p>

          <SplitHeading
            as="h1"
            className="mt-5 max-w-xl text-[clamp(2.25rem,8vw,4.5rem)] text-ink-900"
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

        <div className="relative mx-4 mb-6 mt-2 aspect-[5/4] max-h-[240px] overflow-hidden rounded-[1.75rem] md:mx-0 md:mb-0 md:mt-0 md:aspect-auto md:max-h-none md:min-h-[80vh] md:flex-1 md:rounded-none">
          <Image
            src="/images/hero-cours.jpg"
            alt="Cours de yoga vinyasa à Saint-Just-Saint-Rambert · Flow Yoga Loire"
            fill
            className="object-cover object-[70%_25%]"
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <div
            className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-wash-cream to-transparent md:block lg:w-32"
            aria-hidden="true"
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
