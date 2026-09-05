export type ProjectStatus = "live" | "in-development" | "archived";

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  contributors: number;
  repoUrl?: string;
  liveUrl?: string;
  /** Shown instead of a repo link when a project's public presence is a social account, not code. */
  instagramUrl?: string;
  /** Domain shown in the card's browser-chrome bar. Falls back to a placeholder. */
  displayUrl?: string;
  /** Real product screenshot. Falls back to a stylized monogram when absent. */
  image?: string;
  /** Shown next to the "Archived" badge, e.g. "Retired September 2026". */
  retiredAt?: string;
  /** Included in the homepage's 3-card showcase. */
  featured?: boolean;
};

/**
 * repoUrl / liveUrl are placeholders ("#") until real links are wired up.
 * contributors counts are editable placeholders reflecting typical team size.
 */
export const projects: Project[] = [
  {
    slug: "cornlet",
    name: "Cornlet",
    description:
      "Cornell University's subletting platform, serving 10,000+ users with over 2,000 sublet listings across Ithaca's neighborhoods.",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    status: "live",
    contributors: 6,
    instagramUrl: "https://www.instagram.com/cornlethousing/",
    liveUrl: "https://www.cornlet.com/",
    displayUrl: "cornlet.com",
    image: "/assets/projects/cornlet.png",
    featured: true,
  },
  {
    slug: "revy",
    name: "Revy",
    description:
      "A carpooling platform for Cornell students. Revy helped 900+ students book around 200 rides during its two-year run.",
    stack: ["React", "Node.js", "Maps API"],
    status: "archived",
    contributors: 5,
    instagramUrl: "https://www.instagram.com/revycarpool/",
    image: "/assets/projects/revy.png",
    retiredAt: "Retired",
    featured: true,
  },
  {
    slug: "polity",
    name: "Polity",
    description:
      "An online browser game where players answer questions as fast as possible, featuring high scores and private multiplayer rooms.",
    stack: ["WebSockets", "React", "Redis"],
    status: "archived",
    contributors: 5,
    retiredAt: "Retired",
  },
  {
    slug: "cornell-cybersecurity",
    name: "Cornell Cybersecurity Club Website",
    description:
      "Rebuilt Cyber@Cornell's official website, delivering a modern, accessible digital presence for Cornell's student cybersecurity organization.",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    status: "live",
    contributors: 12,
    repoUrl: "https://github.com/Cyber-Cornell/cornellcyber.club",
    liveUrl: "https://cornellcyber.club",
    displayUrl: "cornellcyber.club",
    image: "/assets/projects/cornell-cybersecurity.png",
    featured: true,
  },
  {
    slug: "webdev-site",
    name: "Cornell WebDev Site",
    description:
      "Redesigning Cornell WebDev's own website with improved branding, project showcases, and a smoother contributor onboarding experience.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    status: "in-development",
    contributors: 3,
    repoUrl: "#",
  },
];
