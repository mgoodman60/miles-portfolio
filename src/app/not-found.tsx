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
          <Link href="/" className="btn-solid inline-flex min-h-11 items-center px-6 py-3 text-sm font-medium rounded transition-colors">
            Home
          </Link>
          <Link href="/projects" className="btn-line inline-flex min-h-11 items-center px-6 py-3 text-sm font-medium rounded border transition-colors">
            Projects
          </Link>
          <Link href="/about" className="btn-line inline-flex min-h-11 items-center px-6 py-3 text-sm font-medium rounded border transition-colors">
            About
          </Link>
          <Link href="/ai-tools" className="btn-line inline-flex min-h-11 items-center px-6 py-3 text-sm font-medium rounded border transition-colors">
            AI
          </Link>
          <Link href="/contact" className="btn-line inline-flex min-h-11 items-center px-6 py-3 text-sm font-medium rounded border transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
