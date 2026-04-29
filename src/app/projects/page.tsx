import Image from "next/image"
import Link from "next/link"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"

const projects = [
  {
    slug: "camp-taylor-pool",
    name: "Camp Taylor Memorial Park Pool",
    location: "Louisville, KY",
    year: "2025",
    cost: "$6.2M",
    scope: "New aquatic facility — zero-depth ramp, lap lanes, waterslide, shaded areas, site improvements",
    cover: "/projects/camp-taylor/night-pour-hero.jpg",
    tag: "ARPA-Funded · Complete",
    role: "Site Superintendent",
  },
  {
    slug: "john-black-aquatic",
    name: "John W. Black Aquatic Center",
    location: "La Grange, KY",
    year: "2024",
    cost: "$3.7M",
    scope: "Complete renovation — structural repairs, pool shell replacement, full mechanical & electrical systems",
    cover: "/projects/john-black/drone-01.jpg",
    tag: "Renovation · Complete",
    role: "Site Superintendent",
  },
  {
    slug: "one-senior-care-morehead",
    name: "One Senior Care — Morehead",
    location: "Morehead, KY",
    year: "2026 (Active)",
    cost: "$3M",
    scope: "10,060 SF PACE senior care facility — Pre-engineered metal building + concrete self-perform",
    cover: "/projects/morehead/drone-01.jpg",
    tag: "Active",
    role: "Site Superintendent",
  },
]

const contributedProjects = [
  {
    name: "Glasgow American Legion Swimming Pool",
    location: "Glasgow, KY",
    scope: "Aquatic facility — punch list & close-out",
    value: "~$10M",
  },
  {
    name: "Cravens Pool",
    location: "Owensboro, KY",
    scope: "Community pool renovation — punch list & close-out",
    value: "~$2M",
  },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-40 pb-16 px-6 md:px-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <SectionEyebrow className="mb-4">
            Site Superintendent · Kentucky · 2022–Present
          </SectionEyebrow>
          <h1 className="serif font-light tracking-tight" style={{ fontSize: "clamp(40px,5.5vw,80px)", color: "var(--ink)" }}>
            Projects
          </h1>
        </div>
      </div>

      {/* Main grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group block rounded overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={p.cover}
                    alt={p.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-end justify-end p-4">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white font-medium tracking-wide">
                      View project →
                    </span>
                  </div>
                  <span
                    className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full font-medium text-white"
                    style={{ background: "var(--accent)" }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.18em] mb-2" style={{ color: "var(--muted)" }}>
                    {p.location} · {p.year} · {p.cost} · {p.role}
                  </p>
                  <h2 className="serif font-light text-xl leading-snug mb-2" style={{ color: "var(--ink)" }}>
                    {p.name}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.scope}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Also contributed */}
      <section className="border-t py-24 px-6 md:px-12" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1480px]">
          <h2 className="serif font-light text-2xl mb-8" style={{ color: "var(--ink)" }}>
            Also Contributed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributedProjects.map((p) => (
              <div
                key={p.name}
                className="rounded p-6 border"
                style={{ borderColor: "var(--border)", background: "var(--paper-warm)" }}
              >
                <p className="text-[10px] uppercase tracking-[0.18em] mb-2" style={{ color: "var(--muted)" }}>
                  {p.location} · {p.value} · Punch list &amp; close-out
                </p>
                <h3 className="serif font-light text-lg" style={{ color: "var(--ink)" }}>{p.name}</h3>
                <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>{p.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
