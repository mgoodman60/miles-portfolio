import Image from "next/image"
import Link from "next/link"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { HeroSlideshow } from "@/components/sections/HeroSlideshow"
import { ProjectCard3D } from "@/components/sections/ProjectCard3D"
import { Stat } from "@/components/ui/Stat"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { withCanonical } from "@/lib/site"

export const metadata = withCanonical("/", {
  title: "Miles Goodman — Site Superintendent",
  description:
    "Portfolio of Miles Goodman, Site Superintendent at W Principles, LLC. Commercial construction in Kentucky — $13M directly managed, ~$22M contributed-to.",
})

const stats = [
  { prefix: "$", value: 22, suffix: "M+", label: "Contributed-to Project Value" },
  { value: 5, suffix: "", label: "Commercial Projects" },
  { value: 3, suffix: " yrs", label: "As Site Superintendent" },
]

const projects = [
  {
    slug: "camp-taylor-pool",
    name: "Camp Taylor Memorial Park Pool",
    location: "Louisville, KY",
    year: "2025",
    cost: "$6.2M",
    scope: "New aquatic facility — zero-depth ramp, lap lanes, waterslide",
    cover: "/projects/camp-taylor/night-pour-hero.jpg",
    tag: "ARPA-Funded · Complete",
  },
  {
    slug: "john-black-aquatic",
    name: "John W. Black Aquatic Center",
    location: "La Grange, KY",
    year: "2024",
    cost: "$3.7M",
    scope: "Complete renovation — structural, pool shell, mechanical systems",
    cover: "/projects/john-black/drone-01.jpg",
    tag: "Renovation · Complete",
  },
  {
    slug: "one-senior-care-morehead",
    name: "One Senior Care - Morehead",
    location: "Morehead, KY",
    year: "2026",
    cost: "$3M",
    scope: "10,060 SF PACE senior care facility — PEMB + concrete",
    cover: "/projects/morehead/drone-01.jpg",
    tag: "Complete",
  },
]

const pressItems = [
  "WAVE 3 News — Louisville",
  "WHAS 11 — ABC Louisville",
  "WDRB — Fox Louisville",
  "Glasgow News 1",
  "Owensboro Times",
]

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <HeroSlideshow />

      {/* ── Stat strip ────────────────────────────────── */}
      <section aria-labelledby="home-stats" className="stat-strip py-12 px-6 md:px-12">
        <h2 id="home-stats" className="sr-only">
          Experience
        </h2>
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {stats.map(({ prefix, value, suffix, label }) => (
            <Stat
              key={label}
              variant="bare"
              value={
                <>
                  {prefix}
                  <NumberTicker value={value} className="text-white" />
                  {suffix}
                </>
              }
              label={label}
              valueClassName="text-3xl md:text-4xl tracking-tight text-white"
              labelClassName="text-xs text-white text-center md:text-left"
              className="flex flex-col items-center md:items-start"
            />
          ))}
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────── */}
      <section aria-labelledby="featured-heading" className="py-24 px-6 md:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-12 flex flex-col items-start gap-3 sm:flex-row sm:items-baseline sm:justify-between">
            <h2
              id="featured-heading"
              className="serif font-light tracking-tight text-[var(--ink)]"
              style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
            >
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline"
            >
              All projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((p) => (
              <ProjectCard3D key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About strip ───────────────────────────────── */}
      <section
        aria-labelledby="home-about-heading"
        className="border-t px-6 md:px-12 py-24"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mx-auto max-w-[1480px] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div
            className="relative rounded overflow-hidden order-last md:order-first"
            style={{ aspectRatio: "3/4", maxWidth: 420 }}
          >
            <Image
              src="/headshot.jpg"
              alt="Miles Goodman, Site Superintendent"
              fill
              className="object-cover object-center"
              sizes="(max-width:768px) 100vw, 420px"
            />
          </div>
          <div>
            <SectionEyebrow size="section" className="mb-5">
              Site Superintendent · W Principles, LLC
            </SectionEyebrow>
            <h2
              id="home-about-heading"
              className="serif font-light leading-snug tracking-tight mb-6"
              style={{ fontSize: "clamp(28px,3.6vw,44px)", color: "var(--ink)" }}
            >
              Site superintendent in Kentucky. MBA candidate at Northern Kentucky University.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              I manage commercial construction in Kentucky — aquatic facilities, senior care, concrete
              self-perform — and I build AI field tools on the same jobs I run.{" "}
              <Link href="/projects/one-senior-care-morehead" className="font-medium text-[var(--ink)] underline underline-offset-4">
                One Senior Care - Morehead
              </Link>{" "}
              is complete, with{" "}
              <Link href="/my-reports" className="font-medium text-[var(--ink)] underline underline-offset-4">
                My Reports
              </Link>{" "}
              running daily.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-solid inline-flex min-h-11 items-center px-5 py-3 text-sm font-medium rounded transition-colors">
                About me
              </Link>
              <a
                href="/Miles_Goodman_Resume.pdf"
                className="btn-line inline-flex min-h-11 items-center px-5 py-3 text-sm font-medium rounded border transition-colors"
                download
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Press ─────────────────────────────────────── */}
      <section
        aria-labelledby="press-heading"
        className="border-t py-8 px-6 md:px-12"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mx-auto max-w-[1480px]">
          <h2 id="press-heading" className="mb-6 text-center text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Press coverage
          </h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {pressItems.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium"
                style={{ borderColor: "var(--border)", color: "var(--muted)", background: "var(--paper)" }}
              >
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
