"use client";

import { useSyncExternalStore } from "react";
import {
  EARLY_BIRD_DEADLINE,
  getEarlyBirdDaysLeft,
  isEarlyBirdActive,
} from "@/content/tarifs";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return getEarlyBirdDaysLeft();
}

function getServerSnapshot() {
  return getEarlyBirdDaysLeft(new Date("2026-07-15"));
}

export function EarlyBirdBadge() {
  const daysLeft = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const active = useSyncExternalStore(
    subscribe,
    () => isEarlyBirdActive(),
    () => true,
  );

  if (!active) return null;

  return (
    <span className="pill-tag text-clay-600">
      Early bird jusqu&apos;au 27/09
      {daysLeft > 0 && (
        <span className="normal-case tracking-normal text-ink-600">
          · {daysLeft}{" "}
          {daysLeft === 1 ? "jour restant" : "jours restants"}
        </span>
      )}
    </span>
  );
}

export function EarlyBirdDeadline() {
  return (
    <time dateTime={EARLY_BIRD_DEADLINE} className="sr-only">
      {EARLY_BIRD_DEADLINE}
    </time>
  );
}
