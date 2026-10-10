import Image from "next/image"
import Link from "next/link"

export function PersonalHero() {
  return (
    <section className="personal-hero px-6 md:px-12" data-surface="dark" aria-labelledby="personal-heading">
      <div className="mx-auto grid w-full max-w-[1480px] items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="min-w-0">
          <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[var(--footer-fg)]">
            Site superintendent &middot; Kentucky
          </p>
          <h1 id="personal-heading" className="serif font-light leading-[1.04] tracking-tight text-[var(--paper)]" style={{ fontSize: "clamp(52px,6.3vw,88px)" }}>
            Miles<br />Goodman.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--footer-fg)] md:text-lg">
            I manage commercial construction with W Principles, LLC in Kentucky &mdash; aquatic facilities, senior care and concrete self-perform.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--footer-fg)]">
            MBA candidate at Northern Kentucky University. Explore my construction experience and the field tools I build.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="personal-action inline-flex min-h-11 items-center gap-4 rounded px-5 py-3 text-sm font-semibold transition-colors">
              Explore the work <span aria-hidden="true">&#8599;</span>
            </Link>
            <Link href="/resume" className="btn-on-photo inline-flex min-h-11 items-center rounded border px-5 py-3 text-sm font-medium transition-colors">
              View resume
            </Link>
            <Link href="/contact" className="inline-flex min-h-11 items-center rounded px-4 py-3 text-sm font-medium text-[var(--paper)] underline decoration-white/40 underline-offset-4 hover:decoration-white">
              Contact Miles
            </Link>
          </div>
        </div>

        <figure className="min-w-0 rounded border border-white/20 bg-white/[0.035] p-4 sm:p-5">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
            <Image
              src="/projects/morehead/aerial-2026-07-14-overhead.jpg"
              alt="Aerial view of the enclosed senior care building and its construction site"
              fill
              sizes="(min-width: 1576px) 634px, (min-width: 1024px) 43vw, (min-width: 768px) calc(100vw - 138px), calc(100vw - 82px)"
              className="object-cover object-center"
              preload
            />
          </div>
          <figcaption className="pt-5">
            <p className="mb-2 text-xs uppercase tracking-[0.14em] text-[var(--footer-fg)]">From the field &middot; July 2026</p>
            <Link href="/projects/one-senior-care-morehead" className="serif inline-flex min-h-11 items-center text-xl leading-snug text-[var(--paper)] underline decoration-white/30 underline-offset-4 hover:decoration-white sm:text-2xl">
              One Senior Care &mdash; Morehead
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-[var(--footer-fg)]">
              My work as site superintendent with W Principles, LLC. General contractor: Walker Company of Kentucky. W Principles self-performed the concrete.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[var(--footer-fg)]">Photo by Miles Goodman &middot; 2026</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
