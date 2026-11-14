export type Photo = { src: string; width: number; height: number; alt: string }

const osc = "/projects/one-senior-care"

export const coverSlides = [
  { src: `${osc}/aerial-2026-10-07-1.jpg`, width: 1600, height: 900, alt: "Aerial of the finished senior care building with its new parking lot and landscaping", caption: "Complete · October 2026" },
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
  { label: "Site work · August 2026", photos: [
    { src: `${osc}/aerial-2026-08-19-1.jpg`, width: 1600, height: 900, alt: "Overhead drone view of the metal roof with the lot still graded for paving" },
    { src: `${osc}/aerial-2026-08-19-2.jpg`, width: 1600, height: 900, alt: "Aerial of the building shell at dawn with safety barrels along the street side" },
    { src: `${osc}/aerial-2026-08-19-3.jpg`, width: 1600, height: 900, alt: "Aerial of the building corner at dawn with site fencing and barrels around the frontage" },
  ] },
]

export const aerialPhotos: Photo[] = [
  { src: `${osc}/aerial-2026-10-07-1.jpg`, width: 1600, height: 900, alt: "Aerial of the finished senior care building with its new parking lot and landscaping" },
  { src: `${osc}/aerial-2026-10-07-2.jpg`, width: 1600, height: 900, alt: "High aerial of the finished building and the surrounding downtown blocks" },
  { src: `${osc}/aerial-2026-10-07-3.jpg`, width: 1600, height: 900, alt: "Aerial of the finished building from above the street corner, with fall color on the hills" },
  { src: `${osc}/aerial-2026-10-07-4.jpg`, width: 1600, height: 900, alt: "Aerial of the front entry, striped parking and new trees" },
  { src: `${osc}/aerial-2026-10-07-5.jpg`, width: 1600, height: 900, alt: "Aerial of the finished building and parking lot from the side street" },
]

export const facilityPhotos: Photo[] = [
  { src: `${osc}/facility-interior.jpg`, width: 1800, height: 1013, alt: "Painted room with exposed steel and ductwork inside the senior care building" },
  { src: `${osc}/facility-therapy.jpg`, width: 1800, height: 1013, alt: "Therapy space with parallel bars and a wood handrail" },
  { src: `${osc}/facility-restroom.jpg`, width: 1350, height: 1800, alt: "Accessible restroom with grab bars" },
]
