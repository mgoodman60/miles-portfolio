"use client"

import { useEffect, useState } from "react"

/** null keeps server and first client render identical; changes remain reactive. */
export function useMotionPreference() {
  const [reduced, setReduced] = useState<boolean | null>(null)
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduced(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])
  return reduced
}
