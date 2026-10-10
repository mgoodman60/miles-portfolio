"use client"

import Link from "next/link"
import { constructionLinks, linkIsCurrent } from "@/lib/site-nav"

export function ProjectMenu({ pathname, mobile = false, label = "Construction", onNavigate }: {
  pathname: string; mobile?: boolean; label?: string; onNavigate?: (href: string) => void
}) {
  return (
    <details className="project-menu relative" onKeyDown={(event) => {
      if (event.key === "Escape") {
        event.currentTarget.open = false
        event.currentTarget.querySelector("summary")?.focus()
      }
    }} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) event.currentTarget.open = false
    }}>
      <summary className={`inline-flex min-h-11 items-center gap-2 text-sm font-medium ${mobile ? "w-full py-4 text-base" : "px-2 py-2"}`}>
        {label}<span aria-hidden="true" className="text-xs">⌄</span>
      </summary>
      <div className={`project-menu-panel nav-panel rounded border border-[var(--border)] p-2 ${mobile ? "mb-3" : "absolute right-0 top-full z-50 w-80"}`}>
        {constructionLinks.map((link) => (
          <Link key={link.href} href={link.href} aria-current={linkIsCurrent(pathname, link) ? "page" : undefined}
            className="flex min-h-11 flex-col justify-center rounded px-3 py-3 text-sm hover:bg-[var(--paper-warm)] focus-visible:bg-[var(--paper-warm)]"
            onClick={(event) => { event.currentTarget.closest("details")?.removeAttribute("open"); onNavigate?.(link.href) }}>
            <span>{link.label}</span>{link.meta && <span className="mt-1 text-xs text-[var(--muted)]">{link.meta}</span>}
          </Link>
        ))}
      </div>
    </details>
  )
}
