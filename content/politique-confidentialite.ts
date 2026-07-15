import type { LegalSection } from "@/content/cgv";

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "responsable",
    title: "1. Responsable du traitement",
    paragraphs: [
      "Le responsable du traitement des données personnelles est Floriane Relave Jamon, auto-entrepreneur exerçant sous l'appellation Flow Yoga.",
      "Adresse : 95 chemin de Cessieux, Lieu-dit Cessieux, 42170 Chambles",
      "Email : flowyoga42@gmail.com · Téléphone : 06 50 71 46 01",
    ],
  },
  {
    id: "donnees-collectees",
    title: "2. Données collectées",
    paragraphs: [
      "Flow Yoga collecte les données suivantes :",
    ],
    subsections: [
      {
        id: "donnees-formulaire",
        title: "Formulaire de contact",
        paragraphs: [
          "Nom, adresse email, numéro de téléphone (facultatif) et contenu du message, lorsque vous utilisez le formulaire de contact du site.",
        ],
      },
      {
        id: "donnees-navigation",
        title: "Données de navigation",
        paragraphs: [
          "Données de connexion et de navigation (adresse IP, pages visitées, type de navigateur) via les outils d'analyse Vercel Analytics et Google Analytics 4.",
        ],
      },
      {
        id: "donnees-inscription",
        title: "Inscription aux cours",
        paragraphs: [
          "Les données d'inscription et de réservation sont traitées par la plateforme Momoyoga, soumise à sa propre politique de confidentialité. Flow Yoga y accède uniquement dans le cadre de la gestion des cours.",
        ],
      },
    ],
  },
  {
    id: "finalites",
    title: "3. Finalités et bases légales",
    paragraphs: [
      "Vos données sont traitées pour les finalités suivantes :",
      "· Répondre à vos demandes de contact (base légale : intérêt légitime / exécution de mesures précontractuelles)",
      "· Gérer les inscriptions et réservations aux cours (base légale : exécution du contrat)",
      "· Mesurer l'audience du site et améliorer nos services (base légale : consentement / intérêt légitime)",
      "· Respecter nos obligations légales et réglementaires",
    ],
  },
  {
    id: "destinataires",
    title: "4. Destinataires des données",
    paragraphs: [
      "Vos données sont accessibles uniquement par Floriane Relave Jamon (Flow Yoga) et ne sont pas vendues à des tiers.",
      "Elles peuvent être transmises à des sous-traitants techniques dans le cadre strict de leurs missions :",
      "· Vercel Inc. (hébergement du site)",
      "· Resend Inc. (envoi des emails du formulaire de contact)",
      "· Google LLC (Google Analytics 4)",
      "· Momoyoga (gestion des réservations)",
    ],
  },
  {
    id: "duree",
    title: "5. Durée de conservation",
    paragraphs: [
      "Conformément à l'article 8 des CGV de Flow Yoga, les informations personnelles des élèves ne sont pas conservées au-delà de 36 mois après la fin de la relation commerciale.",
      "Les messages du formulaire de contact sont conservés 12 mois maximum.",
      "Les données de navigation sont conservées selon les durées propres à chaque outil d'analyse (13 mois maximum pour Google Analytics 4).",
    ],
  },
  {
    id: "droits",
    title: "6. Vos droits",
    paragraphs: [
      "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :",
      "· Droit d'accès à vos données personnelles",
      "· Droit de rectification des données inexactes",
      "· Droit à l'effacement (« droit à l'oubli »)",
      "· Droit à la limitation du traitement",
      "· Droit d'opposition au traitement",
      "· Droit à la portabilité de vos données",
      "Pour exercer ces droits, contactez-nous à flowyoga42@gmail.com en précisant votre demande et une copie d'une pièce d'identité.",
      "Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (cnil.fr).",
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies",
    paragraphs: [
      "Le site flowyoga42.fr utilise des cookies strictement nécessaires au fonctionnement du site, ainsi que des cookies de mesure d'audience.",
      "Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté de leur dépôt. Le refus de certains cookies peut limiter l'accès à certaines fonctionnalités.",
    ],
  },
  {
    id: "securite",
    title: "8. Sécurité",
    paragraphs: [
      "Flow Yoga met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction, la perte, l'altération ou l'accès non autorisé.",
      "Les échanges via le formulaire de contact sont sécurisés (HTTPS). Aucune photo ni vidéo ne sera prise sans votre consentement explicite.",
    ],
  },
  {
    id: "modifications",
    title: "9. Modifications",
    paragraphs: [
      "La présente politique de confidentialité peut être modifiée à tout moment. La date de dernière mise à jour est indiquée en bas de page. Nous vous encourageons à la consulter régulièrement.",
    ],
  },
];

export const PRIVACY_LAST_UPDATED = "15 juillet 2026";
