import Image from "next/image"
import Link from "next/link"
import { CampTaylorGallery } from "@/components/sections/CampTaylorGallery"
import { dronePhotos, progressPhotos } from "./photos"

export const metadata = {
  title: "One Senior Care — Morehead | Miles Goodman",
  description: "$3M PACE senior care facility in Morehead, KY. Active project. Site Superintendent: Miles Goodman.",
}

export default function MoreheadPage() {
  return (
    <>
      {/* Cover */}
      <div className="relative overflow-hidden" style={{ height: "60vh", minHeight: 400, marginTop: -80 }}>
        <Image
          src="/projects/morehead/drone-01.jpg"
          alt="One Senior Care Morehead — aerial"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.6) 100%)" }} />
        <div className="absolute top-24 left-6 md:left-12">
          <span
            className="text-[10px] uppercase tracking-[0.16em] px-3 py-1.5 rounded-full text-white font-medium"
            style={{ background: "var(--accent)" }}
          >
            Active Project
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10">
          <div className="mx-auto max-w-[1480px]">
            <Link href="/projects" className="text-xs text-white/60 hover:text-white/90 transition-colors px-2 py-2 -mx-2 -my-2 inline-block">← Projects</Link>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="px-6 md:px-12 py-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-3">Morehead, KY · Active — Jan 2026 to Aug 2026</p>
          <h1 className="serif font-light tracking-tight mb-2" style={{ fontSize: "clamp(36px,5vw,72px)", color: "var(--ink)" }}>
            One Senior Care — Morehead
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
                  ["Project", "One Senior Care — Morehead"],
                  ["Program", "PACE (Program of All-Inclusive Care for the Elderly)"],
                  ["Owner", "One Senior Care"],
                  ["General Contractor", "Walker Company of Kentucky"],
                  ["Concrete Sub (Self-Perform)", "W Principles, LLC"],
                  ["My Role", "Site Superintendent"],
                  ["Architect", "Jon Cheatham"],
                  ["PM", "Andrew Eberle"],
                  ["Location", "Morehead, KY"],
                  ["Contract Value", "$2,985,000"],
                  ["Building Size", "10,060 SF"],
                  ["Structure", "Pre-Engineered Metal Building (PEMB)"],
                  ["Timeline", "Jan 21, 2026 — Aug 27, 2026"],
                  ["Status", "Active construction"],
                ].map(([label, value]) => (
                  <div key={label as string} className="border-b pb-4" style={{ borderColor: "var(--border)" }}>
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] mb-1">{label}</dt>
                    <dd className="text-sm font-medium text-[var(--ink)]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="mb-12">
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--ink)" }}>
                One Senior Care — Morehead is a PACE (Program of All-Inclusive Care for the Elderly) facility serving Medicare and Medicaid participants in Rowan County. PACE centers provide integrated health, social, and long-term care services as an alternative to nursing home placement — this building is the physical hub for that model.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                The 10,060 SF facility uses a pre-engineered metal building (PEMB) structure. W Principles, LLC is self-performing the concrete scope under the Walker Company of Kentucky as general contractor. I'm managing daily field operations, trade coordination, and owner reporting on site.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                This project is also the live deployment environment for my AI-powered daily reporting app — ForemanOS processes site photos and voice notes into structured owner reports each morning.
              </p>
            </div>

            {/* ForemanOS callout */}
            <div
              className="rounded p-8 mb-16 border-l-4"
              style={{ background: "var(--paper-warm)", borderColor: "var(--accent)" }}
            >
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent)] mb-2">AI Field Tools</p>
              <h3 className="serif font-light text-xl mb-3" style={{ color: "var(--ink)" }}>
                ForemanOS deployed on this project
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Daily reports generated from iPhone photos + voice notes via the Claude API. 164 project documents indexed. Owner-ready PDF in the inbox before 7am — every day. Cuts daily admin time by ~80%.
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
                <CampTaylorGallery photos={dronePhotos} />
              </div>
            )}

            {/* Progress photos */}
            {progressPhotos.length > 0 && (
              <div className="mb-16">
                <h2 className="serif font-light text-3xl mb-6" style={{ color: "var(--ink)" }}>Construction Progress</h2>
                <CampTaylorGallery photos={progressPhotos} />
                <p className="text-xs text-[var(--muted)] mt-4">All photos by Miles Goodman · © 2026</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="border-t px-6 md:px-12 py-12" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1480px] flex justify-between items-center">
          <Link href="/projects/john-black-aquatic" className="text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors">← John W. Black</Link>
          <Link href="/projects" className="text-sm font-medium hover:text-[var(--accent)] transition-colors" style={{ color: "var(--ink)" }}>All Projects</Link>
        </div>
      </div>
    </>
  )
}
