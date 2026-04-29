import type { ReactNode } from "react"

/**
 * Editorial eyebrow cap (small uppercase label above a heading).
 *
 * Sizes follow the project's 3-value tracking scale (Phase 3 standardization):
 *   hero    — 0.22em, sits above page H1s
 *   section — 0.18em, sits above section-level H2s and inline tags
 *   card    — 0.14em, used inside cards (rare; most card eyebrows are still inline)
 *
 * Layout (margin, alignment) stays the consumer's responsibility — pass via className.
 * Color is fixed to --muted; one-off variants (accent, on-dark photos, footer-fg-soft)
 * stay inline since they are single-use and would only bloat the primitive.
 */

type EyebrowSize = "hero" | "section" | "card"

const tracking: Record<EyebrowSize, string> = {
  hero: "tracking-[0.22em]",
  section: "tracking-[0.18em]",
  card: "tracking-[0.14em]",
}

export function SectionEyebrow({
  children,
  size = "hero",
  className = "",
}: {
  children: ReactNode
  size?: EyebrowSize
  className?: string
}) {
  return (
    <p className={`text-xs uppercase ${tracking[size]} text-[var(--muted)] ${className}`.trim()}>
      {children}
    </p>
  )
}
