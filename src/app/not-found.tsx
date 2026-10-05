import Link from "next/link"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"

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
        <SectionEyebrow className="mb-6">404</SectionEyebrow>
        <h1
          className="serif font-light leading-[0.95] tracking-tight mb-6"
          style={{ fontSize: "clamp(40px,5.5vw,80px)", color: "var(--ink)" }}
        >
          That page isn&rsquo;t here.
        </h1>
        <p className="text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "var(--muted)" }}>
          That link doesn&rsquo;t match a page on this site. The work is still here.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded px-6 py-3 text-sm font-medium"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center rounded border px-6 py-3 text-sm font-medium hover:bg-black/5"
            style={{ borderColor: "var(--border)", color: "var(--ink)" }}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="inline-flex min-h-11 items-center rounded border px-6 py-3 text-sm font-medium hover:bg-black/5"
            style={{ borderColor: "var(--border)", color: "var(--ink)" }}
          >
            About
          </Link>
          <Link
            href="/ai-tools"
            className="inline-flex min-h-11 items-center rounded border px-6 py-3 text-sm font-medium hover:bg-black/5"
            style={{ borderColor: "var(--border)", color: "var(--ink)" }}
          >
            AI
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded border px-6 py-3 text-sm font-medium hover:bg-black/5"
            style={{ borderColor: "var(--border)", color: "var(--ink)" }}
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
