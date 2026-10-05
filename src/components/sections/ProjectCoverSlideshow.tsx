"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useReducedMotion } from "motion/react"

type Slide = { src: string; alt: string; caption?: string }

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
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (paused || prefersReduced || slides.length <= 1) return
    intervalRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length)
    }, intervalMs)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused, prefersReduced, slides.length, intervalMs])

  const goTo = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setCurrent(i)
  }

  const currentSlide = slides[current]
  const liveText = currentSlide
    ? `Slide ${current + 1} of ${slides.length}: ${currentSlide.caption ?? currentSlide.alt}`
    : ""

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ height, minHeight, marginTop: -80 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription={slides.length > 1 ? "carousel" : undefined}
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
            quality={i === 0 ? 60 : 75}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {slides.length > 1 && (
        <div
          aria-live="polite"
          aria-atomic="true"
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        >
          {liveText}
        </div>
      )}

      <div className="photo-scrim absolute inset-0" style={{ zIndex: 2 }} />

      <div className="on-photo absolute inset-0" style={{ zIndex: 3 }}>{children}</div>

      {currentSlide?.caption && (
        <p
          aria-hidden="true"
          className="absolute left-6 md:left-12 max-w-[min(36rem,calc(100%-3rem))] text-sm leading-snug text-white"
          style={{
            bottom: 92,
            zIndex: 4,
            background: "rgba(12,16,22,0.88)",
            padding: "6px 10px",
            borderRadius: 4,
          }}
        >
          {currentSlide.caption}
        </p>
      )}

      {slides.length > 1 && (
        <div
          className="on-photo absolute bottom-6 left-6 md:left-12 flex items-center gap-2"
          style={{ zIndex: 4 }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
              style={{
                width: 44,
                height: 44,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: i === current ? 28 : 10,
                  height: 4,
                  background: i === current ? "#fff" : "rgba(255,255,255,0.85)",
                  borderRadius: 2,
                  transition: "all 0.3s",
                }}
              />
            </button>
          ))}
          {!prefersReduced && (
            <button
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              aria-pressed={paused}
              style={{
                minWidth: 44,
                minHeight: 44,
                padding: "0 10px",
                marginLeft: 4,
                background: "rgba(12,16,22,0.8)",
                border: "1px solid rgba(255,255,255,0.7)",
                borderRadius: 4,
                color: "#fff",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {paused ? "Play" : "Pause"}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
