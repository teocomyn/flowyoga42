export type PricingPlan = {
  id: string;
  title: string;
  description: string;
  sessions: number;
  priceEarlyBird: number;
  priceRegular: number;
  validity: string;
  category: "adultes" | "zoom" | "prenatal" | "enfants" | "individuel" | "structures";
};

export const SEASON_START = "7 septembre 2026";
export const EARLY_BIRD_DEADLINE = "2026-09-27";

export const FEATURED_PLANS: PricingPlan[] = [
  {
    id: "unite",
    title: "Séance à l'unité",
    description: "Idéal pour une première découverte ou une pratique occasionnelle.",
    sessions: 1,
    priceEarlyBird: 19,
    priceRegular: 19,
    validity: "1 séance",
    category: "adultes",
  },
  {
    id: "10-seances",
    title: "10 séances",
    description: "Carnet 3 mois · le bon équilibre pour s'installer dans la pratique.",
    sessions: 10,
    priceEarlyBird: 160,
    priceRegular: 180,
    validity: "3 mois",
    category: "adultes",
  },
  {
    id: "30-seances",
    title: "Année 30 séances",
    description: "1 séance par semaine sur la saison · notre formule la plus avantageuse.",
    sessions: 30,
    priceEarlyBird: 350,
    priceRegular: 390,
    validity: "1 séance / semaine",
    category: "adultes",
  },
];

export const ADULTES_PLANS: PricingPlan[] = [
  ...FEATURED_PLANS,
  {
    id: "20-seances",
    title: "20 séances",
    description: "Carnet 7 mois pour une pratique régulière.",
    sessions: 20,
    priceEarlyBird: 280,
    priceRegular: 310,
    validity: "7 mois",
    category: "adultes",
  },
  {
    id: "60-seances",
    title: "Année 60 séances",
    description: "2 séances / semaine, couple ou parent-enfant.",
    sessions: 60,
    priceEarlyBird: 500,
    priceRegular: 600,
    validity: "2 séances / semaine",
    category: "adultes",
  },
];

export const ZOOM_PLANS: PricingPlan[] = [
  {
    id: "zoom-unite",
    title: "Zoom · 1 séance",
    description: "Cours en direct ou replay depuis chez vous.",
    sessions: 1,
    priceEarlyBird: 15,
    priceRegular: 15,
    validity: "1 séance",
    category: "zoom",
  },
  {
    id: "zoom-20",
    title: "Zoom · 20 séances",
    description: "Carnet 7 mois en ligne.",
    sessions: 20,
    priceEarlyBird: 190,
    priceRegular: 190,
    validity: "7 mois",
    category: "zoom",
  },
  {
    id: "zoom-30",
    title: "Zoom · 30 séances",
    description: "1 séance par semaine en ligne sur la saison.",
    sessions: 30,
    priceEarlyBird: 220,
    priceRegular: 240,
    validity: "1 séance / semaine",
    category: "zoom",
  },
];

export const PRENATAL_PLANS: PricingPlan[] = [
  {
    id: "prenatal-1",
    title: "Prénatal · 1 séance",
    description: "Minimum 4 futures mamans par groupe.",
    sessions: 1,
    priceEarlyBird: 22,
    priceRegular: 22,
    validity: "1 séance",
    category: "prenatal",
  },
  {
    id: "prenatal-5",
    title: "Prénatal · 5 séances",
    description: "Accompagnement sur un trimestre.",
    sessions: 5,
    priceEarlyBird: 100,
    priceRegular: 100,
    validity: "5 séances",
    category: "prenatal",
  },
  {
    id: "prenatal-10",
    title: "Prénatal · 10 séances",
    description: "Suivi complet de la grossesse.",
    sessions: 10,
    priceEarlyBird: 180,
    priceRegular: 180,
    validity: "10 séances",
    category: "prenatal",
  },
];

export const ENFANTS_PLANS: PricingPlan[] = [
  {
    id: "enfants-1",
    title: "Atelier 1 enfant",
    description: "Dès 4 ans en collectif. 45 min à 1h.",
    sessions: 1,
    priceEarlyBird: 15,
    priceRegular: 15,
    validity: "1 atelier",
    category: "enfants",
  },
  {
    id: "enfants-2",
    title: "À partir de 2 enfants",
    description: "Tarif dégressif pour fratrie ou groupe.",
    sessions: 1,
    priceEarlyBird: 12,
    priceRegular: 12,
    validity: "Par enfant",
    category: "enfants",
  },
];

export const INDIVIDUEL_PLANS: PricingPlan[] = [
  {
    id: "individuel",
    title: "Individuel 1h",
    description: "Séance personnalisée en salle ou à domicile.",
    sessions: 1,
    priceEarlyBird: 60,
    priceRegular: 60,
    validity: "1h",
    category: "individuel",
  },
  {
    id: "individuel-restauratif",
    title: "Individuel restauratif 1h",
    description: "Yoga restauratif adapté aux pathologies.",
    sessions: 1,
    priceEarlyBird: 65,
    priceRegular: 65,
    validity: "1h",
    category: "individuel",
  },
  {
    id: "duo",
    title: "Duo / famille 1h",
    description: "Méditation guidée en ouverture et clôture.",
    sessions: 1,
    priceEarlyBird: 80,
    priceRegular: 80,
    validity: "1h",
    category: "individuel",
  },
  {
    id: "duo-restauratif",
    title: "Duo restauratif 1h",
    description: "Séance restauratif à deux.",
    sessions: 1,
    priceEarlyBird: 85,
    priceRegular: 85,
    validity: "1h",
    category: "individuel",
  },
];

export const STRUCTURES_INFO = {
  title: "Structures",
  description:
    "Crèches, jardins d'enfants, MAM, EHPAD, entreprises · 30 min à 1h",
  priceRange: "45–150 € + frais kilométriques",
};

export function formatPrice(amount: number): string {
  return `${amount.toLocaleString("fr-FR")} €`;
}

export function formatPricePerSession(total: number, sessions: number): string {
  if (sessions <= 1) return formatPrice(total);
  const perSession = total / sessions;
  return `${perSession.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} € / séance`;
}

export function isEarlyBirdActive(date = new Date()): boolean {
  const deadline = new Date(`${EARLY_BIRD_DEADLINE}T23:59:59`);
  return date <= deadline;
}

export function getEarlyBirdDaysLeft(date = new Date()): number {
  const deadline = new Date(`${EARLY_BIRD_DEADLINE}T23:59:59`);
  const diff = deadline.getTime() - date.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}
