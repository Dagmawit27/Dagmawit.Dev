
## Goal

Turn the existing site into a formal, editorial portfolio while preserving the current home page hero and background video. Add a unique winding-path skills section (inspired by the reference) and give each project its own detail route.

## Design direction — Paper & Ink

- Palette: `#f5f3ee` (paper), `#e8e4dd` (soft), `#2d2d2d` (ink), `#0d0d0d` (deep ink). One restrained accent for the S-curve nodes.
- Typography: `Instrument Serif` for display headings (formal, editorial), `Inter` for body. Uppercase small-caps labels for section eyebrows.
- Feel: Swiss editorial — thin rules, generous whitespace, numbered sections (01 / 02 / 03), fine hairline borders, no gradients, no emoji icons.
- Motion: subtle fade/slide on scroll; no bouncy animations.

## Routes

```text
src/routes/
  index.tsx              -> Home (KEEP hero + background video as-is; restyle the sections below only)
  about.tsx              -> /about
  skills.tsx             -> /skills (winding S-curve journey)
  projects.tsx           -> /projects (grid of cases)
  projects.$slug.tsx     -> /projects/:slug (dedicated case study page)
  contact.tsx            -> /contact
```

Each route gets its own `head()` metadata (title, description, og:title, og:description). Nav header + minimal footer in `__root.tsx`.

## Home page (preserved)

- Keep hero copy, CTA layout, and background video exactly as on the current site.
- Only restyle typography/colors to Paper & Ink tokens so it fits the rest.
- Below the hero, keep the stats block (5+ projects, 96% satisfaction, 3+ years) but restyle as an editorial stat row with hairline dividers.
- Certificates strip stays; render as a quiet marquee of framed thumbnails.

## Skills — winding S-curve path

A single vertical S-curve SVG spanning the viewport, with 4–6 milestone nodes alternating left/right, mimicking the reference:

- SVG path drawn with a dashed stroke in ink, with a soft accent glow only on the active/hovered node (accent kept minimal to stay formal).
- Each node = circular icon medallion + numbered card (`01`, `02`, …) with title and 1–2 line description.
- Nodes: Frontend, Backend, Full-Stack, UI/UX, Responsive/Figma, Optimization & Maintenance.
- Icons: thin line SVGs (lucide `Lightbulb`, `Code2`, `Layers`, `PenTool`, `Smartphone`, `Rocket`), never emoji.
- Scroll-triggered draw-in of the path using `stroke-dashoffset` for a signature moment.

## Projects

- `/projects`: editorial grid (2 columns desktop, 1 mobile). Each card = large image, project number, title, one-line summary, "Read case →". Whole card links to `/projects/$slug`.
- `/projects/$slug`: dedicated detail page with cover image, meta (role, stack, year, live/github links), overview, problem, approach, highlights, and image gallery. Data lives in `src/lib/projects.ts` keyed by slug: `simple-calculator`, `gym-house`, `burger-house`. `notFound()` on unknown slug; both `errorComponent` and `notFoundComponent` set.

## About / Contact

- About: portrait + editorial bio (kept from current site copy), services list as numbered items.
- Contact: keep the four channels (phone, Telegram, WhatsApp, SMS) but restyled as a clean contact card list with hairline separators. Contact values kept identical to the current site.

## Technical notes

- Fonts via `@fontsource/instrument-serif` and `@fontsource/inter`, imported in `src/start.ts` or root; set as CSS vars in `src/styles.css`.
- Update `src/styles.css` tokens (`--background`, `--foreground`, `--muted`, `--accent`, `--border`) to the Paper & Ink oklch values; keep the dark block but not required for launch.
- Reuse the existing certificate/project images from the current GitHub Pages site by URL.
- `<Link to="/projects/$slug" params={{ slug }}>` for detail navigation (never string interpolation).
- Every route sets its own head() metadata; keep og:image only on leaf routes.

## Out of scope

- No change to the home hero composition or background video.
- No CMS/database; project data is a typed static file.
- No dark mode toggle (formal single-theme).
