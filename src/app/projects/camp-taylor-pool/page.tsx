import Image from "next/image"
import Link from "next/link"
import { CampTaylorGallery } from "@/components/sections/CampTaylorGallery"
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider"

const photos = [
  { src: "/projects/camp-taylor/night-pour-hero.jpg", width: 1200, height: 800, alt: "Night concrete pour" },
  { src: "/projects/camp-taylor/construction-1.jpg", width: 1200, height: 900, alt: "Site construction" },
  { src: "/projects/camp-taylor/rebar-pour.jpg", width: 1200, height: 800, alt: "Rebar and formwork" },
  { src: "/projects/camp-taylor/construction-2.jpg", width: 1200, height: 900, alt: "Pool shell progress" },
  { src: "/projects/camp-taylor/construction-3.jpg", width: 800, height: 1200, alt: "Crew coordination" },
  { src: "/projects/camp-taylor/construction-4.jpg", width: 1200, height: 800, alt: "Mechanical rough-in" },
  { src: "/projects/camp-taylor/construction-5.jpg", width: 1200, height: 900, alt: "Deck work" },
  { src: "/projects/camp-taylor/construction-6.jpg", width: 800, height: 1200, alt: "Waterslide structure" },
  { src: "/projects/camp-taylor/construction-7.jpg", width: 1200, height: 800, alt: "Zero-depth entry" },
  { src: "/projects/camp-taylor/early-1.jpg", width: 1200, height: 800, alt: "Early site work" },
  { src: "/projects/camp-taylor/early-2.jpg", width: 1200, height: 900, alt: "Foundation phase" },
  { src: "/projects/camp-taylor/finished-pool.jpg", width: 1200, height: 800, alt: "Completed pool" },
]

export const metadata = {
  title: "Camp Taylor Memorial Park Pool — Miles Goodman",
  description: "$6.2M ARPA-funded aquatic facility in Louisville, KY. Site Superintendent: Miles Goodman, W Principles, LLC.",
}

