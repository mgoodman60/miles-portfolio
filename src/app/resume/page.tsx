import Link from "next/link"

export const metadata = {
  title: "Resume — Miles Goodman",
  description: "Site Superintendent · MBA Candidate. Resume of Miles Goodman.",
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[var(--paper)]">
      {/* Page header */}
      <section className="bg-[var(--paper-warm)] pt-40 pb-16 border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1480px] px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h1 className="serif text-5xl md:text-6xl font-normal text-[var(--ink)] mb-3">
                Miles Goodman
              </h1>
              <p className="text-lg text-[var(--muted)] font-medium tracking-wide mb-2">
                Site Superintendent · MBA Candidate
              </p>
              <p className="text-sm text-[var(--muted)]">
                Lexington, KY &nbsp;·&nbsp;{" "}
                <a
                  href="mailto:msgoodman1997@gmail.com"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  msgoodman1997@gmail.com
                </a>
              </p>
            </div>
            <a
              href="/Miles_Goodman_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--ink)] text-[var(--paper)] text-sm font-medium rounded hover:bg-[var(--accent)] transition-colors self-start md:self-auto"
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

      {/* Experience */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar label */}
            <div className="lg:w-80 shrink-0">
              <h2 className="serif text-2xl font-normal text-[var(--ink)]">Experience</h2>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-14">

              {/* W Principles */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--ink)]">W Principles, LLC</h3>
                    <p className="text-sm text-[var(--muted)] mt-0.5">Site Superintendent · Mount Sterling, KY</p>
                  </div>
                  <span className="text-sm text-[var(--muted)] shrink-0">2023 – Present</span>
                </div>

                <div className="space-y-8">
                  {/* One Senior Care */}
                  <div className="pl-4 border-l-2 border-[var(--border)]">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                      <p className="font-medium text-[var(--ink)]">One Senior Care — Morehead, KY</p>
                      <span className="text-xs text-[var(--muted)] shrink-0">Active Jan – Aug 2026</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-[var(--muted)]">
                      <li>$3M PACE facility · 10,060 SF PEMB</li>
                      <li>Concrete self-perform under Walker Company of Kentucky</li>
                    </ul>
                  </div>

                  {/* Camp Taylor */}
                  <div className="pl-4 border-l-2 border-[var(--border)]">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                      <p className="font-medium text-[var(--ink)]">Camp Taylor Memorial Park Pool — Louisville, KY</p>
                      <span className="text-xs text-[var(--muted)] shrink-0">Completed Nov 2025</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-[var(--muted)]">
                      <li>$6.2M ARPA-funded new construction</li>
                      <li>Zero-depth entry, lap lanes, waterslide</li>
                      <li>Press: WAVE 3, WHAS 11, WDRB</li>
                    </ul>
                  </div>

                  {/* John W. Black */}
                  <div className="pl-4 border-l-2 border-[var(--border)]">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                      <p className="font-medium text-[var(--ink)]">John W. Black Aquatic Center — La Grange, KY</p>
                      <span className="text-xs text-[var(--muted)] shrink-0">Completed 2024</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-[var(--muted)]">
                      <li>$3.7M complete renovation</li>
                      <li>Structural demo, pool shell replacement, MEP, site improvements</li>
                      <li>Delivered on schedule for 2024 swim season</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Keller Williams */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--ink)]">Keller Williams Realty</h3>
                    <p className="text-sm text-[var(--muted)] mt-0.5">Real Estate Agent</p>
                  </div>
                  <span className="text-sm text-[var(--muted)] shrink-0">2022</span>
                </div>
                <ul className="space-y-1.5 text-sm text-[var(--muted)] pl-4 border-l-2 border-[var(--border)]">
                  <li>Top 5% agent by production in market area</li>
                  <li>Licensed sales, negotiation, client communication</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-80 shrink-0">
              <h2 className="serif text-2xl font-normal text-[var(--ink)]">Education</h2>
            </div>
            <div className="flex-1 space-y-10">

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-lg font-semibold text-[var(--ink)]">Northern Kentucky University</h3>
                  <span className="text-sm text-[var(--muted)] shrink-0">Expected 2026</span>
                </div>
                <p className="text-sm text-[var(--muted)]">MBA, Project Management &amp; AI · In Progress</p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-lg font-semibold text-[var(--ink)]">Morehead State University</h3>
                  <span className="text-sm text-[var(--muted)] shrink-0">2022</span>
                </div>
                <p className="text-sm text-[var(--muted)]">BS, Construction Technology &amp; Management · CTM Designation</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Skills & Credentials */}
      <section>
        <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-80 shrink-0">
              <h2 className="serif text-2xl font-normal text-[var(--ink)]">Skills &amp; Credentials</h2>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* Skills */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
                    Field Tools
                  </h3>
                  <ul className="space-y-1.5 text-sm text-[var(--ink)]">
                    <li>Bluebeam</li>
                    <li>AutoCAD</li>
                    <li>Microsoft Excel</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
                    AI &amp; Technology
                  </h3>
                  <ul className="space-y-1.5 text-sm text-[var(--ink)]">
                    <li>Claude API</li>
                    <li>My Reports — custom-built daily reporting app</li>
                    <li>ForemanOS — Claude Code plugin (superintendent field OS)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
                    Construction
                  </h3>
                  <ul className="space-y-1.5 text-sm text-[var(--ink)]">
                    <li>Concrete self-perform</li>
                    <li>PEMB structures</li>
                    <li>Aquatic facility construction</li>
                    <li>ARPA compliance documentation</li>
                  </ul>
                </div>
              </div>

              {/* Credentials */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
                  Credentials
                </h3>
                <ul className="space-y-3 text-sm text-[var(--ink)]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span>CTM — Certified in Construction Technology &amp; Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span>MBA Candidate — Northern Kentucky University, 2026</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span>AGC Member company (W Principles, LLC, est. 1933)</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
