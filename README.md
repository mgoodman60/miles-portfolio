This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Run locally (this repo)

- **Node:** the repo doesn't pin a version. There's no `.nvmrc`, no `.node-version`, no `engines` field in `package.json`, and no CI config. Next.js 16.2.4 requires Node `>=20.9.0` (its own `engines` field). These steps were checked with Node v24.22.1 and npm 11.21.1 on 2026-11-14.
- **Package manager:** npm, with `package-lock.json` as the lockfile. Use `npm ci`, not yarn/pnpm/bun.
- **Install:** `npm ci`
- **Dev server:** `npm run dev` (http://localhost:3000)
- **Type check:** `npx tsc --noEmit`
- **Build:** `npm run build` (static export to `out/`, because `next.config.ts` sets `output: "export"`). The build fetches Inter and Fraunces from Google Fonts, so it needs network access.
- **Name-rule check:** `tools/check-names.sh out` (run it before every push)
- **Preview the built site:** `npx serve@14 out` (serves clean URLs, e.g. `/projects`, at http://localhost:3000). `npm start` won't work with a static export. Cloudflare-only files in `out/` (`_redirects`, `_headers`) aren't applied by `serve`, so check the old-slug 301 on the CF preview instead.
- **Env vars (names only):** `NEXT_PUBLIC_SITE_URL` (optional; read in `src/lib/site.ts`; it falls back to the production origin built into the code). There's no `.env`, `.env.example` or other `process.env` use in `src/`, `tools/` or `next.config.ts`. You don't need any env vars to run locally.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
