import type { Metadata } from "next"

/**
 * Intended public domain. Canonical URLs use this host.
 * milesgoodman.xyz can still 402 until DNS is pointed at the app —
 * do not buy DNS or change host records from this repo.
 */
export const CANONICAL_ORIGIN = "https://milesgoodman.xyz"

/**
 * Host that currently serves HTML and images.
 * Set NEXT_PUBLIC_SITE_URL when the brand domain itself returns 200
 * so Open Graph assets and the contact redirect follow one switch.
 */
export const LIVE_ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://miles-portfolio-production.up.railway.app"
).replace(/\/$/, "")

export const OG_IMAGE_PATH = "/projects/camp-taylor/night-pour-hero.jpg"

export function canonicalUrl(path: string) {
  if (path === "/" || path === "") return `${CANONICAL_ORIGIN}/`
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${CANONICAL_ORIGIN}${normalized}`
}

/** Absolute image URL on the live host so crawlers do not hit a disabled deploy. */
export function ogImageUrl() {
  return `${LIVE_ORIGIN}${OG_IMAGE_PATH}`
}

export function withCanonical(path: string, metadata: Metadata): Metadata {
  const canonical = canonicalUrl(path)
  const title = typeof metadata.title === "string" ? metadata.title : undefined
  const description = typeof metadata.description === "string" ? metadata.description : undefined

  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [
        {
          url: ogImageUrl(),
          alt: "Night concrete pour at Camp Taylor Memorial Park Pool",
        },
      ],
    },
  }
}
