export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  intro: string;
  description: string[];
  forWho: string[];
  benefits: string[];
  practical: string[];
  pricing: { label: string; price: string }[];
  image: string;
  imageAlt: string;
  offerPrice: number;
  duration: string;
  courseMode: "Présentiel" | "Présentiel ou domicile" | "Présentiel ou Zoom";
};

export const COURSE_SLUGS = [
  "vinyasa",
  "yin",
  "restauratif",
  "prenatal",
  "enfants",
  "seniors",
  "sportifs",
  "duo-famille",
] as const;

export type CourseSlug = (typeof COURSE_SLUGS)[number];

export const COURSES: Course[] = [
  {
    slug: "vinyasa",
    title: "Vinyasa",
    shortTitle: "Vinyasa",
    metaDescription:
      "Cours de vinyasa yoga à Saint-Just-Saint-Rambert : enchaînements dynamiques, gainage et respiration. Réservez sur Momoyoga avec Floriane Relave Jamon.",
    intro:
      "Le vinyasa yoga à Saint-Just-Saint-Rambert, c'est quoi ? Un enchaînement fluide de postures synchronisées avec la respiration, qui tonifie, gaine et renforce l'ensemble du corps.",
    description: [
      "Le vinyasa est une pratique dynamique où chaque mouvement naît de l'inspiration ou de l'expiration. Floriane construit des séquences variées, adaptées à l'énergie du groupe ce jour-là.",
      "Postures debout, twists, équilibres et assouplissements s'enchaînent dans un flow accessible aux débutants motivés comme aux pratiquants confirmés.",
    ],
    forWho: [
      "Personnes cherchant à tonifier et renforcer leur corps",
      "Sportifs souhaitant compléter leur entraînement",
      "Pratiquants souhaitant une séance dynamique et fluide",
    ],
    benefits: [
      "Renforce la sangle abdominale et le gainage profond",
      "Améliore l'endurance et la coordination",
      "Stimule la circulation et l'énergie vitale",
    ],
    practical: [
      "Séances d'1h, du mardi au vendredi",
      "13 élèves maximum",
      "Apporter tapis, 2 briques et une sangle",
    ],
    pricing: [
      { label: "Séance à l'unité", price: "19 €" },
      { label: "Carnet 10 séances (early bird)", price: "160 €" },
      { label: "Année 30 séances (early bird)", price: "350 €" },
    ],
    image: "/images/vinyasa-practice.jpg",
    imageAlt:
      "Cours de vinyasa yoga dynamique à Saint-Just-Saint-Rambert · Flow Yoga",
    offerPrice: 19,
    duration: "PT1H",
    courseMode: "Présentiel",
  },
  {
    slug: "yin",
    title: "Yin Yoga",
    shortTitle: "Yin Yoga",
    metaDescription:
      "Cours de yin yoga à Saint-Just-Saint-Rambert (42) : postures tenues, tissus profonds, détente. Réservez votre séance sur Momoyoga.",
    intro:
      "Le yin yoga à Saint-Just-Saint-Rambert, c'est quoi ? Des postures tenues 3 à 5 minutes au sol, qui travaillent les tissus profonds et invitent au lâcher-prise total.",
    description: [
      "Le yin est une pratique lente et méditative. Chaque posture cible des zones spécifiques · hanches, colonne, épaules · pour relâcher les tensions accumulées.",
      "Floriane guide la séance avec bienveillance, dans un cadre calme propice à la déconnexion. Idéal en complément d'une activité sportive intense ou en période de stress.",
    ],
    forWho: [
      "Personnes stressées ou surmenées",
      "Sportifs en récupération active",
      "Débutants souhaitant une pratique douce et accessible",
    ],
    benefits: [
      "Relâche les tissus conjonctifs en profondeur",
      "Calme le système nerveux",
      "Favorise la flexibilité durable",
    ],
    practical: [
      "Séances d'1h, ambiance calme",
      "Coussins et bolster fournis en salle",
      "Séances plus douces lors de la Pleine Lune et Nouvelle Lune",
    ],
    pricing: [
      { label: "Séance à l'unité", price: "19 €" },
      { label: "Carnet 10 séances (early bird)", price: "160 €" },
      { label: "Année 30 séances (early bird)", price: "350 €" },
    ],
    image: "/images/yin-practice.jpg",
    imageAlt:
      "Séance de yin yoga au sol à Saint-Just-Saint-Rambert · postures tenues",
    offerPrice: 19,
    duration: "PT1H",
    courseMode: "Présentiel",
  },
  {
    slug: "restauratif",
    title: "Yoga Restauratif",
    shortTitle: "Yoga Restauratif",
    metaDescription:
      "Yoga restauratif à Saint-Just-Saint-Rambert et Saint-Étienne : adapté cancers, endométriose, burn-out. Cours collectif ou individuel avec Floriane.",
    intro:
      "Le yoga restauratif à Saint-Just-Saint-Rambert, c'est quoi ? Une pratique ultra-douce, soutenue par coussins et bolsters, spécialement conçue pour les corps fatigués ou en convalescence.",
    description: [
      "Floriane est certifiée en yoga restauratif adapté aux pathologies : cancers, endométriose, burn-out, fatigue chronique. Chaque posture est maintenue longtemps, sans effort, pour laisser le système nerveux se réinitialiser.",
      "En collectif ou en séance individuelle (65 €/h), cette pratique convient à toute personne ayant besoin de ralentir et de se reconnecter à son corps avec douceur.",
    ],
    forWho: [
      "Personnes en convalescence ou traitement médical",
      "Femmes atteintes d'endométriose ou de fatigue chronique",
      "Toute personne en burn-out ou en surcharge émotionnelle",
    ],
    benefits: [
      "Apaise profondément le système nerveux",
      "Favorise la récupération physique et mentale",
      "Accessible quel que soit le niveau de forme",
    ],
    practical: [
      "Collectif 1h ou individuel 1h (65 €)",
      "Tout le matériel de soutien est fourni",
      "Pratique sans effort, postures entièrement assistées",
    ],
    pricing: [
      { label: "Séance collective à l'unité", price: "19 €" },
      { label: "Séance individuelle 1h", price: "65 €" },
      { label: "Carnet 10 séances (early bird)", price: "160 €" },
    ],
    image: "/images/restauratif-practice.jpg",
    imageAlt:
      "Yoga restauratif à Saint-Just-Saint-Rambert · postures soutenues par coussins",
    offerPrice: 19,
    duration: "PT1H",
    courseMode: "Présentiel",
  },
  {
    slug: "prenatal",
    title: "Yoga Prénatal",
    shortTitle: "Prénatal",
    metaDescription:
      "Cours de yoga prénatal en Loire (42) à Saint-Just-Saint-Rambert. Accompagnement des futures mamans avec Floriane Relave Jamon. Réservez sur Momoyoga.",
    intro:
      "Le yoga prénatal à Saint-Just-Saint-Rambert, c'est quoi ? Un accompagnement doux et sécurisé des futures mamans, en groupe de 4 minimum, avec des postures adaptées à chaque trimestre.",
    description: [
      "Floriane accompagne les femmes enceintes avec des séquences pensées pour soulager le dos, ouvrir le bassin et créer un lien avec le bébé. Respiration, visualisation et relaxation font partie intégrante de chaque cours.",
      "Des formules postnatales existent également, sur abonnement sur-mesure selon les besoins du groupe.",
    ],
    forWho: [
      "Femmes enceintes dès le 1er trimestre (avec accord médical)",
      "Futures mamans souhaitant préparer l'accouchement en douceur",
      "Groupe minimum de 4 participantes",
    ],
    benefits: [
      "Soulage les tensions dorsales et lombaires",
      "Prépare le corps et le souffle à l'accouchement",
      "Crée un espace de partage entre futures mamans",
    ],
    practical: [
      "Séances d'1h, groupe de 4 futures mamans minimum",
      "Abonnements prénatal sur-mesure possibles",
      "Apporter tapis et coussin de grossesse si possible",
    ],
    pricing: [
      { label: "1 séance", price: "22 €" },
      { label: "5 séances", price: "100 €" },
      { label: "10 séances", price: "180 €" },
    ],
    image: "/images/yoga-prenatal.png",
    imageAlt:
      "Cours de yoga prénatal en Loire · accompagnement des femmes enceintes",
    offerPrice: 22,
    duration: "PT1H",
    courseMode: "Présentiel",
  },
  {
    slug: "enfants",
    title: "Yoga Enfants",
    shortTitle: "Enfants",
    metaDescription:
      "Cours de yoga enfants à Saint-Just-Saint-Rambert dès 4 ans. Postures d'animaux, jeux, bols tibétains. Atelier 15 €, 12 € dès 2 enfants.",
    intro:
      "Le yoga enfants à Saint-Just-Saint-Rambert, c'est quoi ? Des séances ludiques dès 4 ans en collectif, avec postures d'animaux, cartes, balles massantes et bols tibétains.",
    description: [
      "Floriane, spécialisée petite enfance depuis 22 ans, adapte le yoga aux plus jeunes avec des approches sensorielles et créatives. Les séances durent 45 minutes à 1 heure.",
      "En structure (crèche, MAM, jardin d'enfants), elle intervient dès 18 mois. Les enfants apportent un tapis ou une serviette.",
    ],
    forWho: [
      "Enfants dès 4 ans en cours collectif",
      "Structures petite enfance (crèches, MAM, jardins d'enfants)",
      "Parents souhaitant une activité bien-être pour leurs enfants",
    ],
    benefits: [
      "Développe la conscience corporelle et l'équilibre",
      "Favorise la concentration et la relaxation",
      "Apprend la gestion des émotions par le jeu",
    ],
    practical: [
      "45 min à 1h selon l'âge",
      "Apporter tapis ou serviette",
      "Atelier 15 € · 12 € à partir de 2 enfants",
    ],
    pricing: [
      { label: "Atelier 1 enfant", price: "15 €" },
      { label: "À partir de 2 enfants", price: "12 € / enfant" },
      { label: "Intervention en structure", price: "45–150 €" },
    ],
    image: "/images/enfants-practice.jpg",
    imageAlt:
      "Cours de yoga enfants à Saint-Just-Saint-Rambert · postures ludiques d'animaux",
    offerPrice: 15,
    duration: "PT45M",
    courseMode: "Présentiel",
  },
  {
    slug: "seniors",
    title: "Yoga Seniors",
    shortTitle: "Seniors",
    metaDescription:
      "Cours de yoga seniors à Saint-Just-Saint-Rambert et EHPAD. Pratique adaptée, douce et sécurisée avec Floriane Relave Jamon.",
    intro:
      "Le yoga seniors à Saint-Just-Saint-Rambert, c'est quoi ? Une pratique douce et adaptée, pensée pour maintenir mobilité, équilibre et sérénité, en salle ou en EHPAD.",
    description: [
      "Floriane intervient auprès des seniors en EHPAD et en cours collectifs adaptés. Les postures sont modifiées, assises ou debout avec appui, pour respecter les capacités de chacun.",
      "La respiration, la souplesse articulaire et la relaxation sont au cœur de chaque séance, dans un cadre bienveillant et sans jugement.",
    ],
    forWho: [
      "Seniors souhaitant maintenir leur mobilité",
      "Personnes en EHPAD (intervention sur demande)",
      "Adultes recherchant une pratique douce et sécurisée",
    ],
    benefits: [
      "Maintient la souplesse et l'équilibre",
      "Réduit les tensions articulaires",
      "Favorise le lien social et le bien-être",
    ],
    practical: [
      "Séances de 30 min à 1h selon le public",
      "Postures assises, debout avec appui ou au sol",
      "Intervention EHPAD : nous contacter",
    ],
    pricing: [
      { label: "Séance à l'unité", price: "19 €" },
      { label: "Carnet 10 séances (early bird)", price: "160 €" },
      { label: "Intervention EHPAD / structure", price: "45–150 €" },
    ],
    image: "/images/seniors-practice.jpg",
    imageAlt:
      "Cours de yoga seniors à Saint-Just-Saint-Rambert · pratique douce et adaptée",
    offerPrice: 19,
    duration: "PT1H",
    courseMode: "Présentiel",
  },
  {
    slug: "sportifs",
    title: "Yoga Sportifs",
    shortTitle: "Sportifs",
    metaDescription:
      "Yoga pour sportifs à Saint-Just-Saint-Rambert : triathlon, course à pied, football. Préparation individuelle ou collective avec Floriane.",
    intro:
      "Le yoga pour sportifs à Saint-Just-Saint-Rambert, c'est quoi ? Une préparation physique et mentale ciblée pour triathlètes, coureurs et footballeurs, en individuel ou en groupe.",
    description: [
      "Ancienne sportive de haut niveau en natation, Floriane comprend les exigences de l'entraînement intensif. Elle construit des séances de yoga orientées récupération, mobilité et prévention des blessures.",
      "Les séances peuvent être collectives ou individuelles, adaptées à la discipline pratiquée et à la période de la saison (préparation, compétition, récupération).",
    ],
    forWho: [
      "Triathlètes et coureurs en préparation ou récupération",
      "Footballeurs et sportifs en club",
      "Athlètes souhaitant prévenir les blessures",
    ],
    benefits: [
      "Améliore la mobilité et la récupération musculaire",
      "Renforce le gainage et la stabilité articulaire",
      "Optimise la respiration sous effort",
    ],
    practical: [
      "Individuel 1h (60 €) ou collectif sur demande",
      "Séances adaptées à la discipline et à la saison",
      "Possibilité d'intervention en club ou à domicile",
    ],
    pricing: [
      { label: "Séance individuelle 1h", price: "60 €" },
      { label: "Séance collective", price: "19 €" },
      { label: "Préparation club (sur devis)", price: "Nous contacter" },
    ],
    image: "/images/sportifs-practice.jpg",
    imageAlt:
      "Yoga pour sportifs à Saint-Just-Saint-Rambert · préparation triathlon et course",
    offerPrice: 60,
    duration: "PT1H",
    courseMode: "Présentiel ou domicile",
  },
  {
    slug: "duo-famille",
    title: "Duo & Famille",
    shortTitle: "Duo & Famille",
    metaDescription:
      "Cours de yoga duo et famille à Saint-Just-Saint-Rambert : 1h à domicile ou en salle, méditation guidée. 80 € le duo, 85 € en restauratif.",
    intro:
      "Le yoga duo et famille à Saint-Just-Saint-Rambert, c'est quoi ? Une séance d'1 heure à partager à deux ou en famille, à domicile ou en salle, ouverte par une méditation guidée.",
    description: [
      "Floriane propose des séances privées en duo (couple, parent-enfant, amis) pour vivre la pratique dans l'intimité. La séance débute et se clôture par une méditation guidée.",
      "En version restauratif, le tarif est de 85 € pour 1h. Frais kilométriques applicables hors Saint-Just-Saint-Rambert et Chambles.",
    ],
    forWho: [
      "Couples souhaitant partager un moment de bien-être",
      "Parents et enfants (à partir de 4 ans)",
      "Familles recherchant une activité commune",
    ],
    benefits: [
      "Renforce les liens par une expérience partagée",
      "Méditation guidée en ouverture et clôture",
      "Séance entièrement personnalisée",
    ],
    practical: [
      "1h à domicile ou en salle",
      "Frais km hors Saint-Just-Saint-Rambert et Chambles",
      "Réserver par téléphone ou email",
    ],
    pricing: [
      { label: "Duo / famille 1h", price: "80 €" },
      { label: "Duo restauratif 1h", price: "85 €" },
      { label: "Année 60 séances couple (early bird)", price: "500 €" },
    ],
    image: "/images/seance-duo.jpg",
    imageAlt:
      "Séance de yoga duo et famille à Saint-Just-Saint-Rambert · méditation guidée",
    offerPrice: 80,
    duration: "PT1H",
    courseMode: "Présentiel ou domicile",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((course) => course.slug === slug);
}

export function isCourseSlug(slug: string): slug is CourseSlug {
  return COURSE_SLUGS.includes(slug as CourseSlug);
}
