// Curated Morehead One Senior Care set (web JPEGs). Width and height are the
// saved pixel sizes so the gallery keeps portrait and landscape frames.
export type Photo = { src: string; width: number; height: number; alt: string }

const morehead = "/projects/morehead"

export const dronePhotos: Photo[] = [
  {
    src: `${morehead}/aerial-2026-03-23-site.jpg`,
    width: 1800,
    height: 1012,
    alt: "Aerial of the Morehead site during steel erection, March 2026",
  },
  {
    src: `${morehead}/aerial-2026-03-23-structure.jpg`,
    width: 1800,
    height: 1012,
    alt: "Closer aerial of the steel frame and concrete slab, March 2026",
  },
  {
    src: `${morehead}/aerial-2026-04-15-sheathing.jpg`,
    width: 1800,
    height: 1012,
    alt: "Aerial of the sheathed building frame, April 2026",
  },
  {
    src: `${morehead}/aerial-2026-07-14-overhead.jpg`,
    width: 1800,
    height: 1012,
    alt: "Overhead aerial of the enclosed senior-care building, July 2026",
  },
  {
    src: `${morehead}/aerial-2026-07-14-front.jpg`,
    width: 1800,
    height: 1012,
    alt: "Front aerial of the enclosed building and gravel site, July 2026",
  },
  {
    src: `${morehead}/aerial-2026-07-14-corner.jpg`,
    width: 1800,
    height: 1012,
    alt: "Corner aerial of the enclosed building, July 2026",
  },
]

export const droneHeroSlides: { src: string; alt: string }[] = [
  dronePhotos[3],
  dronePhotos[4],
  dronePhotos[5],
  dronePhotos[0],
].map(({ src, alt }) => ({ src, alt }))

export const progressFoundation: Photo[] = [
  {
    src: `${morehead}/build-2026-02-19-slab.jpg`,
    width: 1800,
    height: 1350,
    alt: "Concrete slab with anchor bolts and vertical rebar, February 2026",
  },
  {
    src: `${morehead}/build-2026-03-04-footing.jpg`,
    width: 1800,
    height: 1350,
    alt: "Excavated footing with a rebar cage, March 2026",
  },
  {
    src: `${morehead}/build-2026-03-10-anchors.jpg`,
    width: 1800,
    height: 1350,
    alt: "Anchor bolts set along the slab edge, March 2026",
  },
]

export const progressEnclosure: Photo[] = [
  {
    src: `${morehead}/build-2026-03-18-steel.jpg`,
    width: 1800,
    height: 1350,
    alt: "Red iron columns and beams going up over the slab, March 2026",
  },
  {
    src: `${morehead}/build-2026-04-01-framing.jpg`,
    width: 1800,
    height: 1350,
    alt: "Metal stud framing inside the steel structure, April 2026",
  },
  {
    src: `${morehead}/build-2026-04-15-sheathing.jpg`,
    width: 1800,
    height: 1012,
    alt: "Sheathing on the exterior walls, April 2026",
  },
  {
    src: `${morehead}/build-2026-04-30-roof.jpg`,
    width: 1800,
    height: 1350,
    alt: "Roof panels on the pre-engineered metal building, April 2026",
  },
]

export const progressInterior: Photo[] = [
  {
    src: `${morehead}/build-2026-05-20-interior.jpg`,
    width: 1800,
    height: 1350,
    alt: "Interior metal stud walls and ceiling framing, May 2026",
  },
  {
    src: `${morehead}/build-2026-05-27-drywall.jpg`,
    width: 1800,
    height: 1350,
    alt: "Drywall hung on interior partitions, May 2026",
  },
]

export const facilityPhotos: Photo[] = [
  {
    src: `${morehead}/facility-clinic.jpg`,
    width: 1800,
    height: 1350,
    alt: "Clinic room with a handwashing station, mirror, and base cabinets",
  },
  {
    src: `${morehead}/facility-activity.jpg`,
    width: 1800,
    height: 1350,
    alt: "Activity room with tables, chairs, and a wall-mounted screen",
  },
  {
    src: `${morehead}/facility-corridor.jpg`,
    width: 1800,
    height: 1350,
    alt: "Corridor with wood doors, a handrail, and a nurses' station",
  },
]
