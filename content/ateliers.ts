export type Atelier = {
  slug: string;
  title: string;
  metaDescription: string;
  intro: string;
  excerpt: string;
  date: string;
  dateDisplay: string;
  time: string;
  duration: string;
  location: string;
  locationId: "kinespace" | "pole-ressources" | "exterieur";
  price: number | null;
  priceLabel?: string;
  maxParticipants: number;
  image: string;
  imageAlt: string;
  content: string[];
  highlights: string[];
};

export const ATELIERS: Atelier[] = [
  {
    slug: "parenthese-presquile-chatelet",
    title: "Parenthèse sur la Presqu'île du Chatelet",
    metaDescription:
      "Journée yoga et bien-être sur la presqu'île du Chatelet, dimanche 5 juillet. Atelier Flow Yoga en Loire (42).",
    intro:
      "Offrez ou offrez-vous une parenthèse hors du temps sur la presqu'île du Chatelet, dimanche 5 juillet.",
    excerpt:
      "Une journée de ressourcement au bord de l'eau, entre yoga, nature et partage.",
    date: "2026-07-05",
    dateDisplay: "Dimanche 5 juillet 2026",
    time: "10:00",
    duration: "Journée",
    location: "Presqu'île du Chatelet",
    locationId: "exterieur",
    price: null,
    priceLabel: "Sur inscription",
    maxParticipants: 13,
    image: "/images/evenement-parenthese-chatelet.png",
    imageAlt:
      "Affiche atelier Parenthèse sur la Presqu'île du Chatelet · Flow Yoga",
    content: [
      "Une escapade bien-être pour ralentir, respirer et se reconnecter à soi dans un cadre naturel exceptionnel.",
      "Floriane vous accompagne avec bienveillance tout au long de cette journée dédiée au lâcher-prise et à la présence.",
    ],
    highlights: [
      "Yoga en pleine nature",
      "Moment de ressourcement hors du quotidien",
      "Cadre unique sur la presqu'île du Chatelet",
    ],
  },
  {
    slug: "yoga-brunch-solstice",
    title: "Yoga Brunch · Solstice d'été",
    metaDescription:
      "Yoga brunch dimanche 21 juin de 11h à 13h30 à Saint-Just-Saint-Rambert. Rituel des 108 salutations au soleil avec Flow Yoga.",
    intro:
      "1h15 de yoga dédié au solstice d'été avec le rituel des 108 salutations au soleil, suivi d'un brunch convivial.",
    excerpt:
      "Le solstice d'été est le moment où la lumière est à son apogée. Venez célébrer cette énergie.",
    date: "2026-06-21",
    dateDisplay: "Dimanche 21 juin 2026",
    time: "11:00",
    duration: "2h30",
    location: "Saint-Just-Saint-Rambert",
    locationId: "kinespace",
    price: null,
    priceLabel: "Sur inscription",
    maxParticipants: 13,
    image: "/images/evenement-yoga-brunch.png",
    imageAlt: "Affiche Yoga Brunch solstice d'été · Flow Yoga Loire",
    content: [
      "Une séance spéciale autour du solstice d'été : 108 salutations au soleil pour honorer la lumière et l'énergie du moment.",
      "Le brunch qui suit prolonge l'instant de partage et de convivialité entre pratiquants.",
    ],
    highlights: [
      "Rituel des 108 salutations au soleil",
      "Séance dédiée au solstice d'été",
      "Brunch convivial inclus",
    ],
  },
  {
    slug: "yoghypnose-juin",
    title: "Yog'hypnose",
    metaDescription:
      "Atelier Yog'hypnose samedi 20 juin de 14h à 16h30 à Saint-Just-Saint-Rambert. Voyage reposant entre yoga et hypnose.",
    intro:
      "Venez vivre un voyage reposant et hors du commun, entre mouvements doux de yoga et états de relaxation profonde.",
    excerpt: "Viens vivre un voyage reposant et hors du commun...",
    date: "2026-06-20",
    dateDisplay: "Samedi 20 juin 2026",
    time: "14:00",
    duration: "2h30",
    location: "Kin'Espace · 15 place Gapiand",
    locationId: "kinespace",
    price: null,
    priceLabel: "Sur inscription",
    maxParticipants: 13,
    image: "/images/evenement-yoghypnose.jpg",
    imageAlt: "Affiche atelier Yog'hypnose · Flow Yoga Saint-Just-Saint-Rambert",
    content: [
      "Cet atelier unique associe la pratique du yoga à des temps d'hypnose guidée pour un lâcher-prise profond.",
      "Un espace sécurisant pour explorer la détente, le recentrage et la connexion corps-esprit.",
    ],
    highlights: [
      "Yoga doux et hypnose guidée",
      "Voyage intérieur et relaxation profonde",
      "Atelier original et ressourçant",
    ],
  },
  {
    slug: "tarot-yoga-mai",
    title: "Tarot-Yoga · Yin & voyage sonore",
    metaDescription:
      "Atelier Tarot-Yoga vendredi 29 mai de 19h15 à 20h45. Yin yoga, cartomancie et voyage sonore à Saint-Just-Saint-Rambert.",
    intro:
      "Venez vivre un voyage sympathique et hors du commun, mêlant yin yoga, cartomancie et voyage sonore.",
    excerpt: "Viens vivre un voyage sympathique et hors du commun...",
    date: "2026-05-29",
    dateDisplay: "Vendredi 29 mai 2026",
    time: "19:15",
    duration: "1h30",
    location: "Kin'Espace · 15 place Gapiand",
    locationId: "kinespace",
    price: null,
    priceLabel: "Sur inscription",
    maxParticipants: 13,
    image: "/images/evenement-tarot-yoga.png",
    imageAlt: "Affiche atelier Tarot-Yoga · Flow Yoga Loire",
    content: [
      "Une expérience sensorielle unique : postures de yin yoga tenues au sol, accompagnées d'un voyage sonore et d'une touche de cartomancie.",
      "L'occasion de ralentir, d'écouter et de s'ouvrir à l'intuition dans un cadre bienveillant.",
    ],
    highlights: [
      "Yin yoga · postures tenues au sol",
      "Voyage sonore immersif",
      "Cartomancie et introspection",
    ],
  },
];

export function getAtelierBySlug(slug: string): Atelier | undefined {
  return ATELIERS.find((a) => a.slug === slug);
}

export function getAllAtelierSlugs(): string[] {
  return ATELIERS.map((a) => a.slug);
}

export function getUpcomingAteliers(limit = 3): Atelier[] {
  return [...ATELIERS]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, limit);
}
