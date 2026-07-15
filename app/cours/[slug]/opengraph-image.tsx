import { getCourseBySlug } from "@/content/courses";
import { createOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Cours de yoga · Flow Yoga";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  return createOgImage({
    title: course ? `Cours de ${course.title}` : "Cours de yoga",
    subtitle: "Saint-Just-Saint-Rambert · Flow Yoga",
  });
}