export default function CampTaylorPage() {
  return (
    <>
      {/* ── Cover ──────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ height: "60vh", minHeight: 400, marginTop: -80 }}>
        <Image
          src="/projects/camp-taylor/night-pour-hero.jpg"
          alt="Camp Taylor Memorial Park Pool — night concrete pour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.55) 100%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10">
          <div className="mx-auto max-w-[1480px]">
            <Link href="/projects" className="text-xs text-white/60 hover:text-white/90 transition-colors mb-4 inline-block px-2 py-2 -mx-2 -my-2">
              ← Projects
            </Link>
          </div>
        </div>
      </div>

      {/* ── Title block ────────────────────────────────── */}
      <div className="px-6 md:px-12 py-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-3">Louisville, KY · 2025</p>
          <h1 className="serif font-light tracking-tight mb-2" style={{ fontSize: "clamp(36px,5vw,72px)", color: "var(--ink)" }}>
            Camp Taylor Memorial Park Pool
          </h1>
          <p className="text-lg text-[var(--muted)] italic">
            $6.2M ARPA-funded aquatic facility — new construction
          </p>
        </div>
      </div>

      {/* ── Two-column body ────────────────────────────── */}
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* LEFT — sticky spec sidebar */}
          <aside className="lg:w-80 shrink-0 order-last lg:order-first">
            <div className="lg:sticky lg:top-28">
              <dl className="space-y-5">
                {[
                  ["Project", "Camp Taylor Memorial Park Pool"],
                  ["Owner", "Louisville Metro Parks & Recreation"],
                  ["General Contractor", "W Principles, LLC"],
                  ["My Role", "Site Superintendent"],
                  ["Location", "Louisville, KY"],
                  ["Cost", "$6.2M (ARPA-funded)"],
                  ["Completed", "November 2025"],
                  ["Scope", "New aquatic facility — zero-depth ramp, lap lanes, waterslide, shaded seating area, site improvements"],
                ].map(([label, value]) => (
                  <div key={label as string} className="border-b pb-4" style={{ borderColor: "var(--border)" }}>
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] mb-1">{label}</dt>
                    <dd className="text-sm font-medium text-[var(--ink)]">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] mb-3">Press Coverage</p>
                <div className="flex flex-col gap-2">
                  {[
                    ["WAVE 3 News", "https://www.wave3.com"],
                    ["WHAS 11 — ABC Louisville", "https://www.whas11.com"],
                    ["WDRB — Fox Louisville", "https://www.wdrb.com"],
                  ].map(([label, href]) => (
                    <a
                      key={label as string}
                      href={href as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline transition-colors"
                      style={{ color: "var(--accent)" }}
                    >
                      {label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT — content */}
          <div className="flex-1 min-w-0">
            {/* Summary */}
            <div className="prose max-w-none mb-16">
              <p
                className="text-lg leading-relaxed mb-4"
                style={{ color: "var(--ink)" }}
              >
                Camp Taylor Memorial Park Pool replaced an aging facility in a Louisville neighborhood that had gone without a public pool for years. The project delivered a full aquatic complex — zero-depth entry ramp, competition lap lanes, a waterslide, and shaded seating — funded through ARPA community investment dollars.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                As Site Superintendent, I managed daily field operations for W Principles, LLC from groundbreaking through punch list. The project ran groundbreaking to punch list in a single construction season — concrete, mechanical, pool systems, and site improvements sequenced with no slack.
              </p>
            </div>

            {/* What it took */}
            <div className="mb-16">
              <h2 className="serif font-light text-3xl mb-10" style={{ color: "var(--ink)" }}>
                What it took
              </h2>
              <div className="space-y-10">
                {[
                  {
                    num: "01",
                    challenge: "Night pours on a public schedule",
                    headline: "Concrete doesn't wait for daylight.",
                    body: "The pool shell pour ran through the night to meet structural specs and city permit windows. Coordinating crew shifts, ready-mix trucks, and pump placement in the dark meant building the schedule backward from the pour — every trade sequenced to that fixed point.",
                    resolution: "Pre-poured schedule distributed 72 hours ahead. On-site foreman rotation with defined break intervals. Zero re-pours.",
                  },
                  {
                    num: "02",
                    challenge: "ARPA compliance documentation",
                    headline: "Public funding means every dollar is on record.",
                    body: "ARPA-funded projects carry daily reporting and compliance requirements that go beyond standard commercial work. Owner, city, and federal paperwork ran in parallel throughout the project.",
                    resolution: "Built ForemanOS, a daily documentation system — photos tagged, narrated, and compiled into owner-ready PDFs each morning.",
                  },
                  {
                    num: "03",
                    challenge: "Trade coordination on a compressed deck",
                    headline: "Six trades, one deck, no second chances.",
                    body: "Pool decks compress MEP, plumbing, and structural details into a single elevation. Conduit runs, drain inverts, slide anchors — all locked in concrete the moment the pour started.",
                    resolution: "Three coordination meetings per week, full RFI log, embedded verification checklist before every pour.",
                  },
                ].map(({ num, challenge, headline, body, resolution }) => (
                  <div key={num} className="border-l-2 pl-6" style={{ borderColor: "var(--accent)" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="serif text-5xl font-light text-[var(--accent)] leading-none">{num}</span>
                      <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                        Challenge — {challenge}
                      </span>
                    </div>
                    <h3 className="serif font-light text-xl mb-3" style={{ color: "var(--ink)" }}>{headline}</h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>{body}</p>
                    <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                      <span style={{ color: "var(--accent)" }}>Resolution — </span>{resolution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Before / After */}
            <div className="mb-16">
              <h2 className="serif font-light text-3xl mb-6" style={{ color: "var(--ink)" }}>
                Before &amp; After
              </h2>
              <BeforeAfterSlider
                beforeSrc="/projects/camp-taylor/night-pour-hero.jpg"
                beforeAlt="Night pour — construction"
                afterSrc="/projects/camp-taylor/finished-pool.jpg"
                afterAlt="Completed pool"
              />
            </div>

            {/* Photo gallery */}
            <div className="mb-16">
              <h2 className="serif font-light text-3xl mb-6" style={{ color: "var(--ink)" }}>
                Site Photography
              </h2>
              <CampTaylorGallery photos={photos} />
              <p className="text-xs text-[var(--muted)] mt-4">
                All photos by Miles Goodman · © 2024–2025
              </p>
            </div>

            {/* Outcome */}
            <div
              className="rounded p-8 md:p-12"
              style={{ background: "var(--paper-warm)" }}
            >
              <h2 className="serif font-light text-2xl mb-4" style={{ color: "var(--ink)" }}>Outcome</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>
                The facility opened in summer 2025 to significant community response — covered by WAVE 3, WHAS 11, and WDRB. For a neighborhood that had lacked a public pool for years, it was a real return on public investment. For our team, it proved that a compressed schedule and ARPA compliance don't have to be in conflict — if the documentation keeps up.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Next project ────────────────────────────────── */}
      <div className="border-t px-6 md:px-12 py-12" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1480px] flex justify-between items-center">
          <Link href="/projects" className="text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors">
            ← All Projects
          </Link>
          <Link
            href="/projects/john-black-aquatic"
            className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
            style={{ color: "var(--ink)" }}
          >
            Next: John W. Black Aquatic Center →
          </Link>
        </div>
      </div>
    </>
  )
}
