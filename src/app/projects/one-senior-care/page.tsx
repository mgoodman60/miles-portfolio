import Link from "next/link"
import { CampTaylorGallery } from "@/components/sections/CampTaylorGallery"
import { ProjectCoverSlideshow } from "@/components/sections/ProjectCoverSlideshow"
import { ProjectBackLink, ProjectPager } from "@/components/sections/ProjectChrome"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { COPY } from "@/lib/copy-todo"
import { withCanonical } from "@/lib/site"
import { droneHeroSlides, dronePhotos, facilityPhotos, progressEnclosure, progressFoundation, progressInterior } from "./photos"

export const metadata = withCanonical("/projects/one-senior-care", {
  title: "One Senior Care | Miles Goodman",
  description: COPY.oneSeniorCareDescription,
})

export default function OneSeniorCarePage() {
  const progressGroups = [
    { label: "Foundation", photos: progressFoundation },
    { label: "Structure and enclosure", photos: progressEnclosure },
    { label: "Interior progress", photos: progressInterior },
  ]
  return <>
    <ProjectCoverSlideshow slides={droneHeroSlides} height="60svh" minHeight={400}>
      <div className="absolute left-6 top-6 md:left-12"><span className="rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em]" style={{ background: "var(--orange)", color: "var(--on-orange)" }}>Complete</span></div>
    </ProjectCoverSlideshow>
    <div className="px-6 py-12 md:px-12" style={{ background: "var(--paper-warm)" }}><div className="mx-auto max-w-[1480px]"><ProjectBackLink /><SectionEyebrow className="mb-3">{COPY.oneSeniorCareEyebrow}</SectionEyebrow><h1 className="serif mb-2 text-[clamp(36px,5vw,72px)] font-light tracking-tight text-[var(--ink)]">One Senior Care</h1><p className="text-lg italic text-[var(--muted)]">{COPY.oneSeniorCareSummary}</p></div></div>
    <div className="mx-auto max-w-[1480px] px-6 py-16 md:px-12"><div className="flex flex-col gap-16 lg:flex-row">
      <aside className="order-last shrink-0 lg:order-first lg:w-80"><div className="lg:sticky lg:top-28"><dl className="space-y-5">{[["Project", "One Senior Care"], ["Role", COPY.oneSeniorCareRole], ["Status", "Complete"]].map(([label, value]) => <div key={label} className="border-b pb-4" style={{ borderColor: "var(--border)" }}><dt className="mb-1 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{label}</dt><dd className="text-sm font-medium text-[var(--ink)]">{value}</dd></div>)}</dl></div></aside>
      <div className="min-w-0 flex-1"><div className="mb-12 space-y-4 text-base leading-relaxed text-[var(--muted)]"><p>{COPY.oneSeniorCareSummary}</p><p>{COPY.oneSeniorCareReportingNote}</p></div><div className="mb-16 rounded border-l-2 p-8" style={{ background: "var(--card)", borderColor: "var(--solutions)" }}><p className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--solutions)]">Solutions · field reporting</p><h2 className="serif mb-3 text-xl font-light text-[var(--ink)]">My Reports</h2><p className="text-sm leading-relaxed text-[var(--muted)]">{COPY.oneSeniorCareReportingNote}</p><Link href="/my-reports" className="mt-4 inline-block text-sm font-medium text-[var(--solutions)] underline underline-offset-4">See how it works →</Link></div>
        <section className="mb-16"><h2 className="serif mb-6 text-3xl font-light text-[var(--ink)]">Drone photography</h2><CampTaylorGallery photos={dronePhotos} captions /></section><section className="mb-16"><h2 className="serif mb-6 text-3xl font-light text-[var(--ink)]">Construction progress</h2>{progressGroups.map(({ label, photos }) => <div key={label} className="mb-12"><p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--solutions)]">{label}</p><CampTaylorGallery photos={photos} captions /></div>)}</section><section className="mb-16"><h2 className="serif mb-6 text-3xl font-light text-[var(--ink)]">Facility</h2><CampTaylorGallery photos={facilityPhotos} captions /></section>
      </div>
    </div></div>
    <section className="border-t px-6 py-24 text-center md:px-12" style={{ borderColor: "var(--border)", background: "var(--paper-warm)" }}><h2 className="serif mb-6 text-3xl font-light text-[var(--ink)]">Want to talk about a project?</h2><Link href="/contact" className="btn-solid inline-flex min-h-11 items-center rounded px-5 py-3 text-sm font-medium">Contact</Link></section>
    <ProjectPager previous={{ href: "/projects/john-black-aquatic", label: "John W. Black" }} />
  </>
}
