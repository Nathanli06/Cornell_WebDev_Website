"use client";

import { companyLogos } from "@/components/ui/company-logos";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import type { Placement } from "@/lib/data/placements";

function Row({ placements, hidden }: { placements: Placement[]; hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {placements.map((company) => {
        const Icon = company.icon ? companyLogos[company.icon] : null;
        return (
          <span
            key={company.name}
            className="flex items-center gap-2.5 pr-12 text-lg text-body"
          >
            {Icon && <Icon className="h-4 w-4 shrink-0 text-body-light" aria-hidden />}
            {company.name}
          </span>
        );
      })}
    </div>
  );
}

/**
 * The site's one marquee. A continuous ticker of companies where members
 * have worked, reading like a credits line rather than a badge wall.
 * Pauses to a static wrapped row under prefers-reduced-motion.
 */
export function LogoMarquee({ placements }: { placements: Placement[] }) {
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) {
    return (
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
        {placements.map((company) => {
          const Icon = company.icon ? companyLogos[company.icon] : null;
          return (
            <span key={company.name} className="flex items-center gap-2.5 text-lg text-body">
              {Icon && <Icon className="h-4 w-4 shrink-0 text-body-light" aria-hidden />}
              {company.name}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Row placements={placements} />
        <Row placements={placements} hidden />
      </div>
    </div>
  );
}
