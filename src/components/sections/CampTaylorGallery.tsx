"use client"

import { RowsPhotoAlbum } from "react-photo-album"
import "react-photo-album/rows.css"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Captions from "yet-another-react-lightbox/plugins/captions"
import "yet-another-react-lightbox/plugins/captions.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type Photo = { src: string; width: number; height: number; alt: string; caption?: string }

const FIRST_ROW = 4

export function CampTaylorGallery({
  photos,
  eager = false,
  variant = "album",
  captions = false,
}: {
  photos: Photo[]
  eager?: boolean
  /** "stack" is a dated list. The row album is unchanged for other pages. */
  variant?: "album" | "stack"
  captions?: boolean
}) {
  const [index, setIndex] = useState(-1)
  const [albumReady, setAlbumReady] = useState(false)
  const albumRef = useRef<HTMLDivElement>(null)
  const preview = photos.slice(0, FIRST_ROW)

  useEffect(() => {
    const node = albumRef.current
    if (!node) return

    const mark = () => {
      if (node.querySelector("img")) setAlbumReady(true)
    }
    mark()
    const observer = new MutationObserver(mark)
    observer.observe(node, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  if (variant === "stack") {
    return (
      <div>
        <ul className="space-y-8">
          {photos.map((photo, photoIndex) => (
            <li key={photo.src}>
              <figure>
                <button
                  type="button"
                  className="block w-full overflow-hidden rounded text-left"
                  onClick={() => setIndex(photoIndex)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading={eager && photoIndex === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 1024px) 100vw, 960px"
                    className="h-auto w-full"
                    style={{ background: "var(--paper-warm)" }}
                  />
                </button>
                {photo.caption ? (
                  <figcaption className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                    {photo.caption}
                  </figcaption>
                ) : null}
              </figure>
            </li>
          ))}
        </ul>
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={photos.map((p) => ({ src: p.src, alt: p.alt, width: p.width, height: p.height }))}
          plugins={[Zoom]}
        />
      </div>
    )
  }

  return (
    <div className="relative">
      <div className={albumReady ? "hidden" : "grid grid-cols-2 gap-2 sm:grid-cols-4"}>
        {preview.map((photo) => (
          <button
            key={photo.src}
            type="button"
            className="block w-full overflow-hidden rounded text-left"
            onClick={() => setIndex(photos.findIndex((item) => item.src === photo.src))}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading={eager ? "eager" : "lazy"}
              sizes="(max-width: 640px) 50vw, 25vw"
              className="h-auto w-full object-cover"
              style={{ background: "var(--paper-warm)", aspectRatio: `${photo.width} / ${photo.height}` }}
            />
          </button>
        ))}
      </div>
      {!albumReady && photos.length > FIRST_ROW ? (
        <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
          {photos.length} photos
        </p>
      ) : null}
      <div
        ref={albumRef}
        className={albumReady ? "relative" : "pointer-events-none absolute w-full opacity-0"}
        aria-hidden={!albumReady}
      >
        <RowsPhotoAlbum
          photos={photos}
          targetRowHeight={180}
          onClick={({ index: photoIndex }) => setIndex(photoIndex)}
        />
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({
          src: p.src,
          alt: p.alt,
          width: p.width,
          height: p.height,
          description: captions ? p.alt : undefined,
        }))}
        plugins={captions ? [Zoom, Captions] : [Zoom]}
        captions={captions ? { descriptionTextAlign: "start", descriptionMaxLines: 3, showToggle: false } : undefined}
        styles={
          captions
            ? {
                captionsDescription: { color: "#fff", fontSize: "15px", lineHeight: 1.45 },
                captionsDescriptionContainer: { background: "rgba(12,16,22,0.92)" },
              }
            : undefined
        }
      />
    </div>
  )
}
