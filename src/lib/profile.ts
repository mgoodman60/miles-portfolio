import { OSC_TITLE } from "@/lib/projects-copy"

export const profile = {
  name: "Miles Goodman",
  role: "Site Superintendent",
  company: "W Principles, LLC",
  location: "Mount Sterling, KY",
  email: "msgoodman1997@gmail.com",
  phoneDisplay: "(606) 226-5231",
  phoneHref: "tel:+16062265231",
  mbaSchool: "Northern Kentucky University",
  mbaProgram: "Project Management & AI",
  mbaExpected: "Expected 2026",
  bsSchool: "Morehead State University",
  bsDegree: "BS, Engineering Technology Management",
  bsYear: "2022",
  ctm: "Certified Technology Manager (CTM)",
  realtorOrg: "Keller Williams / National Real Estate",
  realtorTitle: "Realtor",
  realtorDates: "Oct 2021 to Dec 2025",
  realtorHighlight: "Top 5% nationwide producer, 2022",
} as const

export const fieldProjects = [
  {
    href: "/projects/one-senior-care",
    name: "One Senior Care - Morehead, KY",
    timeline: `${OSC_TITLE} · Complete`,
    year: "2026",
    timelineDetail: "Site Superintendent · PACE senior care facility",
    when: "Completed Aug 2026",
    points: [
      "PACE facility · 10,060 SF PEMB",
      "Concrete self-perform",
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
      "W Principles lists construction complete in November 2025",
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
