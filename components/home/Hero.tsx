"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { ReservationButton } from "@/components/ui/Button";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-wash-cream pt-24 hero-grain md:mx-5 md:mt-28 md:min-h-[82vh] md:flex-row md:rounded-hero md:shadow-[0_28px_70px_rgba(28,26,23,0.12)]">
      <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-14 pt-8 md:max-w-[46%] md:px-10 md:pb-20 md:pt-16 lg:px-14 lg:pb-24">
        <div
          className="pointer-events-none absolute -left-16 top-24 hidden h-56 w-56 rounded-full bg-blush-50/80 blur-3xl md:block"
          aria-hidden="true"
        />

        <p className="label mb-6 text-clay-600">Saint-Just-Saint-Rambert · Loire (42)</p>
        <SplitHeading as="h1" className="max-w-xl text-ink-900" delay={0.1}>
          Yoga au bord de la Loire
        </SplitHeading>
        <p className="mt-8 max-w-md text-[17px] leading-relaxed text-ink-600">
          Flow Yoga propose des cours de yoga à Saint-Just-Saint-Rambert, du
          mardi au vendredi. 13 élèves maximum, un accompagnement humain et
          bienveillant.
        </p>
        <div className="mt-10">
          <ReservationButton location="hero" />
        </div>
      </div>

      <div className="relative order-first h-[48vh] shrink-0 md:order-none md:h-auto md:min-h-[82vh] md:flex-1">
        <Image
          src="/images/hero-cours.jpg"
          alt="Cours de yoga vinyasa à Saint-Just-Saint-Rambert · Flow Yoga Loire"
          fill
          className="object-cover object-[68%_30%] md:object-[72%_28%]"
          priority
          sizes="(max-width: 768px) 100vw, 58vw"
        />

        <div
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-wash-cream to-transparent md:hidden"
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-wash-cream via-wash-cream/80 to-transparent md:block lg:w-36"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-blush-50/20"
          aria-hidden="true"
        />
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden="true"
      >
        <motion.div
          className="h-12 w-px bg-clay-400/60"
          animate={prefersReducedMotion ? undefined : { scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
