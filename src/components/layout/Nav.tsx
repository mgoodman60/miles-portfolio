"use client"

import { useEffect, useId, useRef, useState } from "react"
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

  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  // Track previous open state so we only restore focus on a true close transition
  const wasOpenRef = useRef(false)

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

  // Body scroll lock + focus return when mobile menu toggles
  useEffect(() => {
    if (menuOpen) {
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"
      wasOpenRef.current = true
      return () => {
        document.body.style.overflow = previousOverflow
      }
    } else if (wasOpenRef.current) {
      // Menu just closed — return focus to hamburger
      wasOpenRef.current = false
      hamburgerRef.current?.focus()
    }
  }, [menuOpen])

  // Escape-to-close + focus trap inside the panel
  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        setMenuOpen(false)
        return
      }

      if (e.key !== "Tab") return

      const panel = menuRef.current
      if (!panel) return

      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (e.shiftKey) {
        if (active === first || !panel.contains(active)) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (active === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [menuOpen])

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
          aria-current={pathname === "/" ? "page" : undefined}
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
                aria-current={active ? "page" : undefined}
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
            aria-current={pathname.startsWith("/resume") ? "page" : undefined}
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
          ref={hamburgerRef}
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
        <div
          ref={menuRef}
          id={menuId}
          className="md:hidden nav-solid border-t border-[var(--border)]"
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map(({ href, label }) => {
              const active = pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className="py-4 text-base font-medium text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              )
            })}
            <Link
              href="/resume"
              aria-current={pathname.startsWith("/resume") ? "page" : undefined}
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
