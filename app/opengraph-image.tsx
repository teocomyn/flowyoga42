import { createOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Flow Yoga · Yoga à Saint-Just-Saint-Rambert";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage({
    title: "Yoga au bord de la Loire",
    subtitle: "Cours de yoga à Saint-Just-Saint-Rambert (Loire, 42)",
  });
}
