import { HeroSlideshow } from "./HeroSlideshow"

/** Headshot from the Milestone /about page (4:5). Small above the headline on phones, framed beside it on desktop. */
function HeroHeadshot() {
  const sizes = "(min-width: 1024px) 360px, 120px"
  return (
    <div className="w-[120px] overflow-hidden rounded border border-white/30 shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:w-[160px] lg:ml-auto lg:w-full lg:max-w-[360px]">
      <picture>
        <source srcSet="/headshot-o-480.avif 480w, /headshot-o-960.avif 960w" sizes={sizes} type="image/avif" />
        <source srcSet="/headshot-o-480.webp 480w, /headshot-o-960.webp 960w" sizes={sizes} type="image/webp" />
        <img
          src="/headshot-o-480.jpg"
          srcSet="/headshot-o-480.jpg 480w, /headshot-o-960.jpg 960w"
          sizes={sizes}
          alt="Miles Goodman"
          width={960}
          height={1200}
          decoding="async"
          className="block h-auto w-full object-cover object-top"
        />
      </picture>
    </div>
  )
}

export function PersonalHero() {
  return (
    <HeroSlideshow identity="personal">
      <HeroHeadshot />
    </HeroSlideshow>
  )
}
