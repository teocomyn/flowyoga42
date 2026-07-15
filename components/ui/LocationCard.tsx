import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

type LocationCardProps = {
  name: string;
  address: string;
  city: string;
  landmark: string;
  mapsUrl: string;
  image: string;
  imageAlt: string;
};

export function LocationCard({
  name,
  address,
  city,
  landmark,
  mapsUrl,
  image,
  imageAlt,
}: LocationCardProps) {
  return (
    <Reveal as="article" className="surface-card overflow-hidden rounded-card">
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-card">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-2xl tracking-tight">{name}</h3>
        <address className="mt-3 not-italic text-[15px] leading-relaxed text-ink-600">
          {address}
          <br />
          {city}
        </address>
        <p className="mt-3 text-[14px] text-clay-600">{landmark}</p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="label mt-4 inline-block transition-colors hover:text-clay-600"
        >
          Voir sur Google Maps →
        </a>
      </div>
    </Reveal>
  );
}
