import Image from "next/image"
import Link from "next/link"
import { CampTaylorGallery } from "@/components/sections/CampTaylorGallery"
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider"

const photos = Array.from({ length: 14 }, (_, i) => ({
  src: `/projects/john-black/drone-${String(i + 1).padStart(2, "0")}.jpg`,
  width: 1200,
  height: 800,
  alt: `John W. Black Aquatic Center — aerial view ${i + 1}`,
}))

export const metadata = {
  title: "John W. Black Aquatic Center — Miles Goodman",
  description: "$3.7M aquatic center renovation in La Grange, KY. Site Superintendent: Miles Goodman, W Principles, LLC.",
}

export default function JohnBlackPage() {
  return (
    <>
      {/* Cover */}
      <div className="relative overflow-hidden" style={{ height: "60vh", minHeight: 400, marginTop: -80 }}>
        <Image
          src="/projects/john-black/drone-01.jpg"
          alt="John W. Black Aquatic Center — aerial"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.55) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10">
          <div className="mx-auto max-w-[1480px]">
            <Link href="/projects" className="text-xs text-white/60 hover:text-white/90 transition-colors px-2 py-2 -mx-2 -my-2 inline-block">← Projects</Link>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="px-6 md:px-12 py-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-3">La Grange, KY · 2024</p>
          <h1 className="serif font-light tracking-tight mb-2" style={{ fontSize: "clamp(36px,5vw,72px)", color: "var(--ink)" }}>
            John W. Black Aquatic Center
          </h1>
          <p className="text-lg text-[var(--muted)] italic">$3.7M complete aquatic renovation</p>
        </div>
      </div>

      {/* Two-column body */}
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-16">

          <aside className="lg:w-80 shrink-0 order-last lg:order-first">
            <div className="lg:sticky lg:top-28">
              <dl className="space-y-5">
                {[
                  ["Project", "John W. Black Aquatic Center"],
                  ["Owner", "Oldham County"],
                  ["General Contractor", "W Principles, LLC"],
                  ["My Role", "Site Superintendent"],
                  ["Location", "La Grange, KY"],
                  ["Cost", "$3.7M"],
                  ["Completed", "2024"],
                  ["Scope", "Complete renovation — structural repairs, pool shell replacement, mechanical & electrical systems, site improvements"],
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
                The John W. Black Aquatic Center in La Grange required a complete ground-up renovation. The existing facility had reached end of life — structural issues in the pool shell, failed mechanical systems, and aging site infrastructure all addressed in a single project scope.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                As Site Superintendent, I managed field operations across the full scope: structural demo and rebuild, new pool shell, mechanical and electrical replacement, and final site improvements — delivering the facility on schedule for the 2024 swim season.
              </p>
            </div>

            {/* What it took */}
            <div className="mb-16">
              <h2 className="serif font-light text-3xl mb-10" style={{ color: "var(--ink)" }}>
                What it took
              </h2>
              <div className="space-y-10">
                {[
                  {
                    num: "01",
                    challenge: "Memorial Day deadline",
                    headline: "The pool had to open Memorial Day weekend. No flexibility.",
                    body: "Oldham County's swim season is fixed. A missed opening means a missed year. Every trade sequence — structural demo, pool shell, MEP rough-in, deck, finishes — was built backward from the opening date. Float existed on paper only.",
                    resolution: "Six-week lookahead updated daily. Trade foremen confirmed milestone dates each Friday. Delivered on schedule.",
                  },
                  {
                    num: "02",
                    challenge: "MEP in an existing concrete deck",
                    headline: "Mechanical and electrical runs buried in concrete that was already poured.",
                    body: "The existing facility had failed mechanical systems embedded in the pool deck — drains, conduit, recirculation lines. Removing and rerouting without compromising the new shell required careful coordination between demo, concrete, and mechanical trades. One wrong sequence and the pour window was gone.",
                    resolution: "Full MEP coordination drawings reviewed before demo began. Marked invert elevations on site before any concrete was placed.",
                  },
                ].map(({ num, challenge, headline, body, resolution }) => (
                  <div key={num} className="border-l-2 pl-6" style={{ borderColor: "var(--accent)" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="serif text-5xl font-light text-[var(--accent)] leading-none">{num}</span>
                      <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                        Challenge — {challenge}
                      </span>
                    </div>
                    <h3 className="serif font-light text-xl mb-3" style={{ color: "var(--ink)" }}>{headline}</h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>{body}</p>
                    <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                      <span style={{ color: "var(--accent)" }}>Resolution — </span>{resolution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Before / After */}
            <div className="mb-16">
              <h2 className="serif font-light text-3xl mb-6" style={{ color: "var(--ink)" }}>Aerial Documentation</h2>
              <BeforeAfterSlider
                beforeSrc="/projects/john-black/drone-01.jpg"
                beforeAlt="Aerial — mid-renovation"
                afterSrc="/projects/john-black/drone-14.jpg"
                afterAlt="Aerial — completed"
              />
            </div>

            <div className="mb-16">
              <h2 className="serif font-light text-3xl mb-6" style={{ color: "var(--ink)" }}>Drone Photography</h2>
              <CampTaylorGallery photos={photos} />
              <p className="text-xs text-[var(--muted)] mt-4">Drone photography by Miles Goodman · © 2024</p>
            </div>

            {/* Outcome */}
            <div className="rounded p-8 md:p-12" style={{ background: "var(--paper-warm)" }}>
              <h2 className="serif font-light text-2xl mb-4" style={{ color: "var(--ink)" }}>Outcome</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>
                The facility reopened on schedule for the 2024 swim season. For Oldham County, that meant a fully rebuilt aquatic center — new pool shell, new mechanical, new site — delivered without a season lost.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="border-t px-6 md:px-12 py-12" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1480px] flex justify-between items-center">
          <Link href="/projects/camp-taylor-pool" className="text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors">← Camp Taylor Pool</Link>
          <Link href="/projects/one-senior-care-morehead" className="text-sm font-medium hover:text-[var(--accent)] transition-colors" style={{ color: "var(--ink)" }}>
            Next: One Senior Care →
          </Link>
        </div>
      </div>
    </>
  )
}
