"use client"

import { useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { personalLinks, linkIsCurrent } from "@/lib/site-nav"

function visibleFocusables(root: HTMLElement) {
  return [...root.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter((el) => el.getClientRects().length > 0)
}

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const homeLinkRef = useRef<HTMLAnchorElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const wasOpenRef = useRef(false)
  const closeReasonRef = useRef<"dismiss" | "navigation" | "breakpoint" | "same-page" | "anchor">("dismiss")
  const anchorRef = useRef<string | null>(null)

  const closeMobileMenu = (destination?: string) => {
    anchorRef.current = null
    if (destination) {
      const [route, hash] = destination.split("#")
      closeReasonRef.current = route === pathname ? (hash ? "anchor" : "same-page") : "navigation"
      if (closeReasonRef.current === "anchor") anchorRef.current = hash
    } else closeReasonRef.current = "dismiss"
    setMenuOpen(false)
  }

  useEffect(() => {
    let ticking = false
    const update = () => {
      setScrolled(window.scrollY > 60)
      ticking = false
    }
    const handleScroll = () => {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update) }
    }
    update()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [pathname])

  useEffect(() => {
    closeReasonRef.current = "navigation"
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)")
    const closeAtDesktop = () => {
      if (desktop.matches) { closeReasonRef.current = "breakpoint"; setMenuOpen(false) }
    }
    desktop.addEventListener("change", closeAtDesktop)
    closeAtDesktop()
    return () => desktop.removeEventListener("change", closeAtDesktop)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      wasOpenRef.current = true
      if (menuRef.current) visibleFocusables(menuRef.current)[0]?.focus()
      return
    }
    if (!wasOpenRef.current) return
    wasOpenRef.current = false
    if (closeReasonRef.current === "breakpoint") {
      const home = homeLinkRef.current
      const target = home && home.getClientRects().length > 0 && !home.closest("[inert]") ? home : document.getElementById("main-content")
      target?.focus({ preventScroll: true })
    } else if (closeReasonRef.current === "anchor" && anchorRef.current) {
      document.getElementById(anchorRef.current)?.focus({ preventScroll: true })
    } else if (closeReasonRef.current === "same-page") {
      document.getElementById("main-content")?.focus({ preventScroll: true })
    } else if (closeReasonRef.current === "dismiss" && hamburgerRef.current?.getClientRects().length) {
      hamburgerRef.current.focus({ preventScroll: true })
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); closeMobileMenu(); return }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [menuOpen])

  const overHero = pathname === "/" && !scrolled

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", overHero ? "nav-over-hero" : "nav-solid")}>
      <div className="nav-bar mx-auto flex h-20 max-w-[1480px] items-center justify-between gap-6 px-6 md:px-12">
        <Link ref={homeLinkRef} href="/" onClick={() => { if (menuOpen) closeMobileMenu("/") }} aria-current={pathname === "/" ? "page" : undefined} className={cn("serif flex flex-col whitespace-nowrap text-[20px] leading-tight tracking-tight", overHero ? "text-white" : "text-[var(--ink)]", "hover:underline hover:underline-offset-4")}>
          <span>Miles</span><span>Goodman</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-4 md:flex lg:gap-7">
          {personalLinks.map((link) => {
            const current = linkIsCurrent(pathname, link)
            return <Link key={link.href} href={link.href} aria-current={current ? "page" : undefined} className={cn("inline-flex min-h-11 items-center px-2 py-2 text-sm font-medium transition-colors hover:underline hover:underline-offset-4", overHero ? "text-white" : "text-[var(--ink)]", current && "underline underline-offset-4")}>{link.label}</Link>
          })}
        </nav>
        <button ref={hamburgerRef} type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center p-3 md:hidden" onClick={() => { if (menuOpen) closeMobileMenu(); else { closeReasonRef.current = "dismiss"; setMenuOpen(true) } }} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls={menuId}>
          <span aria-hidden="true" className={cn("relative inline-block h-4 w-6", overHero ? "text-white" : "text-[var(--ink)]")}>
            <span className={cn("absolute left-0 right-0 h-0.5 bg-current transition-all duration-200", menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0")} />
            <span className={cn("absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-current transition-opacity duration-200", menuOpen ? "opacity-0" : "opacity-100")} />
            <span className={cn("absolute left-0 right-0 h-0.5 bg-current transition-all duration-200", menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0")} />
          </span>
        </button>
      </div>
      <div ref={menuRef} id={menuId} hidden={!menuOpen} className="nav-solid max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-[var(--border)] md:hidden">
        <nav aria-label="Primary" className="flex flex-col px-6 py-4">
          {personalLinks.map((link) => {
            const current = linkIsCurrent(pathname, link)
            return <Link key={link.href} href={link.href} aria-current={current ? "page" : undefined} onClick={() => closeMobileMenu(link.href)} className={cn("inline-flex min-h-11 items-center py-4 text-base font-medium text-[var(--ink)] hover:underline hover:underline-offset-4", current && "underline underline-offset-4")}>{link.label}</Link>
          })}
          <button type="button" onClick={() => closeMobileMenu()} className="mt-2 min-h-11 self-start rounded border border-[var(--border)] px-4 py-2 text-sm text-[var(--ink)]">Close navigation</button>
        </nav>
      </div>
    </header>
  )
}
