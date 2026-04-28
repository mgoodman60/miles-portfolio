import Image from "next/image"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"

export const metadata = {
  title: "About — Miles Goodman",
  description: "Site Superintendent at W Principles, LLC. MBA candidate at NKU. Commercial construction in Kentucky.",
}

const timeline = [
  { year: "2026", event: "One Senior Care — Morehead (Active)", detail: "Site Superintendent · $3M PACE facility" },
  { year: "2025", event: "Camp Taylor Memorial Park Pool — Complete", detail: "Site Superintendent · $6.2M ARPA-funded" },
  { year: "2024", event: "John W. Black Aquatic Center — Complete", detail: "Site Superintendent · $3.7M renovation" },
  { year: "2024", event: "MBA — Northern Kentucky University (Active)", detail: "Project Management & AI · Expected 2026" },
  { year: "2023", event: "Joined W Principles, LLC as Site Superintendent", detail: "Mount Sterling, KY · AGC Member" },
  { year: "2022", event: "BS — Morehead State University", detail: "BS in Construction Technology & Management (CTM) · Top 5% agent, Keller Williams" },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-40 pb-16 px-6 md:px-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)] mb-4">Site Superintendent · MBA Candidate</p>
          <h1 className="serif font-light tracking-tight" style={{ fontSize: "clamp(48px,7vw,96px)", color: "var(--ink)" }}>About</h1>
        </div>
      </div>

      {/* Bio + headshot */}
      <section className="border-t py-20 px-6 md:px-12" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1480px] grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <BlurFade inView delay={0}>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--ink)" }}>
                I&rsquo;m a Site Superintendent at W Principles, LLC — a commercial general contractor based in Mount Sterling, KY, AGC member, established 1933. My work spans concrete self-perform scopes, aquatic facility construction, and PEMB structures across Kentucky.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.1}>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                I&rsquo;m also an MBA candidate at Northern Kentucky University (Project Management &amp; AI, expected 2026), which is where my interest in applying AI tools to field operations took a more deliberate shape. ForemanOS — the daily reporting system I built on the Claude API — grew out of that intersection.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.2}>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                Before construction, I spent time in real estate and sales. That&rsquo;s where I learned to read owners and communicate clearly. Those skills travel — I use them every day on site.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/Miles_Goodman_Resume.pdf"
                  className="px-6 py-3 text-sm font-medium rounded transition-colors"
                  style={{ background: "var(--ink)", color: "var(--paper)" }}
                >
                  Download Resume
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 text-sm font-medium rounded border transition-colors hover:bg-black/5"
                  style={{ borderColor: "var(--border)", color: "var(--ink)" }}
                >
                  Get in Touch
                </Link>
              </div>
            </BlurFade>
          </div>

          <div className="relative rounded overflow-hidden" style={{ aspectRatio: "3/4", maxWidth: 480 }}>
            <Image
              src="/headshot.jpg"
              alt="Miles Goodman, Site Superintendent"
              fill
              className="object-cover object-center"
              sizes="(max-width:768px) 100vw, 480px"
            />
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="border-t py-16 px-6 md:px-12" style={{ borderColor: "var(--border)", background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <h2 className="serif font-light text-2xl mb-10" style={{ color: "var(--ink)" }}>Credentials</h2>
          <BlurFade inView delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "MBA (active)", detail: "Project Management & AI\nNorthern Kentucky University" },
              { label: "BS", detail: "Morehead State University\n2022 · Top 5%, KW" },
              { label: "CTM", detail: "Certified in\nConstruction Technology & Management" },
              { label: "Bluebeam · AutoCAD · Excel", detail: "Field takeoffs, plan review,\nbid estimation" },
            ].map(({ label, detail }) => (
              <div key={label} className="p-6 rounded border bg-[var(--paper)]" style={{ borderColor: "var(--border)" }}>
                <p className="serif font-light text-lg mb-1" style={{ color: "var(--ink)" }}>{label}</p>
                <p className="text-xs leading-relaxed whitespace-pre-line" style={{ color: "var(--muted)" }}>{detail}</p>
              </div>
            ))}
          </div>
          </BlurFade>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t py-16 px-6 md:px-12" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1480px]">
          <h2 className="serif font-light text-2xl mb-10" style={{ color: "var(--ink)" }}>Timeline</h2>
          <BlurFade inView delay={0.1}>
          <div className="space-y-0">
            {timeline.map(({ year, event, detail }) => (
              <div
                key={event}
                className="flex gap-8 py-6 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="text-sm font-mono text-[var(--muted)] w-12 shrink-0 pt-0.5">{year}</span>
                <div>
                  <p className="text-sm font-medium mb-0.5" style={{ color: "var(--ink)" }}>{event}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
          </BlurFade>
        </div>
      </section>
    </>
  )
}
