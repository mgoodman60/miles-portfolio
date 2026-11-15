"use client"

import { useEffect, useState } from "react"

/** False on the server and first client render; true once the window `load` event has fired. */
export function useAfterLoad() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const done = () => setReady(true)
    if (document.readyState === "complete") { done(); return }
    window.addEventListener("load", done, { once: true })
    return () => window.removeEventListener("load", done)
  }, [])
  return ready
}
