# PRD: Personal site rebrand + portfolio page

Status: DRAFT for Miles's sign-off (via Grok) · 2026-11-10 · Owner: CTO
Repo: mgoodman60/miles-portfolio (master `28e84ce`) · Live: https://miles-portfolio.pages.dev (CF Pages)
Audit: /workspace/reviews/personal-site-audit-2026-11-10/AUDIT.md

## Problem
- The personal site is technically strong: Lighthouse mobile a11y/BP/SEO are 100, Perf is 86–97, and axe finds 0 violations.
- It breaks Miles's 2026-11-10 name rule on every page. W Principles and Morehead may appear on the resume only; the site has 85 source lines and hits on all 12 routes, the footer included. It also names the MOSC project ("One Senior Care - Morehead").
- It looks nothing like Milestone: light paper theme, slate accent.
- It doesn't link to LinkedIn or Milestone.
- It has no place to show the websites the team builds.

## Goal
1. Make the facts right: every claim traces to a resume, or Miles confirms it. The name rule is enforced.
2. Make it read as part of the Milestone family: charcoal theme, divisional accents, orange buttons, the same type.
3. Add a **/portfolio** page with real screenshots of team-built sites. The page doubles as a sales asset for Milestone Creative ("a good thing we can offer").
4. **The personal site becomes a portfolio piece itself**, in two places:
   - its own screenshots go on its /portfolio page;
   - it gets added to the Milestone `/creative` website mockups, the same way as Angie C (preview only).

## Users
- Hiring managers and owners checking Miles's background (resume, projects).
- Small-business prospects that Milestone sends links to on sales calls (portfolio).
- Miles, who sends one link.

## Scope
- S1. **Name scrub.** W Principles and Morehead/Morehead State are removed from every route except `/resume`. That covers metadata, the OG/description, the footer, nav, the hero, sitemap and photo alt text. The OSC case study gets a generic title and slug (`/projects/one-senior-care` is proposed). The old URL gets a redirect via `public/_redirects`. Photos move from `/projects/morehead/` to a neutral folder. Copywriter supplies the replacement wording, which is generic, e.g. "a commercial general contractor in Kentucky".
- S2. **Fact fixes** from the audit fact table: the realtor end date, the "$22M+" stat (sourced or removed), the "AGC member / est. 1933" line removed, location wording.
- S3. **Rebrand tokens.**
  - Surfaces: page #0F1114, cards #1E2227, borders #2C333C, bands #161A1F, text #F5F7FA, muted #AEB7C4.
  - Divisional accents: Creative magenta #F07AD4 (dark #9C2A7A) and Solutions sky #6EC6F0 (dark #0E5F8A), used for labels and eyebrows only, never as a button fill.
  - Buttons: **orange only** (Milestone tokens: `--orange #FF8A3D`, hover `#FFA155`, text `#1A1410`). Never rely on color alone.
  - Fonts: Inter + Fraunces, which are already the same as Milestone.
  - Contrast: AA, with the token ratios recorded in DESIGN notes.
- S4. **Links.** LinkedIn goes in the header, footer, about and resume. A "Milestone Solutions" link goes in the footer and on /portfolio. Its target URL is open (Q2): the live site is https://milestone-solutions.pages.dev, and the brand-divisions preview is noindex.
- S5. **/portfolio page.** Real screenshots, framed with the `angie_mockups.py` pattern (browser + phone frames drawn in code, no URL in the bar, AVIF/WebP srcset). Entries:
  - Milestone Solutions, from the preview build, screenshots only until go-live.
  - Angie C Photography, screenshots. Linking to the live sslip.io URL depends on Q1. **Never link angie-c-photography.vercel.app** (it returns 402).
  - This personal site (S7).
  - "Concept work" slots: reserved, hidden until the milestone-concepts pieces exist. Each card gets a visible "Concept project, fictional business" label.
  - Stave & Spur: **excluded by default**, because it's on ice. It only goes in if Miles says so.
  - No client names or numbers beyond the real site names. Each piece gets one line of plain "what we built" copy from Copywriter.
- S6. **Polish from the audit:**
  - Camp Taylor images go to AVIF/WebP to bring Perf to 95 or higher.
  - Person + WebSite JSON-LD.
  - The 404 page gets noindex and no canonical.
  - Remove the CNA leftover SVGs.
  - "Writing" points to Milestone /blog, or is removed (Q4).
- S7. **The personal site as a portfolio piece** (Miles add-on). This runs after the rebrand's QA passes:
  - Capture desktop and phone screenshots of the rebranded preview (home, /projects, /portfolio).
  - Composite them with the `angie_mockups.py` pattern.
  - Add them to the personal site's /portfolio.
  - Add them to milestone-solutions `/creative` → `WebsiteMockups` as a second piece next to Angie C, on preview/brand-divisions only. Label: "a personal portfolio site I built", with no URL in the frame.
  - Each screenshot must pass the name rule. The /resume page shows "W Principles", so /resume is not captured. Mockups use home, /projects and /portfolio only.

