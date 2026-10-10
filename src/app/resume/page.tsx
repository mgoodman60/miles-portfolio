import Link from "next/link"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { fieldProjects, profile } from "@/lib/profile"
import { withCanonical } from "@/lib/site"

export const metadata = withCanonical("/resume", {
  title: "Resume — Miles Goodman",
  description:
    "Site Superintendent at W Principles, LLC. BS, Engineering Technology Management, Morehead State. MBA candidate at Northern Kentucky University.",
})

/*
  Resume typography:
  - H1 / H2s follow site editorial system (clamp + serif font-light)
  - H3 job/school titles intentionally kept `font-semibold` for resume scanability —
    documented exception to the site-wide `font-light/font-medium` rule.
*/

const listClass = "list-disc space-y-1.5 pl-5 text-sm text-[var(--muted)] marker:text-[var(--muted)]"
const contactLinkClass = "underline underline-offset-2 hover:text-[var(--accent)] transition-colors"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <section className="bg-[var(--paper-warm)] pt-40 pb-16 border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1480px] px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <SectionEyebrow className="mb-4">Resume</SectionEyebrow>
              <h1
                className="serif font-light leading-[0.95] tracking-tight text-[var(--ink)] mb-3"
                style={{ fontSize: "clamp(40px,5.5vw,80px)" }}
              >
                {profile.name}
              </h1>
              <p className="text-lg text-[var(--muted)] font-medium tracking-wide mb-2">
                Site Superintendent · MBA Candidate
              </p>
              <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-[var(--muted)]">
                <span>{profile.location}</span>
                <a href={profile.phoneHref} className={contactLinkClass}>
                  {profile.phoneDisplay}
                </a>
                <a href={`mailto:${profile.email}`} className={contactLinkClass}>
                  {profile.email}
                </a>
              </p>
            </div>
            <a
              href="/Miles_Goodman_Resume.pdf"
              download
              className="inline-flex min-h-11 items-center gap-2 self-start px-5 py-3 bg-[var(--ink)] text-[var(--paper)] text-sm font-medium rounded hover:bg-[var(--accent)] transition-colors md:self-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume PDF
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-24">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-80 shrink-0">
              <h2
                className="serif font-light text-[var(--ink)]"
                style={{ fontSize: "clamp(28px,3.6vw,44px)" }}
              >
                Experience
              </h2>
            </div>

            <div className="flex-1 space-y-14">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--ink)]">{profile.company}</h3>
                    <p className="text-sm text-[var(--muted)] mt-0.5">Site Superintendent · {profile.location}</p>
                  </div>
                  <span className="text-sm text-[var(--muted)] shrink-0">2023 – Present</span>
                </div>

                <div className="space-y-8">
                  {fieldProjects.map((project) => (
                    <div key={project.href} className="pl-4 border-l-2 border-[var(--border)]">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                        <h4 className="font-medium text-[var(--ink)]">
                          <Link href={project.href} className="underline underline-offset-2 hover:text-[var(--accent)]">
                            {project.name}
                          </Link>
                        </h4>
                        <span className="text-xs text-[var(--muted)] shrink-0">{project.when}</span>
                      </div>
                      <ul className={listClass}>
                        {project.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--ink)]">{profile.realtorOrg}</h3>
                    <p className="text-sm text-[var(--muted)] mt-0.5">{profile.realtorTitle}</p>
                  </div>
                  <span className="text-sm text-[var(--muted)] shrink-0">{profile.realtorDates}</span>
                </div>
                <div className="pl-4 border-l-2 border-[var(--border)]">
                  <ul className={listClass}>
                    <li>{profile.realtorHighlight}</li>
                    <li>Licensed sales, negotiation, and client communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-24">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-80 shrink-0">
              <h2
                className="serif font-light text-[var(--ink)]"
                style={{ fontSize: "clamp(28px,3.6vw,44px)" }}
              >
                Education
              </h2>
            </div>
            <div className="flex-1 space-y-10">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-lg font-semibold text-[var(--ink)]">{profile.mbaSchool}</h3>
                  <span className="text-sm text-[var(--muted)] shrink-0">{profile.mbaExpected}</span>
                </div>
                <p className="text-sm text-[var(--muted)]">MBA, {profile.mbaProgram} · In progress</p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-lg font-semibold text-[var(--ink)]">{profile.bsSchool}</h3>
                  <span className="text-sm text-[var(--muted)] shrink-0">{profile.bsYear}</span>
                </div>
                <p className="text-sm text-[var(--muted)]">{profile.bsDegree}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-24">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-80 shrink-0">
              <h2
                className="serif font-light text-[var(--ink)]"
                style={{ fontSize: "clamp(28px,3.6vw,44px)" }}
              >
                Skills &amp; Credentials
              </h2>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
                    Field Tools
                  </h3>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-[var(--ink)] marker:text-[var(--muted)]">
                    <li>Bluebeam</li>
                    <li>AutoCAD</li>
                    <li>Microsoft Excel</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
                    AI &amp; Technology
                  </h3>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-[var(--ink)] marker:text-[var(--muted)]">
                    <li>Claude API</li>
                    <li>
                      <Link href="/my-reports" className="underline underline-offset-2 hover:text-[var(--accent)]">
                        My Reports
                      </Link>
                      {" "}— custom-built daily reporting app
                    </li>
                    <li>
                      <Link
                        href="/ai-tools"
                        className="underline underline-offset-2 hover:text-[var(--accent)]"
                      >
                        ForemanOS
                      </Link>
                      {" "}- private-source field toolkit in development
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
                    Construction
                  </h3>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-[var(--ink)] marker:text-[var(--muted)]">
                    <li>Concrete self-perform</li>
                    <li>PEMB structures</li>
                    <li>Aquatic facility construction</li>
                    <li>ARPA compliance documentation</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
                  Credentials
                </h3>
                <ul className="space-y-3 text-sm text-[var(--ink)]">
                  <li className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span>{profile.ctm}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span>MBA candidate — {profile.mbaSchool}, expected 2026</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span>AGC member company ({profile.company}, est. 1933)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
