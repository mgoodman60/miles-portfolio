"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { footerGroups, linkIsCurrent } from "@/lib/site-nav"
import { profile } from "@/lib/profile"

export function Footer() {
  const pathname = usePathname()

  return (
    <footer data-surface="dark" style={{ background: "var(--footer-bg)", color: "var(--footer-fg)" }}>
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-8 lg:gap-12">
        <div>
          <p className="serif text-xl font-light text-white mb-3">Miles Goodman</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--footer-fg)" }}>
            Site Superintendent at W Principles, LLC.<br />
            Construction, field reporting and document workflows.<br />
            MBA candidate at Northern Kentucky University.
          </p>
        </div>

        {footerGroups.map((group) => (
        <div key={group.label}>
          <p className="text-xs uppercase tracking-[0.18em] mb-4" style={{ color: "var(--footer-fg-soft)" }}>{group.label}</p>
          <nav aria-label={`Footer: ${group.label}`} className="flex flex-col gap-0">
            {group.links.map((link) => {
              const current = linkIsCurrent(pathname, link)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={current ? "page" : undefined}
                  className="inline-flex min-h-11 items-center text-sm py-2 transition-colors hover:text-white hover:underline underline-offset-4"
                  style={{ color: current ? "#fff" : "var(--footer-fg)" }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
        ))}

        <div>
          <p className="text-xs uppercase tracking-[0.18em] mb-4" style={{ color: "var(--footer-fg-soft)" }}>
            Contact
          </p>
          <div className="text-sm flex flex-col gap-0" style={{ color: "var(--footer-fg)" }}>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 items-center py-2 hover:text-white hover:underline underline-offset-4 transition-colors break-all"
            >
              {profile.email}
            </a>
            <a href={profile.phoneHref} className="inline-flex min-h-11 items-center py-2 hover:text-white hover:underline underline-offset-4">{profile.phoneDisplay}</a>
            <span className="py-2">{profile.location}</span>
          </div>
        </div>
      </div>

      <div
        className="border-t mx-auto max-w-[1480px] px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs"
        style={{ borderColor: "rgba(207,205,199,0.12)", color: "var(--footer-fg-faint)" }}
      >
        <span>&copy; {new Date().getFullYear()} Miles Goodman. All rights reserved.</span>
        <span>Mount Sterling, KY</span>
      </div>
    </footer>
  )
}
