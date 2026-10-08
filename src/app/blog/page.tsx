import Link from "next/link"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { withCanonical } from "@/lib/site"

/**
 * Public Substack URL. Leave null until Miles creates the publication.
 * Do not guess a URL or embed a feed here.
 */
const SUBSTACK_URL: string | null = null

export const metadata = withCanonical("/blog", {
  title: "Blog — Miles Goodman",
  description: "Writing from Miles Goodman. Posts will be published on Substack.",
})

export default function BlogPage() {
  return (
    <>
      <div className="pt-40 pb-16 px-6 md:px-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <SectionEyebrow className="mb-4">Writing</SectionEyebrow>
          <h1
            className="serif font-light leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(40px,5.5vw,80px)", color: "var(--ink)" }}
          >
            Blog
          </h1>
        </div>
      </div>

      <section className="border-t py-24 px-6 md:px-12" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1480px]">
          <div className="max-w-2xl rounded border p-8 md:p-10" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <h2 className="serif font-light text-2xl mb-4" style={{ color: "var(--ink)" }}>
              On Substack
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              No posts yet. Writing will be published on Substack, and the link will go here once that publication exists.
            </p>
            {SUBSTACK_URL ? (
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid mb-8 inline-flex min-h-11 items-center rounded px-6 py-3 text-sm font-medium"
              >
                Read on Substack
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
            <p className="text-sm font-medium mb-3" style={{ color: "var(--ink)" }}>
              Until then
            </p>
            <ul className="mb-8 list-disc space-y-2 pl-5 text-sm marker:text-[var(--accent)]" style={{ color: "var(--muted)" }}>
              <li>
                <Link href="/ai-tools" className="underline underline-offset-4" style={{ color: "var(--accent)" }}>
                  AI tools used in the field
                </Link>
              </li>
              <li>
                <Link href="/my-reports" className="underline underline-offset-4" style={{ color: "var(--accent)" }}>
                  My Reports
                </Link>
              </li>
              <li>
                <Link href="/projects" className="underline underline-offset-4" style={{ color: "var(--accent)" }}>
                  Construction projects
                </Link>
              </li>
            </ul>
            <Link
              href="/contact"
              className="btn-solid inline-flex min-h-11 items-center rounded px-6 py-3 text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
