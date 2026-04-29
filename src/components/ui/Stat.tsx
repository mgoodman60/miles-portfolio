import type { ReactNode } from "react"

/**
 * Canonical stat-card primitive.
 *
 * Variants:
 *   default — bordered light card on neutral page surfaces (paper bg).
 *   warm    — soft card for sections that already use paper-warm bg behind it.
 *   dark    — inverted card for featured/credibility callouts.
 *   bare    — no surface, no colors. Consumer provides everything; useful inside
 *             a parent strip (e.g. <section class="stat-strip">) where the bg
 *             is already painted and the stat just needs typographic structure.
 */

type StatVariant = "default" | "warm" | "dark" | "bare"

type StatProps = {
  value: ReactNode
  label: string
  variant?: StatVariant
  className?: string
  valueClassName?: string
  labelClassName?: string
}

const surfaces: Record<StatVariant, { card: string; value: string; label: string }> = {
  default: {
    card: "rounded p-6 border bg-[var(--paper)]",
    value: "serif text-3xl font-light text-[var(--ink)] mb-1",
    label: "text-xs uppercase tracking-[0.14em] text-[var(--muted)]",
  },
  warm: {
    card: "rounded p-6 bg-[var(--paper-warm)]",
    value: "serif text-3xl font-light text-[var(--ink)] mb-2",
    label: "text-xs uppercase tracking-[0.18em] text-[var(--muted)]",
  },
  dark: {
    card: "rounded p-6 bg-[var(--ink)]",
    value: "serif text-3xl font-light text-[var(--paper)] mb-2",
    label: "text-xs uppercase tracking-[0.18em] text-[var(--paper)]/70",
  },
  bare: {
    // No card, no colors — consumer provides via className/valueClassName/labelClassName.
    card: "",
    value: "serif font-light leading-none",
    label: "text-xs uppercase tracking-[0.18em] mt-1",
  },
}

export function Stat({
  value,
  label,
  variant = "default",
  className = "",
  valueClassName = "",
  labelClassName = "",
}: StatProps) {
  const s = surfaces[variant]
  return (
    <div
      className={`${s.card} ${className}`.trim()}
      style={{ borderColor: variant === "default" ? "var(--border)" : undefined }}
    >
      <p className={`${s.value} ${valueClassName}`.trim()}>{value}</p>
      <p className={`${s.label} ${labelClassName}`.trim()}>{label}</p>
    </div>
  )
}
