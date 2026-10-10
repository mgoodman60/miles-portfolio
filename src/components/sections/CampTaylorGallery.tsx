"use client"

import { RowsPhotoAlbum } from "react-photo-album"
import "react-photo-album/rows.css"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Captions from "yet-another-react-lightbox/plugins/captions"
import "yet-another-react-lightbox/plugins/captions.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Image from "next/image"
import { useState } from "react"

type Photo = { src: string; width: number; height: number; alt: string; caption?: string }

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

  if (variant === "stack") {
    return (
      <div>
        <ul className="space-y-8">
          {photos.map((photo, photoIndex) => (
            <li key={photo.src}>
              <figure>
                <button
                  type="button"
                  className="block w-full rounded text-left"
                  onClick={() => setIndex(photoIndex)}
                >
                  <span className="block overflow-hidden rounded">
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
                  </span>
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
        <RowsPhotoAlbum
          photos={photos}
          targetRowHeight={180}
          defaultContainerWidth={960}
          sizes={{ size: "calc(100vw - 48px)", sizes: [{ viewport: "(min-width: 1024px)", size: "min(1000px, calc(100vw - 480px))" }] }}
          render={{
            image: ({ alt, title, sizes, className, style }, { photo, index: photoIndex }) => (
              <Image
                src={photo.src}
                alt={alt ?? photo.alt}
                title={title}
                width={photo.width}
                height={photo.height}
                sizes={sizes}
                className={className}
                style={style}
                loading={eager && photoIndex === 0 ? "eager" : "lazy"}
              />
            ),
          }}
          onClick={({ index: photoIndex }) => setIndex(photoIndex)}
        />
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
            : {}
        }
      />
    </div>
  )
}
