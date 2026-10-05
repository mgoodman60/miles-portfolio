import Link from "next/link"

const linkClass =
  "inline-flex items-center min-h-11 text-sm font-medium text-[var(--ink)] hover:text-[var(--accent)] transition-colors"

export function ProjectBackLink() {
  return (
    <Link href="/projects" className={`${linkClass} -ml-1 mb-4 px-1`}>
      ← Projects
    </Link>
  )
}

type ProjectLink = { href: string; label: string }

export function ProjectPager({
  previous,
  next,
}: {
  previous?: ProjectLink
  next?: ProjectLink
}) {
  return (
    <nav
      aria-label="More projects"
      className="border-t px-6 md:px-12 py-8"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-[1480px] grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-6 sm:items-center">
        <div>
          {previous ? (
            <Link href={previous.href} className={linkClass}>
              ← {previous.label}
            </Link>
          ) : null}
        </div>
        <div className="sm:justify-self-center">
          <Link href="/projects" className={linkClass}>
            All Projects
          </Link>
        </div>
        <div className="sm:justify-self-end">
          {next ? (
            <Link href={next.href} className={`${linkClass} sm:text-right`}>
              {next.label} →
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  )
}
