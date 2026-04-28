"use client"

import { useRef } from "react"
import { motion, useInView, type Variants } from "motion/react"
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
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true })
  const isVisible = !inViewProp || inViewResult

  const variants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay: 0.04 + delay, duration, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
