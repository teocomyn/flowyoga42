import type { LegalSection } from "@/content/cgv";

export const MENTIONS_SECTIONS: LegalSection[] = [
  {
    id: "editeur",
    title: "Éditeur du site",
    paragraphs: [
      "Le site flowyoga42.fr est édité par Floriane Relave Jamon, auto-entrepreneur exerçant sous l'appellation commerciale Flow Yoga.",
      "Siège social : 95 chemin de Cessieux, Lieu-dit Cessieux, 42170 Chambles",
      "SIREN : 851897959",
      "Téléphone : 06 50 71 46 01",
      "Email : flowyoga42@gmail.com",
      "Directrice de la publication : Floriane Relave Jamon",
    ],
  },
  {
    id: "hebergeur",
    title: "Hébergeur",
    paragraphs: [
      "Le site est hébergé par Vercel Inc.",
      "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
      "Site web : vercel.com",
    ],
  },
  {
    id: "propriete",
    title: "Propriété intellectuelle",
    paragraphs: [
      "L'ensemble des contenus présents sur le site flowyoga42.fr (textes, images, graphismes, logo, structure) est la propriété exclusive de Floriane Relave Jamon / Flow Yoga, sauf mention contraire.",
      "Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.",
    ],
  },
  {
    id: "responsabilite",
    title: "Limitation de responsabilité",
    paragraphs: [
      "Flow Yoga s'efforce d'assurer l'exactitude des informations diffusées sur ce site. Toutefois, Flow Yoga ne saurait garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.",
      "Flow Yoga décline toute responsabilité pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition, ou pour tout dommage résultant d'une indisponibilité temporaire du site.",
    ],
  },
  {
    id: "liens",
    title: "Liens hypertextes",
    paragraphs: [
      "Le site peut contenir des liens vers des sites tiers (Momoyoga, Facebook, Instagram, Google Maps). Flow Yoga n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.",
    ],
  },
  {
    id: "donnees",
    title: "Données personnelles",
    paragraphs: [
      "Pour toute information relative au traitement de vos données personnelles, consultez notre page Politique de confidentialité (/politique-confidentialite).",
    ],
  },
  {
    id: "cookies",
    title: "Cookies et mesure d'audience",
    paragraphs: [
      "Le site utilise des cookies et outils de mesure d'audience (Vercel Analytics, Google Analytics 4) pour analyser la fréquentation et améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies.",
    ],
  },
  {
    id: "droit",
    title: "Droit applicable",
    paragraphs: [
      "Le présent site est soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.",
    ],
  },
];
