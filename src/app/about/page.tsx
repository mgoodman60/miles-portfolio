import Image from "next/image"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { fieldProjects, profile } from "@/lib/profile"
import { withCanonical } from "@/lib/site"

export const metadata = withCanonical("/about", {
  title: "About — Miles Goodman",
  description:
    "Site Superintendent at W Principles, LLC in Mount Sterling, KY. BS, Engineering Technology Management, Morehead State. MBA candidate at NKU.",
})

const timeline: { year: string; event: string; detail: string; href?: string }[] = [
  {
    year: fieldProjects[0].year,
    event: fieldProjects[0].timeline,
    detail: fieldProjects[0].timelineDetail,
    href: fieldProjects[0].href,
  },
  {
    year: fieldProjects[1].year,
    event: fieldProjects[1].timeline,
    detail: fieldProjects[1].timelineDetail,
    href: fieldProjects[1].href,
  },
  {
    year: "2021–2025",
    event: `${profile.realtorOrg} — ${profile.realtorTitle}`,
    detail: profile.realtorHighlight,
  },
  {
    year: fieldProjects[2].year,
    event: fieldProjects[2].timeline,
    detail: fieldProjects[2].timelineDetail,
    href: fieldProjects[2].href,
  },
  {
    year: "2024",
    event: `MBA — ${profile.mbaSchool} (Active)`,
    detail: `${profile.mbaProgram} · ${profile.mbaExpected}`,
  },
  {
    year: "2023",
    event: `Joined ${profile.company} as Site Superintendent`,
    detail: `${profile.location} · AGC Member`,
  },
  {
    year: profile.bsYear,
    event: profile.bsDegree,
    detail: profile.bsSchool,
  },
]

const linkClass =
  "font-medium text-[var(--ink)] underline underline-offset-2 hover:text-[var(--accent)]"

export default function AboutPage() {
  return (
    <>
      <div className="pt-40 pb-16 px-6 md:px-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <SectionEyebrow className="mb-4">Site Superintendent · MBA Candidate</SectionEyebrow>
          <h1 className="serif font-light leading-[0.95] tracking-tight" style={{ fontSize: "clamp(40px,5.5vw,80px)", color: "var(--ink)" }}>About</h1>
        </div>
      </div>

      <section className="border-t py-24 px-6 md:px-12" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1480px] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-12 lg:gap-16 items-start">
          <div>
            <BlurFade inView delay={0}>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--ink)" }}>
                I&rsquo;m a Site Superintendent at {profile.company} — a commercial general contractor based in {profile.location}, AGC member, established 1933. My work spans concrete self-perform scopes, aquatic facility construction, and PEMB structures across Kentucky.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.1}>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                I&rsquo;m also an MBA candidate at {profile.mbaSchool} ({profile.mbaProgram}, expected 2026).{" "}
                <Link href="/my-reports" className={linkClass}>My Reports</Link>
                , the daily reporting app I built on the Claude API, came out of that work.{" "}
                <a
                  href="https://github.com/mgoodman60/foreman-os-plugin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  ForemanOS
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                , a Claude Code plugin I&rsquo;m building alongside it, is where the rest of those tools live.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.2}>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                I also worked as a realtor with Keller Williams. That&rsquo;s where I learned to read owners and communicate clearly. I use those skills every day on site.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/resume"
                  className="inline-flex min-h-11 items-center px-6 py-3 text-sm font-medium rounded bg-[var(--ink)] text-[var(--paper)] transition-colors hover:bg-[var(--accent)]"
                >
                  Resume
                </Link>
                <a
                  href="/Miles_Goodman_Resume.pdf"
                  download
                  className="inline-flex min-h-11 items-center px-6 py-3 text-sm font-medium rounded border transition-colors hover:bg-black/5"
                  style={{ borderColor: "var(--border)", color: "var(--ink)" }}
                >
                  Download resume PDF
                </a>
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center px-6 py-3 text-sm font-medium rounded border transition-colors hover:bg-black/5"
                  style={{ borderColor: "var(--border)", color: "var(--ink)" }}
                >
                  Contact
                </Link>
              </div>
            </BlurFade>
          </div>

          <div className="mx-auto w-full max-w-[400px] lg:mx-0 lg:justify-self-end">
            <Image
              src="/headshot.jpg"
              alt="Miles Goodman"
              width={400}
              height={400}
              priority
              unoptimized
              className="h-auto w-full rounded border object-cover"
              style={{ borderColor: "var(--border)" }}
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>
      </section>

      <section className="border-t py-24 px-6 md:px-12" style={{ borderColor: "var(--border)", background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <h2 className="serif font-light text-2xl mb-10" style={{ color: "var(--ink)" }}>Credentials</h2>
          <BlurFade inView delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "MBA (active)", detail: `${profile.mbaProgram}\n${profile.mbaSchool}` },
              { label: "BS", detail: `Engineering Technology Management\n${profile.bsSchool} · ${profile.bsYear}` },
              { label: "CTM", detail: "Certified Technology Manager" },
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

      <section className="border-t py-24 px-6 md:px-12" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1480px]">
          <h2 className="serif font-light text-2xl mb-10" style={{ color: "var(--ink)" }}>Timeline</h2>
          <BlurFade inView delay={0.1}>
          <ul className="space-y-0">
            {timeline.map(({ year, event, detail, href }) => (
              <li
                key={event}
                className="flex flex-col gap-1 py-6 border-b sm:flex-row sm:gap-8"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="text-sm font-mono text-[var(--muted)] sm:w-[5.75rem] shrink-0 sm:pt-0.5">{year}</span>
                <div>
                  {href ? (
                    <Link href={href} className={`text-sm ${linkClass}`}>
                      {event}
                    </Link>
                  ) : (
                    <p className="text-sm font-medium mb-0.5" style={{ color: "var(--ink)" }}>{event}</p>
                  )}
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{detail}</p>
                </div>
              </li>
            ))}
          </ul>
          </BlurFade>
        </div>
      </section>
    </>
  )
}
