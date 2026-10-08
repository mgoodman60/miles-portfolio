"use client"

import { useEffect, useRef, useState, MouseEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { useReducedMotion } from "motion/react"

type Project = {
  slug: string
  name: string
  location: string
  year: string
  cost?: string
  scope: string
  cover: string
  tag?: string
}

export function ProjectCard3D({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(hover: none)")
    setIsTouch(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setIsTouch(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const tiltDisabled = prefersReduced || isTouch

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (tiltDisabled) return
    const card = cardRef.current
    if (!card) return
    const { left, top, width, height } = card.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    card.style.willChange = "transform"
    card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02,1.02,1.02)`
  }

  const handleMouseLeave = () => {
    if (tiltDisabled) return
    if (cardRef.current) {
      cardRef.current.style.willChange = "auto"
      cardRef.current.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)"
    }
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={tiltDisabled ? undefined : handleMouseMove}
      onMouseLeave={tiltDisabled ? undefined : handleMouseLeave}
      style={tiltDisabled ? undefined : { transition: "transform 0.15s ease" }}
      className="group overflow-hidden rounded border border-[var(--border)] bg-[var(--surface)] shadow-[0_12px_32px_rgba(0,0,0,0.28)]"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="card-link block"
      >
        <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
          <Image
            src={project.cover}
            alt=""
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105 group-focus-within:scale-105 motion-reduce:transform-none"
            sizes="(max-width:768px) 100vw, (max-width:1480px) 33vw, 472px"
          />
          <div className="absolute inset-0 flex items-end justify-end bg-black/0 p-4 transition-colors duration-300 group-hover:bg-black/35 group-focus-within:bg-black/35">
            <span
              aria-hidden="true"
              className="rounded px-2.5 py-1 text-xs font-medium tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              View project →
            </span>
          </div>
          {project.tag && (
            <span
              className="absolute top-4 left-4 text-xs uppercase tracking-[0.14em] px-2.5 py-1 rounded-full font-medium"
              style={{ background: "var(--surface)", color: "var(--text)", border: "1px solid var(--border)" }}
            >
              {project.tag}
            </span>
          )}
        </div>

        <div className="p-6">
          <p
            className="text-xs uppercase tracking-[0.14em] mb-2"
            style={{ color: "var(--muted)" }}
          >
            {[project.location, project.year, project.cost].filter(Boolean).join(" · ")}
          </p>
          <h3
            className="serif font-light text-xl leading-snug mb-2"
            style={{ color: "var(--ink)" }}
          >
            {project.name}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            {project.scope}
          </p>
        </div>
      </Link>
    </div>
  )
}
