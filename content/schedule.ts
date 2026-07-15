export type ScheduleEntry = {
  day: "Mardi" | "Mercredi" | "Jeudi" | "Vendredi";
  time: string;
  endTime: string;
  practice: string;
  slug: string;
  location: string;
  locationId: "kinespace" | "pole-ressources" | "exterieur";
};

export const SCHEDULE_NOTE =
  "Planning indicatif · consultez Momoyoga pour les créneaux à jour et la disponibilité.";

export const SCHEDULE: ScheduleEntry[] = [
  {
    day: "Mardi",
    time: "09:30",
    endTime: "10:30",
    practice: "Vinyasa",
    slug: "vinyasa",
    location: "Kin'Espace",
    locationId: "kinespace",
  },
  {
    day: "Mardi",
    time: "18:30",
    endTime: "19:30",
    practice: "Yin Yoga",
    slug: "yin",
    location: "Pôle Ressources",
    locationId: "pole-ressources",
  },
  {
    day: "Mercredi",
    time: "10:00",
    endTime: "11:00",
    practice: "Yoga Doux",
    slug: "yin",
    location: "Kin'Espace",
    locationId: "kinespace",
  },
  {
    day: "Mercredi",
    time: "17:30",
    endTime: "18:30",
    practice: "Yoga Prénatal",
    slug: "prenatal",
    location: "Pôle Ressources",
    locationId: "pole-ressources",
  },
  {
    day: "Jeudi",
    time: "09:30",
    endTime: "10:30",
    practice: "Vinyasa",
    slug: "vinyasa",
    location: "Kin'Espace",
    locationId: "kinespace",
  },
  {
    day: "Jeudi",
    time: "18:00",
    endTime: "19:00",
    practice: "Yoga Restauratif",
    slug: "restauratif",
    location: "Pôle Ressources",
    locationId: "pole-ressources",
  },
  {
    day: "Vendredi",
    time: "10:00",
    endTime: "11:00",
    practice: "Yin Yoga",
    slug: "yin",
    location: "Kin'Espace",
    locationId: "kinespace",
  },
  {
    day: "Vendredi",
    time: "16:30",
    endTime: "17:15",
    practice: "Yoga Enfants",
    slug: "enfants",
    location: "Kin'Espace",
    locationId: "kinespace",
  },
  {
    day: "Vendredi",
    time: "18:30",
    endTime: "19:30",
    practice: "Vinyasa",
    slug: "vinyasa",
    location: "Bords de Loire",
    locationId: "exterieur",
  },
];

export const SCHEDULE_DAYS = [
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
] as const;

export function getScheduleByDay(day: ScheduleEntry["day"]) {
  return SCHEDULE.filter((entry) => entry.day === day);
}

export function getScheduleBySlug(slug: string) {
  return SCHEDULE.filter((entry) => entry.slug === slug);
}
