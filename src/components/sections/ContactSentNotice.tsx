"use client"

import { Suspense, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { profile } from "@/lib/profile"

function Notice() {
  const sent = useSearchParams().get("sent") === "true"
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (sent) ref.current?.focus()
  }, [sent])

  if (!sent) return null

  return (
    <p
      ref={ref}
      tabIndex={-1}
      role="status"
      className="mt-8 max-w-xl rounded border px-4 py-3 text-sm font-medium outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      style={{ background: "var(--paper)", borderColor: "var(--border)", color: "var(--ink)" }}
    >
      This page cannot confirm email delivery. If you submitted a message and need to follow up,{" "}
      <a href={`mailto:${profile.email}`} className="underline underline-offset-4">email Miles directly</a>.
    </p>
  )
}

export function ContactSentNotice() {
  return (
    <Suspense fallback={null}>
      <Notice />
    </Suspense>
  )
}
