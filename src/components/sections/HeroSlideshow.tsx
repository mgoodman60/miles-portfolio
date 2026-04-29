"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"

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
    alt: "One Senior Care Morehead — aerial view",
    caption: "One Senior Care · Morehead, KY — Active",
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
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: 680, marginTop: -80 }}
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
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-20" style={{ zIndex: 3 }}>
        <div className="mx-auto w-full max-w-[1480px]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs uppercase tracking-[0.22em] text-white/70 mb-4"
          >
            Site Superintendent · MBA Candidate, Project Management &amp; AI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="serif font-light text-white leading-none tracking-tight mb-8"
            style={{ fontSize: "clamp(44px, 10vw, 160px)" }}
          >
            Miles
            <br />
            Goodman
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
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
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators + Pause/Play */}
      <div className="absolute bottom-8 left-6 md:left-12 flex items-center gap-2" style={{ zIndex: 3 }}>
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
                width: i === current ? 28 : 8,
                height: 2,
                background: i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
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
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: 4,
              color: "rgba(255,255,255,0.9)",
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

      {/* Caption */}
      <p
        className="absolute bottom-4 right-6 md:right-12 text-[10px] text-white/35 tracking-wide text-right"
        style={{ zIndex: 3 }}
      >
        {slides[current].caption}
      </p>
    </section>
  )
}
