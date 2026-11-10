export type PortfolioImage = { base: string; alt: string; width: number; height: number }
type RealPiece = { type: "real"; slug: string; title: string; lineKey: "portfolioMilestoneSolutionsLine" | "portfolioAngieCLine"; href?: string; browser: PortfolioImage; phone: PortfolioImage }
type ConceptPiece = { type: "concept"; slug: string; title: string; browser: PortfolioImage; phone: PortfolioImage }
export type PortfolioPiece = RealPiece | ConceptPiece

export const portfolioPieces: readonly PortfolioPiece[] = [
  {
    type: "real", slug: "milestone-solutions", title: "Milestone Solutions", lineKey: "portfolioMilestoneSolutionsLine", href: "https://milestone-solutions.pages.dev",
    browser: { base: "/portfolio/milestone-solutions/home-browser", alt: "Milestone Solutions home page shown in a browser frame", width: 1444, height: 958 },
    phone: { base: "/portfolio/milestone-solutions/creative-phone", alt: "Milestone Solutions creative page shown in a phone frame", width: 852, height: 1748 },
  },
  {
    type: "real", slug: "angie-c", title: "Angie C. Photography", lineKey: "portfolioAngieCLine",
    browser: { base: "/portfolio/angie-c/home-browser", alt: "Angie C. Photography home page shown in a browser frame", width: 1444, height: 958 },
    phone: { base: "/portfolio/angie-c/weddings-phone", alt: "Angie C. Photography weddings page shown in a phone frame", width: 852, height: 1748 },
  },
] as const
