#!/usr/bin/env node
import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const root = path.resolve(import.meta.dirname, "..")
const projectImageDirectories = [
  path.join(root, "public/projects/camp-taylor"),
  path.join(root, "public/projects/john-black"),
  path.join(root, "public/projects/one-senior-care"),
]
const widths = [640, 1080, 1600]
const projectFiles = (await Promise.all(projectImageDirectories.map(async (directory) =>
  (await fs.readdir(directory)).filter((file) => /\.jpe?g$/i.test(file)).map((file) => path.join(directory, file)),
))).flat()

for (const source of projectFiles) {
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
