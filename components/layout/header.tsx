"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data/nav";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState<string | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-1px 0px 0px 0px" },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile menu when the route changes. Adjusting state during
  // render (rather than in an effect) avoids an extra cascading render.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]) && href.split("#")[0] !== "/";

  return (
    <div className="relative">
      <div ref={sentinelRef} aria-hidden className="absolute top-0 h-px w-full" />
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-paper transition-colors duration-300",
          scrolled ? "border-line" : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center px-6 md:h-20 md:px-10">
          <Link
            href="/"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <Image
              src="/assets/logo.png"
              alt="Cornell WebDev"
              width={210}
              height={55}
              priority
              className="h-8 w-auto object-contain md:h-9"
            />
          </Link>

          <nav className="ml-auto hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-2 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red",
                    active ? "text-ink" : "text-body hover:text-ink",
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute inset-x-0 -bottom-[1px] h-[1.5px] bg-red"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                </Link>
              );
            })}
            <Button href="/recruitment" size="default" className="ml-2">
              Apply to join
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red md:hidden"
          >
            <span
              className={cn(
                "h-px w-5 bg-ink transition-transform duration-200",
                menuOpen && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-5 bg-ink transition-transform duration-200",
                menuOpen && "-translate-y-px -rotate-45",
              )}
            />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-nav"
              aria-label="Primary"
              initial={reduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
              animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-line bg-paper md:hidden"
            >
              <motion.div
                className="flex flex-col px-6 py-8"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.05 } },
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: reduceMotion ? {} : { opacity: 0, x: -12 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className={cn("border-b border-line", i === 0 && "border-t")}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "font-serif font-medium block py-4 text-3xl transition-colors focus-visible:outline-none",
                        isActive(link.href) ? "text-red" : "text-ink hover:text-red",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: reduceMotion ? {} : { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="mt-6"
                >
                  <Button href="/recruitment" className="w-full">
                    Apply to join
                  </Button>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
