"use client"

import { Suspense, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"

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
      style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}
    >
      Message sent. Miles will reply to the email you provided.
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
