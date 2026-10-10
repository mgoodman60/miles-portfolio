import type { MetadataRoute } from "next"
import { canonicalUrl } from "@/lib/site"

// Keep stable personal pages discoverable; omit the empty writing index and query states.
const paths = [
  "/", "/projects", "/projects/camp-taylor-pool", "/projects/john-black-aquatic",
  "/projects/one-senior-care-morehead", "/ai-tools", "/my-reports", "/about",
  "/resume", "/contact",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: canonicalUrl(path) }))
}
