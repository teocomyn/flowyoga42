import { createOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Tarifs yoga · Flow Yoga";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage({
    title: "Tarifs 2026-2027",
    subtitle: "Early bird jusqu'au 27/09 · Saint-Just-Saint-Rambert",
  });
}
