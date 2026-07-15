export const SITE_NAME = "Flow Yoga";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://flowyoga42.fr";
export const MOMOYOGA_URL =
  "https://www.momoyoga.com/flow-yoga-42/register";

export const CONTACT = {
  phone: "+33650714601",
  phoneDisplay: "06 50 71 46 01",
  email: "flowyoga42@gmail.com",
  founder: "Floriane Relave Jamon",
  siren: "851897959",
  headquarters: "95 chemin de Cessieux, Lieu-dit Cessieux, 42170 Chambles",
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/Flo.yoga",
  instagram: "https://www.instagram.com/flowyoga.floriane",
} as const;

export const LOCATIONS = [
  {
    id: "kinespace",
    name: "Kin'Espace",
    address: "15 place Gapiand",
    city: "42170 Saint-Just-Saint-Rambert",
    landmark: "À côté de la MJC",
    mapsUrl:
      "https://maps.google.com/?q=15+place+Gapiand+42170+Saint-Just-Saint-Rambert",
  },
  {
    id: "pole-ressources",
    name: "Pôle Ressources",
    address: "25 chemin de la Bénédiction",
    city: "42170 Saint-Just-Saint-Rambert",
    landmark: "À côté du cabinet dentaire, face au cabinet médical",
    mapsUrl:
      "https://maps.google.com/?q=25+chemin+de+la+Bénédiction+42170+Saint-Just-Saint-Rambert",
  },
] as const;

export const NAV_LINKS = [
  { href: "/qui-suis-je", label: "Qui suis-je" },
  { href: "/cours", label: "Cours" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/ateliers", label: "Ateliers" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_COURSE_LINKS = [
  { href: "/cours/vinyasa", label: "Vinyasa" },
  { href: "/cours/yin", label: "Yin Yoga" },
  { href: "/cours/restauratif", label: "Yoga Restauratif" },
  { href: "/cours/prenatal", label: "Prénatal" },
  { href: "/cours/enfants", label: "Enfants" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { href: "/cgv", label: "CGV" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
] as const;

export const OPENING_HOURS = [
  { day: "Mardi", opens: "09:00", closes: "20:00" },
  { day: "Mercredi", opens: "09:00", closes: "20:00" },
  { day: "Jeudi", opens: "09:00", closes: "20:00" },
  { day: "Vendredi", opens: "09:00", closes: "20:00" },
] as const;

export const AREA_SERVED = [
  "Saint-Just-Saint-Rambert",
  "Chambles",
  "Andrézieux-Bouthéon",
  "Montbrison",
  "Saint-Étienne",
] as const;