## Non-goals
- No domain purchase. No Railway work (that service is gone). No new keys. No paid tools.
- No merge or deploy to production (`master` on either repo) without Miles's GO through Grok.
- No test submit of the FormSubmit contact form.
- No Stave & Spur, Etsy, Cost Cockpit, Hopkinsville, CUI or "AI renderings". No invented prices.
- No changes to the milestone-solutions /about, /resume and /projects pages in this PRD, apart from flagging the duplication (Q3).

## User stories
- As a hiring manager, I can read Miles's role, education and projects. I only see his employer and schools on the resume.
- As a prospect, I can open /portfolio, see real sites the team built in browser and phone frames, and reach Milestone in one click.
- As Miles, I can send one link that looks like it belongs with Milestone.
- As Milestone, /creative shows two real website pieces (Angie C plus this personal site), and concept pieces can be added later, clearly labeled.

## Acceptance criteria
1. In the built `out/`, a case-insensitive grep for `W Principles|Morehead` returns hits **only** in `out/resume*` and `Miles_Goodman_Resume.pdf`. That includes HTML, RSC payloads, sitemap.xml, JSON-LD and image paths. A grep for `MOSC|Hopkinsville|\bCUI\b|Cost Cockpit|AI renderings|Etsy|Stave|vercel.app` returns 0 hits.
2. `/projects/one-senior-care-morehead` returns a 301/308 to the new slug on the preview.
3. Every number and claim on the site appears in the fact table with a source or an "Miles confirmed" note.
4. Tokens match S3. Every button is orange with dark text. Magenta and sky never fill a button. axe reports 0 violations, and every text/background pair meets AA (4.5:1, or 3:1 for large text).
5. A LinkedIn link is present on all pages (footer). A Milestone link is present in the footer and on /portfolio. The link checker finds 0 broken internal links and no link to angie-c-photography.vercel.app.
6. /portfolio shows at least 3 real pieces (Milestone, Angie C, this site), each with a desktop and a phone frame, alt text, AVIF/WebP and lazy loading. The concept slot is hidden or labeled "Concept project, fictional business". No made-up client names or numbers.
7. **QA ≥ 95 and SEO ≥ 95** from independent Web & Workflow QA and Site SEO passes, within LOOP CAP 2. Lighthouse mobile is ≥ 95 in all 4 categories on /, /projects, /portfolio, /resume and camp-taylor.
8. The preview is served from the CF Pages branch preview URL with `X-Robots-Tag: noindex` (or a meta noindex in preview builds). Production is untouched until GO.
9. The milestone-solutions /creative mockups section shows the personal-site piece on preview/brand-divisions. Its images go through the same pipeline as Angie C. Re-QA of /creative scores ≥ 95, and the Lighthouse perf of /creative does not regress by more than 2 points.
10. 1280/390 screenshots and receipts are saved to `/workspace/milestone-shots/shots/personal-site-rebrand/`.

## Risks
- Removing the employer from every page except the resume weakens the career story. Copywriter has to make the generic wording read naturally.
- Changing the slug breaks existing shares. Mitigation: `_redirects`.
- The live site stays indexed with the names on it until production ships. The fix needs a GO, so ask early.
- Duplicate content with milestone-solutions /about, /resume and /projects. Both get indexed at Milestone go-live.
- The Angie sslip.io host is a raw IP hostname. Linking it publicly looks unpolished, and it's noindex.
- Screenshot drift: the mockups go stale when sites change. Re-run the tool at each release.
- PR #17 conflicts. Reusing only its tokens avoids a messy rebase.

## Open questions (answers change the build)
- Q1. Angie C on /portfolio: link to the live https://angie.51-81-85-255.sslip.io, or screenshots only? Default: screenshots only.
- Q2. Which site should "Milestone" link to: production milestone-solutions.pages.dev now, or wait for brand-divisions go-live? Default: production now.
- Q3. Personal vs. Milestone duplication: should the personal site be the one home for About, Resume and Projects, with Milestone's copies cut back to a short "Founder" blurb that links out? Or keep both? Default: keep both for now and flag it at Milestone go-live.
- Q4. The "Writing" link: point it at Milestone /blog, or remove it? Default: Milestone /blog.
- Q5. The two fact conflicts: realtor end date (Nov or Dec 2025), and keep or drop "$22M+ contributed-to value". Default: Dec 2025 (newer resume) and drop $22M+ (no source).

## Miles answers (2026-11-10, via Grok)
- "$22M+" is total construction project value. Miles: "I don't want that mentioned unless it's on my resume." Keep on /resume only; remove everywhere else.
- Realtor end date: Dec 2025. Angie C: screenshots only.
- Fact fix (Copywriter): Camp Taylor opened May 23, 2026, not summer 2025.
