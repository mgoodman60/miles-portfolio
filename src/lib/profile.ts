import { COPY } from "@/lib/copy-todo"

/**
 * Public-safe facts used outside the resume route.
 * Resume-only employer and undergraduate-school facts live beside the resume page.
 */

export const profile = {
  name: "Miles Goodman",
  role: "Site Superintendent",
  location: "Central Kentucky",
  email: "msgoodman1997@gmail.com",
  phoneDisplay: "(606) 226-5231",
  phoneHref: "tel:+16062265231",
  mbaSchool: "Northern Kentucky University",
  mbaProgram: "Project Management & AI",
  mbaExpected: "Expected 2026",
  ctm: "Certified Technology Manager (CTM)",
} as const

export const fieldProjects = [
  {
    href: "/projects/one-senior-care",
    name: "One Senior Care",
    timeline: "One Senior Care — Complete",
    year: "2026",
    timelineDetail: COPY.oneSeniorCareRole,
    when: "Completed Aug 2026",
    points: [
      COPY.oneSeniorCareSummary,
    ],
  },
  {
    href: "/projects/camp-taylor-pool",
    name: "Camp Taylor Memorial Park Pool — Louisville, KY",
    timeline: "Camp Taylor Memorial Park Pool — Opened May 2026",
    year: "2026",
    timelineDetail: "Site Superintendent · $6.2M ARPA · public opening May 23, 2026",
    when: "Opened May 23, 2026",
    points: [
      "$6.2M ARPA-funded waterpark",
      "Zero-depth entry, lap lanes, slide, and play area",
      "Construction complete November 2025",
    ],
  },
  {
    href: "/projects/john-black-aquatic",
    name: "John W. Black Aquatic Center — La Grange, KY",
    timeline: "John W. Black Aquatic Center — Reopened May 2024",
    year: "2024",
    timelineDetail: "Site Superintendent · Reopened May 25, 2024",
    when: "Reopened May 25, 2024",
    points: [
      "Renovation at Wendell Moore Park",
      "Lap pool, recreation pool, water slide, and mechanical systems",
    ],
  },
] as const
