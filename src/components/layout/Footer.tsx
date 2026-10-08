"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { footerLinks, linkIsCurrent } from "@/lib/site-nav"

export function Footer() {
  const pathname = usePathname()

  return (
    <footer data-surface="dark" className="border-t" style={{ background: "var(--footer-bg)", color: "var(--footer-fg)", borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div>
          <p className="serif text-xl font-light text-white mb-3">Miles Goodman</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--footer-fg)" }}>
            Site Superintendent · W Principles, LLC<br />
            MBA Candidate — Project Management &amp; AI<br />
            Northern Kentucky University
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] mb-4" style={{ color: "var(--footer-fg-soft)" }}>
            Pages
          </p>
          <nav aria-label="Footer" className="flex flex-col gap-0">
            {footerLinks.map((link) => {
              const current = linkIsCurrent(pathname, link)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={current ? "page" : undefined}
                  className="text-sm font-medium py-2 transition-colors hover:underline underline-offset-4"
                  style={{ color: current ? "var(--text)" : "var(--accent)" }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] mb-4" style={{ color: "var(--footer-fg-soft)" }}>
            Contact
          </p>
          <div className="text-sm flex flex-col gap-0" style={{ color: "var(--footer-fg)" }}>
            <a
              href="mailto:msgoodman1997@gmail.com"
              className="py-2 font-medium underline underline-offset-4 transition-colors break-all"
              style={{ color: "var(--accent)" }}
            >
              msgoodman1997@gmail.com
            </a>
            <span className="py-2">Mount Sterling, KY</span>
          </div>
        </div>
      </div>

      <div
        className="border-t mx-auto max-w-[1480px] px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs"
        style={{ borderColor: "var(--border)", color: "var(--footer-fg-faint)" }}
      >
        <span>© {new Date().getFullYear()} Miles Goodman. All rights reserved.</span>
        <span>Site Superintendent · W Principles, LLC · Mount Sterling, KY</span>
      </div>
    </footer>
  )
}
