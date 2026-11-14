# Plan: Personal site rebrand + portfolio page

PRD: ../prd/personal-site-rebrand-portfolio.md · Audit: /workspace/reviews/personal-site-audit-2026-11-10/AUDIT.md
Repo: mgoodman60/miles-portfolio · base `28e84ce` (master) · Second repo for step 9: mgoodman60/milestone-solutions on `preview/brand-divisions` only.

## PR strategy
- **Don't rebase #17.** It's a draft, it CONFLICTS with master, it predates #18/#19, and its buttons are blue. Take its token values only.
- Open a new branch, `feat/milestone-rebrand-portfolio`, from `28e84ce`, with one PR. After the new PR exists, close #17 as superseded; closing needs a GO.
- #1, #2 and #19 are already merged, so nothing else needs reuse.

## Preview hosting
- The CF Pages project `miles-portfolio` has `preview_deployment_setting: all`, so pushing the branch auto-builds `https://feat-milestone-rebrand-portf.miles-portfolio.pages.dev`. CF truncates branch aliases; take the exact URL from the deploy.
- Confirm the preview responds with `X-Robots-Tag: noindex`. If it doesn't, add `public/_headers` noindex only when `CF_PAGES_BRANCH != master`, through a build-time script.
- Production builds keep `NEXT_PUBLIC_SITE_URL=https://miles-portfolio.pages.dev`, which is already set in the CF env.

## Steps (each one is small and checked before the next)
| # | Step | Files | Check | Guess |
|---|---|---|---|---|
| 0 | **GO gate A:** Miles signs off on the PRD and answers Q1–Q5 (or the defaults stand); the branch push is authorized. Claim on Agent Board | none | GO quoted by Grok | none |
| 1 | Copywriter scrub copy: a replacement for every name hit outside /resume, a new OSC title and slug, the footer line, metadata descriptions and one-liners for the portfolio cards | input: `name-hits-28e84ce.txt` | Copywriter returns a table, approved via Grok | 1–2 h (Copywriter) |
| 2 | Apply the scrub and fact fixes. Rename the route dir → `projects/one-senior-care/`, move the photo dir `public/projects/morehead/` → `public/projects/one-senior-care/`, add `public/_redirects` (`/projects/one-senior-care-morehead /projects/one-senior-care 301`), and update sitemap and nav. Fix the realtor date and drop the $22M+ stat and the AGC/1933 line per Q5 | `lib/profile.ts`, `lib/site-nav.ts`, `app/layout.tsx`, `components/layout/Footer.tsx`, `sections/HeroSlideshow.tsx`, `sections/HeroParallax.tsx`, `app/page.tsx`, `app/projects/**`, `app/about`, `app/ai-tools`, `app/my-reports`, `app/contact`, `app/blog`, `app/sitemap.ts`, `public/_redirects` | `npm run build`; grep `out/` against acceptance criterion 1; `tsc --noEmit` | 2–3 h |
| 3 | Theme tokens: rewrite the `:root` palette in `globals.css` to the charcoal set, add `--orange`, `--orange-hover`, `--on-orange`, `--creative` and `--solutions`, and map the old tokens (`--paper`→`#0F1114`, `--ink`→`#F5F7FA` and so on) so the pages flip with little churn. Copy the photo hairline frame from #17 | `app/globals.css`, plus the few hard-coded hex values (`#dce6e8`, `#2a3138`, `#131820`, `#1c2430`) | axe 0; contrast script on token pairs; 1280/390 screenshots of every route | 2–3 h |
| 4 | Buttons and accents: every CTA uses the orange button class. Eyebrows and labels use magenta (Creative contexts: portfolio) or sky (Solutions contexts: AI tools / My Reports). Add a non-color cue (icon or label) wherever color carries meaning | `components/ui/*`, `PersonalHero`, `HeroSlideshow`, CTA blocks in each page | visual review; axe | 1.5–2 h |
| 5 | Links: LinkedIn (header icon, footer, about, resume), Milestone (footer plus /portfolio CTA, URL per Q2), "Writing" → per Q4. Person + WebSite JSON-LD (`sameAs`: LinkedIn) | `Nav.tsx`, `Footer.tsx`, `site-nav.ts`, `layout.tsx`, `about`, `resume` | link check with 0 broken; Rich Results test locally (schema validator) | 1 h |
| 6 | Polish: AVIF/WebP for Camp Taylor and the hero (reuse `compress-images.py`), a correct LCP preload, the 404 page with noindex and no canonical, remove the CNA SVGs | `public/projects/camp-taylor/*`, `CampTaylorGallery.tsx`, `not-found.tsx`, `public/*.svg` | Lighthouse mobile ≥ 95 on camp-taylor | 1.5–2 h |
| 7 | /portfolio page: a `PortfolioMockups` component modeled on milestone-solutions `WebsiteMockups.tsx`, data in `lib/portfolio.ts` (real pieces plus a hidden `concept` slot with a forced "Concept project, fictional business" badge). Generate the mockups with a copy of `/workspace/milestone-shots/tools/angie_mockups.py`, parameterized as `site_mockups.py --site <slug>`. Milestone shots come from the preview build; Angie shots come from the existing source set. Add to nav, sitemap and footer | `app/portfolio/page.tsx`, `components/sections/PortfolioMockups.tsx`, `lib/portfolio.ts`, `public/portfolio/**`, `site-nav.ts`, `sitemap.ts`; tool: `/workspace/milestone-shots/tools/site_mockups.py` | build; axe; Lighthouse ≥ 95; no vercel.app link; Angie link per Q1 | 3–4 h |
| 8 | Push the preview, then run the **QA + SEO loop**: Web & Workflow QA and Site SEO score independently, with fixes under LOOP CAP 2 (after a second FAIL, send Grok a ship/simplify/stop call). Update docs/HANDOFF.md with every commit | as findings require | both ≥ 95; receipts saved | 2–4 h |
| 9 | **The personal site as a portfolio piece** (only after step 8 passes). (a) Capture home, /projects and /portfolio at 1440×900 and 780×1688 from the preview, skipping /resume because of the name rule. (b) Composite with `site_mockups.py --site miles-portfolio`. (c) Add it as a piece on its own /portfolio. (d) **milestone-solutions, preview/brand-divisions only:** add the images under `public/creative/web/miles-portfolio/`, extend `WebsiteMockups.tsx` from a single Angie `BASE` to a list of pieces, each with its own heading and line ("a personal portfolio site I built"), and add styles under `.site-mockups` in `globals.css`. Update DESIGN.md and docs/HANDOFF.md | miles-portfolio: `lib/portfolio.ts`, `public/portfolio/miles-portfolio/*`. milestone-solutions: `src/components/sections/WebsiteMockups.tsx`, `src/app/creative/page.tsx` (only if a heading is needed), `public/creative/web/miles-portfolio/*`, `globals.css`, `DESIGN.md`, `docs/HANDOFF.md` | name-rule grep on both `out/`; /creative re-QA ≥ 95; Perf delta ≤ 2; 1280/390 shots | 2–3 h |
| 10 | Report to Grok: preview URLs, screenshots, scores and receipts. **GO gate B** is the production merge of miles-portfolio. **GO gate C**: /creative changes ride the existing Milestone go-live packet; no separate merge | none | none | 0.5 h |

