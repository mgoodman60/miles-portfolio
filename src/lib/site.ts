import type { Metadata } from "next"

/**
 * One public origin for pages, social images and contact returns.
 * Railway is the verified working deployment. Set NEXT_PUBLIC_SITE_URL
 * when a replacement public domain serves this app; this value is built in.
 */
export const LIVE_ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://miles-portfolio-production.up.railway.app"
).replace(/\/$/, "")

export const CANONICAL_ORIGIN = LIVE_ORIGIN

export const OG_IMAGE_PATH = "/social-preview"
export const OG_IMAGE_ALT = "Miles Goodman: construction experience and field reporting in Kentucky"

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
      type: "website",
      siteName: "Miles Goodman",
      locale: "en_US",
      title,
      description,
      url: canonical,
      images: [
        {
          url: ogImageUrl(),
          width: 1200,
          height: 630,
          alt: OG_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImageUrl(), alt: OG_IMAGE_ALT }],
    },
  }
}
