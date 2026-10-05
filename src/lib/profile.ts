/**
 * Facts for About, Resume, and Contact.
 * Education, dates, and the Top 5% line match public/Miles_Goodman_Resume.pdf.
 * Job-search lines from that file (relocation) stay off the site.
 */

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
  realtorOrg: "Keller Williams Realty",
  realtorTitle: "Realtor",
  realtorDates: "Oct 2021 – Nov 2025",
  realtorHighlight: "Top 5% nationwide producer, 2022",
} as const

export const fieldProjects = [
  {
    href: "/projects/one-senior-care-morehead",
    name: "One Senior Care - Morehead, KY",
    timeline: "One Senior Care - Morehead — Complete",
    year: "2026",
    timelineDetail: "Site Superintendent · $3M PACE facility",
    when: "Completed Aug 2026",
    points: [
      "$3M PACE facility · 10,060 SF PEMB",
      "Concrete self-perform under Walker Company of Kentucky",
    ],
  },
  {
    href: "/projects/camp-taylor-pool",
    name: "Camp Taylor Memorial Park Pool — Louisville, KY",
    timeline: "Camp Taylor Memorial Park Pool — Complete",
    year: "2025",
    timelineDetail: "Site Superintendent · $6.2M ARPA-funded",
    when: "Completed Nov 2025",
    points: [
      "$6.2M ARPA-funded new construction",
      "Zero-depth entry, lap lanes, waterslide",
      "Press: WAVE 3, WHAS 11, WDRB",
    ],
  },
  {
    href: "/projects/john-black-aquatic",
    name: "John W. Black Aquatic Center — La Grange, KY",
    timeline: "John W. Black Aquatic Center — Complete",
    year: "2024",
    timelineDetail: "Site Superintendent · $3.7M renovation",
    when: "Completed 2024",
    points: [
      "$3.7M complete renovation",
      "Structural demo, pool shell replacement, MEP, site improvements",
      "Delivered on schedule for 2024 swim season",
    ],
  },
] as const
