"use client";

import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { ReservationButton } from "@/components/ui/Button";
import {
  CONTACT,
  FOOTER_COURSE_LINKS,
  FOOTER_LEGAL_LINKS,
  LOCATIONS,
  NAV_LINKS,
  SITE_NAME,
  SOCIAL,
} from "@/lib/constants";

type FooterSection = {
  label: string;
  links: {
    title: string;
    href: string;
    external?: boolean;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
};

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M14 8.5h2.5L16 12h-2v8h-3v-8h-2v-2.5h2V10c0-1.7 1.3-3 3-3h2.5V9H16c-.6 0-1 .4-1 1v1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.4" cy="7.6" r="0.9" fill="currentColor" />
    </svg>
  );
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    label: "Navigation",
    links: NAV_LINKS.map((link) => ({
      title: link.label,
      href: link.href,
    })),
  },
  {
    label: "Pratiques",
    links: FOOTER_COURSE_LINKS.map((link) => ({
      title: link.label,
      href: link.href,
    })),
  },
  {
    label: "Contact",
    links: [
      {
        title: CONTACT.phoneDisplay,
        href: `tel:${CONTACT.phone}`,
        icon: Phone,
      },
      {
        title: CONTACT.email,
        href: `mailto:${CONTACT.email}`,
        icon: Mail,
      },
      ...LOCATIONS.map((loc) => ({
        title: loc.name,
        href: loc.mapsUrl,
        external: true,
        icon: MapPin,
      })),
    ],
  },
  {
    label: "Informations",
    links: [
      { title: "Blog", href: "/blog" },
      ...FOOTER_LEGAL_LINKS.map((link) => ({
        title: link.label,
        href: link.href,
      })),
      {
        title: "Facebook",
        href: SOCIAL.facebook,
        external: true,
        icon: FacebookIcon,
      },
      {
        title: "Instagram",
        href: SOCIAL.instagram,
        external: true,
        icon: InstagramIcon,
      },
    ],
  },
];

function FooterLink({
  href,
  external,
  icon: Icon,
  children,
}: {
  href: string;
  external?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  const className =
    "inline-flex items-center gap-2 text-[15px] text-ink-600 transition-colors duration-300 hover:text-clay-600";

  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {Icon ? <Icon className="h-4 w-4 shrink-0 text-clay-500" /> : null}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {Icon ? <Icon className="h-4 w-4 shrink-0 text-clay-500" /> : null}
      {children}
    </Link>
  );
}

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", y: 12, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-4 pt-10 md:px-6">
      <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-t-[2.5rem] border border-sand-200/80 bg-sand-50 shadow-[0_-16px_48px_rgba(28,26,23,0.05)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_50%_0%,rgba(247,235,249,0.95),transparent_68%)]"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-clay-400/50 to-transparent"
          aria-hidden="true"
        />

        <div className="relative px-6 py-10 lg:px-10 lg:py-14">
          <AnimatedContainer className="surface-card flex flex-col items-start justify-between gap-6 rounded-shell p-6 md:flex-row md:items-center md:p-8">
            <div>
              <p className="label text-clay-600">Réserver</p>
              <p className="mt-2 font-serif text-2xl tracking-tight text-ink-900 md:text-3xl">
                Votre prochain cours vous attend
              </p>
              <p className="mt-2 max-w-md text-[15px] text-ink-600">
                Séance d&apos;essai à 19 € · 13 élèves maximum · Saint-Just-Saint-Rambert
              </p>
            </div>
            <ReservationButton location="footer" />
          </AnimatedContainer>

          <div className="mt-12 grid gap-10 xl:grid-cols-12 xl:gap-8">
            <AnimatedContainer className="space-y-6 xl:col-span-4">
              <Link
                href="/"
                className="inline-flex transition-opacity hover:opacity-80"
                aria-label={`${SITE_NAME} · Accueil`}
              >
                <Image
                  src="/images/logo-flow-yoga-ink.png"
                  alt={SITE_NAME}
                  width={180}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="max-w-sm text-[15px] leading-relaxed text-ink-600">
                Cours de yoga à Saint-Just-Saint-Rambert : vinyasa, yin,
                restauratif, prénatal et enfants avec Floriane Relave Jamon.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Flow Yoga"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-200/80 bg-sand-50 text-ink-700 transition-all hover:border-clay-400/40 hover:bg-blush-50 hover:text-clay-600"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Flow Yoga"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-200/80 bg-sand-50 text-ink-700 transition-all hover:border-clay-400/40 hover:bg-blush-50 hover:text-clay-600"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  aria-label="Email Flow Yoga"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-200/80 bg-sand-50 text-ink-700 transition-all hover:border-clay-400/40 hover:bg-blush-50 hover:text-clay-600"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
              <p className="text-[14px] text-ink-600">
                © {year} {SITE_NAME} · {CONTACT.founder}
                <br />
                SIREN {CONTACT.siren}
              </p>
              <p className="text-[13px] text-ink-600">
                Réalisé par{" "}
                <a
                  href="https://teocomyn.com/"
                  target="_blank"
                  rel="noopener"
                  className="underline decoration-sand-200 underline-offset-2 transition-colors hover:text-clay-600 hover:decoration-clay-400"
                >
                  Teo Comyn
                </a>
                {" · "}
                <a
                  href="https://experaise.com/"
                  target="_blank"
                  rel="noopener"
                  className="underline decoration-sand-200 underline-offset-2 transition-colors hover:text-clay-600 hover:decoration-clay-400"
                >
                  Experaise
                </a>
              </p>
            </AnimatedContainer>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-8">
              {FOOTER_SECTIONS.map((section, index) => (
                <AnimatedContainer key={section.label} delay={0.08 + index * 0.08}>
                  <h3 className="label text-ink-700">{section.label}</h3>
                  <ul className="mt-4 space-y-3">
                    {section.links.map((link) => (
                      <li key={`${section.label}-${link.title}`}>
                        <FooterLink
                          href={link.href}
                          external={link.external}
                          icon={link.icon}
                        >
                          {link.title}
                        </FooterLink>
                      </li>
                    ))}
                  </ul>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
