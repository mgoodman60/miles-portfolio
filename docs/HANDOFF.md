# HANDOFF: feat/milestone-rebrand-portfolio

Branch `feat/milestone-rebrand-portfolio` from `28e84ce` (master). Preview only; no merge, no master changes, PR #17 untouched.
PRD: docs/prd/personal-site-rebrand-portfolio.md · Plan: docs/plans/personal-site-rebrand-portfolio.md
Scope this run: plan steps 3-7 in full plus the mechanical parts of step 2. Copywriter strings are `TODO-COPY` placeholders.

## Log (newest last)
- **Commit 1** — PRD and plan copied into docs/. Added `tools/check-names.sh` (name-rule guard for `out/`).
  Baseline on 28e84ce: `check-names.sh out` = FAIL (51 files with resume-only terms outside /resume, 9 with banned terms incl. "Walker Company" on /resume, 30 banned paths).
- **Commit 2** — /portfolio mockup images in `public/portfolio/{milestone-solutions,angie-c}/` (browser + phone frames, AVIF/WebP/PNG, full and `-sm`).
  Made with `/workspace/milestone-shots/tools/site_mockups.py` (generalised `angie_mockups.py`, no URL in the bar).
  Milestone shots: preview-brand-divisions build (home desktop, /creative phone), viewport text checked for banned names (none).
  Angie C shots: existing source set `/workspace/milestone-shots/shots/brand-divisions-angie/source` (home desktop, weddings phone).
