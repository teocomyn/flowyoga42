"use client";

import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { ReservationButton } from "@/components/ui/Button";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

const SCROLL_THRESHOLD = 48;

export function Header() {
  const pathname = usePathname();
  const hasHero =
    pathname === "/" ||
    pathname === "/ateliers" ||
    pathname === "/qui-suis-je" ||
    pathname === "/cours" ||
    pathname === "/tarifs" ||
    pathname === "/contact" ||
    pathname.startsWith("/cours/") ||
    pathname.startsWith("/ateliers/");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const atHeroTop = hasHero && !scrolled && !menuOpen;

  useLenis(({ scroll }) => {
    setScrolled(scroll > SCROLL_THRESHOLD);
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const headerSurface =
    scrolled || menuOpen
      ? "border-b border-sand-200 bg-sand-50/95 backdrop-blur-md"
      : atHeroTop
        ? "border-b border-sand-200/70 bg-sand-50/95 backdrop-blur-md"
        : "border-b border-sand-200 bg-sand-50/95 backdrop-blur-sm";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${headerSurface}`}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
            aria-label={`${SITE_NAME} · Accueil`}
          >
            <Image
              src="/images/logo-flow-yoga-ink.png"
              alt={SITE_NAME}
              width={160}
              height={44}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Navigation principale"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] text-ink-600 transition-colors hover:text-clay-600 ${
                  pathname === link.href
                    ? "text-ink-900 underline decoration-clay-400 decoration-1 underline-offset-4"
                    : ""
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ReservationButton location="header" />
          </div>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span
              className={`block h-px w-6 bg-ink-900 transition-transform duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink-900 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink-900 transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-sand-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav
              className="flex flex-1 flex-col justify-center gap-6 px-[var(--spacing-container-x)]"
              aria-label="Navigation mobile"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`font-serif text-4xl tracking-tight ${
                      pathname === link.href ? "text-clay-600" : "text-ink-900"
                    }`}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.4 }}
                className="mt-4"
              >
                <ReservationButton location="mobile-menu" />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
