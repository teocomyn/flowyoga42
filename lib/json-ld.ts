import type { FAQItem } from "@/content/faq";
import type { Course } from "@/content/courses";
import {
  AREA_SERVED,
  CONTACT,
  LOCATIONS,
  MOMOYOGA_URL,
  OPENING_HOURS,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
} from "@/lib/constants";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-loire-guinguette.jpg`,
    description:
      "Studio de yoga à Saint-Just-Saint-Rambert (Loire, 42). Cours de vinyasa, yin, yoga restauratif, prénatal et enfants avec Floriane Relave Jamon.",
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "€€",
    founder: {
      "@type": "Person",
      name: CONTACT.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "95 chemin de Cessieux, Lieu-dit Cessieux",
      addressLocality: "Chambles",
      postalCode: "42170",
      addressCountry: "FR",
    },
    location: LOCATIONS.map((loc) => ({
      "@type": "Place",
      name: loc.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: "Saint-Just-Saint-Rambert",
        postalCode: "42170",
        addressCountry: "FR",
      },
    })),
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.5012,
      longitude: 4.2417,
    },
    openingHoursSpecification: OPENING_HOURS.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.day,
      opens: slot.opens,
      closes: slot.closes,
    })),
    areaServed: AREA_SERVED.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: [SOCIAL.facebook, SOCIAL.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cours de yoga",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cours de yoga collectif",
            url: `${SITE_URL}/cours`,
          },
        },
      ],
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: MOMOYOGA_URL,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Réserver un cours de yoga",
      },
    },
  };
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function getFAQJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getCourseJsonLd(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${SITE_URL}/cours/${course.slug}#course`,
    name: `Cours de ${course.title} · ${SITE_NAME}`,
    description: course.intro,
    url: `${SITE_URL}/cours/${course.slug}`,
    image: `${SITE_URL}${course.image}`,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
    instructor: {
      "@type": "Person",
      name: CONTACT.founder,
    },
    educationalLevel: "Tous niveaux",
    inLanguage: "fr",
    timeRequired: course.duration,
    courseMode: course.courseMode,
    locationCreated: {
      "@type": "Place",
      name: "Saint-Just-Saint-Rambert",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Saint-Just-Saint-Rambert",
        postalCode: "42170",
        addressCountry: "FR",
      },
    },
    offers: getOfferJsonLd(course),
  };
}

export function getOfferJsonLd(course: Course) {
  return {
    "@type": "Offer",
    price: course.offerPrice,
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: MOMOYOGA_URL,
    validFrom: "2026-09-07",
    seller: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    itemOffered: {
      "@type": "Course",
      name: `Cours de ${course.title}`,
    },
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/qui-suis-je#person`,
    name: CONTACT.founder,
    jobTitle: "Professeure de yoga",
    url: `${SITE_URL}/qui-suis-je`,
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
    knowsAbout: [
      "Vinyasa",
      "Yin Yoga",
      "Yoga restauratif",
      "Lymphe Flow",
      "Yoga prénatal",
      "Yoga enfants",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Formations certifiées Vinyasa, Yin Yoga, Yoga restauratif",
      },
    ],
    telephone: CONTACT.phone,
    email: CONTACT.email,
    sameAs: [SOCIAL.facebook, SOCIAL.instagram],
  };
}

type AtelierForJsonLd = {
  slug: string;
  title: string;
  intro: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  price: number | null;
  maxParticipants: number;
  image: string;
};

export function getEventJsonLd(atelier: AtelierForJsonLd) {
  const startDate = `${atelier.date}T${atelier.time}:00`;
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${SITE_URL}/ateliers/${atelier.slug}#event`,
    name: atelier.title,
    description: atelier.intro,
    startDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: atelier.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Saint-Just-Saint-Rambert",
        postalCode: "42170",
        addressCountry: "FR",
      },
    },
    image: `${SITE_URL}${atelier.image}`,
    organizer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    performer: {
      "@type": "Person",
      name: CONTACT.founder,
    },
    ...(atelier.price !== null
      ? {
          offers: {
            "@type": "Offer",
            price: atelier.price,
            priceCurrency: "EUR",
            url: MOMOYOGA_URL,
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
    maximumAttendeeCapacity: atelier.maxParticipants,
  };
}

type ReviewInput = {
  id: string;
  author: string;
  text: string;
};

export function getReviewsJsonLd(reviews: ReviewInput[]) {
  return {
    "@context": "https://schema.org",
    "@graph": reviews.map((review) => ({
      "@type": "Review",
      "@id": `${SITE_URL}/contact#review-${review.id}`,
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewBody: review.text,
      itemReviewed: {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
      },
    })),
  };
}
