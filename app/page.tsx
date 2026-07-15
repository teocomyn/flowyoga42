import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { PracticesSection } from "@/components/home/PracticesSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { LocationsSection } from "@/components/home/LocationsSection";
import { EventsSection } from "@/components/home/EventsSection";
import {
  PracticeFinderSection,
  TestimonialsSection,
} from "@/components/home/SocialProofSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { createPageMetadata } from "@/lib/metadata";

const StickyCTA = dynamic(() =>
  import("@/components/ui/StickyCTA").then((mod) => mod.StickyCTA),
);

export const metadata = createPageMetadata({
  title: "Yoga à Saint-Just-Saint-Rambert (Loire)",
  description:
    "Flow Yoga : cours de yoga à Saint-Just-Saint-Rambert. Vinyasa, yin, restauratif, prénatal et enfants avec Floriane Relave Jamon. Réservez sur Momoyoga.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <PracticesSection />
      <BenefitsSection />
      <LocationsSection />
      <EventsSection />
      <PracticeFinderSection />
      <TestimonialsSection />
      <FinalCTASection />
      <StickyCTA />
    </>
  );
}
