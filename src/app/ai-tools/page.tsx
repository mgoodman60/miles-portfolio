import Image from "next/image"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Stat } from "@/components/ui/Stat"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { withCanonical } from "@/lib/site"

export const metadata = withCanonical("/ai-tools", {
  title: "AI Tools — Miles Goodman",
  description: "AI tools built and actively used in the field — daily reporting, plan review, and bid estimation.",
})

type Tool = {
  num: string
  tag: string
  title: string
  body: string
  stat: string
  statLabel: string
  link: string
  linkLabel: string
  external?: boolean
  live?: boolean
  featured?: boolean
}

const tools: Tool[] = [
  {
    num: "01",
    tag: "My Reports · Daily Reporting",
    title: "Site photos → owner-ready reports",
    body: "I built My Reports on the Claude API to turn daily site photos and voice notes into structured daily progress reports. Live on One Senior Care - Morehead — runs every workday. Roughly 80% faster than writing reports manually. The owner-ready PDF goes out around 6pm ET.",
    stat: "~80% faster",
    statLabel: "vs. manual reporting",
    link: "/my-reports",
    linkLabel: "See how it works",
    live: true,
    featured: true,
  },
  {
    num: "02",
    tag: "Claude API · Plan Review",
    title: "Plan review and concrete quantity takeoffs",
    body: "I use Claude to read construction drawings and calculate concrete quantities for bid and self-perform scopes. Upload a PDF plan set, describe the scope, and get a structured takeoff to check against manual calculations. Useful for footings, slabs, walls, and pool shells.",
    stat: "MBA Focus",
    statLabel: "Project Management & AI — NKU",
    link: "/about",
    linkLabel: "About my MBA work",
  },
  {
    num: "03",
    tag: "Claude API · Submittals",
    title: "Submittal tracking and shop drawing review",
    body: "A superintendent manages dozens of active submittals — materials, shop drawings, product data. I use Claude to organize submittal packages, identify missing items, and draft transmittal summaries. Keeps the review log moving without losing track of what's sitting with the engineer or architect.",
    stat: "Submittal log",
    statLabel: "Shop drawings and product data",
    link: "/contact",
    linkLabel: "Contact",
  },
  {
    num: "04",
    tag: "ForemanOS · Superintendent Field OS",
    title: "A working super's operating system, public on GitHub",
    body: "ForemanOS is a separate platform I'm building, public on GitHub as seven construction plugins with 42 skills and 39 commands. It covers daily reporting, scheduling, and document work. The broader toolkit My Reports grew out of.",
    stat: "42 skills",
    statLabel: "39 commands · public on GitHub",
    link: "https://github.com/mgoodman60/foreman-os-plugin",
    linkLabel: "View on GitHub",
    external: true,
  },
]

export default function AIToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-12 px-6 md:px-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionEyebrow className="mb-4">
              MBA Candidate — Project Management &amp; AI · Northern Kentucky University
            </SectionEyebrow>
            <h1 className="serif font-light tracking-tight mb-5" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.12, color: "var(--ink)" }}>
              AI doesn&rsquo;t replace field judgment.{" "}
              <em className="not-italic" style={{ color: "var(--accent)", fontStyle: "italic" }}>
                It removes the paperwork friction
              </em>{" "}
              that keeps superintendents out of the field.
            </h1>
            <div className="flex flex-wrap gap-4 mb-6 text-sm" style={{ color: "var(--muted)" }}>
              <span>4 tools</span>
              <span aria-hidden="true" style={{ color: "var(--muted)" }}>·</span>
              <span>Built on Claude API</span>
              <span aria-hidden="true" style={{ color: "var(--muted)" }}>·</span>
              <span>My Reports runs on workdays</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/my-reports"
                className="inline-flex min-h-11 items-center rounded px-6 py-3 text-sm font-medium"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                See My Reports
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center rounded border px-6 py-3 text-sm font-medium hover:bg-black/5"
                style={{ borderColor: "var(--border)", color: "var(--ink)" }}
              >
                Contact
              </Link>
            </div>
          </div>
          <figure className="order-last">
            <div className="relative aspect-video overflow-hidden rounded">
              <Image
                src="/projects/camp-taylor/night-pour-hero.jpg"
                alt="Night concrete pour at Camp Taylor Memorial Park Pool"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
              Camp Taylor Memorial Park Pool, Louisville — night concrete pour.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Tools — alternating rows */}
      <section className="py-24 px-6 md:px-12">
        <div className="mx-auto max-w-[1480px] space-y-0">
          {tools.map(({ num, tag, title, body, stat, statLabel, link, linkLabel, external, live, featured }, i) => (
            <BlurFade key={num} inView delay={i * 0.15}>
            <div
              className="py-16 border-t grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
              style={{ borderColor: "var(--border)" }}
            >
              {/* Number */}
              <div className="md:col-span-1 flex md:block items-center gap-4">
                <span className="serif text-5xl font-light leading-none" style={{ color: "var(--accent)" }}>{num}</span>
              </div>

              {/* Content */}
              <div className="md:col-span-7">
                {live && (
                  <span className="mb-3 inline-block rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-[0.18em]" style={{ background: "var(--accent)", color: "var(--paper)" }}>
                    Live
                  </span>
                )}
                <span className="mb-4 block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{tag}</span>
                <h2 className="serif font-light text-3xl mb-4 leading-snug" style={{ color: "var(--ink)" }}>{title}</h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>{body}</p>
                {external ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center py-2 text-sm font-medium underline underline-offset-4"
                    style={{ color: "var(--accent)" }}
                  >
                    {linkLabel}
                    <span aria-hidden="true"> ↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <Link
                    href={link}
                    className="inline-flex min-h-11 items-center py-2 text-sm font-medium underline underline-offset-4"
                    style={{ color: "var(--accent)" }}
                  >
                    {linkLabel} →
                  </Link>
                )}
              </div>

              {/* Stat card */}
              <div className="md:col-span-4">
                <Stat
                  value={stat}
                  label={statLabel}
                  variant={featured ? "dark" : "warm"}
                  className="min-h-[120px] flex flex-col justify-center !p-8"
                />
              </div>
            </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="border-t py-24 px-6 md:px-12 text-center"
        style={{ borderColor: "var(--border)", background: "var(--paper-warm)" }}
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="serif font-light text-3xl mb-4" style={{ color: "var(--ink)" }}>
            Interested in how this works in the field?
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--muted)" }}>
            If you&rsquo;re building something in this space or want to talk through how AI applies to field ops — reach out.
          </p>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded px-8 py-4 text-sm font-medium"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            Contact
          </Link>
        </div>
      </section>
    </>
  )
}
