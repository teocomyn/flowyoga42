import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { LocationCard } from "@/components/ui/LocationCard";
import { ReservationButton } from "@/components/ui/Button";
import { LOCATIONS } from "@/lib/constants";

import { LOCATION_IMAGES } from "@/lib/media";

export function LocationsSection() {
  return (
    <section className="py-[var(--spacing-section)]">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5">
            <p className="label mb-6">Où pratiquer ?</p>
            <h2 className="font-serif">Deux salles en ville</h2>
            <p className="prose-body mt-6">
              Où se trouvent les cours de yoga ? Flow Yoga propose deux lieux à
              Saint-Just-Saint-Rambert : Kin&apos;Espace (place Gapiand) et
              Pôle Ressources (chemin de la Bénédiction). Par beau temps,
              certaines séances se déroulent en extérieur, au bord de la Loire.
            </p>
            <p className="prose-body mt-6">
              13 élèves maximum par séance. Chaque cours dure 1h, du mardi au
              vendredi. Vestiaires et casiers à clés au Kin&apos;Espace.
            </p>
            <div className="mt-8">
              <ReservationButton location="locations" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {LOCATIONS.map((location) => (
              <LocationCard
                key={location.id}
                name={location.name}
                address={location.address}
                city={location.city}
                landmark={location.landmark}
                mapsUrl={location.mapsUrl}
                image={LOCATION_IMAGES[location.id].src}
                imageAlt={LOCATION_IMAGES[location.id].alt}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
