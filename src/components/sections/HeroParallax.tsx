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
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: 680, marginTop: -80 }}
    >
      {/* Parallax photo (static when reduced motion is preferred) */}
      {prefersReduced ? (
        <div className="absolute inset-0">
          <Image
            src="/projects/camp-taylor/night-pour-hero.jpg"
            alt="Night concrete pour — Camp Taylor Memorial Park Pool, Louisville KY"
            fill
            priority
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
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-20">
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
            style={{ fontSize: "clamp(64px, 10vw, 160px)" }}
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
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink)")}
            >
              View Projects
            </Link>
            <a
              href="/Miles_Goodman_Resume.pdf"
              className="px-6 py-3 text-sm font-medium rounded border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 right-12 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 rotate-90 origin-center">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/25 mt-2" />
      </motion.div>

      {/* Photo credit */}
      <p className="absolute bottom-4 left-6 md:left-12 text-[10px] text-white/30 tracking-wide">
        Camp Taylor Memorial Park Pool · Louisville, KY · W Principles, LLC
      </p>
    </section>
  )
}
