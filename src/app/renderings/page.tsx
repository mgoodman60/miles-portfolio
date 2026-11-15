import { RenderingsGallery } from "@/components/sections/RenderingsGallery"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { renderingProjects } from "@/lib/renderings"
import { withCanonical } from "@/lib/site"

export const metadata = withCanonical("/renderings", {
  title: "Architectural Renderings | Miles Goodman",
  description: "Architectural visualization by Miles Goodman: exterior renderings of a warehouse concept and interior renderings of a PACE senior care center.",
})

export default function RenderingsPage() {
  return (
    <>
      <section className="px-6 pb-14 pt-40 md:px-12" style={{ background: "var(--band)" }}>
        <div className="mx-auto max-w-[1480px]">
          <SectionEyebrow className="mb-4">ArchViz</SectionEyebrow>
          <h1 className="serif text-[clamp(40px,5.5vw,80px)] font-light leading-[.95] tracking-tight text-[var(--ink)]">Architectural Renderings</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)]">Still renderings that show a building before it is built. Select any image to view it larger.</p>
        </div>
      </section>
      {renderingProjects.map((p, i) => (
        <section key={p.id} aria-labelledby={`${p.id}-heading`} className={`px-6 py-16 md:px-12 ${i ? "border-t" : ""}`} style={{ borderColor: "var(--border)" }}>
          <div className="mx-auto max-w-[1480px]">
            <h2 id={`${p.id}-heading`} className="serif mb-2 text-3xl font-light text-[var(--ink)]">{p.title}</h2>
            <p className="mb-8 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{p.summary} {p.items.length} images.</p>
            <RenderingsGallery title={p.title} items={p.items} eagerFirst={i === 0} />
          </div>
        </section>
      ))}
    </>
  )
}
