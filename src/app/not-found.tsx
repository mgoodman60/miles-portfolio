import Link from "next/link"

export const metadata = {
  title: "Not found — Miles Goodman",
}

export default function NotFound() {
  return (
    <section
      className="pt-40 pb-24 px-6 md:px-12 min-h-[60svh] flex items-center"
      style={{ background: "var(--paper-warm)" }}
    >
      <div className="mx-auto max-w-[1480px]">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)] mb-6">404</p>
        <h1
          className="serif font-light tracking-tight mb-6"
          style={{ fontSize: "clamp(40px,5.5vw,80px)", color: "var(--ink)" }}
        >
          That page isn&rsquo;t here.
        </h1>
        <p className="text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "var(--muted)" }}>
          You followed a link that doesn&rsquo;t exist or moved. The work is still here — try one of these.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="px-6 py-3 text-sm font-medium rounded transition-colors"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 text-sm font-medium rounded border transition-colors hover:bg-black/5"
            style={{ borderColor: "var(--border)", color: "var(--ink)" }}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 text-sm font-medium rounded border transition-colors hover:bg-black/5"
            style={{ borderColor: "var(--border)", color: "var(--ink)" }}
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
