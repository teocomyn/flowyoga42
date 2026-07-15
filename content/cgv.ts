export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  subsections?: {
    id: string;
    title: string;
    paragraphs: string[];
  }[];
};

export const CGV_SECTIONS: LegalSection[] = [
  {
    id: "article-1",
    title: "Article 1 · Objet",
    paragraphs: [
      "Les présentes Conditions Générales de Vente détaillent les droits et obligations de Floriane RELAVE JAMON, auto-entrepreneur exerçant sous l'appellation de « Flow Yoga » au cabinet Kin'Espace, place Gapiand, et au Pôle Ressources, 25 chemin de la Bénédiction – 42170 SAINT-JUST-SAINT-RAMBERT et se déplaçant pour diverses associations sportives. Dans le cadre de la vente de prestations de service en termes de cours de yoga et ateliers autour du yoga, l'achat implique l'acceptation entière et sans réserve de ces Conditions Générales de Vente par l'acheteur (désigné ci-après « élève »).",
      "L'élève ou acheteur reconnaît avoir pris connaissance au moment de toute inscription des présentes Conditions Générales de Vente et les accepte sans réserve.",
      "Toutefois, Flow Yoga se réserve le droit de pouvoir modifier ces Conditions Générales de Vente à tout moment. Elles seront donc applicables et en vigueur à la date de l'inscription et de l'achat.",
    ],
  },
  {
    id: "article-2",
    title: "Article 2 · Conditions et modalités d'inscription, d'achat pour la saison 2026-2027",
    subsections: [
      {
        id: "article-2-1",
        title: "2.1 Cours de yoga",
        paragraphs: [
          "Une séance d'essai au tarif normal est conseillée avant de prendre un quelconque abonnement : la réservation se fait uniquement sur la plateforme Momoyoga.",
        ],
      },
      {
        id: "article-2-1-1",
        title: "2.1.1 Pass sanitaire exigé selon les recommandations du gouvernement",
        paragraphs: [
          "Le pass sanitaire est exigé pour venir pratiquer dans les locaux de Kin'Espace. Il vous sera demandé avant la séance si vous réalisez un test antigénique ou PCR de moins de 72h. Si vous avez le pass vaccinal complet, il ne vous sera demandé qu'une seule fois.",
        ],
      },
      {
        id: "article-2-1-2",
        title: "2.1.2 Abonnement annuel Adultes",
        paragraphs: [
          "Flow Yoga propose un abonnement annuel 2026-2027 de 30 séances à compter du 7 septembre 2026 jusque juin 2027 au plus tard (en fonction de votre abonnement), soit 1 cours par semaine. L'abonnement est nominatif, non remboursable (problèmes médicaux, grossesse, pandémie…), non-échangeable, et valable uniquement pour la période souscrite.",
          "Un abonnement de 60 séances à raison de 2 séances/semaine vous est proposé, et les conditions sont les mêmes que pour celui à 30 séances. L'abonnement de 2 séances/semaine peut convenir pour un couple ou pour 1 parent qui vient avec son enfant habitant sous le même toit.",
          "Le planning des cours, les tarifs et tous les renseignements sont disponibles sur le site flowyoga42.fr, sur Facebook « Flo yoga » et Instagram « flowyoga.floriane ».",
          "Lors de son inscription, l'élève communique le jour et l'horaire sur lequel il souhaite s'inscrire. Un échange pourra être possible en fonction des places disponibles dans les autres cours. La plateforme Momoyoga est mise à jour pour que chaque élève puisse être autonome dans ses réservations/annulations et permutations. Le nombre de place est limité à 13 par cours.",
          "En cas d'absence de l'élève, peu importe la raison (grossesse, intervention chirurgicale…), aucune déduction ni remboursement ne seront effectués et le cours ne sera pas remplacé ni reporté.",
          "En cas de pandémies (covid19…) ou d'impossibilité de ma part d'effectuer les cours en présentiel, le distanciel via l'application zoom ou les vidéos en replay envoyées par mail prendront le relais et sont compris dans l'abonnement. Les cours ne sont pas remboursables ni rattrapables.",
        ],
      },
      {
        id: "article-2-1-3",
        title: "2.1.3 Abonnement 10 et 20 séances",
        paragraphs: [
          "Flow Yoga propose des abonnements de 10 séances valables 3 mois, 20 séances valables 7 mois. La date de fin ne pourra pas être modifiée. Cette carte est nominative, non-remboursable, non-échangeable et valable uniquement pour la période souscrite. À l'achat de cette carte, l'élève doit s'inscrire à un cours et à un horaire fixe qui pourra être modifié en fonction des places disponibles sur la plateforme Momoyoga. Une inscription est obligatoire pour les cours à l'unité. Toute absence non signalée moins de 24h à l'avance sera déduite de l'abonnement et non remboursée pour le cours à l'unité.",
          "En cas de pandémies (covid19…), les cours zoom sont déduits de l'abonnement ainsi que les vidéos en replay envoyées par mail par Flow Yoga afin de continuer la pratique dans la limite de la validité de l'abonnement.",
        ],
      },
      {
        id: "article-2-1-4",
        title: "2.1.4 Cours à l'unité, séance Duo, séance individuelle",
        paragraphs: [
          "Flow Yoga propose des cours à l'unité, des séances en duo ou en famille, des séances individuelles. La réservation est obligatoire et un acompte sera demandé (non remboursable en cas d'annulation de votre part). Une fois le cours réglé, il n'est ni remboursable ni échangeable.",
        ],
      },
      {
        id: "article-2-1-5",
        title: "2.1.5 Ateliers Enfants",
        paragraphs: [
          "Flow Yoga propose ponctuellement des ateliers pour les enfants dès l'âge de 4 ans en cours collectifs. Les ateliers sont sur réservations et payables à l'avance. En cas d'absence non prévenue au moins 24h à l'avance, l'atelier ne sera pas remboursé.",
        ],
      },
      {
        id: "article-2-2",
        title: "2.2 Ateliers et évènements Flow Yoga",
        paragraphs: [
          "Flow Yoga propose des ateliers à Kin'Espace ou au Pôle Ressources : de 2h à 4h autour du bien-être. Les inscriptions se font sur la plateforme Momoyoga et la place est réservée une fois l'acompte réglé. Aucun remboursement de l'acompte ne sera effectué peu importe la raison de votre absence.",
        ],
      },
    ],
  },
  {
    id: "article-3",
    title: "Article 3 · Prix et modalités de règlement",
    paragraphs: [
      "Les cours et ateliers sont proposés au tarifs en vigueur en tenant compte de la location de la salle, de la TVA applicable, de l'URSSAF. Tout changement des taux aura une répercussion sur le montant des abonnements et ateliers.",
      "Il est possible de régler par chèque (à partir de 20 séances), espèces ou virement bancaire, wero/paylib au 06.50.71.46.01. La validation de l'inscription sera confirmée après réception et encaissement du 1er chèque ou virement bancaire. Les chèques seront encaissés en début de chaque mois. Une facture peut être établie sur demande de l'élève.",
      "Le tarif de 2 séances/semaine sera appliqué pour les couples ou si 1 parent vient avec son enfant (14 ans et plus vivant sous le même toit) 1 fois/semaine.",
    ],
  },
  {
    id: "article-4",
    title: "Article 4 · Retard ou défaut de paiement",
    paragraphs: [
      "Les cours devront être réglés lors de l'inscription. Aucun cours ne pourra être effectué à défaut de paiement. En cas de retard de paiement, Flow Yoga se réserve le droit de ne pas autoriser l'élève à suivre le cours.",
    ],
  },
  {
    id: "article-5",
    title: "Article 5 · Délai de rétractation / annulation, remboursement",
    subsections: [
      {
        id: "article-5-1",
        title: "5.1 Rétractation, remboursement",
        paragraphs: [
          "Conformément à l'article L121-20 du Code de la Consommation, l'élève dispose d'un délai de 7 jours à compter de l'achat de tout abonnement et inscription pour exercer son droit de rétractation, sans pénalité et sans avoir à justifier un motif, la date de la facture du règlement à Flow Yoga faisant foi. Le droit de rétractation s'effectuera en lettre recommandée avec accusé de réception à : Flow Yoga, 95 chemin de Cessieux, Lieu-dit Cessieux, 42170 CHAMBLES.",
          "Passé le délai de 7 jours, aucun remboursement ne sera effectué.",
          "Lorsque le droit de rétractation est exercé, Flow Yoga s'engage à rembourser la totalité des sommes versées en dehors des séances pratiquées qui seront déduites, dans les 30 jours suivant la date à laquelle ce droit a été exercé.",
        ],
      },
      {
        id: "article-5-2",
        title: "5.2 Absence et annulation",
        paragraphs: [
          "En cas d'absence à un cours, l'élève est tenu de s'annuler sur Momoyoga et au plus tard 24h avant la séance. Si ces délais n'étaient pas respectés, la séance sera facturée ou déduite de la carte d'abonnement et non reportée. Floriane se réserve le droit de remplacer tout élève ayant signalé son absence. Aucune absence ou annulation à un cours ne donne droit à une vidéo replay envoyée. Par contre vous pouvez permuter sur un autre cours la même semaine de votre absence selon les places disponibles. En cas d'annulation moins de 24h à l'avance, aucune permutation ne sera possible et le cours sera perdu.",
          "Aucun remboursement ne sera effectué pour raisons médicales ou grossesse. L'élève devra notifier sur son dossier d'inscription ses antécédents médicaux.",
          "Flow Yoga se réserve le droit d'annuler des cours ou ateliers/évènements s'il n'y a pas un minimum de 6 élèves adultes et enfants, ou si l'intervenant se trouve dans l'impossibilité d'animer son atelier. Dans le cas d'annulation d'un cours, Floriane – Flow Yoga pourra proposer une autre alternative mais les cours ne seront pas remboursés.",
          "Floriane se réserve le droit de proposer l'alternative de la visio, si suite à des annulations sur la plateforme, il y a moins de 4 personnes sur un cours adultes en présentiel.",
        ],
      },
      {
        id: "article-5-3",
        title: "5.3 Changements d'horaires – annulation des cours – COVID19…",
        paragraphs: [
          "En cas de pandémie (Covid19…), cas de force majeure, catastrophe naturelle… Flow Yoga prévoit des séances en distanciel via l'application zoom et/ou des vidéos à enregistrer dès réception sur WhatsApp et dans votre boîte mails. Les séances sont comprises dans votre abonnement annuel ou déduites de votre carte de séances. Aucun remboursement ne sera effectué. Les cours ne seront pas reportés, les vidéos et cours en visio étant proposés et envoyés.",
        ],
      },
    ],
  },
  {
    id: "article-6",
    title: "Article 6 · Engagements et obligations de l'élève",
    paragraphs: [
      "L'élève reconnaît que sa participation aux cours, ateliers de yoga demande un investissement personnel et une relation de confiance avec Floriane – Flow Yoga. Tout comportement portant atteinte à sa propre sécurité et à celle d'autrui ou qui empêcherait le bon déroulement des séances et/ou ateliers pourra entraîner l'exclusion des cours sans que l'élève ne puisse prétendre à un quelconque dédommagement envers Flow Yoga.",
      "L'élève s'engage à arriver à l'heure pour sa séance sans quoi, il se verra être refusé.",
    ],
  },
  {
    id: "article-7",
    title: "Article 7 · Responsabilité et garanties",
    subsections: [
      {
        id: "article-7-1",
        title: "7.1 Garanties médicales",
        paragraphs: [
          "Chaque élève reconnaît avoir connaissance de la nature de la pratique effectuée avec Floriane – Flow Yoga et certifie sur l'honneur en signant la décharge médicale au dos du dossier d'inscription, que sa condition physique et son état de santé lui permettent de pratiquer le yoga et ateliers proposés par Flow Yoga. Un certificat médical de non contre-indication à la pratique du yoga peut vous être demandé.",
          "Chaque élève décharge Flow Yoga et Floriane RELAVE JAMON, de toutes réclamations et actions judiciaires relatives à des blessures ou dommages occasionnés envers sa propre personne et de quelconque manière. L'élève consent à en assumer les risques et conséquences.",
        ],
      },
      {
        id: "article-7-2",
        title: "7.2 Effets personnels et consignes de sécurité",
        paragraphs: [
          "Un vestiaire et des casiers fermant à clés sont à disposition dans les locaux de Kin'Espace. L'élève y est tenu d'y laisser ses chaussures et sa veste. Flow Yoga ne saurait être tenue responsable pour tous effets personnels laissés dans le vestiaire.",
          "En cas d'accident, de casse ou de mauvaise utilisation du matériel, la responsabilité de Flow Yoga ne sera pas engagée.",
        ],
      },
    ],
  },
  {
    id: "article-8",
    title: "Article 8 · Protection des données",
    paragraphs: [
      "Les informations personnelles de chaque élève ne seront pas conservées au-delà de 36 mois, et leur accès est uniquement réservé à Flow Yoga. Aucune photo, ni vidéo ne sera prise sans le consentement de l'élève. Aucun affichage sur les réseaux sociaux ni sur le site flowyoga42.fr ne sera effectué sans le consentement de l'élève.",
    ],
  },
  {
    id: "article-9",
    title: "Article 9 · Droit applicable",
    paragraphs: [
      "Les présentes Conditions Générales de Vente sont soumises au droit français. Tout litige susceptible de résulter de la validité, l'interprétation, l'exécution, la résiliation, leurs conséquences et leurs suites des présentes CGV et d'utilisation sera soumis à la compétence exclusive des tribunaux français. Si l'un de ces articles est jugé nul ou inopposable, la validité des autres dispositions des CGV ne sera pas affectée.",
      "En remplissant le dossier d'inscription, je reconnais avoir pris connaissance des CGV ci-dessus.",
    ],
  },
];

export const CGV_INTRO = [
  "Floriane JAMON exerce en tant que professeur de Yoga en qualité d'auto-entrepreneur sous le numéro SIREN 851897959. Dans le cadre de son activité Floriane JAMON propose des cours et des ateliers en rapport avec le Yoga.",
];
