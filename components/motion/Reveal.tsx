"use client";

import {
  motion,
  useReducedMotion,
  type TargetAndTransition,
  type Transition,
} from "motion/react";
import type { ElementType, ReactNode } from "react";

export const revealEase = [0.16, 1, 0.3, 1] as const;

export const revealTransition = (delay = 0): Transition => ({
  duration: 0.8,
  delay,
  ease: revealEase,
});

export const revealViewport = {
  once: true,
  margin: "-15%",
} as const;

export const revealInitial: TargetAndTransition = {
  opacity: 0,
  y: 24,
};

export const revealAnimate: TargetAndTransition = {
  opacity: 1,
  y: 0,
};

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  p: motion.p,
  span: motion.span,
  header: motion.header,
  footer: motion.footer,
} as const;

type RevealElement = keyof typeof motionTags;

type RevealProps = {
  as?: RevealElement;
  delay?: number;
  className?: string;
  children: ReactNode;
};

export function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent = motionTags[as];
  const StaticTag = as as ElementType;

  if (prefersReducedMotion) {
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <MotionComponent
      className={className}
      initial={revealInitial}
      whileInView={revealAnimate}
      viewport={revealViewport}
      transition={revealTransition(delay)}
    >
      {children}
    </MotionComponent>
  );
}
