"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-[520px] md:min-h-[680px]"
      style={{ height: "100svh", marginTop: -80 }}
    >
      {prefersReduced ? (
        <div className="absolute inset-0">
          <Image
            src="/projects/camp-taylor/night-pour-hero.jpg"
            alt="Night concrete pour — Camp Taylor Memorial Park Pool, Louisville KY"
            fill
            priority
            quality={60}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ) : (
        <motion.div className="absolute inset-0 scale-110" style={{ y }}>
          <Image
            src="/projects/camp-taylor/night-pour-hero.jpg"
            alt="Night concrete pour — Camp Taylor Memorial Park Pool, Louisville KY"
            fill
            priority
            quality={60}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      )}

      <div className="photo-scrim absolute inset-0" />

      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-20">
        <div className="mx-auto w-full max-w-[1480px]">
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
              className="px-6 py-3 text-sm font-medium rounded border border-white/80 text-white hover:bg-white/10 transition-colors"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>

      <p
        className="absolute bottom-4 left-6 md:left-12 text-xs text-white tracking-wide rounded px-2.5 py-1"
        style={{ background: "rgba(12,16,22,0.8)" }}
      >
        Camp Taylor Memorial Park Pool · Louisville, KY · W Principles, LLC
      </p>
    </section>
  )
}
