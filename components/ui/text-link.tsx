import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TextLink({
  href,
  children,
  external,
  className,
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  arrow?: boolean;
}) {
  const isExternal = external ?? href.startsWith("http");
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center gap-1 font-medium text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-red hover:decoration-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red",
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowUpRight
          className="h-[1em] w-[1em] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
          aria-hidden
        />
      )}
    </Link>
  );
}
