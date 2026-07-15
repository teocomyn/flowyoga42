import type { FAQItem } from "@/content/faq";

export type BlogSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  publishedAt: string;
  readingTimeMinutes: number;
  excerpt: string;
  intro: string;
  sections: BlogSection[];
  faq: FAQItem[];
  image: string;
  imageAlt: string;
};
