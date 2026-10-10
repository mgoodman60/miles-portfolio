import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Stat } from "@/components/ui/Stat"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { withCanonical } from "@/lib/site"

export const metadata = withCanonical("/my-reports", {
  title: "My Reports — Miles Goodman",
  description: "My Reports is Miles Goodman’s AI construction reporting workflow: site photos and voice notes become structured progress reports for review.",
})

const steps = [
  {
    tag: "iPhone · Photos + notes",
    num: "01",
    title: "Capture on site",
    body: "Take photos throughout the day. Add a voice note describing what happened — crew count, progress made, weather, issues flagged.",
  },
  {
    tag: "Claude API · Draft report",
    num: "02",
    title: "AI compiles the report",
    body: "My Reports sends photos and voice notes to the Claude API. It structures the day into a daily progress report — narrative, photo captions, trade log, weather, and open items.",
  },
  {
    tag: "Review · PDF + email",
    num: "03",
    title: "Review and share the PDF",
    body: "Review the structured report and share a formatted PDF with the day’s photos embedded.",
  },
]

const stats = [
  { value: "Site", label: "Morehead project example" },
  { value: "Photos", label: "Site progress captured" },
  { value: "Notes", label: "Voice context included" },
  { value: "PDF", label: "Report format" },
]

const features = [
  {
    title: "Owner visibility",
    body: "A PDF brings together photos, progress summaries and open items for owner review.",
  },
  {
    title: "Subcontractor tracking",
    body: "Trade notes record who was on site, what they completed, and what is pending for review alongside the day's photos.",
  },
  {
    title: "Project history",
    body: "Dated reports and photos bring together a record of project progress for later reference.",
  },
  {
    title: "Daily project documentation",
    body: "Reports bring together site photos, progress notes, trade logs and open items to support project documentation and review.",
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
              From field notes<br />
              <em className="font-light" style={{ color: "var(--accent)", fontStyle: "italic" }}>to progress reports.</em>
            </h1>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              My Reports turns site photos and voice notes into structured daily progress reports. The Morehead case study shows the construction context behind the workflow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center rounded px-6 py-3.5 text-sm font-medium"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Contact
              </Link>
              <Link
                href="/projects/one-senior-care-morehead"
                className="inline-flex min-h-11 items-center rounded border px-6 py-3.5 text-sm font-medium hover:bg-black/5"
                style={{ borderColor: "var(--border)", color: "var(--ink)" }}
              >
                View the Morehead project →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ value, label }) => (
              <Stat key={label} value={value} label={label} className="min-w-0 !p-4 sm:!p-6" valueClassName="!text-xl sm:!text-3xl" />
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
        <div className="mx-auto max-w-[1480px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { value: "PDF", label: "Structured progress report" },
            { value: "iPhone", label: "Photos and a voice note" },
            { value: "Review", label: "Project documentation" },
          ].map(({ value, label }) => (
            <Stat
              key={label}
              variant="bare"
              value={value}
              label={label}
              valueClassName="text-2xl md:text-3xl text-white"
              labelClassName="text-white"
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
