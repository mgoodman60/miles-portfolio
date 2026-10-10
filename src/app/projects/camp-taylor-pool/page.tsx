import Image from "next/image"
import Link from "next/link"
import { CampTaylorGallery } from "@/components/sections/CampTaylorGallery"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ProjectBackLink, ProjectPager } from "@/components/sections/ProjectChrome"
import { withCanonical } from "@/lib/site"
import { timelinePhotos } from "./timeline-photos"

const photos = [
  {
    src: "/projects/camp-taylor/pool-progress-1.jpg",
    width: 1920,
    height: 1080,
    alt: "Aerial of the Camp Taylor waterpark and pool house beside the surrounding park",
  },
  {
    src: "/projects/camp-taylor/construction-3.jpg",
    width: 1920,
    height: 1080,
    alt: "Aerial of the Camp Taylor pool shell, deck, and slide tower during construction",
  },
  {
    src: "/projects/camp-taylor/night-pour-hero.jpg",
    width: 1920,
    height: 1080,
    alt: "Night concrete pour at the Camp Taylor pool shell",
  },
  {
    src: "/projects/camp-taylor/construction-5.jpg",
    width: 1920,
    height: 1080,
    alt: "Night concrete pour with a pump boom over the Camp Taylor pool",
  },
  {
    src: "/projects/camp-taylor/construction-7.jpg",
    width: 1920,
    height: 1080,
    alt: "Shade pavilion frame beside the Camp Taylor pool deck",
  },
  {
    src: "/projects/camp-taylor/pool-progress-2.jpg",
    width: 1920,
    height: 1080,
    alt: "Piping inside the Camp Taylor pool mechanical room",
  },
]

const press = [
  {
    label: "Louisville Metro — opening announcement",
    href: "https://louisvilleky.gov/news/mayor-craig-greenberg-opens-camp-taylor-waterpark-bringing-summer-fun-back-neighborhood",
  },
  {
    label: "Courier Journal — reopening",
    href: "https://www.courier-journal.com/story/news/local/2026/05/19/camp-taylor-pool-reopens-louisville-waterpark/90160539007/",
  },
  {
    label: "WLKY — reopening",
    href: "https://www.wlky.com/article/louisville-camp-taylor-water-park-years-long-closure-unveil/71351845",
  },
  {
    label: "WDRB — November 2025 community meeting",
    href: "https://www.wdrb.com/news/community-shares-parking-safety-concerns-for-new-camp-taylor-pool-set-to-open-in-2026/article_14eac5a6-ddba-4f4f-b9fd-34e699f05496.html",
  },
  {
    label: "WAVE 3 — April 2025 delay to 2026",
    href: "https://www.wave3.com/video/2025/04/22/camp-taylor-pool-wont-reopen-till-summer-2026-mayor-greenberg-says/",
  },
]

export const metadata = withCanonical("/projects/camp-taylor-pool", {
  title: "Camp Taylor Memorial Park Pool — Miles Goodman",
  description:
    "Camp Taylor Memorial Park waterpark in Louisville. $6.2 million ARPA project. Site superintendent: Miles Goodman. Opened to the public May 23, 2026.",
})

