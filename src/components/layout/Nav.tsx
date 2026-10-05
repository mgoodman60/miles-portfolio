"use client"

import { useEffect, useId, useRef, useState, type KeyboardEvent, type FocusEvent, type RefObject } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { aboutLinks, constructionLinks, linkIsCurrent, type NavLink } from "@/lib/site-nav"

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={cn("h-3 w-3 shrink-0 transition-transform duration-200", open && "rotate-180")}
    >
      <path
        d="M2.25 4.25 6 8l3.75-3.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function visibleFocusables(root: HTMLElement) {
  return [...root.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(
    (el) => el.getClientRects().length > 0
  )
}

function useDismiss(
  open: boolean,
  rootRef: RefObject<HTMLElement | null>,
  buttonRef: RefObject<HTMLButtonElement | null>,
  onClose: () => void
) {
  useEffect(() => {
    if (!open) return

    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) onClose()
    }
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape") return
      event.preventDefault()
      onClose()
      buttonRef.current?.focus()
    }

    document.addEventListener("pointerdown", onPointer)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onPointer)
      document.removeEventListener("keydown", onKey)
    }
  }, [open, rootRef, buttonRef, onClose])
}

function DesktopMenu({
  label,
  links,
  pathname,
  overHero,
  sectionActive,
  open,
  onOpenChange,
  align = "left",
}: {
  label: string
  links: readonly NavLink[]
  pathname: string
  overHero: boolean
  sectionActive: boolean
  open: boolean
  onOpenChange: (open: boolean) => void
  align?: "left" | "right"
}) {
  const panelId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const pendingFocus = useRef<"first" | "last" | null>(null)
  const close = () => onOpenChange(false)

  useDismiss(open, rootRef, buttonRef, close)

  useEffect(() => {
    if (!open || !pendingFocus.current || !panelRef.current) return
    const items = visibleFocusables(panelRef.current)
    const target = pendingFocus.current === "last" ? items[items.length - 1] : items[0]
    pendingFocus.current = null
    target?.focus()
  }, [open])

  const focusEdge = (edge: "first" | "last") => {
    if (!panelRef.current) return
    const items = visibleFocusables(panelRef.current)
    const target = edge === "last" ? items[items.length - 1] : items[0]
    target?.focus()
  }

  const onButtonKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return
    event.preventDefault()
    const edge = event.key === "ArrowDown" ? "first" : "last"
    if (open) {
      focusEdge(edge)
      return
    }
    pendingFocus.current = edge
    onOpenChange(true)
  }

  const onLinkKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "Home" && event.key !== "End") return
    if (!panelRef.current) return
    const items = visibleFocusables(panelRef.current)
    const index = items.indexOf(event.currentTarget)
    if (index < 0) return

    if (event.key === "ArrowUp" && index === 0) {
      event.preventDefault()
      buttonRef.current?.focus()
      return
    }

    event.preventDefault()
    if (event.key === "ArrowDown") items[Math.min(index + 1, items.length - 1)]?.focus()
    if (event.key === "ArrowUp") items[index - 1]?.focus()
    if (event.key === "Home") items[0]?.focus()
    if (event.key === "End") items[items.length - 1]?.focus()
  }

  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!rootRef.current?.contains(event.relatedTarget as Node | null)) close()
  }

  return (
    <div ref={rootRef} className="relative" onBlur={onBlur}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => onOpenChange(!open)}
        onKeyDown={onButtonKeyDown}
        className={cn(
          "inline-flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors relative pb-0.5",
          overHero ? "text-white hover:text-white" : "text-[var(--muted)] hover:text-[var(--ink)]",
          sectionActive && !overHero && "text-[var(--ink)]",
          sectionActive && overHero && "text-white"
        )}
      >
        {label}
        <Chevron open={open} />
        {sectionActive && (
          <span
            className={cn(
              "absolute bottom-0 left-0 right-0 h-[2px] rounded-full",
              overHero ? "bg-white" : "bg-[var(--accent)]"
            )}
          />
        )}
      </button>
      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className={cn(
          "absolute top-full z-20 mt-7 w-80 max-w-[calc(100vw-2rem)] rounded border border-[var(--border)] bg-[var(--paper)] text-[var(--ink)] shadow-[0_16px_40px_rgba(27,32,38,0.12)] py-2",
          align === "right" ? "right-0" : "left-0"
        )}
      >
        <ul>
          {links.map((link) => {
            const current = linkIsCurrent(pathname, link)
            return (
              <li key={link.href} className={cn(link.separated && "mt-1 border-t border-[var(--border)] pt-1")}>
                <Link
                  href={link.href}
                  aria-current={current ? "page" : undefined}
                  onClick={close}
                  onKeyDown={onLinkKeyDown}
                  className={cn(
                    "block px-4 py-3 text-sm transition-colors hover:bg-[var(--paper-warm)]",
                    current ? "text-[var(--accent)]" : "text-[var(--ink)]"
                  )}
                >
                  <span className="block font-medium leading-snug">{link.label}</span>
                  {link.meta && (
                    <span className="mt-0.5 block text-xs" style={{ color: "var(--muted)" }}>
                      {link.meta}
                    </span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

function AboutCluster({
  pathname,
  overHero,
  open,
  onOpenChange,
}: {
  pathname: string
  overHero: boolean
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const panelId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const pendingFocus = useRef(false)
  const close = () => onOpenChange(false)
  const aboutCurrent = linkIsCurrent(pathname, aboutLinks[0])
  const resumeCurrent = linkIsCurrent(pathname, aboutLinks[1])

  useDismiss(open, rootRef, buttonRef, close)

  useEffect(() => {
    if (!open || !pendingFocus.current || !panelRef.current) return
    pendingFocus.current = false
    visibleFocusables(panelRef.current)[0]?.focus()
  }, [open])

  const openToResume = () => {
    if (open) {
      if (!panelRef.current) return
      visibleFocusables(panelRef.current)[0]?.focus()
      return
    }
    pendingFocus.current = true
    onOpenChange(true)
  }

  const onClusterKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowDown") return
    if (panelRef.current?.contains(event.target as Node)) return
    event.preventDefault()
    openToResume()
  }

  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!rootRef.current?.contains(event.relatedTarget as Node | null)) close()
  }

  return (
    <div ref={rootRef} className="relative flex items-center" onBlur={onBlur} onKeyDown={onClusterKeyDown}>
      <Link
        href="/about"
        aria-current={aboutCurrent ? "page" : undefined}
        className={cn(
          "text-sm font-medium tracking-wide transition-colors relative pb-0.5",
          overHero ? "text-white hover:text-white" : "text-[var(--muted)] hover:text-[var(--ink)]",
          aboutCurrent && (overHero ? "text-white" : "text-[var(--ink)]")
        )}
      >
        About
        {aboutCurrent && (
          <span
            className={cn(
              "absolute bottom-0 left-0 right-0 h-[2px] rounded-full",
              overHero ? "bg-white" : "bg-[var(--accent)]"
            )}
          />
        )}
      </Link>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Hide resume" : "Show resume"}
        onClick={() => onOpenChange(!open)}
        className={cn(
          "ml-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors",
          overHero ? "text-white hover:text-white" : "text-[var(--muted)] hover:text-[var(--ink)]",
          resumeCurrent && (overHero ? "text-white" : "text-[var(--accent)]")
        )}
      >
        <Chevron open={open} />
      </button>
      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className="absolute left-0 top-full z-20 mt-7 min-w-44 rounded border border-[var(--border)] bg-[var(--paper)] text-[var(--ink)] shadow-[0_16px_40px_rgba(27,32,38,0.12)] py-2"
      >
        <Link
          href="/resume"
          aria-current={resumeCurrent ? "page" : undefined}
          onClick={close}
          onKeyDown={(event) => {
            if (event.key === "ArrowUp") {
              event.preventDefault()
              buttonRef.current?.focus()
            }
          }}
          className={cn(
            "block px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--paper-warm)]",
            resumeCurrent ? "text-[var(--accent)]" : "text-[var(--ink)]"
          )}
        >
          Resume
        </Link>
      </div>
    </div>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [navClear, setNavClear] = useState(false)
  const [constructionOpen, setConstructionOpen] = useState(false)
  const [desktopMenu, setDesktopMenu] = useState<"construction" | "about" | null>(null)
  const pathname = usePathname()
  const menuId = useId()
  const constructionPanelId = useId()
  const isHome = pathname === "/"

  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const wasOpenRef = useRef(false)

  const onProject = pathname === "/projects" || pathname.startsWith("/projects/")
  const aiActive = pathname === "/ai-tools" || pathname.startsWith("/ai-tools/")
  const blogActive = pathname === "/blog" || pathname.startsWith("/blog/")
  const contactActive = pathname === "/contact" || pathname.startsWith("/contact/")

  // Scroll state + hide the bar when a footer CTA slides under it.
  useEffect(() => {
    let ticking = false
    const update = () => {
      setScrolled(window.scrollY > 60)
      const targets = document.querySelectorAll<HTMLElement>("[data-footer-cta], footer")
      const cover = Array.from(targets).some((el) => {
        const rect = el.getBoundingClientRect()
        return rect.top < 80 && rect.bottom > 0
      })
      setNavClear(cover)
      ticking = false
    }
    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
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
    setMenuOpen(false)
    setDesktopMenu(null)
    setConstructionOpen(onProject)
  }, [pathname, onProject])

  useEffect(() => {
    if (menuOpen) {
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"
      wasOpenRef.current = true
      return () => {
        document.body.style.overflow = previousOverflow
      }
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false
      hamburgerRef.current?.focus()
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setMenuOpen(false)
        return
      }

      if (event.key !== "Tab") return

      const panel = menuRef.current
      if (!panel) return

      const focusables = visibleFocusables(panel)
      if (focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (event.shiftKey) {
        if (active === first || !panel.contains(active)) {
          event.preventDefault()
          last.focus()
        }
      } else if (active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [menuOpen])

  const overHero = isHome && !scrolled
  const conceal = navClear && !menuOpen

  const primaryClass = (active: boolean) =>
    cn(
      "text-sm font-medium tracking-wide transition-colors relative pb-0.5",
      overHero ? "text-white hover:text-white" : "text-[var(--muted)] hover:text-[var(--ink)]",
      active && !overHero && "text-[var(--ink)]",
      active && overHero && "text-white"
    )

  const mobileLinkClass = (active: boolean) =>
    cn(
      "py-4 text-base font-medium transition-colors",
      active ? "text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"
    )

  return (
    <header
      inert={conceal ? true : undefined}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        overHero ? "nav-over-hero" : "nav-solid",
        conceal && "-translate-y-full"
      )}
    >
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 h-20 flex items-center justify-between gap-6">
        <div className="flex items-center gap-6 min-w-0">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={cn(
              "serif text-[22px] font-normal tracking-tight transition-colors whitespace-nowrap",
              overHero ? "text-white" : "text-[var(--ink)]"
            )}
          >
            Miles Goodman
          </Link>
          <div className="hidden md:block">
            <AboutCluster
              pathname={pathname}
              overHero={overHero}
              open={desktopMenu === "about"}
              onOpenChange={(next) => setDesktopMenu(next ? "about" : null)}
            />
          </div>
        </div>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          <Link href="/ai-tools" aria-current={aiActive ? "page" : undefined} className={primaryClass(aiActive)}>
            AI
            {aiActive && (
              <span className={cn("absolute bottom-0 left-0 right-0 h-[2px] rounded-full", overHero ? "bg-white" : "bg-[var(--accent)]")} />
            )}
          </Link>
          <DesktopMenu
            label="Construction"
            links={constructionLinks}
            pathname={pathname}
            overHero={overHero}
            sectionActive={onProject}
            align="right"
            open={desktopMenu === "construction"}
            onOpenChange={(next) => setDesktopMenu(next ? "construction" : null)}
          />
          <Link href="/blog" aria-current={blogActive ? "page" : undefined} className={primaryClass(blogActive)}>
            Blog
            {blogActive && (
              <span className={cn("absolute bottom-0 left-0 right-0 h-[2px] rounded-full", overHero ? "bg-white" : "bg-[var(--accent)]")} />
            )}
          </Link>
          <Link href="/contact" aria-current={contactActive ? "page" : undefined} className={primaryClass(contactActive)}>
            Contact
            {contactActive && (
              <span className={cn("absolute bottom-0 left-0 right-0 h-[2px] rounded-full", overHero ? "bg-white" : "bg-[var(--accent)]")} />
            )}
          </Link>
        </nav>

        <button
          ref={hamburgerRef}
          className="md:hidden inline-flex min-h-11 min-w-11 items-center justify-center p-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
        >
          <span aria-hidden="true" className={cn("relative inline-block w-6 h-4", overHero ? "text-white" : "text-[var(--ink)]")}>
            <span
              className={cn(
                "absolute left-0 right-0 h-0.5 bg-current transition-all duration-200",
                menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 right-0 h-0.5 bg-current top-1/2 -translate-y-1/2 transition-opacity duration-200",
                menuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute left-0 right-0 h-0.5 bg-current transition-all duration-200",
                menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              )}
            />
          </span>
        </button>
      </div>

      <div
        ref={menuRef}
        id={menuId}
        hidden={!menuOpen}
        className="md:hidden nav-solid max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-[var(--border)]"
      >
          <nav aria-label="Primary" className="flex flex-col px-6 py-4">
            <Link href="/ai-tools" aria-current={aiActive ? "page" : undefined} className={mobileLinkClass(aiActive)} onClick={() => setMenuOpen(false)}>
              AI
            </Link>

            <div>
              <button
                type="button"
                aria-expanded={constructionOpen}
                aria-controls={constructionPanelId}
                onClick={() => setConstructionOpen((value) => !value)}
                className={cn(mobileLinkClass(onProject), "flex w-full items-center justify-between gap-4 text-left")}
              >
                Construction
                <Chevron open={constructionOpen} />
              </button>
              <div id={constructionPanelId} hidden={!constructionOpen}>
                <ul className="mb-2 ml-1 border-l border-[var(--border)] pl-4">
                  {constructionLinks.map((link) => {
                    const current = linkIsCurrent(pathname, link)
                    return (
                      <li key={link.href} className={cn(link.separated && "mt-1 border-t border-[var(--border)] pt-1")}>
                        <Link
                          href={link.href}
                          aria-current={current ? "page" : undefined}
                          onClick={() => setMenuOpen(false)}
                          className={cn(
                            "block py-3 text-sm font-medium transition-colors",
                            current ? "text-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--ink)]"
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <Link href="/blog" aria-current={blogActive ? "page" : undefined} className={mobileLinkClass(blogActive)} onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" aria-current={contactActive ? "page" : undefined} className={mobileLinkClass(contactActive)} onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </nav>

          <nav aria-label="About" className="flex flex-col px-6 pb-6 border-t border-[var(--border)]">
            <Link
              href="/about"
              aria-current={linkIsCurrent(pathname, aboutLinks[0]) ? "page" : undefined}
              className={mobileLinkClass(linkIsCurrent(pathname, aboutLinks[0]))}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/resume"
              aria-current={linkIsCurrent(pathname, aboutLinks[1]) ? "page" : undefined}
              className={cn(mobileLinkClass(linkIsCurrent(pathname, aboutLinks[1])), "pl-4")}
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </Link>
          </nav>
      </div>
    </header>
  )
}
