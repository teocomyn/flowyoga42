"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Button, ReservationButton } from "@/components/ui/Button";
import { MOMOYOGA_URL } from "@/lib/constants";

type Goal = "detente" | "tonus" | "grossesse" | "recuperation";
type Level = "debutant" | "intermediaire" | "confirme";
type Rhythm = "hebdo" | "bihebdo" | "occasionnel";

type Recommendation = {
  practice: string;
  slug: string;
  plan: string;
  pricePerSession: string;
  reason: string;
};

const GOALS: { id: Goal; label: string }[] = [
  { id: "detente", label: "Détente & lâcher-prise" },
  { id: "tonus", label: "Tonus & renforcement" },
  { id: "grossesse", label: "Grossesse" },
  { id: "recuperation", label: "Récupération & soin" },
];

const LEVELS: { id: Level; label: string }[] = [
  { id: "debutant", label: "Je débute" },
  { id: "intermediaire", label: "Je pratique déjà" },
  { id: "confirme", label: "Pratique régulière" },
];

const RHYTHMS: { id: Rhythm; label: string }[] = [
  { id: "hebdo", label: "1× par semaine" },
  { id: "bihebdo", label: "2× par semaine" },
  { id: "occasionnel", label: "À mon rythme" },
];

function getRecommendation(
  goal: Goal,
  level: Level,
  rhythm: Rhythm,
): Recommendation {
  if (goal === "grossesse") {
    return {
      practice: "Yoga Prénatal",
      slug: "/cours/prenatal",
      plan: "10 séances prénatal · 180 €",
      pricePerSession: "18 € / séance",
      reason:
        "Un accompagnement doux et sécurisé, en petit groupe de futures mamans.",
    };
  }

  if (goal === "recuperation") {
    if (level === "debutant" || rhythm === "occasionnel") {
      return {
        practice: "Yoga Restauratif",
        slug: "/cours/restauratif",
        plan: "Séance à l'unité · 19 € (essai) ou individuel · 65 €",
        pricePerSession: "19 € / séance",
        reason:
          "Postures soutenues, adaptées aux pathologies et aux périodes de fatigue.",
      };
    }
    return {
      practice: "Yoga Restauratif",
      slug: "/cours/restauratif",
      plan: "10 séances · 160 € (early bird)",
      pricePerSession: "16 € / séance",
      reason:
        "Idéal pour apaiser le système nerveux et récupérer en profondeur.",
    };
  }

  if (goal === "tonus") {
    if (rhythm === "bihebdo") {
      return {
        practice: "Vinyasa",
        slug: "/cours/vinyasa",
        plan: "Année 60 séances · 500 € (early bird)",
        pricePerSession: "8,33 € / séance",
        reason:
          "Enchaînements dynamiques, gainage et respiration pour un corps tonique.",
      };
    }
    return {
      practice: "Vinyasa",
      slug: "/cours/vinyasa",
      plan:
        rhythm === "occasionnel"
          ? "10 séances · 160 € (early bird)"
          : "Année 30 séances · 350 € (early bird)",
      pricePerSession:
        rhythm === "occasionnel" ? "16 € / séance" : "11,67 € / séance",
      reason:
        "Le vinyasa renforce, tonifie et développe endurance et souplesse.",
    };
  }

  // détente
  if (rhythm === "bihebdo") {
    return {
      practice: "Yin Yoga",
      slug: "/cours/yin",
      plan: "Année 30 séances · 350 € (early bird)",
      pricePerSession: "11,67 € / séance",
      reason:
        "Postures tenues longuement : idéal pour relâcher les tensions profondes.",
    };
  }

  return {
    practice: level === "debutant" ? "Yoga Doux" : "Yin Yoga",
    slug: level === "debutant" ? "/cours/yin" : "/cours/yin",
    plan:
      rhythm === "occasionnel"
        ? "Séance à l'unité · 19 €"
        : "10 séances · 160 € (early bird)",
    pricePerSession:
      rhythm === "occasionnel" ? "19 € / séance" : "16 € / séance",
    reason:
      "Un rythme lent et accessible pour déconnecter, respirer et se recentrer.",
  };
}

type StepProps<T extends string> = {
  title: string;
  options: { id: T; label: string }[];
  onSelect: (id: T) => void;
};

function Step<T extends string>({ title, options, onSelect }: StepProps<T>) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="font-serif text-2xl tracking-tight text-ink-900">{title}</p>
      <div className="mt-6 flex flex-col gap-3">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className="rounded-2xl border border-sand-200 bg-sand-50 px-6 py-4 text-left text-[15px] text-ink-900 transition-all hover:-translate-y-0.5 hover:border-clay-400 hover:bg-sand-100 hover:shadow-[0_10px_24px_rgba(28,26,23,0.06)]"
          >
            {option.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export function PracticeFinder() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState<Goal | null>(null);
  const [level, setLevel] = useState<Level | null>(null);
  const [rhythm, setRhythm] = useState<Rhythm | null>(null);

  const recommendation =
    goal && level && rhythm
      ? getRecommendation(goal, level, rhythm)
      : null;

  const reset = () => {
    setStep(0);
    setGoal(null);
    setLevel(null);
    setRhythm(null);
  };

  return (
    <div className="surface-card overflow-hidden rounded-card p-8 md:p-12">
      <p className="label mb-4">Est-ce que c&apos;est pour moi ?</p>
      <h2 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-none tracking-tight">
        Trouver ma pratique
      </h2>
      <p className="prose-body mt-4">
        Trois questions pour identifier la pratique et la formule qui vous
        correspondent.
      </p>

      <div className="mt-10 min-h-[220px]">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <Step
              key="goal"
              title="Quel est ton objectif ?"
              options={GOALS}
              onSelect={(id) => {
                setGoal(id);
                setStep(1);
              }}
            />
          )}
          {step === 1 && (
            <Step
              key="level"
              title="Quel est ton niveau ?"
              options={LEVELS}
              onSelect={(id) => {
                setLevel(id);
                setStep(2);
              }}
            />
          )}
          {step === 2 && (
            <Step
              key="rhythm"
              title="Quel rythme envisages-tu ?"
              options={RHYTHMS}
              onSelect={(id) => {
                setRhythm(id);
                setStep(3);
              }}
            />
          )}
          {step === 3 && recommendation && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="label mb-3">Notre recommandation</p>
              <p className="font-serif text-3xl tracking-tight text-ink-900">
                {recommendation.practice}
              </p>
              <p className="prose-body mt-4">{recommendation.reason}</p>
              <div className="mt-6 rounded-2xl border border-sand-200 bg-sand-50 p-6">
                <p className="text-[15px] font-medium text-ink-900">
                  {recommendation.plan}
                </p>
                <p className="mt-1 text-[14px] text-clay-600">
                  soit {recommendation.pricePerSession}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <ReservationButton location="practice-finder" />
                <Button href={recommendation.slug} variant="secondary">
                  En savoir plus
                </Button>
                <button
                  type="button"
                  onClick={reset}
                  className="text-[14px] text-ink-600 underline decoration-sand-200 underline-offset-4 transition-colors hover:text-clay-600 hover:decoration-clay-400"
                >
                  Recommencer
                </button>
              </div>
              <p className="mt-6 text-[14px] text-ink-600">
                Première séance à{" "}
                <Link
                  href={MOMOYOGA_URL}
                  className="text-ink-900 underline decoration-clay-400 underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  19 € sur Momoyoga
                </Link>
                .
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {step > 0 && step < 3 && (
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="label mt-6 transition-colors hover:text-clay-600"
        >
          ← Retour
        </button>
      )}
    </div>
  );
}
