"use client";

import { TESTIMONIALS } from "@/content/testimonials";

export function TestimonialMarquee() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="relative overflow-hidden py-10">
      <div className="group flex w-max animate-marquee gap-6 pause-animation hover:[animation-play-state:paused]">
        {items.map((testimonial, index) => (
          <figure
            key={`${testimonial.id}-${index}`}
            className="surface-card w-[min(85vw,420px)] shrink-0 rounded-card p-8"
            aria-hidden={index >= TESTIMONIALS.length}
          >
            <blockquote className="font-serif text-xl leading-snug tracking-tight text-ink-900">
              « {testimonial.text} »
            </blockquote>
            <figcaption className="label mt-6">{testimonial.author}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
