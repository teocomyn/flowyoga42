export const PAGE_HEROES = {
  home: "/images/hero-loire-guinguette.jpg",
  presentations: "/images/hero-qui-suis-je.jpg",
  cours: "/images/hero-cours.jpg",
  tarifs: "/images/hero-tarifs.jpg",
  ateliers: "/images/hero-evenements.jpg",
  contact: "/images/salle-kinespace.jpg",
} as const;

export const LOCATION_IMAGES: Record<
  string,
  { src: string; alt: string }
> = {
  kinespace: {
    src: "/images/salle-kinespace.jpg",
    alt: "Salle Kin'Espace à Saint-Just-Saint-Rambert, place Gapiand",
  },
  "pole-ressources": {
    src: "/images/salle-pole-ressources.jpg",
    alt: "Salle Pôle Ressources à Saint-Rambert, chemin de la Bénédiction",
  },
};
