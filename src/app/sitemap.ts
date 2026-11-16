import type { MetadataRoute } from "next"
import { canonicalUrl } from "@/lib/site"

export const dynamic = "force-static"

// Keep stable personal pages discoverable; omit the empty writing index and query states.
const paths = [
  "/", "/projects", "/projects/camp-taylor-pool", "/projects/john-black-aquatic",
  "/projects/one-senior-care", "/ai-tools", "/my-reports", "/portfolio", "/about",
  "/resume", "/contact",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: canonicalUrl(path) }))
}
