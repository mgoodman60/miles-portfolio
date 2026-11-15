"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { RENDER_H, RENDER_W, renderingSrc, type Rendering } from "@/lib/renderings"

function Picture({ item, sizes, eager = false, className, draggable }: { item: Rendering; sizes: string; eager?: boolean; className?: string; draggable?: boolean }) {
  const s = renderingSrc(item.file)
  return (
    <picture>
      <source type="image/avif" srcSet={s.avif} sizes={sizes} />
      <source type="image/webp" srcSet={s.webp} sizes={sizes} />
      <img src={s.jpg} alt={item.alt} width={RENDER_W} height={RENDER_H} loading={eager ? "eager" : "lazy"} decoding="async" draggable={draggable} className={className} />
    </picture>
  )
}

/** Thumbnail grid plus a native <dialog> lightbox: modal focus containment, Esc to close, arrow keys and swipe. */
export function RenderingsGallery({ title, items, eagerFirst = false }: { title: string; items: Rendering[]; eagerFirst?: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])
  const startX = useRef<number | null>(null)
  const [index, setIndex] = useState(-1)
  const open = index >= 0

  const step = useCallback((d: number) => setIndex((i) => (i + d + items.length) % items.length), [items.length])

  useEffect(() => {
    const dialog = dialogRef.current
    if (open && dialog && !dialog.open) dialog.showModal()
  }, [open])

  const onClose = () => {
    const last = index
    setIndex(-1)
    triggerRefs.current[last]?.focus()
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "ArrowRight") { e.preventDefault(); step(1) }
    else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1) }
    else if (e.key === "Tab") {
      const f = [...e.currentTarget.querySelectorAll<HTMLElement>("button")]
      const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
  }

  const item = open ? items[index] : null
  const btn = "inline-flex min-h-11 min-w-11 items-center justify-center rounded border border-white/40 bg-black/60 px-3 text-sm font-medium text-white hover:bg-black/80"

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <li key={it.file}>
            <button
              type="button"
              ref={(el) => { triggerRefs.current[i] = el }}
              onClick={() => setIndex(i)}
              className="group block w-full overflow-hidden rounded border text-left"
              style={{ borderColor: "var(--border)", background: "var(--paper-warm)" }}
              aria-label={`Open larger: ${it.alt}`}
            >
              <Picture item={it} eager={eagerFirst && i === 0} sizes="(min-width: 1024px) 460px, (min-width: 640px) 50vw, 100vw" className="block aspect-[16/9] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={`${title} gallery`}
        onClose={onClose}
        onKeyDown={onKeyDown}
        onClick={(e) => { if (e.target === e.currentTarget) dialogRef.current?.close() }}
        onPointerDown={(e) => { startX.current = e.clientX }}
        onPointerUp={(e) => {
          if (startX.current === null) return
          const dx = e.clientX - startX.current
          startX.current = null
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
        }}
        className="m-0 h-full max-h-none w-full max-w-none bg-[#0c1016] p-0 text-white backdrop:bg-black"
        style={{ touchAction: "pan-y" }}
      >
        {item && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-8">
              <p className="text-sm" aria-live="polite">{title} · {index + 1} of {items.length}</p>
              <button type="button" className={btn} onClick={() => dialogRef.current?.close()} autoFocus>Close<span className="sr-only"> gallery</span></button>
            </div>
            <figure className="flex min-h-0 flex-1 flex-col items-center justify-center px-2 md:px-20">
              <Picture key={item.file} item={item} eager draggable={false} sizes="100vw" className="max-h-[calc(100svh-150px)] w-auto max-w-full select-none object-contain" />
              <figcaption className="mt-3 max-w-3xl px-2 text-center text-sm text-white/90">{item.alt}</figcaption>
            </figure>
            <div className="flex items-center justify-center gap-3 px-4 py-3">
              <button type="button" className={btn} onClick={() => step(-1)}>← Previous<span className="sr-only"> image</span></button>
              <button type="button" className={btn} onClick={() => step(1)}>Next<span className="sr-only"> image</span> →</button>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
