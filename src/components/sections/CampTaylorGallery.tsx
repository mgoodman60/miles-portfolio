"use client"

import { RowsPhotoAlbum } from "react-photo-album"
import "react-photo-album/rows.css"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type Photo = { src: string; width: number; height: number; alt: string }

const FIRST_ROW = 4

export function CampTaylorGallery({ photos, eager = false }: { photos: Photo[]; eager?: boolean }) {
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
        slides={photos.map((p) => ({ src: p.src, alt: p.alt, width: p.width, height: p.height }))}
        plugins={[Zoom]}
      />
    </div>
  )
}
