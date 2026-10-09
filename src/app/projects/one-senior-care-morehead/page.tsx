import Link from "next/link"
import { CampTaylorGallery } from "@/components/sections/CampTaylorGallery"
import { ProjectCoverSlideshow } from "@/components/sections/ProjectCoverSlideshow"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ProjectBackLink, ProjectPager } from "@/components/sections/ProjectChrome"
import { withCanonical } from "@/lib/site"
import {
  dronePhotos,
  droneHeroSlides,
  facilityPhotos,
  progressEnclosure,
  progressFoundation,
  progressInterior,
} from "./photos"

export const metadata = withCanonical("/projects/one-senior-care-morehead", {
  title: "One Senior Care - Morehead | Miles Goodman",
  description: "$3M PACE senior care facility in Morehead, KY. Complete. Site Superintendent: Miles Goodman.",
})

export default function MoreheadPage() {
  return (
    <>
      {/* Cover — drone slideshow */}
      <ProjectCoverSlideshow slides={droneHeroSlides} height="60svh" minHeight={400}>
        <div className="absolute top-6 left-6 md:left-12">
          <span
            className="text-xs uppercase tracking-[0.18em] px-3 py-1.5 rounded-full text-white font-medium"
            style={{ background: "var(--accent)" }}
          >
            Complete
          </span>
        </div>
      </ProjectCoverSlideshow>

      {/* Title */}
      <div className="px-6 md:px-12 py-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <ProjectBackLink />
          <SectionEyebrow className="mb-3">Morehead, KY · Complete · Jan 2026 to Aug 2026</SectionEyebrow>
          <h1 className="serif font-light tracking-tight mb-2" style={{ fontSize: "clamp(36px,5vw,72px)", color: "var(--ink)" }}>
            One Senior Care - Morehead
          </h1>
          <p className="text-lg text-[var(--muted)] italic">$3M PACE senior care facility — 10,060 SF new construction</p>
        </div>
      </div>

      {/* Two-column body */}
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-16">

          <aside className="lg:w-80 shrink-0 order-last lg:order-first">
            <div className="lg:sticky lg:top-28">
              <dl className="space-y-5">
                {[
                  ["Project", "One Senior Care - Morehead"],
                  ["Program", "PACE (Program of All-Inclusive Care for the Elderly)"],
                  ["Owner", "One Senior Care"],
                  ["General Contractor", "Walker Company of Kentucky"],
                  ["Concrete Sub (Self-Perform)", "W Principles, LLC"],
                  ["My Role", "Site Superintendent"],
                  ["Architect", "Jon Cheatham"],
                  ["Project Manager", "Andrew Eberle"],
                  ["Location", "Morehead, KY"],
                  ["Contract Value", "$2,985,000"],
                  ["Building Size", "10,060 SF"],
                  ["Structure", "Pre-Engineered Metal Building (PEMB)"],
                  ["Timeline", "Jan 21, 2026 — Aug 27, 2026"],
                  ["Status", "Complete"],
                ].map(([label, value]) => (
                  <div key={label as string} className="border-b pb-4" style={{ borderColor: "var(--border)" }}>
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
                One Senior Care - Morehead is a PACE (Program of All-Inclusive Care for the Elderly) facility serving Medicare and Medicaid participants in Rowan County. PACE centers provide integrated health, social, and long-term care services as an alternative to nursing home placement, and this building is the hub for that care.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                The 10,060 SF facility uses a pre-engineered metal building (PEMB) structure. Walker Company of Kentucky was the general contractor, and W Principles, LLC self-performed the concrete. I managed daily field operations, trade coordination, and owner reporting on site.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                The photographs follow the work from the slab and anchor bolts through steel, sheathing, and roof, then interior framing, MEP rough-in, and finishes.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                This project provided the field context for my AI daily reporting app. My Reports processes site photos and voice notes into structured progress reports for review.
              </p>
            </div>

            {/* My Reports callout */}
            <div
              className="rounded p-8 mb-16 border-l-2"
              style={{ background: "var(--paper-warm)", borderColor: "var(--accent)" }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-2">AI Field Tools</p>
              <h2 className="serif font-light text-xl mb-3" style={{ color: "var(--ink)" }}>
                My Reports deployed on this project
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                My Reports brings together iPhone photos and voice notes via the Claude API to create structured progress reports. The workflow supports review and sharing of a formatted PDF.
              </p>
              <Link
                href="/my-reports"
                className="inline-block mt-4 text-sm font-medium hover:underline"
                style={{ color: "var(--accent)" }}
              >
                See how it works →
              </Link>
            </div>

            {/* Drone photos */}
            {dronePhotos.length > 0 && (
              <div className="mb-16">
                <h2 className="serif font-light text-3xl mb-6" style={{ color: "var(--ink)" }}>Drone Photography</h2>
                <CampTaylorGallery photos={dronePhotos} captions />
              </div>
            )}

            {/* Progress photos — split by phase */}
            <div className="mb-16">
              <h2 className="serif font-light text-3xl mb-2" style={{ color: "var(--ink)" }}>Construction Progress</h2>
              <p className="text-sm text-[var(--muted)] mb-10">Foundation, enclosure, and interior rough-in.</p>

              {[
                { label: "Foundation", sub: "February–March 2026", photos: progressFoundation },
                { label: "Structure and enclosure", sub: "March–April 2026", photos: progressEnclosure },
                { label: "Interior rough-in", sub: "May–June 2026", photos: progressInterior },
              ].map(({ label, sub, photos }) => photos.length > 0 && (
                <div key={label} className="mb-12">
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)] font-medium">{label}</p>
                    <p className="text-xs text-[var(--muted)]">{sub} · {photos.length} photos</p>
                  </div>
                  <CampTaylorGallery photos={photos} captions />
                </div>
              ))}
            </div>

            {facilityPhotos.length > 0 && (
              <div className="mb-16">
                <h2 className="serif font-light text-3xl mb-2" style={{ color: "var(--ink)" }}>Facility</h2>
                <p className="text-sm text-[var(--muted)] mb-6">Painted room, therapy space, and accessible restroom.</p>
                <CampTaylorGallery photos={facilityPhotos} captions />
              </div>
            )}

            <p className="text-xs text-[var(--muted)]">All photos by Miles Goodman · © 2026</p>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────── */}
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

      <ProjectPager previous={{ href: "/projects/john-black-aquatic", label: "John W. Black" }} />
    </>
  )
}
