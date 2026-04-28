"use client"

import { RowsPhotoAlbum } from "react-photo-album"
import "react-photo-album/rows.css"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import { useState } from "react"

type Photo = { src: string; width: number; height: number; alt: string }

export function CampTaylorGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(-1)

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={180}
        onClick={({ index }) => setIndex(index)}

      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt, width: p.width, height: p.height }))}
        plugins={[Zoom]}
      />
    </>
  )
}
