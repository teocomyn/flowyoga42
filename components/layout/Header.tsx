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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const shellSurface = menuOpen
    ? "border-sand-200 bg-sand-50/98 shadow-[0_16px_48px_rgba(28,26,23,0.12)]"
    : scrolled
      ? "border-sand-200/90 bg-sand-50/96 shadow-[0_16px_48px_rgba(28,26,23,0.1)]"
      : "border-sand-200/70 bg-sand-50/92 shadow-[0_12px_40px_rgba(28,26,23,0.08)]";

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
        <Container className="pointer-events-auto">
          <div
            className={`flex h-16 items-center justify-between gap-3 rounded-full border px-3 backdrop-blur-md transition-[box-shadow,background-color,border-color] duration-500 md:h-[4.25rem] md:px-5 ${shellSurface}`}
          >
            <Link
              href="/"
              className="flex shrink-0 items-center transition-opacity hover:opacity-80"
              aria-label={`${SITE_NAME} · Accueil`}
            >
              <Image
                src="/images/logo-flow-yoga-ink.png"
                alt={SITE_NAME}
                width={160}
                height={44}
                className="h-8 w-auto md:h-9"
                priority
              />
            </Link>

            <nav
              className="glass-surface hidden items-center gap-1 rounded-full px-1.5 py-1 lg:flex"
              aria-label="Navigation principale"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-[14px] transition-colors ${
                    pathname === link.href
                      ? "bg-sand-100 text-ink-900"
                      : "text-ink-600 hover:bg-sand-100/80 hover:text-clay-600"
                  }`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden shrink-0 lg:block">
              <ReservationButton location="header" />
            </div>

            <button
              type="button"
              className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-sand-200/80 bg-sand-50/80 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <span
                className={`block h-px w-5 bg-ink-900 transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-ink-900 transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-ink-900 transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-sand-50/98 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav
              className="flex flex-1 flex-col justify-center gap-4 px-[var(--spacing-container-x)]"
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
                    className={`block rounded-2xl px-5 py-4 font-serif text-3xl tracking-tight transition-colors ${
                      pathname === link.href
                        ? "bg-blush-50 text-clay-600"
                        : "text-ink-900 hover:bg-sand-100"
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
                className="mt-4 px-2"
              >
                <ReservationButton location="mobile-menu" className="w-full" />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
