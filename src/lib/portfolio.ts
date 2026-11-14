export type PortfolioImage = { base: string; alt: string; width: number; height: number }
type ScreenshotPiece = { type: "real"; slug: string; title: string; line: string; href?: string; browser: PortfolioImage; phone: PortfolioImage }
type TextPiece = { type: "text"; slug: string; title: string; line: string; href: string }
type ConceptPiece = { type: "concept"; slug: string; title: string; line: string; browser: PortfolioImage; phone: PortfolioImage }
export type PortfolioPiece = ScreenshotPiece | TextPiece | ConceptPiece

export const portfolioPieces: readonly PortfolioPiece[] = [
  { type: "real", slug: "milestone-solutions", title: "Milestone Solutions", line: "My business site. I offer AI automation, training and consulting, plus architectural renderings and 3D models.", href: "https://milestone-solutions.pages.dev", browser: { base: "/portfolio/milestone-solutions/home-browser", alt: "Milestone Solutions home page shown in a browser frame", width: 1444, height: 958 }, phone: { base: "/portfolio/milestone-solutions/creative-phone", alt: "Milestone Solutions creative page shown in a phone frame", width: 852, height: 1748 } },
  { type: "real", slug: "angie-c", title: "Angie C. Photography", line: "A website I built for Angie C. Photography, with galleries for senior sessions, sports, weddings and seasonal minis.", browser: { base: "/portfolio/angie-c/home-browser", alt: "Angie C. Photography home page shown in a browser frame", width: 1444, height: 958 }, phone: { base: "/portfolio/angie-c/weddings-phone", alt: "Angie C. Photography weddings page shown in a phone frame", width: 852, height: 1748 } },
  // screenshots: plan step 9
  { type: "text", slug: "personal-site", title: "This personal site", line: "This site: my construction work as a site superintendent, the case studies, and my resume.", href: "/" },
] as const
