"use client";

import {
  motion,
  useReducedMotion,
  type TargetAndTransition,
} from "motion/react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import {
  revealAnimate,
  revealEase,
  revealInitial,
  revealViewport,
} from "@/components/motion/Reveal";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "p";

type SplitHeadingProps = {
  as?: HeadingTag;
  className?: string;
  children: string;
  delay?: number;
};

const lineTransition = (index: number, baseDelay: number) => ({
  duration: 0.8,
  delay: baseDelay + index * 0.08,
  ease: revealEase,
});

function measureLines(container: HTMLElement, text: string): string[] {
  const computed = window.getComputedStyle(container);
  const measurer = document.createElement("div");

  measurer.style.position = "absolute";
  measurer.style.visibility = "hidden";
  measurer.style.pointerEvents = "none";
  measurer.style.width = `${container.offsetWidth}px`;
  measurer.style.font = computed.font;
  measurer.style.letterSpacing = computed.letterSpacing;
  measurer.style.wordSpacing = computed.wordSpacing;
  measurer.style.textTransform = computed.textTransform;
  measurer.style.whiteSpace = "normal";

  const words = text.split(/\s+/).filter(Boolean);
  measurer.innerHTML = words
    .map((word) => `<span style="display:inline-block">${word}</span>`)
    .join(" ");

  document.body.appendChild(measurer);

  const spans = Array.from(measurer.querySelectorAll("span"));
  const lines: string[] = [];
  let currentLine: string[] = [];
  let lastTop = -1;

  spans.forEach((span) => {
    const top = span.offsetTop;
    if (lastTop !== -1 && top > lastTop) {
      lines.push(currentLine.join(" "));
      currentLine = [];
    }
    currentLine.push(span.textContent ?? "");
    lastTop = top;
  });

  if (currentLine.length > 0) {
    lines.push(currentLine.join(" "));
  }

  document.body.removeChild(measurer);

  return lines.length > 0 ? lines : [text];
}

export function SplitHeading({
  as: Tag = "h2",
  className = "",
  children,
  delay = 0,
}: SplitHeadingProps) {
  const measureRef = useRef<HTMLSpanElement>(null);
  const [lines, setLines] = useState<string[]>([children]);
  const prefersReducedMotion = useReducedMotion();

  const updateLines = useCallback(() => {
    const element = measureRef.current;
    if (!element) return;
    setLines(measureLines(element, children));
  }, [children]);

  useLayoutEffect(() => {
    updateLines();
  }, [updateLines]);

  useLayoutEffect(() => {
    const element = measureRef.current;
    if (!element) return;

    const observer = new ResizeObserver(updateLines);
    observer.observe(element);
    return () => observer.disconnect();
  }, [updateLines]);

  const lineInitial: TargetAndTransition = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : revealInitial;

  const lineAnimate: TargetAndTransition = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : revealAnimate;

  return (
    <Tag className={`relative font-serif ${className}`}>
      <span
        ref={measureRef}
        className="pointer-events-none invisible absolute inset-x-0 top-0 block w-full"
        aria-hidden="true"
      >
        {children}
      </span>
      {lines.map((line, index) => (
        <span
          key={`${line}-${index}`}
          className="block overflow-hidden"
          aria-hidden={index > 0 ? true : undefined}
        >
          <motion.span
            className="block"
            initial={lineInitial}
            whileInView={lineAnimate}
            viewport={revealViewport}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : lineTransition(index, delay)
            }
          >
            {line}
            {index < lines.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
