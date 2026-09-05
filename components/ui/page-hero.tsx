import { type ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <section className="w-full border-b border-line px-6 pb-12 pt-14 md:px-10 md:pb-16 md:pt-20">
      <Reveal className="mx-auto max-w-6xl">
        {eyebrow && (
          <span className="font-mono mb-4 block text-[11px] uppercase tracking-[0.14em] text-body-light">
            {eyebrow}
          </span>
        )}
        <h1 className="font-serif font-medium max-w-3xl text-5xl text-heading sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-body">{subtitle}</p>
        )}
      </Reveal>
    </section>
  );
}
