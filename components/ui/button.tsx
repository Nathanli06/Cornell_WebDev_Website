import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  size?: "default" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-ink text-paper hover:bg-red",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

/**
 * Rectangular, no radius. The site's shape system is sharp everywhere;
 * pill buttons are the one AI-tell this project deliberately avoids.
 */
export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  external,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    const isExternal = external ?? href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
