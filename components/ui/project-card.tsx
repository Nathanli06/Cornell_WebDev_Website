import Image from "next/image";
import { ArrowUpRight, Users } from "lucide-react";
import { GithubIcon, InstagramIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

const statusStyles: Record<Project["status"], { dot: string; label: string }> = {
  live: { dot: "bg-emerald-600", label: "Live" },
  "in-development": { dot: "bg-amber-600", label: "In development" },
  archived: { dot: "bg-body-light", label: "Archived" },
};

/**
 * An editorial project row: index, real screenshot (or a plain monogram
 * when no asset exists yet), and details. No browser-chrome mockup around
 * the screenshot; the image speaks for itself.
 */
export function ProjectCard({
  project,
  index,
  size = "default",
  className,
}: {
  project: Project;
  index: number;
  size?: "default" | "large";
  className?: string;
}) {
  const status = statusStyles[project.status];
  const large = size === "large";

  return (
    <article
      className={cn(
        "group flex flex-col gap-6 border-t border-line py-10 first:border-t-0 md:flex-row md:gap-10",
        large ? "md:items-stretch" : "md:items-start",
        className,
      )}
    >
      <div className={cn("shrink-0", large ? "md:w-3/5" : "md:w-2/5")}>
        {project.image ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
            <Image
              src={project.image}
              alt={`${project.name} interface`}
              fill
              sizes={large ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <div className="flex aspect-[4/3] w-full items-center justify-center bg-surface">
            <span className="font-serif font-medium text-6xl text-body-light">
              {project.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-body-light">
            {String(index).padStart(2, "0")}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-medium text-body">
            <span className={cn("h-1.5 w-1.5 rounded-full", status.dot)} aria-hidden />
            {project.status === "archived" && project.retiredAt ? project.retiredAt : status.label}
          </span>
        </div>

        <h3
          className={cn(
            "font-serif font-medium text-heading",
            large ? "text-4xl md:text-5xl" : "text-3xl",
          )}
        >
          {project.name}
        </h3>

        <p className="max-w-lg text-sm leading-relaxed text-body">{project.description}</p>

        <p className="font-mono text-xs text-body-light">{project.stack.join(", ")}</p>

        <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="flex items-center gap-1.5 text-xs text-body-light">
            <Users className="h-3.5 w-3.5" strokeWidth={1.75} />
            {project.contributors} contributor{project.contributors === 1 ? "" : "s"}
          </span>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} repository on GitHub`}
              className="flex items-center gap-1.5 text-xs text-body transition-colors hover:text-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red"
            >
              <GithubIcon className="h-3.5 w-3.5" /> Code
            </a>
          )}
          {!project.repoUrl && project.instagramUrl && (
            <a
              href={project.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on Instagram`}
              className="flex items-center gap-1.5 text-xs text-body transition-colors hover:text-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red"
            >
              <InstagramIcon className="h-3.5 w-3.5" /> Instagram
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} live site`}
              className="flex items-center gap-1.5 text-xs text-body transition-colors hover:text-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red"
            >
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} /> Visit site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
