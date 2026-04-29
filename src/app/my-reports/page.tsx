import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"

export const metadata = {
  title: "My Reports — Miles Goodman",
  description: "My Reports: AI daily construction reporting app built by Miles Goodman. iPhone photos and voice notes become owner-ready PDFs in under 5 minutes.",
}

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
    body: "A formatted, owner-ready PDF lands in the owner's inbox each morning. Photos embedded, signed off. No editing required.",
  },
]

const stats = [
  { value: "~80%", label: "Faster than manual reporting" },
  { value: "Live", label: "One Senior Care, Morehead" },
  { value: "164", label: "Documents indexed — Morehead, Apr 2026" },
  { value: "< 5 min", label: "Photo to structured report" },
]

const features = [
  {
    title: "Owner visibility",
    body: "Owners get a PDF report every morning — photos, progress summary, open items — without having to call for an update.",
  },
  {
    title: "Sub-contractor tracking",
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
      <section className="pt-40 pb-20 px-6 md:px-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)] mb-6">
              My Reports · Daily Reporting · Built by Miles Goodman
            </p>
            <h1 className="serif font-light tracking-tight mb-6" style={{ fontSize: "clamp(40px,5.5vw,80px)", color: "var(--ink)" }}>
              My Reports<br />
              <em className="font-light not-italic" style={{ color: "var(--accent)" }}>knows what happened.</em>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              A superintendent takes 20–40 job site photos a day. Most stay on the phone. My Reports turns them into owner-ready daily progress reports — automatically, every morning.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 text-sm font-medium rounded transition-colors"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Contact
              </Link>
              <Link
                href="/projects/one-senior-care-morehead"
                className="px-6 py-3.5 text-sm font-medium rounded border transition-colors hover:bg-black/5"
                style={{ borderColor: "var(--border)", color: "var(--ink)" }}
              >
                See it on the Morehead project →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded p-6 border"
                style={{ borderColor: "var(--border)", background: "var(--paper)" }}
              >
                <p className="serif text-3xl font-light mb-1" style={{ color: "var(--ink)" }}>{value}</p>
                <p className="text-xs uppercase tracking-[0.14em]" style={{ color: "var(--muted)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 md:px-12">
        <div className="mx-auto max-w-[1480px]">
          <h2 className="serif font-light mb-16" style={{ fontSize: "clamp(32px,4vw,56px)", color: "var(--ink)" }}>
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
                  className="inline-block text-[10px] uppercase tracking-[0.16em] px-2 py-0.5 rounded mb-4 font-mono"
                  style={{ background: "var(--paper-warm)", color: "var(--muted)" }}
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
        <div className="mx-auto max-w-[1480px] flex flex-wrap gap-8 justify-center md:justify-between items-center">
          {[
            ["164", "Documents indexed — Morehead"],
            ["< 5 min", "Capture to owner-ready PDF"],
            ["Daily", "Compliance log generated for ARPA-funded work"],
          ].map(([val, label]) => (
            <div key={label} className="text-center md:text-left">
              <p className="serif text-2xl font-light text-white">{val}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-white/50 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 md:px-12">
        <div className="mx-auto max-w-[1480px]">
          <h2 className="serif font-light mb-12" style={{ fontSize: "clamp(32px,4vw,56px)", color: "var(--ink)" }}>What it delivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map(({ title, body }, i) => (
              <BlurFade key={title} inView delay={i * 0.1}>
                <div
                  className="rounded p-8 border"
                  style={{ borderColor: "var(--border)", background: "var(--paper-warm)" }}
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
          <p className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>Tech Stack</p>
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
