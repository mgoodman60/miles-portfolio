import type { Metadata } from "next"
import { Inter, Fraunces } from "next/font/google"
import "./globals.css"
import { Nav } from "@/components/layout/Nav"
import { Footer } from "@/components/layout/Footer"

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
  metadataBase: new URL("https://miles-goodman.vercel.app"),
  title: "Miles Goodman — Site Superintendent",
  description:
    "Portfolio of Miles Goodman, Site Superintendent at W Principles, LLC. Commercial construction in Kentucky — $22M+ delivered.",
  openGraph: {
    title: "Miles Goodman — Site Superintendent",
    description: "Commercial construction portfolio — $22M+ delivered across Kentucky.",
    images: ["/projects/camp-taylor/night-pour-hero.jpg"],
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
