# Cornell WebDev — Website v2

The public site for Cornell WebDev: who we are, what we've built, who's on
the team, and how to apply. Editorial-leaning design system (Zilla Slab
display type paired with Geist sans/mono), real member and project
photography, and a sharp-edged, single-accent visual language defined in
[`app/globals.css`](app/globals.css).

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + TypeScript
- Tailwind CSS v4 (theme tokens in `app/globals.css`)
- [Framer Motion](https://motion.dev) for scroll-in reveals and menu/nav motion
- [Radix UI](https://radix-ui.com) primitives (accordion) for accessibility
- [Lucide](https://lucide.dev) icons, plus a few hand-rolled brand marks
  (GitHub, Instagram, LinkedIn, company logos) since lucide dropped brand glyphs

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint    # ESLint
npm run build   # production build
```

## Project structure

```
app/
  page.tsx              Home
  members/page.tsx      Members (E-Board, members, alumni)
  projects/page.tsx     Projects (shipped + in development)
  recruitment/page.tsx  Recruitment (timeline, FAQ)
  not-found.tsx, sitemap.ts

components/
  layout/     Header, Footer
  ui/         Reusable primitives: Button, TextLink, Accordion, Reveal,
              PageHero, ProjectCard, MemberCard, Timeline, LogoMarquee,
              ImagePlaceholder, company/social icon sets

lib/
  data/       Editable content as plain TypeScript: nav, projects, members,
              timeline, faqs, placements (companies members have worked at)
  use-reduced-motion.ts, utils.ts

public/assets/
  logo*.png       Brand marks
  members/        Individual member headshots
  projects/       Real project screenshots
  team/           Group/team photography
```

## Content

Copy and structured content (projects, members, FAQs, recruitment timeline,
company placements) live in `lib/data/` as plain TypeScript objects, so they
can be edited without touching page markup or component code.

## Images

Real photos are preferred everywhere. [`ImagePlaceholder`](components/ui/image-placeholder.tsx)
is the fallback for anyone or anything without a real asset yet (a labeled,
dashed box) — swap it for a real image once one exists.

## What's intentionally not committed

See `.gitignore`: build output, `node_modules`, env files, OS/editor
cruft, and local AI-assistant config/session files. Don't
commit secrets, API keys, or `.env*` files; use your deployment platform's
environment variable settings instead.
