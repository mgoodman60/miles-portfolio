import type { ImgHTMLAttributes } from "react"

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & { src: string; width: number; height: number; priority?: boolean; responsive?: boolean }

export function ResponsivePicture({ src, width, height, priority = false, responsive = false, loading, fetchPriority, sizes = "100vw", ...props }: Props) {
  const base = src.replace(/\.[^.]+$/, "")
  const fallback = src
  const avifSrcSet = `${base}-640.avif 640w, ${base}-1080.avif 1080w, ${base}-1600.avif 1600w`
  const webpSrcSet = `${base}-640.webp 640w, ${base}-1080.webp 1080w, ${base}-1600.webp 1600w`
  return <>
    {priority && responsive ? <link rel="preload" as="image" type="image/avif" href={`${base}-1080.avif`} imageSrcSet={avifSrcSet} imageSizes={sizes} fetchPriority="high" /> : null}
    <picture>
    {responsive ? <><source type="image/avif" srcSet={avifSrcSet} sizes={sizes} /><source type="image/webp" srcSet={webpSrcSet} sizes={sizes} /></> : null}
    <img src={fallback} width={width} height={height} sizes={sizes} loading={priority ? "eager" : loading ?? "lazy"} fetchPriority={priority ? "high" : fetchPriority} decoding="async" {...props} />
    </picture>
  </>
}
