import Image from "next/image"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Stat } from "@/components/ui/Stat"

export const metadata = {
  title: "AI Tools — Miles Goodman",
  description: "AI tools built and actively used in the field — daily reporting, plan review, and bid estimation.",
}

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
    body: "I built My Reports on the Claude API to turn daily site photos and voice notes into structured daily progress reports. Live on One Senior Care in Morehead, KY — runs every workday. Roughly 80% faster than writing reports manually, and the owner has it before the day starts.",
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
    statLabel: "No missed items, no delayed reviews",
    link: "/contact",
    linkLabel: "Talk shop",
  },
  {
    num: "04",
    tag: "ForemanOS · Superintendent Field OS",
    title: "A working super's operating system, public on GitHub",
    body: "ForemanOS is a separate platform I'm building — a Claude Code plugin with 42 skills, 37 commands, and 21 field-reference documents covering daily reporting, scheduling, document intelligence, and DWG extraction. The broader toolkit My Reports grew out of. Open source.",
    stat: "42 skills",
    statLabel: "Public Claude Code plugin",
    link: "https://github.com/mgoodman60/foreman-os-plugin",
    linkLabel: "View on GitHub",
    external: true,
  },
]

export default function AIToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)] mb-6">
              MBA Candidate — Project Management &amp; AI · Northern Kentucky University
            </p>
            <h1 className="serif font-light tracking-tight mb-6" style={{ fontSize: "clamp(40px,5.5vw,80px)", color: "var(--ink)", maxWidth: 900 }}>
              AI doesn&rsquo;t replace field judgment.{" "}
              <em className="not-italic" style={{ color: "var(--accent)", fontStyle: "italic" }}>
                It removes the paperwork friction
              </em>{" "}
              that keeps superintendents out of the field.
            </h1>
            <div className="flex flex-wrap gap-6 text-sm" style={{ color: "var(--muted)" }}>
              <span>4 tools</span>
              <span style={{ color: "var(--border)" }}>·</span>
              <span>Built on Claude API</span>
              <span style={{ color: "var(--border)" }}>·</span>
              <span>Used daily in the field</span>
            </div>
          </div>
          <div className="relative rounded overflow-hidden order-first lg:order-last" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/projects/camp-taylor/night-pour-hero.jpg"
              alt="Night concrete pour — Camp Taylor pool"
              fill
              className="object-cover object-center"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
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
                  <span className="inline-block text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 rounded-full font-medium mb-3" style={{ background: "var(--accent)", color: "var(--paper)" }}>
                    Live
                  </span>
                )}
                <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] mb-4 block">{tag}</span>
                <h2 className="serif font-light text-3xl mb-4 leading-snug" style={{ color: "var(--ink)" }}>{title}</h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>{body}</p>
                {external ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 text-sm font-medium hover:underline underline-offset-4"
                    style={{ color: "var(--accent)" }}
                  >
                    {linkLabel} ↗
                  </a>
                ) : (
                  <Link
                    href={link}
                    className="inline-block py-2 text-sm font-medium hover:underline underline-offset-4"
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
            className="px-8 py-4 text-sm font-medium rounded transition-colors"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            Contact
          </Link>
        </div>
      </section>
    </>
  )
}
