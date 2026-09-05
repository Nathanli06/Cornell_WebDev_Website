"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import type { TimelineStep } from "@/lib/data/timeline";

/**
 * Changelog-styled vertical timeline. The connector line draws in as the
 * user scrolls past it, visualising progress through the recruitment
 * pipeline. Collapses to a static line under prefers-reduced-motion.
 */
export function Timeline({ steps }: { steps: TimelineStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-[3px] top-2 bottom-2 w-px bg-line" aria-hidden />
      <motion.div
        className="absolute left-[3px] top-2 w-px origin-top bg-red"
        style={{
          scaleY: reduceMotion ? 1 : lineScale,
          bottom: 8,
        }}
        aria-hidden
      />

      <ol className="flex flex-col gap-10">
        {steps.map((step) => (
          <li key={step.tag} className="relative flex gap-6 pl-10">
            <span
              className="absolute left-0 top-1.5 h-[7px] w-[7px] rounded-full bg-red"
              aria-hidden
            />
            <div>
              <span className="font-mono text-xs text-body-light">{step.tag}</span>
              <h3 className="mt-1.5 text-lg font-medium text-heading">{step.title}</h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-body">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
