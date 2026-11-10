import type { Metadata } from "next"
import { Inter, Fraunces } from "next/font/google"
import "./globals.css"
import { Nav } from "@/components/layout/Nav"
import { Footer } from "@/components/layout/Footer"
import { CANONICAL_ORIGIN, OG_IMAGE_ALT, ogImageUrl } from "@/lib/site"

const LINKEDIN_URL = "https://www.linkedin.com/in/miles-goodman-cm"

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
  title: "Miles Goodman | Construction & field reporting",
  description: "Commercial construction experience and AI field tools by Miles Goodman, a site superintendent in Kentucky.",
  alternates: {
    canonical: `${CANONICAL_ORIGIN}/`,
  },
  openGraph: {
    type: "website",
    siteName: "Miles Goodman",
    locale: "en_US",
    title: "Miles Goodman | Construction & field reporting",
    description: "Commercial construction experience and AI field tools by Miles Goodman, a site superintendent in Kentucky.",
    url: `${CANONICAL_ORIGIN}/`,
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
    title: "Miles Goodman | Construction & field reporting",
    description: "Commercial construction experience and AI field tools by Miles Goodman, a site superintendent in Kentucky.",
    images: [{ url: ogImageUrl(), alt: OG_IMAGE_ALT }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
            { "@type": "Person", name: "Miles Goodman", url: CANONICAL_ORIGIN, sameAs: [LINKEDIN_URL], jobTitle: "Site Superintendent" },
            { "@type": "WebSite", name: "Miles Goodman", url: CANONICAL_ORIGIN },
          ] }) }}
        />
      </body>
    </html>
  )
}
