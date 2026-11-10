import { ImageResponse } from "next/og"

export const dynamic = "force-static"

// Original personal share artwork; no external imagery, fonts or network calls.
export function GET() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#0F1114", color: "#F5F7FA", padding: "64px", fontFamily: "sans-serif", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", fontSize: 26, letterSpacing: "3px" }}>CONSTRUCTION &amp; FIELD REPORTING</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, lineHeight: 1.05 }}>Miles Goodman</div>
        <div style={{ display: "flex", color: "#AEB7C4", fontSize: 30 }}>Site Superintendent · Kentucky</div>
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        {["Construction", "Reporting", "Field tools"].map((label) => (
          <div key={label} style={{ display: "flex", background: "#1E2227", color: "#F5F7FA", padding: "15px 24px", borderRadius: 6, fontSize: 23 }}>{label}</div>
        ))}
      </div>
    </div>,
    { width: 1200, height: 630 },
  )
}
