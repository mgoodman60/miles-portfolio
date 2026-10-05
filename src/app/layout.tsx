import type { Metadata } from "next"
import { Inter, Fraunces } from "next/font/google"
import "./globals.css"
import { Nav } from "@/components/layout/Nav"
import { Footer } from "@/components/layout/Footer"
import { CANONICAL_ORIGIN, ogImageUrl } from "@/lib/site"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
})

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_ORIGIN),
  title: "Miles Goodman — Site Superintendent",
  description:
    "Portfolio of Miles Goodman, Site Superintendent at W Principles, LLC. Commercial construction in Kentucky — $13M directly managed, ~$22M contributed-to.",
  alternates: {
    canonical: `${CANONICAL_ORIGIN}/`,
  },
  openGraph: {
    title: "Miles Goodman — Site Superintendent",
    description: "Commercial construction portfolio — $13M directly managed, ~$22M contributed-to across Kentucky.",
    url: `${CANONICAL_ORIGIN}/`,
    images: [
      {
        url: ogImageUrl(),
        alt: "Night concrete pour at Camp Taylor Memorial Park Pool",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
