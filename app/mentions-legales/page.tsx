import { LegalLayout } from "@/components/legal/LegalLayout";
import { MENTIONS_SECTIONS } from "@/content/mentions-legales";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Mentions légales",
  description:
    "Mentions légales du site Flow Yoga, studio de yoga à Saint-Just-Saint-Rambert. Éditeur, hébergeur, propriété intellectuelle.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Mentions légales", path: "/mentions-legales" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LegalLayout
        title="Mentions légales"
        label="Légal"
        sections={MENTIONS_SECTIONS}
        lastUpdated="15 juillet 2026"
      />
    </>
  );
}
