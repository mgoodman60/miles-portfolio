import Link from "next/link"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ResponsivePicture } from "@/components/ui/ResponsivePicture"
import { withCanonical } from "@/lib/site"
import { OSC_TITLE } from "@/lib/projects-copy"

export const metadata = withCanonical("/projects", {
  title: "Projects — Miles Goodman",
  description: "Commercial projects I worked on as a site superintendent in Kentucky.",
})

type ProjectCard = {
  slug: string
  name: string
  location: string
  year: string
  cost?: string
  scope: string
  cover: string
  coverAlt: string
  tag: string
  role: string
}

const projects: ProjectCard[] = [
  {
    slug: "camp-taylor-pool",
    name: "Camp Taylor Memorial Park Pool",
    location: "Louisville, KY",
    year: "2026",
    cost: "$6.2M",
    scope: "New waterpark, zero-depth entry, lap lanes, slide, and play area",
    cover: "/projects/camp-taylor/drone-wide.jpg",
    coverAlt: "Aerial of the finished Camp Taylor Memorial Park waterpark in Louisville",
    tag: "Opened 2026",
    role: "Site Superintendent",
  },
  {
    slug: "john-black-aquatic",
    name: "John W. Black Aquatic Center",
    location: "La Grange, KY",
    year: "2024",
    scope: "Renovation, lap pool, recreation pool, slide, and mechanical systems",
    cover: "/projects/john-black/drone-01.jpg",
    coverAlt: "Aerial of the finished John W. Black Aquatic Center in La Grange",
    tag: "Reopened 2024",
    role: "Site Superintendent",
  },
  {
    slug: "one-senior-care",
    name: OSC_TITLE,
    location: "Kentucky",
    year: "2026",
    scope: "New PACE senior care facility, pre-engineered metal building",
    cover: "/projects/one-senior-care/facility-interior.jpg",
    coverAlt: "Painted room with exposed steel and ductwork inside the senior care building",
    tag: "Complete",
    role: "Site Superintendent",
  },
]

const contributedProjects = [
  {
    // Employer lists American Legion Park, Glasgow, at $9M (October 2025), including the pool.
    // The Joyce Driver Aquatic Center name is from the Glasgow council resolution. Role stays punch list.
    name: "American Legion Park",
    location: "Glasgow, KY",
    scope: "Park and pool redevelopment, punch list and close-out",
    value: "$9M",
  },
  {
    // Owensboro awarded the Cravens Pool renovation to my employer for $1,985,000.
    name: "Cravens Pool",
    location: "Owensboro, KY",
    scope: "Community pool renovation, punch list and close-out",
    value: "~$2M",
  },
]

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-40 pb-16 px-6 md:px-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <SectionEyebrow className="mb-4">
            Site Superintendent · Kentucky · Aug 2023–Present
          </SectionEyebrow>
          <h1 className="serif font-light tracking-tight" style={{ fontSize: "clamp(40px,5.5vw,80px)", color: "var(--ink)" }}>
            Projects
          </h1>
        </div>
      </div>

      <section className="py-24 px-6 md:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((p, index) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="card-link group block overflow-hidden rounded bg-[var(--card)] shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <ResponsivePicture
                    src={p.cover}
                    alt={p.coverAlt}
                    width={1600}
                    height={1200}
                    priority={index === 0}
                    responsive
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, (max-width:1480px) 33vw, 472px"
                  />
                  <span
                    className="absolute top-4 left-4 text-xs uppercase tracking-[0.14em] px-2.5 py-1 rounded-full font-medium text-white"
                    style={{ background: "var(--orange)", color: "var(--on-orange)" }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--muted)" }}>
                    {[p.location, p.year, p.cost, p.role].filter(Boolean).join(" · ")}
                  </p>
                  <h2 className="serif font-light text-xl leading-snug mb-2" style={{ color: "var(--ink)" }}>
                    {p.name}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.scope}</p>
                  <p className="mt-4 text-sm font-medium" style={{ color: "var(--accent)" }}>
                    View project
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
                <p className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--muted)" }}>
                  {p.location} · {p.value}
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
