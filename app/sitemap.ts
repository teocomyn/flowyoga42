import type { MetadataRoute } from "next";
import { getAllAtelierSlugs } from "@/content/ateliers";
import { COURSE_SLUGS } from "@/content/courses";
import { SITE_URL } from "@/lib/constants";

const STATIC_ROUTES = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/cours", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/tarifs", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/qui-suis-je", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/ateliers", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/cgv", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" as const },
  {
    path: "/politique-confidentialite",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const courseEntries = COURSE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/cours/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const atelierEntries = getAllAtelierSlugs().map((slug) => ({
    url: `${SITE_URL}/ateliers/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...courseEntries, ...atelierEntries];
}
