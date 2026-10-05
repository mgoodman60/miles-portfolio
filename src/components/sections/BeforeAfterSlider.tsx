"use client"

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"

export function BeforeAfterSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
}: {
  beforeSrc: string
  beforeAlt: string
  afterSrc: string
  afterAlt: string
}) {
  return (
    <>
      <div className="rounded overflow-hidden relative" style={{ aspectRatio: "16/9" }}>
        <span className="absolute top-3 left-3 z-10 text-xs uppercase tracking-widest text-white px-2.5 py-1 rounded pointer-events-none select-none" style={{ background: "rgba(12,16,22,0.82)" }}>Before</span>
        <span className="absolute top-3 right-3 z-10 text-xs uppercase tracking-widest text-white px-2.5 py-1 rounded pointer-events-none select-none" style={{ background: "rgba(12,16,22,0.82)" }}>After</span>
        <ReactCompareSlider
          style={{ width: "100%", height: "100%" }}
          itemOne={
            <ReactCompareSliderImage src={beforeSrc} alt={beforeAlt} style={{ objectFit: "cover" }} />
          }
          itemTwo={
            <ReactCompareSliderImage src={afterSrc} alt={afterAlt} style={{ objectFit: "cover" }} />
          }
        />
      </div>
      <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>Drag to compare →</p>
    </>
  )
}
