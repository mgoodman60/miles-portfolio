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
  cost: string
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
      className="group rounded overflow-hidden bg-white shadow-sm hover:shadow-lg"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        {/* Cover image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
          <Image
            src={project.cover}
            alt={project.name}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, (max-width:1480px) 33vw, 472px"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end justify-end p-4">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white font-medium tracking-wide">
              View project →
            </span>
          </div>
          {/* Tag */}
          {project.tag && (
            <span
              className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full font-medium"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              {project.tag}
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="p-6">
          <p
            className="text-[10px] uppercase tracking-[0.18em] mb-2"
            style={{ color: "var(--muted)" }}
          >
            {project.location} · {project.year} · {project.cost}
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
