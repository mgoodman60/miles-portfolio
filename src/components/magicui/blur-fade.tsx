"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"
import { useInView, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

export function BlurFade({
  children,
  className,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView: inViewProp = false,
  blur = "6px",
}: {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
  yOffset?: number
  inView?: boolean
  blur?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const seen = useInView(ref, { once: true })
  const prefersReduced = useReducedMotion()
  const startedOffscreen = useRef(false)
  const recorded = useRef(false)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    if (recorded.current || !ref.current) return
    recorded.current = true
    startedOffscreen.current = ref.current.getBoundingClientRect().top > window.innerHeight * 0.92
  }, [])

  useEffect(() => {
    if (prefersReduced || !startedOffscreen.current) return
    if (!inViewProp || seen) setPlay(true)
  }, [inViewProp, seen, prefersReduced])

  const style = play
    ? ({
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        "--blur-fade-y": `${yOffset}px`,
        "--blur-fade-blur": blur,
      } as CSSProperties)
    : undefined

  return (
    <div ref={ref} className={cn(className, play && "blur-fade-play")} style={style}>
      {children}
    </div>
  )
}
