import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Yoga à Saint-Just-Saint-Rambert (Loire) | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Cours de yoga à Saint-Just-Saint-Rambert : vinyasa, yin, restauratif, prénatal et enfants. Réservez votre séance avec Floriane Relave Jamon.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `Yoga à Saint-Just-Saint-Rambert (Loire) | ${SITE_NAME}`,
    description:
      "Cours de yoga à Saint-Just-Saint-Rambert : vinyasa, yin, restauratif, prénatal et enfants. Réservez votre séance avec Floriane Relave Jamon.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Yoga à Saint-Just-Saint-Rambert (Loire) | ${SITE_NAME}`,
    description:
      "Cours de yoga à Saint-Just-Saint-Rambert : vinyasa, yin, restauratif, prénatal et enfants.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}${path}`,
    },
    twitter: {
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}
