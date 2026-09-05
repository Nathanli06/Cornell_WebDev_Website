import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the products Cornell WebDev project teams have shipped for the Cornell community.",
};

const statusDot: Record<string, string> = {
  live: "bg-emerald-600",
  "in-development": "bg-amber-600",
  archived: "bg-body-light",
};

export default function Projects() {
  const built = projects.filter((p) => p.status !== "in-development");
  const inDevelopment = projects.filter((p) => p.status === "in-development");

  return (
    <div className="flex flex-col">
      <PageHero
        title="Projects"
        subtitle="Real products, built by student teams, for the Cornell community."
      />

      <section className="w-full px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          {built.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} index={i + 1} size={i === 0 ? "large" : "default"} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* In development */}
      {inDevelopment.length > 0 && (
        <section className="w-full bg-surface px-6 py-16 md:px-10">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="font-serif font-medium text-3xl text-heading">In development</h2>
            </Reveal>

            <div className="mt-8 flex flex-col divide-y divide-line border-t border-line">
              {inDevelopment.map((project, i) => (
                <Reveal
                  key={project.slug}
                  delay={i * 0.05}
                  className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`}
                        aria-hidden
                      />
                      <span className="font-mono text-xs uppercase tracking-[0.1em] text-body-light">
                        In development
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-lg font-medium text-heading">
                      {project.name}
                    </h3>
                    <p className="mt-1 max-w-xl text-sm text-body">{project.description}</p>
                  </div>
                  <p className="font-mono text-xs text-body-light sm:text-right">
                    {project.stack.join(", ")}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
