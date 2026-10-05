"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

function Notice() {
  const sent = useSearchParams().get("sent") === "true"
  if (!sent) return null

  return (
    <p
      role="status"
      className="mb-6 rounded px-4 py-3 text-sm font-medium"
      style={{ background: "var(--paper-warm)", color: "var(--ink)" }}
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
