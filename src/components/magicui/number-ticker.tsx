import { cn } from "@/lib/utils"

/**
 * Renders the final number in HTML. A count-up that starts from an empty
 * span disappears for no-JS and slow-JS visitors, so the value is the content.
 */
export function NumberTicker({
  value,
  className,
  decimalPlaces = 0,
}: {
  value: number
  direction?: "up" | "down"
  delay?: number
  className?: string
  decimalPlaces?: number
}) {
  const formatted = Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value)

  return <span className={cn("tabular-nums", className)}>{formatted}</span>
}
