import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Stat } from "@/components/ui/Stat"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { withCanonical } from "@/lib/site"

export const metadata = withCanonical("/my-reports", {
  title: "My Reports — Miles Goodman",
  description: "My Reports: AI daily construction reporting app built by Miles Goodman. iPhone photos and voice notes become owner-ready PDFs in under 5 minutes.",
})

const steps = [
  {
    tag: "~3 min · iPhone",
    num: "01",
    title: "Capture on site",
    body: "Take photos throughout the day. Add a voice note describing what happened — crew count, progress made, weather, issues flagged.",
  },
  {
    tag: "~30 sec · Claude API",
    num: "02",
    title: "AI compiles the report",
    body: "My Reports sends photos and voice notes to the Claude API. It structures the day into a daily progress report — narrative, photo captions, trade log, weather, and open items.",
  },
  {
    tag: "~1 min · PDF + email",
    num: "03",
    title: "Owner receives the PDF",
    body: "A formatted, owner-ready PDF goes out around 6pm ET on workdays, with the day's photos embedded.",
  },
]

const stats = [
  { value: "~80%", label: "Faster than manual reporting" },
  { value: "Live", label: "One Senior Care - Morehead" },
  { value: "164", label: "Project documents indexed" },
  { value: "< 5 min", label: "Photo to structured report" },
]

const features = [
  {
    title: "Owner visibility",
    body: "Owners get a PDF around 6pm ET on workdays — photos, progress summary, open items — without having to call for an update.",
  },
  {
    title: "Subcontractor tracking",
    body: "Trade log captures who was on site, what they completed, and what's pending — referenced automatically in each report.",
  },
  {
    title: "Searchable history",
    body: "Every report and photo is indexed. Pull up what happened on any date in seconds — useful for RFIs, disputes, and close-out.",
  },
  {
    title: "Audit-ready documentation",
    body: "ARPA-funded and government projects require daily compliance documentation. My Reports generates it as a byproduct of normal field work.",
  },
]

export default function MyReportsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-12 px-6 md:px-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px] grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <SectionEyebrow className="mb-4">
              My Reports · Daily Reporting · Built by Miles Goodman
            </SectionEyebrow>
            <h1 className="serif font-light tracking-tight mb-4" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.08, color: "var(--ink)" }}>
              My Reports<br />
              <em className="font-light" style={{ color: "var(--accent)", fontStyle: "italic" }}>knows what happened.</em>
            </h1>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              A superintendent takes 20–40 job site photos a day. Most stay on the phone. My Reports turns them into owner-ready daily progress reports around 6pm ET on workdays.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-solid inline-flex min-h-11 items-center rounded px-6 py-3.5 text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                href="/projects/one-senior-care-morehead"
                className="btn-line inline-flex min-h-11 items-center rounded border px-6 py-3.5 text-sm font-medium"
              >
                See it on the Morehead project →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ value, label }) => (
              <Stat key={label} value={value} label={label} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 md:px-12">
        <div className="mx-auto max-w-[1480px]">
          <h2 className="serif font-light mb-16" style={{ fontSize: "clamp(28px,3.6vw,44px)", color: "var(--ink)" }}>
            How it <em style={{ color: "var(--accent)", fontStyle: "italic" }}>works</em>
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 border-t border-b"
            style={{ borderColor: "var(--border)" }}
          >
            {steps.map(({ tag, num, title, body }) => (
              <div
                key={num}
                className="py-10 md:px-8 first:pl-0 last:pr-0 [&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-b-0 md:[&:not(:last-child)]:border-r"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="mb-4 inline-block rounded px-2.5 py-1 font-mono text-xs uppercase tracking-[0.18em]"
                  style={{ background: "var(--surface)", color: "var(--muted)", border: "1px solid var(--border)" }}
                >
                  {tag}
                </span>
                <p className="serif text-5xl font-light text-[var(--accent)] leading-none mb-4">{num}</p>
                <h3 className="serif font-light text-xl mb-3" style={{ color: "var(--ink)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark stat bar */}
      <section className="py-12 px-6 md:px-12 stat-strip">
        <div className="mx-auto max-w-[1480px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { value: "6pm ET", label: "Owner PDF on workdays" },
            { value: "iPhone", label: "Photos and a voice note" },
            { value: "Daily", label: "ARPA compliance log" },
          ].map(({ value, label }) => (
            <Stat
              key={label}
              variant="bare"
              value={value}
              label={label}
              valueClassName="text-2xl md:text-3xl text-[var(--text)]"
              labelClassName="text-[var(--muted)]"
              className="text-center md:text-left"
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 md:px-12">
        <div className="mx-auto max-w-[1480px]">
          <h2 className="serif font-light mb-12" style={{ fontSize: "clamp(28px,3.6vw,44px)", color: "var(--ink)" }}>What it delivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map(({ title, body }, i) => (
              <BlurFade key={title} inView delay={i * 0.1}>
                <div
                  className="rounded p-8 border"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  <h3 className="serif font-light text-xl mb-3" style={{ color: "var(--ink)" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{body}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Tech strip */}
      <div
        className="border-t px-6 md:px-12 py-8 flex flex-wrap items-center justify-between gap-6"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mx-auto w-full max-w-[1480px] flex flex-wrap items-center gap-8 justify-between">
          <SectionEyebrow size="section">Tech Stack</SectionEyebrow>
          <div className="flex flex-wrap gap-6 font-mono text-sm" style={{ color: "var(--ink)" }}>
            {["FastAPI", "React 19", "Vite", "Tailwind v4", "Claude API"].map((t, i, arr) => (
              <span key={t} className="flex items-center gap-6">
                {t}
                {i < arr.length - 1 && <span className="w-1 h-1 rounded-full inline-block" style={{ background: "var(--accent)" }} />}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
