#!/usr/bin/env node
import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const root = path.resolve(import.meta.dirname, "..")
const camp = path.join(root, "public/projects/camp-taylor")
const extra = [
  path.join(root, "public/projects/john-black/drone-01.jpg"),
  path.join(root, "public/projects/one-senior-care/facility-interior.jpg"),
]
const widths = [640, 1080, 1600]
const campFiles = (await fs.readdir(camp)).filter((file) => /\.jpe?g$/i.test(file)).map((file) => path.join(camp, file))

for (const source of [...campFiles, ...extra]) {
  const parsed = path.parse(source)
  for (const width of widths) {
    const avif = path.join(parsed.dir, `${parsed.name}-${width}.avif`)
    const webp = path.join(parsed.dir, `${parsed.name}-${width}.webp`)
    try {
      await fs.access(avif)
      await fs.access(webp)
      continue
    } catch {}
    const image = sharp(source).resize({ width, withoutEnlargement: true })
    await image.clone().avif({ quality: 52 }).toFile(avif)
    await image.clone().webp({ quality: 72 }).toFile(webp)
  }
}
