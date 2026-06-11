import type { CSSProperties, MouseEvent } from "react"

import { StoryLinkButton, type StoryMetadata } from "@/components/story-layout"
import { getAvifSource, useReducedMotion } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const mediaGradient = `
  linear-gradient(to bottom, #000 0%, #000 78%, rgba(0,0,0,0.58) 90%, transparent 100%),
  linear-gradient(110deg, #000 80%, rgba(0,0,0,0.68) 95%, transparent 100%),
  linear-gradient(250deg, #000 80%, rgba(0,0,0,0.68) 95%, transparent 100%)
  `

const mediaFadeMaskStyle = {
  WebkitMaskImage: mediaGradient,
  maskImage: mediaGradient,
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
} as CSSProperties

type FeaturedStory = {
  metadata: StoryMetadata
  path: `/stories/${string}`
  slug: string
}

type FeaturedMedium = StoryMetadata["media"][number]

function FeaturedMedia({ medium }: { medium: FeaturedMedium }) {
  const reducedMotion = useReducedMotion()

  if (medium.filepath.endsWith(".mp4")) {
    return (
      <video
        aria-label={medium.alt}
        autoPlay={!reducedMotion}
        className="aspect-video w-full object-cover object-top"
        controls={reducedMotion}
        loop
        muted
        playsInline
        style={mediaFadeMaskStyle}
      >
        <source src={medium.filepath} type="video/mp4" />
      </video>
    )
  }

  const avifSource = getAvifSource(medium.filepath)

  return (
    <picture className="select-none">
      {avifSource ? <source srcSet={avifSource} type="image/avif" /> : null}
      <img
        alt={medium.alt}
        className="aspect-video w-full object-cover object-top"
        loading="lazy"
        src={medium.filepath}
        style={mediaFadeMaskStyle}
      />
    </picture>
  )
}

function shouldHandleClientNavigation(event: MouseEvent<HTMLAnchorElement>) {
  return (
    !event.defaultPrevented &&
    event.button === 0 &&
    !event.metaKey &&
    !event.altKey &&
    !event.ctrlKey &&
    !event.shiftKey
  )
}

export function FeaturedWorkRow({
  onOpenStory,
  story,
}: {
  onOpenStory: (slug: string) => void
  story: FeaturedStory
}) {
  const { metadata } = story
  const firstMedium = metadata.media[0]

  if (!firstMedium) {
    return null
  }

  return (
    <article className="space-y-10 border-t border-border py-16 md:space-y-16 md:py-34">
      <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
        <div className="space-y-5">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {metadata.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <p className="max-w-2xl text-base leading-6 text-balance text-muted-foreground sm:text-xl sm:leading-8">
            {metadata.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <StoryLinkButton
              href={story.path}
              onClick={(event) => {
                if (!shouldHandleClientNavigation(event)) {
                  return
                }

                event.preventDefault()
                onOpenStory(story.slug)
              }}
            >
              Read the story
            </StoryLinkButton>
          </div>
        </div>
      </div>
      <div>
        <Separator className="max-w-[90%] mx-auto mb-1"/>
        <FeaturedMedia medium={firstMedium} />
      </div>
    </article>
  )
}