## Test plan
- Static checks: `npx tsc --noEmit` and `npm run build` (static export).
- Name-rule grep on `out/` (acceptance criterion 1) as a script, `tools/check-names.sh`, run before every push. This could go in the repo as a guard.
- Playwright on every route at 1280 and 390: screenshots, axe, horizontal-scroll check and tap-target check.
- Lighthouse 12 mobile on /, /projects, /portfolio, /resume and camp-taylor.
- Link check (internal plus external) with a browser UA. Treat 402/403 bot blocks as manual checks.
- Redirect check: `curl -I` on the old OSC slug on the preview.
- No FormSubmit test submit.

## Rollout
1. Preview only (steps 1–9). 2. Grok packet. 3. **GO B:** merge the PR to master; CF auto-deploys production. Then check live: names grep, redirect, canonical, sitemap. 4. **Rollback:** in the CF Pages dashboard, use "Rollback to previous deployment" (the current production deploy is `28e84ce`), or `git revert` the merge commit. A revert is a new commit, not a force-push.

## GO gates
- A: PRD sign-off, defaults or answers to Q1–Q5, and permission to push the branch / open the PR on miles-portfolio and to push to milestone-solutions preview/brand-divisions in step 9.
- B: merge miles-portfolio to production.
- C: milestone-solutions master merge (the existing go-live packet).
- Also: closing PR #17.

## Effort (guesses)
- Steps 1–8: ~14–21 h of build plus 1–2 h of Copywriter.
- Step 9: 2–3 h.
- Total: **~17–26 h**, roughly 2–3 working days with the QA loop. The biggest unknowns are how many copy rounds the scrub takes and the image work on Camp Taylor.
