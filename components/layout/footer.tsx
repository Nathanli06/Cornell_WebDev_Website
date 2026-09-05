import Link from "next/link";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { navLinks } from "@/lib/data/nav";

export function Footer() {
  return (
    <footer className="w-full border-t border-ink-border bg-ink text-paper">
      <div className="mx-auto w-full max-w-7xl px-6 pt-10 pb-10 md:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-2 sm:col-span-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/40">
              Since
            </span>
            <span className="text-sm text-paper/70">2021, Ithaca NY</span>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/40">
              Site
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-paper/70 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/40"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/40">
              Contact
            </span>
            <a
              href="mailto:cornellwebdev@cornell.edu"
              className="text-sm text-paper/70 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/40"
            >
              cornellwebdev@cornell.edu
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/40">
              Follow
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/cornellwebdevclub/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cornell WebDev on Instagram"
                className="text-paper/70 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/40"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/cornellwebdev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cornell WebDev on LinkedIn"
                className="text-paper/70 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/40"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-border px-6 py-6 md:px-10">
        <p className="mx-auto max-w-7xl text-xs text-paper/40">
          Cornell WebDev is a registered student organization of Cornell
          University. It abides by Cornell&apos;s{" "}
          <a
            href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-paper/30 underline-offset-2 hover:text-paper/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/40"
          >
            Equal Education &amp; Employment Opportunity (EEEO) Statement
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
