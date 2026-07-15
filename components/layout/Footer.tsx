import Link from "next/link";
import { Container } from "@/components/layout/Container";
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

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-200 bg-sand-50">
      <Container className="py-[clamp(3.5rem,6vw,5.5rem)]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div>
            <p className="label mb-4">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-ink-600 transition-colors hover:text-clay-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label mb-4">Pratiques</p>
            <ul className="space-y-3">
              {FOOTER_COURSE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-ink-600 transition-colors hover:text-clay-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label mb-4">Contact</p>
            <address className="not-italic">
              <ul className="space-y-3 text-[15px] text-ink-600">
                <li>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="transition-colors hover:text-clay-600"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="transition-colors hover:text-clay-600"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                {LOCATIONS.map((loc) => (
                  <li key={loc.id}>
                    <span className="block font-medium text-ink-900">
                      {loc.name}
                    </span>
                    <span className="block">
                      {loc.address}, {loc.city}
                    </span>
                  </li>
                ))}
              </ul>
            </address>
            <div className="mt-6 flex gap-4">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="label transition-colors hover:text-clay-600"
                aria-label="Facebook Flo yoga"
              >
                Facebook
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="label transition-colors hover:text-clay-600"
                aria-label="Instagram flowyoga.floriane"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <p className="label mb-4">Informations</p>
            <ul className="space-y-3">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-ink-600 transition-colors hover:text-clay-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ReservationButton location="footer" />
            </div>
          </div>
        </div>

        <div className="divider mt-16" />

        <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="font-serif text-[clamp(2rem,8vw,6rem)] leading-[0.85] tracking-tight text-sand-200">
            {SITE_NAME}
          </p>
          <p className="text-[14px] text-ink-600">
            © {year} {SITE_NAME} · {CONTACT.founder}
            <br />
            SIREN {CONTACT.siren}
          </p>
        </div>
      </Container>
    </footer>
  );
}
