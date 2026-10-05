"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useReducedMotion } from "motion/react"

const slides = [
  {
    src: "/projects/camp-taylor/night-pour-hero.jpg",
    alt: "Night concrete pour — Camp Taylor Memorial Park Pool, Louisville KY",
    caption: "Camp Taylor Memorial Park Pool · Louisville, KY",
  },
  {
    src: "/projects/camp-taylor/finished-pool.jpg",
    alt: "Completed Camp Taylor Memorial Park Pool",
    caption: "Camp Taylor — Completed Nov 2025",
  },
  {
    src: "/projects/john-black/drone-01.jpg",
    alt: "John W. Black Aquatic Center — aerial view",
    caption: "John W. Black Aquatic Center · La Grange, KY",
  },
  {
    src: "/projects/morehead/drone-01.jpg",
    alt: "One Senior Care - Morehead — aerial view",
    caption: "One Senior Care - Morehead — Complete",
  },
]

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (paused || prefersReduced) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused, prefersReduced])

  const goTo = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setCurrent(i)
  }

  return (
    <section
      className="relative overflow-hidden min-h-[520px] md:min-h-[680px]"
      style={{ height: "100svh", marginTop: -80 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured projects"
    >
      {/* All slides rendered simultaneously — no flash on transition */}
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

      {/* SR-only live region announcing current slide */}
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
        {`Slide ${current + 1} of ${slides.length}: ${slides[current].caption}`}
      </div>

      {/* Gradient — above all slides */}
      <div className="photo-scrim absolute inset-0" style={{ zIndex: 2 }} />

      {/* Content — visible without JS. Motion is a CSS enhancement only.
          Controls and caption share one column so they cannot overlap on a phone. */}
      <div className="on-photo absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-6 md:pb-8" style={{ zIndex: 3 }}>
        <div className="mx-auto flex w-full max-w-[1480px] flex-col gap-6">
          <div>
            <p className="hero-rise hero-rise-1 text-xs uppercase tracking-[0.22em] text-white mb-4">
              Site Superintendent · MBA Candidate, Project Management &amp; AI
            </p>

            <h1
              className="hero-rise hero-rise-2 serif font-light text-white leading-none tracking-tight mb-8"
              style={{ fontSize: "clamp(40px, 5.5vw, 80px)", textShadow: "0 2px 16px rgba(0,0,0,0.45)" }}
            >
              Miles
              <br />
              Goodman
            </h1>

            <div className="hero-rise hero-rise-3 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 text-sm font-medium rounded transition-colors"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                View Projects
              </Link>
              <a
                href="/Miles_Goodman_Resume.pdf"
                download
                className="px-6 py-3 text-sm font-medium rounded border border-white/70 text-white hover:bg-white/10 transition-colors"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
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
                    aria-hidden="true"
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
                    background: "#131820",
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
            <p
              className="max-w-full text-xs text-white tracking-wide rounded px-2.5 py-1 sm:text-right"
              style={{ background: "#131820" }}
            >
              {slides[current].caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
