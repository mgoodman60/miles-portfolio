# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack warning (read first)

@AGENTS.md

Concretely: this app runs **Next.js 16.2.4 + React 19.2.4 + Tailwind v4 (PostCSS plugin)**. Training-data Next.js patterns (especially around caching, `next.config`, async APIs, and the App Router) may be wrong. Before adding/changing framework-level code, consult `node_modules/next/dist/docs/` or current upstream docs — do not rely on memory.

## Common commands

Run from `portfolio-site/`:

| Task | Command |
|------|---------|
| Dev server | `rtk npm run dev` (http://localhost:3000) |
| Production build | `rtk npm run build` |
| Start built app | `rtk npm start` |
| Typecheck | `rtk npx tsc --noEmit` |

There is no test runner, no lint script, and no Prettier config. `tsc --noEmit` is the only static check.

### Deployment

Deploy via the **Vercel CLI** (`rtk vercel` / `rtk vercel --prod`). The session-level rule is: use the Vercel CLI, not the dashboard, not the MCP. `vercel.json` is intentionally empty — the framework preset handles routing.

## Architecture

Single Next.js App Router project. There is no API layer, no database, and no auth — it is a fully static marketing/portfolio site.

### Top-level layout

- `src/app/layout.tsx` — root shell. Wraps every page in `<Nav>` (`components/layout/Nav.tsx`) and `<Footer>` (`components/layout/Footer.tsx`), loads Geist via `next/font`, applies global styles from `app/globals.css` (Tailwind v4 `@import "tailwindcss"` + custom CSS variables for the design tokens).
- `src/app/page.tsx` — landing page; composes hero + section components.
- Routes are file-based under `src/app/`:
  - `/projects` (index) and `/projects/{camp-taylor-pool,john-black-aquatic,one-senior-care-morehead}` — case studies
  - `/about`, `/contact`, `/my-reports`, `/ai-tools`, `/resume`

### Component layers

- `src/components/layout/` — site chrome (Nav, Footer).
- `src/components/sections/` — page-level composed sections. Notable:
  - `HeroSlideshow.tsx`, `HeroParallax.tsx` — landing-page heroes (motion-driven).
  - `ProjectCard3D.tsx` — tilt/3D card used on the projects index.
  - `BeforeAfterSlider.tsx` — wraps `react-compare-slider` for renovation comparisons.
  - `CampTaylorGallery.tsx` — `react-photo-album` + `yet-another-react-lightbox`.
- `src/components/magicui/` — third-party-style animation primitives (`blur-fade`, `marquee`, `number-ticker`). Treat these as vendored: keep them isolated and don't refactor across them.
- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge), the only shared util. shadcn-style alias.

### Styling

- Tailwind v4 via `@tailwindcss/postcss` (see `postcss.config.mjs`). No `tailwind.config.*`; theme tokens live as CSS variables in `app/globals.css`.
- `components.json` is configured for shadcn-style component additions (alias `@/components`, `@/lib/utils`).

### Animation

`motion` (the Framer Motion successor) is the animation primitive. Most sections are client components (`"use client"`) that wrap motion primitives. When adding interactive sections, mirror the pattern in existing `sections/*.tsx` files.

### Assets

- `public/projects/<project-slug>/` — case-study photos. Filenames are referenced directly from each project page.
- `public/headshot.jpg`, `public/Miles_Goodman_Resume.pdf` — portfolio assets.
- Source-of-truth images live one level up in `Camp Taylor/`, `John Blacl Aquatic Center/`, `Morehead One Senior Care/` — these are **not** served; they're the originals that get compressed into `public/`.

### Image pipeline

Two Python helper scripts at the repo root (`portfolio-site/`):

- `compress-images.py` — re-encodes/resizes originals into `public/projects/`.
- `cleanup-unused-photos.py` — removes assets in `public/projects/` not referenced by any `src/app/projects/**/page.tsx`.

Run with `rtk python compress-images.py` / `rtk python cleanup-unused-photos.py`. After adding a new project page, run cleanup to prune orphans.

## Conventions

- **Path alias:** `@/*` → `src/*` (see `tsconfig.json`).
- **Client vs server components:** default to server components; mark `"use client"` only on files that use motion, browser APIs, or hooks (most `sections/*` and `magicui/*` are client).
- **No test suite.** Verify changes by running `rtk npm run dev` and exercising the affected route in a browser before claiming done.
- **Project pages are content-heavy.** When editing copy/images for a case study, the changes are local to that page's `page.tsx` plus its `public/projects/<slug>/` folder — there is no CMS or shared data layer.

## Project context

Companion planning docs live one directory up:

- `../PORTFOLIO_PLAN.md` — site plan / IA decisions.
- `../COMPONENTS_REFERENCE.md` — inventory of section components and where they're used.

Update these when adding new sections or pages so future sessions can find them.
