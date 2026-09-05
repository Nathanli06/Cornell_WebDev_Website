"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section";
};

/**
 * Fades + slides content into view the first time it crosses the viewport.
 * Wrap any section/card with this to get consistent scroll-in motion.
 * Collapses to an instant fade under prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduceMotion = usePrefersReducedMotion();
  const MotionTag = as === "section" ? motion.section : motion.div;

  const variants: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{
        duration: reduceMotion ? 0.15 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
