"use client"

import { useEffect, useState } from "react"
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
  const [userPaused, setUserPaused] = useState(false)
  const [holdPaused, setHoldPaused] = useState(false)
  const [cycle, setCycle] = useState(0)
  const prefersReduced = useReducedMotion()
  const paused = userPaused || holdPaused

  useEffect(() => {
    if (paused || prefersReduced || slides.length <= 1) return
    const intervalId = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length)
    }, intervalMs)
    return () => clearInterval(intervalId)
  }, [paused, prefersReduced, slides.length, intervalMs, cycle])

  const goTo = (i: number) => {
    setCurrent(i)
    setCycle((n) => n + 1)
  }

  const currentSlide = slides[current]
  const liveText = currentSlide
    ? `Slide ${current + 1} of ${slides.length}: ${currentSlide.caption ?? currentSlide.alt}`
    : ""

  return (
    <div
      className={`relative mt-20 overflow-hidden ${className}`}
      style={{ height, minHeight }}
      onMouseEnter={() => setHoldPaused(true)}
      onMouseLeave={() => setHoldPaused(false)}
      onFocus={() => setHoldPaused(true)}
      onBlur={(event) => {
        const next = event.relatedTarget
        if (!(next instanceof Node) || !event.currentTarget.contains(next)) setHoldPaused(false)
      }}
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36"
        style={{
          zIndex: 2,
          background: "linear-gradient(180deg, rgba(10,12,15,0) 0%, rgba(10,12,15,0.72) 100%)",
        }}
      />

      <div className="on-photo absolute inset-0" style={{ zIndex: 3 }}>{children}</div>

      {currentSlide?.caption && (
        <p
          aria-hidden="true"
          className="absolute left-6 md:left-12 max-w-[min(36rem,calc(100%-3rem))] text-sm leading-snug text-white"
          style={{
            bottom: 92,
            zIndex: 4,
            background: "rgba(30,34,39,0.92)",
            padding: "6px 10px",
            borderRadius: 4,
          }}
        >
          {currentSlide.caption}
        </p>
      )}

      {slides.length > 1 && (
        <div
          className="on-photo absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-1 md:left-12 md:right-auto"
          style={{ zIndex: 4 }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
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
              type="button"
              onClick={() => setUserPaused((p) => !p)}
              aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
              aria-pressed={userPaused}
              style={{
                minWidth: 44,
                minHeight: 44,
                padding: "0 10px",
                marginLeft: 4,
                background: "rgba(30,34,39,0.92)",
                border: "1px solid rgba(255,255,255,0.7)",
                borderRadius: 4,
                color: "#fff",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {userPaused ? "Play" : "Pause"}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
