"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/my-reports", label: "My Reports" },
  { href: "/ai-tools", label: "AI Tools" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuId = useId()
  const isHome = pathname === "/"

  // Initialize from current scroll position + listen for changes
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const overHero = isHome && !scrolled

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        overHero ? "nav-over-hero" : "nav-solid"
      )}
    >
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "serif text-[22px] font-normal tracking-tight transition-colors",
            overHero ? "text-white" : "text-[var(--ink)]"
          )}
        >
          Miles Goodman
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors relative pb-0.5",
                  overHero
                    ? "text-white/90 hover:text-white"
                    : "text-[var(--muted)] hover:text-[var(--ink)]",
                  active && !overHero && "text-[var(--ink)]"
                )}
              >
                {label}
                {active && (
                  <span className={cn("absolute bottom-0 left-0 right-0 h-[2px] rounded-full", overHero ? "bg-white" : "bg-[var(--accent)]")} />
                )}
              </Link>
            )
          })}
          <Link
            href="/resume"
            className={cn(
              "ml-2 px-4 py-2 text-sm font-medium rounded transition-colors",
              overHero
                ? "bg-white text-[var(--ink)] hover:bg-white/90"
                : "bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent)]"
            )}
          >
            Resume
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls={menuId}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={cn(
                "block h-0.5 w-6 transition-all",
                overHero ? "bg-white" : "bg-[var(--ink)]"
              )}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id={menuId} className="md:hidden nav-solid border-t border-[var(--border)]">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="py-4 text-base font-medium text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/resume"
              className="mt-2 px-4 py-2.5 text-sm font-medium rounded text-center transition-colors bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent)]"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
