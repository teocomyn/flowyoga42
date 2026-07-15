"use client";

import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ReservationButton } from "@/components/ui/Button";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

const SCROLL_THRESHOLD = 48;

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

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

  const shellClass = menuOpen
    ? "header-shell header-shell-scrolled"
    : scrolled
      ? "header-shell header-shell-scrolled"
      : "header-shell";

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
        <div className="pointer-events-auto mx-auto w-full max-w-[1320px]">
          <div
            className={`relative flex h-[3.75rem] items-center rounded-full px-3 transition-[box-shadow,background-color,border-color] duration-500 md:h-[4.5rem] md:px-4 ${shellClass}`}
          >
            <Link
              href="/"
              className="relative z-10 flex shrink-0 items-center rounded-full px-2 py-1 transition-opacity hover:opacity-80"
              aria-label={`${SITE_NAME} · Accueil`}
            >
              <Image
                src="/images/logo-flow-yoga-ink.png"
                alt={SITE_NAME}
                width={160}
                height={44}
                className="h-7 w-auto md:h-8"
                priority
              />
            </Link>

            <nav
              className="header-nav-dock absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 rounded-full p-1 lg:flex"
              aria-label="Navigation principale"
            >
              {NAV_LINKS.map((link) => {
                const active = isActivePath(pathname, link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative rounded-full px-4 py-2 text-[13px] font-medium tracking-[0.01em] transition-all duration-300 md:px-5 md:text-[14px] ${
                      active
                        ? "bg-blush-50 text-ink-900 shadow-[0_6px_18px_rgba(173,31,95,0.12)]"
                        : "text-ink-600 hover:bg-sand-100/90 hover:text-clay-600"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2">
              <ReservationButton
                location="header"
                className="hidden !px-5 !py-2.5 !text-[13px] lg:inline-flex"
              />
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-sand-200/80 bg-sand-50/90 shadow-[0_6px_16px_rgba(28,26,23,0.06)] transition-colors hover:border-clay-400/40 hover:bg-blush-50/80 lg:hidden"
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
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-ink-900/20 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Fermer le menu"
              onClick={closeMenu}
            />
            <motion.div
              id="mobile-menu"
              className="fixed inset-x-4 top-[5.25rem] z-50 overflow-hidden rounded-[2rem] border border-sand-200/80 bg-sand-50/98 shadow-[0_28px_70px_rgba(28,26,23,0.16)] backdrop-blur-xl lg:hidden"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav
                className="flex flex-col gap-1 p-3"
                aria-label="Navigation mobile"
              >
                {NAV_LINKS.map((link, index) => {
                  const active = isActivePath(pathname, link.href);

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3.5 font-serif text-xl tracking-tight transition-colors ${
                          active
                            ? "bg-blush-50 text-clay-600"
                            : "text-ink-900 hover:bg-sand-100"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.label}
                        <span
                          className="text-clay-400"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <div className="border-t border-sand-200/80 p-3">
                <ReservationButton
                  location="mobile-menu"
                  className="w-full !py-3"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
