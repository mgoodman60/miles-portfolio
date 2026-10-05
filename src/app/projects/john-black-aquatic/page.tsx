import Image from "next/image"
import Link from "next/link"
import { CampTaylorGallery } from "@/components/sections/CampTaylorGallery"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ProjectBackLink, ProjectPager } from "@/components/sections/ProjectChrome"
import { withCanonical } from "@/lib/site"

const photos = [
  {
    src: "/projects/john-black/drone-01.jpg",
    alt: "Wide aerial of the finished John W. Black Aquatic Center, main pool, and parking lot",
  },
  {
    src: "/projects/john-black/drone-02.jpg",
    alt: "Aerial of the finished John W. Black Aquatic Center, 2 of 15",
  },
  {
    src: "/projects/john-black/drone-03.jpg",
    alt: "Aerial of the finished John W. Black Aquatic Center, 3 of 15",
  },
  {
    src: "/projects/john-black/drone-04.jpg",
    alt: "Aerial of the finished John W. Black Aquatic Center, 4 of 15",
  },
  {
    src: "/projects/john-black/drone-05.jpg",
    alt: "Aerial of the John W. Black main pool and a separate play pool",
  },
  {
    src: "/projects/john-black/drone-06.jpg",
    alt: "Aerial of the finished John W. Black Aquatic Center, 6 of 15",
  },
  {
    src: "/projects/john-black/drone-07.jpg",
    alt: "Aerial of the finished John W. Black Aquatic Center, 7 of 15",
  },
  {
    src: "/projects/john-black/drone-08.jpg",
    alt: "Aerial along the main pool and concrete deck at John W. Black Aquatic Center",
  },
  {
    src: "/projects/john-black/drone-09.jpg",
    alt: "Aerial of the finished John W. Black Aquatic Center, 9 of 15",
  },
  {
    src: "/projects/john-black/drone-10.jpg",
    alt: "Aerial of the finished John W. Black Aquatic Center, 10 of 15",
  },
  {
    src: "/projects/john-black/drone-11.jpg",
    alt: "Aerial of the finished John W. Black Aquatic Center, 11 of 15",
  },
  {
    src: "/projects/john-black/drone-12.jpg",
    alt: "Aerial of the finished John W. Black Aquatic Center, 12 of 15",
  },
  {
    src: "/projects/john-black/drone-13.jpg",
    alt: "Aerial of the finished John W. Black Aquatic Center, 13 of 15",
  },
  {
    src: "/projects/john-black/drone-14.jpg",
    alt: "Aerial of the John W. Black play area, water slide, and main pool",
  },
  {
    src: "/projects/john-black/drone-15.jpg",
    alt: "Closer aerial of the John W. Black main pool, water slide, and shade structures",
  },
].map((photo) => ({ ...photo, width: 1920, height: 1080 }))

export const metadata = withCanonical("/projects/john-black-aquatic", {
  title: "John W. Black Aquatic Center — Miles Goodman",
  description:
    "Renovation of the John W. Black Aquatic Center at Wendell Moore Park in La Grange, Kentucky. Reopened May 25, 2024. Site superintendent: Miles Goodman, W Principles.",
})

export default function JohnBlackPage() {
  return (
    <>
      <div className="relative mt-20 overflow-hidden" style={{ height: "60svh", minHeight: 400 }}>
        <Image
          src="/projects/john-black/drone-01.jpg"
          alt="Wide aerial of the finished John W. Black Aquatic Center"
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
          <SectionEyebrow className="mb-3">La Grange, KY · Reopened May 2024</SectionEyebrow>
          <h1 className="serif font-light tracking-tight mb-2" style={{ fontSize: "clamp(36px,5vw,72px)", color: "var(--ink)" }}>
            John W. Black Aquatic Center
          </h1>
          <p className="text-lg text-[var(--muted)]">
            Renovation at Wendell Moore Park. The center reopened May 25, 2024.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="lg:w-80 shrink-0 order-last lg:order-first">
            <div className="lg:sticky lg:top-28">
              <dl className="space-y-5">
                {[
                  ["Project", "John W. Black Aquatic Center"],
                  ["Park", "Wendell Moore Park"],
                  ["Owner", "Oldham County Parks and Recreation"],
                  ["General Contractor", "W Principles, LLC"],
                  ["My Role", "Site Superintendent"],
                  ["Location", "1551 N. Highway 393, La Grange, KY"],
                  ["Reopened", "May 25, 2024"],
                  ["Scope", "Renovation after a 2022 closure — lap pool and recreation pool, water slide, splash pad, climbing wall, deck, locker rooms, and mechanical and piping work"],
                ].map(([label, value]) => (
                  <div key={label} className="border-b pb-4" style={{ borderColor: "var(--border)" }}>
                    <dt className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-1">{label}</dt>
                    <dd className="text-sm font-medium text-[var(--ink)]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="mb-12">
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--ink)" }}>
                The John W. Black Aquatic Center at Wendell Moore Park closed in 2022 after structural and mechanical problems. Oldham County reopened it on May 25, 2024, the Saturday before Memorial Day weekend.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                I was the site superintendent for W Principles, LLC. Published descriptions of the renovation include two pools — one for laps and one for recreation — plus a water slide, splash pad, climbing wall, new deck, updated locker rooms, and new piping and mechanical systems. W Principles also lists diving boards. The photos below are aerials of the finished center. This set does not include a before view.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="serif font-light text-3xl mb-10" style={{ color: "var(--ink)" }}>
                What the job involved
              </h2>
              <div className="space-y-10">
                <div className="border-l-2 pl-6" style={{ borderColor: "var(--accent)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="serif text-5xl font-light text-[var(--accent)] leading-none">01</span>
                  </div>
                  <h3 className="serif font-light text-xl mb-3" style={{ color: "var(--ink)" }}>
                    Closed in 2022, open again in May 2024
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    WDRB reported that the center reopened briefly in 2021, closed again in 2022, and was expected back for Memorial Day weekend 2024. WLKY covered the grand reopening on Saturday, May 25. W Principles lists completion in May 2024.
                  </p>
                </div>
                <div className="border-l-2 pl-6" style={{ borderColor: "var(--accent)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="serif text-5xl font-light text-[var(--accent)] leading-none">02</span>
                  </div>
                  <h3 className="serif font-light text-xl mb-3" style={{ color: "var(--ink)" }}>
                    Two pools and new mechanical systems
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    The engineer, Brandstetter Carroll, described splitting the old pool into a lap pool and a recreation pool, with upgrades to the mechanical systems and pool piping. County coverage added the slide, splash pad, climbing wall, deck, and locker rooms.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="serif font-light text-3xl mb-6" style={{ color: "var(--ink)" }}>Drone Photography</h2>
              <CampTaylorGallery photos={photos} />
              <p className="text-xs text-[var(--muted)] mt-4">Drone photography by Miles Goodman · 2024</p>
            </div>

            <div className="rounded p-8 md:p-12" style={{ background: "var(--paper-warm)" }}>
              <h2 className="serif font-light text-2xl mb-4" style={{ color: "var(--ink)" }}>Outcome</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>
                The center reopened for the 2024 swim season on May 25. Oldham County Parks lists the address as 1551 N. Highway 393, La Grange.
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

      <ProjectPager
        previous={{ href: "/projects/camp-taylor-pool", label: "Camp Taylor" }}
        next={{ href: "/projects/one-senior-care-morehead", label: "One Senior Care - Morehead" }}
      />
    </>
  )
}
