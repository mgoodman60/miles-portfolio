import { PortfolioMockups } from "@/components/sections/PortfolioMockups"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { withCanonical } from "@/lib/site"

export const metadata = withCanonical("/portfolio", { title: "Websites | Miles Goodman", description: "Websites I've built: my Milestone business site, a photography site, and this one." })

export default function PortfolioPage() {
  return <><section className="px-6 pb-16 pt-40 md:px-12" style={{ background: "var(--band)" }}><div className="mx-auto max-w-[1480px]"><SectionEyebrow className="mb-4 !text-[var(--creative)]">Milestone Creative</SectionEyebrow><h1 className="serif text-[clamp(40px,5.5vw,80px)] font-light leading-[.95] tracking-tight text-[var(--ink)]">Portfolio</h1><p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)]">Websites I&apos;ve built: my Milestone business site, a photography site, and this one.</p></div></section><section className="px-6 py-20 md:px-12"><div className="mx-auto max-w-[1480px]"><PortfolioMockups /></div></section></>
}
