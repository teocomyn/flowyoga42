"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { ReservationButton } from "@/components/ui/Button";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden hero-grain pt-24 md:mx-5 md:mt-28 md:min-h-[78vh] md:rounded-hero md:shadow-[0_28px_70px_rgba(28,26,23,0.12)]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-loire-guinguette.jpg"
          alt="Pratique de yoga en extérieur au bord de la Loire, sous la Guinguette à Saint-Just-Saint-Rambert"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-blush-900/35 to-blush-600/10"
        aria-hidden="true"
      />

      <div className="container-grid relative z-10 w-full pb-16 pt-8 md:pb-24">
        <p className="label mb-6 text-sand-100">
          Saint-Just-Saint-Rambert · Loire (42)
        </p>
        <SplitHeading
          as="h1"
          className="max-w-4xl text-sand-50"
          delay={0.15}
        >
          Yoga au bord de la Loire
        </SplitHeading>
        <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-sand-100/90">
          Flow Yoga propose des cours de yoga à Saint-Just-Saint-Rambert, du
          mardi au vendredi. 13 élèves maximum, un accompagnement humain et
          bienveillant.
        </p>
        <div className="mt-10">
          <ReservationButton location="hero" />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden="true"
      >
        <motion.div
          className="h-12 w-px bg-sand-50/50"
          animate={prefersReducedMotion ? undefined : { scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
