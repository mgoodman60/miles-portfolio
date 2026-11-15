/** Architectural renderings. Files live in /public/renderings as -800/-1600 AVIF and WebP plus a 1600px JPEG. */
export type Rendering = { file: string; alt: string }
export type RenderingProject = { id: string; title: string; summary: string; items: Rendering[] }

export const RENDER_W = 1600
export const RENDER_H = 899

export const renderingProjects: RenderingProject[] = [
  {
    id: "warehouse",
    title: "Warehouse concept",
    summary: "Exterior renderings of a distribution warehouse: aerial overviews, the dock yards, and twilight and dusk views at eye level.",
    items: [
      { file: "warehouse-01", alt: "Warehouse concept, aerial overview with dock doors, trailers and the truck yard" },
      { file: "warehouse-02", alt: "Warehouse concept, aerial of the dock side with trailers backed into the doors" },
      { file: "warehouse-03", alt: "Warehouse concept, dock doors lit at twilight with trailers and a pickup in the yard" },
      { file: "warehouse-04", alt: "Warehouse concept, low aerial of the dock yard in late afternoon light" },
      { file: "warehouse-05", alt: "Warehouse concept, wide aerial of the west yard in hazy morning light" },
      { file: "warehouse-06", alt: "Warehouse concept, aerial of the west docks and staff parking" },
      { file: "warehouse-07", alt: "Warehouse concept, eye-level view of the west docks at dusk" },
    ],
  },
  {
    id: "pace-interiors",
    title: "PACE center interiors",
    summary: "Interior renderings for a PACE senior care center: the day room, an exam room, an accessible bathroom and the kitchen.",
    items: [
      { file: "pace-interior-01", alt: "PACE center interior render, day room with lounge chairs and tables looking toward the entry" },
      { file: "pace-interior-02", alt: "PACE center interior render, exam room with an exam table and wall-mounted equipment" },
      { file: "pace-interior-03", alt: "PACE center interior render, accessible bathroom with a roll-in shower and grab bars" },
      { file: "pace-interior-04", alt: "PACE center interior render, kitchen with stainless refrigerators, range and prep island" },
    ],
  },
]

export const renderingSrc = (file: string) => ({
  avif: `/renderings/${file}-800.avif 800w, /renderings/${file}-1600.avif 1600w`,
  webp: `/renderings/${file}-800.webp 800w, /renderings/${file}-1600.webp 1600w`,
  jpg: `/renderings/${file}.jpg`,
})
