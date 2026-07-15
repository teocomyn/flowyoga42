import type { BlogPost } from "./types";
import { post as ateliersCalendrier } from "./posts/ateliers-yoga-loire-calendrier";
import { post as tarifsExplained } from "./posts/tarifs-yoga-saint-just-saint-rambert";
import { post as vinyasaYinRestauratif } from "./posts/vinyasa-yin-restauratif-quel-yoga-choisir";
import { post as yogaDebutant } from "./posts/yoga-debutant-saint-just-2026";
import { post as yogaEnfants } from "./posts/yoga-enfants-saint-just-saint-rambert";
import { post as yogaExterieur } from "./posts/yoga-exterieur-bord-de-loire";
import { post as yogaPrenatal } from "./posts/yoga-prenatal-loire-42";
import { post as yogaRestauratif } from "./posts/yoga-restauratif-bienfaits-pathologies";
import { post as yogaSaintJustGuide } from "./posts/yoga-saint-just-saint-rambert-guide";
import { post as yogaSportif } from "./posts/yoga-sportif-loire-competition";

export const BLOG_POSTS: BlogPost[] = [
  yogaSaintJustGuide,
  yogaDebutant,
  tarifsExplained,
  vinyasaYinRestauratif,
  yogaPrenatal,
  yogaEnfants,
  yogaSportif,
  yogaRestauratif,
  yogaExterieur,
  ateliersCalendrier,
];

export const BLOG_SLUGS = BLOG_POSTS.map((post) => post.slug) as readonly string[];

export function isBlogSlug(slug: string): boolean {
  return BLOG_SLUGS.includes(slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
