"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useReducedMotion, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
}: {
  value: number
  direction?: "up" | "down"
  delay?: number
  className?: string
  decimalPlaces?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionVal = useMotionValue(direction === "down" ? value : 0)
  const spring = useSpring(motionVal, { damping: 60, stiffness: 100 })
  const inView = useInView(ref, { once: true, margin: "0px" })
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) {
      if (ref.current) {
        const target = direction === "down" ? 0 : value
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(target)
      }
      return
    }
    if (inView) {
      setTimeout(() => {
        motionVal.set(direction === "down" ? 0 : value)
      }, delay * 1000)
    }
  }, [inView, motionVal, value, direction, delay, decimalPlaces, prefersReduced])

  useEffect(() => {
    if (prefersReduced) return
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(Number(latest.toFixed(decimalPlaces)))
      }
    })
  }, [spring, decimalPlaces, prefersReduced])

  return <span ref={ref} className={cn("tabular-nums", className)} />
}
