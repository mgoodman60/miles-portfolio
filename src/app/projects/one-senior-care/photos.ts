export type Photo = { src: string; width: number; height: number; alt: string }

const osc = "/projects/one-senior-care"

export const coverSlides = [
  { src: `${osc}/facility-interior.jpg`, width: 1800, height: 1013, alt: "Painted room with exposed steel and ductwork inside the senior care building", caption: "Complete" },
  { src: `${osc}/facility-therapy.jpg`, width: 1800, height: 1013, alt: "Therapy space with parallel bars and a wood handrail", caption: "Complete" },
  { src: `${osc}/build-2026-06-18-mep.jpg`, width: 1800, height: 1013, alt: "Plumbing and electrical rough-in between metal stud walls", caption: "Complete" },
]

export const progressGroups: { label: string; photos: Photo[] }[] = [
  { label: "Foundation", photos: [{ src: `${osc}/build-2026-03-04-footing.jpg`, width: 1350, height: 1800, alt: "Excavated footing with a rebar cage" }] },
  { label: "Structure", photos: [{ src: `${osc}/build-2026-04-30-roof.jpg`, width: 1350, height: 1800, alt: "Roof steel on the pre-engineered metal building, seen from below" }] },
  { label: "Interior", photos: [
    { src: `${osc}/build-2026-05-20-interior.jpg`, width: 1350, height: 1800, alt: "Interior metal stud walls and ceiling framing" },
    { src: `${osc}/build-2026-06-18-mep.jpg`, width: 1800, height: 1013, alt: "Plumbing and electrical rough-in between metal stud walls" },
  ] },
]

export const facilityPhotos: Photo[] = [
  { src: `${osc}/facility-interior.jpg`, width: 1800, height: 1013, alt: "Painted room with exposed steel and ductwork inside the senior care building" },
  { src: `${osc}/facility-therapy.jpg`, width: 1800, height: 1013, alt: "Therapy space with parallel bars and a wood handrail" },
  { src: `${osc}/facility-restroom.jpg`, width: 1350, height: 1800, alt: "Accessible restroom with grab bars" },
]
