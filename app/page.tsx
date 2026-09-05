import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/ui/project-card";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { InstagramIcon } from "@/components/ui/social-icons";
import { projects } from "@/lib/data/projects";
import { placements } from "@/lib/data/placements";

const stats = [
  { value: "2021", label: "Founded" },
  { value: "10,000+", label: "Cornlet users" },
  { value: "900+", label: "Students served by Revy" },
  { value: "3+", label: "Active subproject teams" },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="w-full bg-surface-hero px-6 pb-14 pt-14 md:px-10 md:pb-20 md:pt-20">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <span className="font-mono block text-xs uppercase tracking-[0.14em] text-body-light">
              Est. 2021 · Ithaca, NY
            </span>
            <h1 className="font-serif font-medium mt-5 max-w-xl text-6xl leading-[1.05] text-heading sm:text-7xl">
              We build the web, together.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-body">
              Since 2021, Cornell students have learned web development by shipping
              real products together, not by watching tutorials.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button href="/recruitment" size="lg">
                Apply to join
              </Button>
              <Link
                href="/projects"
                className="text-sm font-medium text-body underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-red hover:decoration-red"
              >
                See what we&apos;ve built
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mt-14 aspect-[16/7] w-full overflow-hidden bg-surface md:mt-20">
            <Image
              src="/assets/team/group.jpg"
              alt="The Cornell WebDev team"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_25%]"
            />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full border-y border-line bg-paper">
        <Reveal className="mx-auto flex w-full max-w-6xl flex-wrap gap-x-12 gap-y-8 px-6 py-14 md:px-10 md:py-16">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-serif font-medium text-4xl text-heading md:text-5xl">
                {stat.value}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-body-light">
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* About */}
      <section id="about" className="w-full scroll-mt-24 px-6 py-24 md:px-10">
        <Reveal className="mx-auto max-w-2xl">
          <p className="text-2xl leading-snug text-heading md:text-3xl">
              Small teams. Working software. Real users.
          </p>
        </Reveal>
      </section>

      {/* Featured Section */}
      <section className="w-full px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex items-end justify-between gap-4">
            <h2 className="font-serif font-medium text-4xl text-heading md:text-5xl">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="hidden shrink-0 text-sm font-medium text-body underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-red hover:decoration-red sm:inline"
            >
              All projects
            </Link>
          </Reveal>

          <div className="mt-4">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <ProjectCard project={project} index={i + 1} size={i === 0 ? "large" : "default"} />
              </Reveal>
            ))}
          </div>

          <Link
            href="/projects"
            className="mt-8 inline-block text-sm font-medium text-body underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-red hover:decoration-red sm:hidden"
          >
            All projects
          </Link>
        </div>
      </section>

      {/* Placements */}
      <section className="w-full border-y border-line px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono mb-8 text-xs uppercase tracking-[0.14em] text-body-light">
            Where our members have gone
          </p>
          <LogoMarquee placements={placements} />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full bg-ink px-6 py-24 text-paper md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-lg">
            <h2 className="font-serif font-medium text-5xl leading-[1.1] md:text-6xl">Join us.</h2>
            <p className="mt-5 text-paper/65">
              Applications open every semester. No prior experience required,
              just curiosity and a willingness to ship.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button href="/recruitment" variant="outline" size="lg" className="border-paper text-paper hover:bg-paper hover:text-ink">
                Apply to join
              </Button>
              <a
                href="https://www.instagram.com/cornellwebdevclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-paper/70 transition-colors hover:text-paper"
              >
                <InstagramIcon className="h-4 w-4" />
                @cornellwebdevclub
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
