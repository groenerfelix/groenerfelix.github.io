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
import { cn, getAvifSource, useReducedMotion, easeOut } from "@/lib/utils"
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

function FeaturedMediaImage({ item }: { item: FeaturedProjectMedia }) {

  const reducedMotion = useReducedMotion()

  if (item.image.endsWith(".mp4")) {
    return (
      <video
        aria-label={item.imageAlt}
        autoPlay={!reducedMotion}
        controls={reducedMotion}
        className="aspect-video w-full object-cover object-top"
        playsInline
        loop
        muted
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

function FeaturedWorkCopy({
  item,
  motionKey,
  reducedMotion,
}: {
  item: FeaturedProjectMedia
  motionKey: string
  reducedMotion: boolean
}) {
  return (
    <div className="overflow-hidden md:min-h-48">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
          className="flex h-full flex-col justify-between"
          exit={reducedMotion ? undefined : { opacity: 0, x: -6 }}
          initial={reducedMotion ? false : { opacity: 0, x: 8 }}
          key={motionKey}
          transition={
            reducedMotion ? undefined : { duration: 0.45, ease: easeOut }
          }
        >
          <p className="max-w-2xl text-base leading-6 text-balance text-muted-foreground sm:text-xl sm:leading-8">
            {item.paragraph}
          </p>

          <div>
            {item.link ? (
              <LinkButton href={item.link.href} className="mt-2">
                {item.link.label}
              </LinkButton>
            ) : null}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function FeaturedCarouselDots({
  api,
  mediaCount,
  projectId,
  selectedIndex,
}: {
  api: CarouselApi | undefined
  mediaCount: number
  projectId: string
  selectedIndex: number
}) {
  return (
    <div className="absolute left-1/2 flex -translate-x-1/2 gap-2 rounded-full px-3 py-4">
      {Array.from({ length: mediaCount }, (_, index) => (
        <Button
          aria-current={selectedIndex === index ? "true" : undefined}
          aria-label={`Show media ${index + 1} of ${mediaCount}`}
          className={cn(
            "size-2 cursor-pointer rounded-full bg-muted transition-colors duration-300 hover:bg-muted-foreground",
            selectedIndex === index &&
              "cursor-default bg-primary hover:bg-primary"
          )}
          key={`${projectId}-media-dot-${index}`}
          onClick={() => api?.scrollTo(index)}
          type="button"
        />
      ))}
    </div>
  )
}

function FeaturedMediaCarousel({
  api,
  media,
  projectId,
  projectTitle,
  selectedIndex,
  setApi,
}: {
  api: CarouselApi | undefined
  media: FeaturedProjectMedia[]
  projectId: string
  projectTitle: string
  selectedIndex: number
  setApi: (api: CarouselApi) => void
}) {
  return (
    <Carousel
      aria-label={`${projectTitle} media carousel`}
      className="w-full"
      opts={{ align: "start", loop: media.length > 1 }}
      setApi={setApi}
    >
      <CarouselContent>
        {media.map((item, index) => (
          <CarouselItem
            aria-label={`${index + 1} of ${media.length}: ${item.imageAlt}`}
            key={`${projectId}-${index}`}
          >
            <Separator className="mx-auto my-2 max-w-[90%]" />
            <FeaturedMediaImage item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {media.length > 1 ? (
        <>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
          <FeaturedCarouselDots
            api={api}
            mediaCount={media.length}
            projectId={projectId}
            selectedIndex={selectedIndex}
          />
        </>
      ) : null}
    </Carousel>
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

  return (
    <article className="space-y-10 border-t border-border py-16 md:space-y-16 md:py-34">
      <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h3>

        <FeaturedWorkCopy
          item={activeMedia}
          motionKey={`${project.id}-${selectedIndex}`}
          reducedMotion={reducedMotion}
        />
      </div>

      <FeaturedMediaCarousel
        api={api}
        media={project.media}
        projectId={project.id}
        projectTitle={project.title}
        selectedIndex={selectedIndex}
        setApi={setApi}
      />
    </article>
  )
}
