"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"

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

  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const startInterval = () => {
    if (prefersReduced) return
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  useEffect(() => {
    if (!paused) startInterval()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused])

  const goTo = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setCurrent(i)
    if (!paused) startInterval()
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: 680, marginTop: -80 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3" style={{ zIndex: 3 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            style={{
              padding: "12px 4px",
              background: "none",
              border: "none",
              cursor: "pointer",
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
