"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

type Slide = { src: string; alt: string }

export function ProjectCoverSlideshow({
  slides,
  intervalMs = 5000,
  className = "",
  height = "60vh",
  minHeight = 400,
  children,
}: {
  slides: Slide[]
  intervalMs?: number
  className?: string
  height?: string
  minHeight?: number
  children?: React.ReactNode
}) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (paused || slides.length <= 1) return
    if (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    intervalRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length)
    }, intervalMs)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused, slides.length, intervalMs])

  const goTo = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setCurrent(i)
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ height, minHeight, marginTop: -80 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="absolute inset-0" style={{ zIndex: 3 }}>{children}</div>

      {slides.length > 1 && (
        <div
          className="absolute bottom-6 left-6 md:left-12 flex items-center gap-3"
          style={{ zIndex: 4 }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
              style={{
                padding: "10px 4px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: i === current ? 24 : 6,
                  height: 2,
                  background: i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
                  borderRadius: 2,
                  transition: "all 0.3s",
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
