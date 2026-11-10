import { COPY } from "@/lib/copy-todo"

/** Resume-only facts. This module must only be imported by the resume route. */
export const resumeData = {
  company: "W Principles, LLC",
  bsSchool: "Morehead State University",
  bsDegree: "BS, Engineering Technology Management",
  bsYear: "2022",
  realtorOrg: "Keller Williams / National Real Estate",
  realtorTitle: "Realtor",
  realtorDates: "Oct 2021 – Dec 2025",
  realtorHighlight: "Top 5% nationwide producer, 2022",
  fieldProjects: [
    {
      href: "/projects/one-senior-care",
      name: "One Senior Care - Morehead, KY",
      when: "Completed Aug 2026",
      points: [
        "$3M PACE facility · 10,060 SF PEMB",
        COPY.resumeOneSeniorCareTradeNote,
      ],
    },
    {
      href: "/projects/camp-taylor-pool",
      name: "Camp Taylor Memorial Park Pool — Louisville, KY",
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
      when: "Reopened May 25, 2024",
      points: [
        "Renovation at Wendell Moore Park",
        "Lap pool, recreation pool, water slide, and mechanical systems",
      ],
    },
  ],
} as const
