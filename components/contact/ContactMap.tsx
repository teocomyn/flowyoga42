import { LOCATIONS } from "@/lib/constants";

export function ContactMap() {
  const kinespace = LOCATIONS[0];

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-sand-200">
      <iframe
        title={`Carte Google Maps · ${kinespace.name}, ${kinespace.address}`}
        src="https://maps.google.com/maps?q=15+place+Gapiand+42170+Saint-Just-Saint-Rambert&output=embed"
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
