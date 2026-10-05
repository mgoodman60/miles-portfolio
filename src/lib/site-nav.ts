/** Header and footer destinations. Case-study labels match each project page H1. */

export type NavLink = {
  href: string
  label: string
  /** Shown under the label in the Construction menu. */
  meta?: string
  /** Match the path exactly. Needed so `/projects` is not current on every case study. */
  exact?: boolean
  /** Draw a divider above this item. */
  separated?: boolean
}

export const constructionProjects: readonly NavLink[] = [
  {
    href: "/projects/camp-taylor-pool",
    label: "Camp Taylor Memorial Park Pool",
    meta: "Louisville, KY",
  },
  {
    href: "/projects/john-black-aquatic",
    label: "John W. Black Aquatic Center",
    meta: "La Grange, KY",
  },
  {
    href: "/projects/one-senior-care-morehead",
    label: "One Senior Care - Morehead",
    meta: "Morehead, KY",
  },
]

export const allProjectsLink: NavLink = {
  href: "/projects",
  label: "All projects",
  exact: true,
  separated: true,
}

export const constructionLinks: readonly NavLink[] = [...constructionProjects, allProjectsLink]

export const aboutLinks: readonly NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
]

export const footerLinks: readonly NavLink[] = [
  { href: "/ai-tools", label: "AI" },
  { href: "/projects", label: "Construction" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
  { href: "/my-reports", label: "My Reports" },
]

export function linkIsCurrent(pathname: string, link: NavLink): boolean {
  if (link.exact) return pathname === link.href
  return pathname === link.href || pathname.startsWith(`${link.href}/`)
}
