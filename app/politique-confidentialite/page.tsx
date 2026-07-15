import { LegalLayout } from "@/components/legal/LegalLayout";
import {
  PRIVACY_LAST_UPDATED,
  PRIVACY_SECTIONS,
} from "@/content/politique-confidentialite";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles de Flow Yoga, conforme au RGPD.",
  path: "/politique-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    {
      name: "Politique de confidentialité",
      path: "/politique-confidentialite",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LegalLayout
        title="Politique de confidentialité"
        label="RGPD"
        intro={[
          "Comment Flow Yoga protège vos données personnelles ? Cette politique décrit les données collectées, leurs finalités, la durée de conservation et vos droits conformément au RGPD.",
        ]}
        sections={PRIVACY_SECTIONS}
        lastUpdated={PRIVACY_LAST_UPDATED}
      />
    </>
  );
}
