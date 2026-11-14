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
      <div
        className="rounded overflow-hidden relative"
        style={{ aspectRatio: "16/9" }}
        role="group"
        aria-label={`Before and after. Before: ${beforeAlt}. After: ${afterAlt}.`}
      >
        <span className="absolute top-3 left-3 z-10 rounded px-2.5 py-1 text-xs tracking-widest text-white pointer-events-none select-none" style={{ background: "var(--band)" }}>Before</span>
        <span className="absolute top-3 right-3 z-10 rounded px-2.5 py-1 text-xs tracking-widest text-white pointer-events-none select-none" style={{ background: "var(--band)" }}>After</span>
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
