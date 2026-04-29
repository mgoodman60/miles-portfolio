import Image from "next/image"
import Link from "next/link"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { Marquee } from "@/components/magicui/marquee"
import { HeroSlideshow } from "@/components/sections/HeroSlideshow"
import { ProjectCard3D } from "@/components/sections/ProjectCard3D"
import { Stat } from "@/components/ui/Stat"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"

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
    tag: "ARPA-Funded",
  },
  {
    slug: "john-black-aquatic",
    name: "John W. Black Aquatic Center",
    location: "La Grange, KY",
    year: "2024",
    cost: "$3.7M",
    scope: "Complete renovation — structural, pool shell, mechanical systems",
    cover: "/projects/john-black/drone-01.jpg",
    tag: "Renovation",
  },
  {
    slug: "one-senior-care-morehead",
    name: "One Senior Care — Morehead",
    location: "Morehead, KY",
    year: "Active",
    cost: "$3M",
    scope: "10,060 SF PACE senior care facility — PEMB + concrete",
    cover: "/projects/morehead/drone-01.jpg",
    tag: "Active",
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
      <section className="stat-strip py-12 px-6 md:px-12">
        <div className="mx-auto max-w-[1480px] grid grid-cols-3 items-start gap-4 md:gap-8 md:justify-between">
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
              valueClassName="text-2xl md:text-4xl tracking-tight text-white"
              labelClassName="text-[10px] md:text-xs text-white/50 text-center md:text-left"
              className="flex flex-col items-center md:items-start"
            />
          ))}
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────── */}
      <section className="py-24 px-6 md:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="serif text-4xl font-light tracking-tight text-[var(--ink)]">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-[var(--accent)] hover:underline underline-offset-4"
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
            <SectionEyebrow className="mb-5">
              Site Superintendent · W Principles, LLC
            </SectionEyebrow>
            <h2
              className="serif font-light leading-snug tracking-tight mb-6"
              style={{ fontSize: "clamp(28px,3.6vw,44px)", color: "var(--ink)" }}
            >
              Field superintendent. MBA candidate. Building the tools that cut daily admin time so the field gets more of it.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              I manage commercial construction in Kentucky — aquatic facilities, senior care, concrete
              self-perform — and I build AI field tools that run on the same job sites I&apos;m running. Currently active on One Senior Care
              in Morehead with My Reports running daily.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-5 py-2.5 text-sm font-medium rounded transition-colors"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                About me
              </Link>
              <a
                href="/Miles_Goodman_Resume.pdf"
                className="px-5 py-2.5 text-sm font-medium rounded border transition-colors hover:bg-black/5"
                style={{ borderColor: "var(--border)", color: "var(--ink)" }}
                download
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Press Marquee ─────────────────────────────── */}
      <section
        className="border-t py-8 relative overflow-hidden"
        style={{ borderColor: "var(--border)" }}
      >
        <SectionEyebrow className="text-center mb-6">
          Press Coverage
        </SectionEyebrow>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, var(--paper-warm), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, var(--paper-warm), transparent)" }} />
          <Marquee pauseOnHover className="[--duration:30s]">
            {pressItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium whitespace-nowrap shrink-0 mx-3"
                style={{ borderColor: "var(--border)", color: "var(--muted)", background: "var(--paper)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                {item}
              </span>
            ))}
          </Marquee>
        </div>
      </section>
    </>
  )
}