export default function CampTaylorPage() {
  return (
    <>
      <div className="relative mt-20 overflow-hidden" style={{ height: "60svh", minHeight: 400 }}>
        <Image
          src="/projects/camp-taylor/drone-wide.jpg"
          alt="Aerial of the finished Camp Taylor Memorial Park waterpark"
          fill
          priority
          quality={60}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="px-6 md:px-12 py-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <ProjectBackLink />
          <SectionEyebrow className="mb-3">Louisville, KY · Opened May 2026</SectionEyebrow>
          <h1 className="serif font-light tracking-tight mb-2" style={{ fontSize: "clamp(36px,5vw,72px)", color: "var(--ink)" }}>
            Camp Taylor Memorial Park Pool
          </h1>
          <p className="text-lg text-[var(--muted)]">
            $6.2 million ARPA-funded waterpark. W Principles lists construction complete in November 2025. The pool opened to the public on May 23, 2026.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="lg:w-80 shrink-0 order-last lg:order-first">
            <div className="lg:sticky lg:top-28">
              <dl className="space-y-5">
                {[
                  ["Project", "Camp Taylor Memorial Park Pool"],
                  ["Owner", "Louisville Metro Parks and Recreation"],
                  ["General Contractor", "W Principles, LLC"],
                  ["My Role", "Site Superintendent"],
                  ["Location", "Camp Taylor Park, 4201 Lee Avenue, Louisville, KY"],
                  ["Cost", "$6.2 million (ARPA)"],
                  ["Construction completion", "November 2025 (W Principles)"],
                  ["Public opening", "May 23, 2026"],
                  ["Scope", "New waterpark — ADA zero-depth entry, lap lanes, water slide, children’s play area, shaded seating, and a pool house"],
                ].map(([label, value]) => (
                  <div key={label} className="border-b pb-4" style={{ borderColor: "var(--border)" }}>
                    <dt className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-1">{label}</dt>
                    <dd className="text-sm font-medium text-[var(--ink)]">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3">Coverage</p>
                <div className="flex flex-col gap-2">
                  {press.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline transition-colors"
                      style={{ color: "var(--accent)" }}
                    >
                      {item.label}
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="mb-16">
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--ink)" }}>
                Camp Taylor Memorial Park’s pool had been closed since 2019. Louisville replaced it with a new waterpark at 4201 Lee Avenue: an ADA zero-depth entry, lap lanes, a water slide, a children’s play area, shaded seating, and a pool house with restrooms, showers, and lockers. The project was funded with $6.2 million in ARPA money.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                I was the site superintendent for W Principles, LLC. The city had planned to open for the 2025 season. Severe weather delayed the work, and the waterpark opened to the public on May 23, 2026. W Principles lists construction complete in November 2025.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="serif font-light text-3xl mb-10" style={{ color: "var(--ink)" }}>
                What the job involved
              </h2>
              <div className="space-y-10">
                {[
                  {
                    num: "01",
                    title: "The opening moved a year",
                    body: "In April 2025, WAVE 3 reported that Mayor Greenberg said the pool would not reopen until summer 2026. WDRB reported in November 2025 that construction delays had pushed the opening to the next Memorial Day weekend. The Courier Journal tied the missed 2025 season to severe weather.",
                  },
                  {
                    num: "02",
                    title: "A new outdoor waterpark",
                    body: "The finished facility is an outdoor pool, not a renovation of the old basin in place. City descriptions of the opening list the zero-depth entry, lap lanes, slide, play area with a small slide and dump bucket, a water basketball hoop, and a climbing wall. W Principles also lists shaded seating and a renovated pool house.",
                  },
                  {
                    num: "03",
                    title: "ARPA paperwork alongside the field work",
                    body: "ARPA funding adds reporting on top of a normal commercial job. Owner, city, and federal paperwork ran in parallel with the construction.",
                  },
                ].map(({ num, title, body }) => (
                  <div key={num} className="border-l-2 pl-6" style={{ borderColor: "var(--accent)" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="serif text-5xl font-light text-[var(--accent)] leading-none">{num}</span>
                    </div>
                    <h3 className="serif font-light text-xl mb-3" style={{ color: "var(--ink)" }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="serif font-light text-3xl mb-6" style={{ color: "var(--ink)" }}>
                Site work and finished pool
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <figure>
                  <Image
                    src="/projects/camp-taylor/early-1.jpg"
                    alt="Early excavation and pool layout at Camp Taylor Memorial Park"
                    width={1920}
                    height={1080}
                    className="h-auto w-full rounded"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                  <figcaption className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                    Early site work
                  </figcaption>
                </figure>
                <figure>
                  <Image
                    src="/projects/camp-taylor/finished-pool.jpg"
                    alt="Finished Camp Taylor waterpark with slide, lap lanes, and zero-depth entry"
                    width={1920}
                    height={1080}
                    className="h-auto w-full rounded"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                  <figcaption className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                    Finished waterpark
                  </figcaption>
                </figure>
              </div>
              <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
                These are different days and camera positions, shown side by side.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="serif font-light text-3xl mb-6" style={{ color: "var(--ink)" }}>
                Site Photography
              </h2>
              <CampTaylorGallery photos={photos} />
              <p className="text-xs text-[var(--muted)] mt-4">
                Photos by Miles Goodman
              </p>
            </div>

            <div className="mb-16">
              <h2 className="serif font-light text-3xl mb-2" style={{ color: "var(--ink)" }}>
                Project Timeline
              </h2>
              <p className="text-sm text-[var(--muted)] mb-6">
                October 2024 through April 2026. The month on each photo comes from the original filename. April 2026 frames still show concrete and interior work, after an October 2025 photo of the pool with water in it.
              </p>
              <CampTaylorGallery photos={timelinePhotos} variant="stack" />
            </div>

            <div className="rounded p-8 md:p-12" style={{ background: "var(--paper-warm)" }}>
              <h2 className="serif font-light text-2xl mb-4" style={{ color: "var(--ink)" }}>Outcome</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>
                Louisville Metro, the Courier Journal, and WLKY covered the May 2026 opening. The neighborhood had been without this pool since 2019. Admission at opening was $3 for ages 13 and older and $2 for ages 12 and under, noon to 5 p.m. except Thursdays.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section
        data-footer-cta=""
        className="border-t py-24 px-6 md:px-12 text-center"
        style={{ borderColor: "var(--border)", background: "var(--paper-warm)" }}
      >
        <div className="mx-auto max-w-[800px]">
          <h2 className="serif font-light text-3xl md:text-4xl tracking-tight mb-6" style={{ color: "var(--ink)" }}>
            Want to talk about a project?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-medium rounded transition-colors"
              style={{ background: "var(--ink)", color: "var(--paper)" }}
            >
              Contact
            </Link>
            <a
              href="/Miles_Goodman_Resume.pdf"
              download
              className="px-5 py-2.5 text-sm font-medium rounded border transition-colors hover:bg-black/5"
              style={{ borderColor: "var(--border)", color: "var(--ink)" }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <ProjectPager next={{ href: "/projects/john-black-aquatic", label: "John W. Black" }} />
    </>
  )
}
