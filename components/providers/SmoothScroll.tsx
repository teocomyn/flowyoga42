"use client";

import { ReactLenis } from "lenis/react";
import { useSyncExternalStore } from "react";
import type { ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
