import Image from "next/image"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { OSC_TITLE } from "@/lib/projects-copy"
import { withCanonical } from "@/lib/site"

export const metadata = withCanonical("/about", {
  title: "About — Miles Goodman",
  description: "Site Superintendent at a commercial general contractor in Kentucky. BS, Engineering Technology Management. MBA candidate at NKU.",
})

const timeline: { year: string; event: string; detail: string; href?: string }[] = [
  {
    year: "2026",
    event: `${OSC_TITLE} · Complete`,
    detail: "Site Superintendent · PACE senior care facility",
    href: "/projects/one-senior-care",
  },
  {
    year: "2026",
    event: "Camp Taylor Memorial Park Pool · Opened May 2026",
    detail: "Site Superintendent · $6.2M ARPA · public opening May 23, 2026",
    href: "/projects/camp-taylor-pool",
  },
  {
    year: "2021 to 2025",
    event: "Keller Williams / National Real Estate · Realtor",
    detail: "Top 5% nationwide producer, 2022",
  },
  {
    year: "2024",
    event: "John W. Black Aquatic Center · Reopened May 2024",
    detail: "Site Superintendent · Reopened May 25, 2024",
    href: "/projects/john-black-aquatic",
  },
  {
    year: "2024",
    event: "MBA · Northern Kentucky University (Active)",
    detail: "Project Management & AI · Expected 2026",
  },
  {
    year: "2023",
    event: "Joined a commercial general contractor as Site Superintendent",
    detail: "Kentucky · Commercial general contractor",
  },
  {
    year: "2022",
    event: "BS, Engineering Technology Management",
    detail: "Bachelor's degree",
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
                I&rsquo;m a Site Superintendent at a commercial general contractor in Kentucky. My work spans concrete self-perform scopes, aquatic facility construction, and PEMB structures across the state.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.1}>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                I&rsquo;m also an MBA candidate at Northern Kentucky University (Project Management &amp; AI, expected 2026).{" "}
                <Link href="/my-reports" className={linkClass}>My Reports</Link>
                , the daily reporting app I built on the Claude API, came out of that work.{" "}
                <Link href="/ai-tools" className={linkClass}>
                  ForemanOS
                </Link>
                , a private-source toolkit I&rsquo;m building for superintendent field work, is also in development.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.2}>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                I also worked as a realtor with Keller Williams / National Real Estate. That&rsquo;s where I learned to read owners and communicate clearly. I use those skills every day on site.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/resume"
                  className="btn-solid inline-flex min-h-11 items-center rounded px-6 py-3 text-sm font-medium transition-colors"
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
              <a href="https://www.linkedin.com/in/miles-goodman-cm" target="_blank" rel="noopener noreferrer" className="btn-line inline-flex min-h-11 items-center rounded border px-6 py-3 text-sm font-medium">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
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
              { label: "MBA (active)", detail: "Project Management & AI\nNorthern Kentucky University" },
              { label: "Bachelor’s degree", detail: "Engineering Technology Management\n2022" },
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
