import Link from "next/link"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { withCanonical } from "@/lib/site"

export const metadata = withCanonical("/blog", {
  title: "Blog — Miles Goodman",
  description: "Writing from Miles Goodman. No posts yet.",
})

export default function BlogPage() {
  return (
    <>
      <div className="pt-40 pb-16 px-6 md:px-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <SectionEyebrow className="mb-4">Writing</SectionEyebrow>
          <h1
            className="serif font-light tracking-tight"
            style={{ fontSize: "clamp(40px,5.5vw,80px)", color: "var(--ink)" }}
          >
            Blog
          </h1>
        </div>
      </div>

      <section className="border-t py-24 px-6 md:px-12" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1480px]">
          <h2 className="serif font-light text-2xl mb-4" style={{ color: "var(--ink)" }}>
            Coming soon
          </h2>
          <p className="text-base leading-relaxed max-w-xl mb-8" style={{ color: "var(--muted)" }}>
            No posts yet. This page will hold writing when there is something to publish.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 text-sm font-medium rounded transition-colors"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            Contact
          </Link>
        </div>
      </section>
    </>
  )
}
