import { createOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Cours de yoga · Flow Yoga";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage({
    title: "Cours de yoga",
    subtitle: "Saint-Just-Saint-Rambert · Loire (42)",
  });
}
