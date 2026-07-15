import { LegalLayout } from "@/components/legal/LegalLayout";
import { CGV_INTRO, CGV_SECTIONS } from "@/content/cgv";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Conditions Générales de Vente",
  description:
    "Conditions générales de vente de Flow Yoga, studio de yoga à Saint-Just-Saint-Rambert. Tarifs, annulations, validité des carnets.",
  path: "/cgv",
});

export default function CgvPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "CGV", path: "/cgv" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LegalLayout
        title="Conditions générales de vente"
        label="Légal"
        intro={CGV_INTRO}
        sections={CGV_SECTIONS}
      />
    </>
  );
}
