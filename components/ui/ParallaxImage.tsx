"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import {
  revealAnimate,
  revealTransition,
  revealViewport,
} from "@/components/motion/Reveal";

type ParallaxImageProps = {
  src: string;
  alt: string;
  aspectRatio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function ParallaxImage({
  src,
  alt,
  aspectRatio = "4/5",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-image ${className}`}
      style={{ aspectRatio }}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.06 }}
      whileInView={prefersReducedMotion ? undefined : revealAnimate}
      viewport={revealViewport}
      transition={revealTransition(0)}
    >
      <motion.div
        className="absolute inset-0"
        style={prefersReducedMotion ? undefined : { y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </motion.div>
    </motion.div>
  );
}
