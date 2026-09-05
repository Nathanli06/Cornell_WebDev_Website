import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-start justify-center gap-4 bg-surface-hero px-6 md:px-10">
      <span className="font-mono text-sm text-red">404</span>
      <h1 className="font-serif font-medium max-w-lg text-5xl text-heading md:text-6xl">
        This page hasn&apos;t been built yet.
      </h1>
      <p className="max-w-sm text-body">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-6">
        <Button href="/">Back home</Button>
        <Link
          href="/projects"
          className="text-sm text-body underline decoration-line decoration-1 underline-offset-4 hover:text-red hover:decoration-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red"
        >
          Or see what we&apos;ve built
        </Link>
      </div>
    </div>
  );
}
