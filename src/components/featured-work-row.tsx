import type { CSSProperties } from "react"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn, getAvifSource, useReducedMotion } from "@/lib/utils"
import type { FeaturedProject, FeaturedProjectMedia } from "@/types/content"
import { Button, LinkButton } from "@/components/ui/button"
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

const featuredCopyEase = [0.22, 1, 0.36, 1] as const

function FeaturedMediaImage({ item }: { item: FeaturedProjectMedia }) {
  if (item.image.endsWith(".mp4")) {
    return (
      <video
        className="aspect-video w-full object-cover object-top"
        autoPlay
        muted
        loop
        playsInline
        style={mediaFadeMaskStyle}
      >
        <source src={item.image} type="video/mp4" />
      </video>
    )
  }

  const avifSource = getAvifSource(item.image)

  return (
    <picture className="select-none">
      {avifSource ? <source srcSet={avifSource} type="image/avif" /> : null}
      <img
        alt={item.imageAlt}
        className="aspect-video w-full object-cover object-top"
        src={item.image}
        style={mediaFadeMaskStyle}
      />
    </picture>
  )
}

export function FeaturedWorkRow({ project }: { project: FeaturedProject }) {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const reducedMotion = useReducedMotion()
  const activeMedia = project.media[selectedIndex] ?? project.media[0]

  useEffect(() => {
    if (!api) return

    const updateSelectedIndex = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    api.on("select", updateSelectedIndex)
    api.on("reInit", updateSelectedIndex)

    return () => {
      api.off("select", updateSelectedIndex)
      api.off("reInit", updateSelectedIndex)
    }
  }, [api])

  if (!activeMedia) {
    return null
  }

  const activeLink = activeMedia.link

  return (
    <article className="space-y-16 border-t border-border py-10 md:py-34">
      <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
        <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h3>

        <div className="h-48 overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
              className="flex h-full flex-col justify-between"
              exit={reducedMotion ? undefined : { opacity: 0, x: -6 }}
              initial={reducedMotion ? false : { opacity: 0, x: 8 }}
              key={`${project.id}-${selectedIndex}`}
              transition={
                reducedMotion
                  ? undefined
                  : { duration: 0.45, ease: featuredCopyEase }
              }
            >
              <p className="max-w-2xl text-xl leading-8 text-balance text-muted-foreground">
                {activeMedia.paragraph}
              </p>

              <div>
                {activeLink ? (
                  <LinkButton href={activeLink.href}>
                    {activeLink.label}
                  </LinkButton>
                ) : null}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Carousel
        className="w-full"
        opts={{ align: "start", loop: project.media.length > 1 }}
        setApi={setApi}
      >
        <CarouselContent>
          {project.media.map((item, index) => (
            <CarouselItem key={`${project.id}-${index}`}>
              <Separator
                orientation={"horizontal"}
                className="mx-auto my-2 max-w-[90%]"
              />
              <FeaturedMediaImage item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {project.media.length > 1 ? (
          <>
            <CarouselPrevious />
            <CarouselNext />

            <div className="absolute left-1/2 flex -translate-x-1/2 gap-2 rounded-full px-3 py-4">
              {project.media.map((_, index) => (
                <Button
                  aria-current={selectedIndex === index}
                  className={cn(
                    "size-2 cursor-pointer rounded-full bg-muted transition-colors duration-300 hover:bg-muted-foreground",
                    selectedIndex === index &&
                      "cursor-default bg-primary hover:bg-primary"
                  )}
                  key={`${project.id}-media-dot-${index}`}
                  onClick={() => api?.scrollTo(index)}
                  type="button"
                >
                  <span className="sr-only">Show media {index + 1}</span>
                </Button>
              ))}
            </div>
          </>
        ) : null}
      </Carousel>
    </article>
  )
}
