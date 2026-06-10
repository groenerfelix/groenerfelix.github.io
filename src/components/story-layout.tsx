import { ChevronDown } from "lucide-react"
import { useId, useState, type ReactNode } from "react"
import { AnimatePresence, motion } from "motion/react"

import { Entrance } from "@/components/entrance"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn, easeOut, getAvifSource, useReducedMotion } from "@/lib/utils"

type StoryLink = {
  buttonText: string
  cta: string
  href: string
}

type StoryMedium = {
  filepath: string
  caption: string
  alt: string
}

export type StoryMetadata = {
  title: string
  description: string
  date: string
  projectId: string
  tags: string[]
  media: StoryMedium[]
  links?: StoryLink[]
}

type StoryFrameProps = {
  children: ReactNode
  metadata: StoryMetadata
}

export function StoryFrame({ children, metadata }: StoryFrameProps) {
  return (
    <article className="mx-auto flex w-full max-w-360 flex-col px-4 py-24 md:px-16 md:py-32">
      <Entrance>
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl leading-tight font-semibold tracking-tight text-balance text-foreground sm:text-6xl">
              {metadata.title}
            </h1>
          </div>

          <p className="max-w-2xl text-xl leading-8 tracking-tight text-balance text-muted-foreground sm:text-2xl">
            {metadata.description}
          </p>
        </div>
      </Entrance>
      <Entrance delay={0.32}>
        <div className="mx-auto mt-20 w-full max-w-5xl space-y-20 md:space-y-36 md:mt-28">
          {children}
        </div>
      </Entrance>

      {metadata.links && 
      <StoryLinkBar links={metadata.links} />
      }
    </article>
  )
}

type StorySectionProps = {
  children: ReactNode
  className?: string
  eyebrow?: string
  title: string
}

export function StorySection({
  children,
  className,
  eyebrow,
  title,
}: StorySectionProps) {
  return (
    <section className={cn("grid gap-x-8 gap-y-8 md:grid-cols-2", className)}>
      <div className="space-y-3">
        {eyebrow ? (
          <p className="text-sm tracking-[0.2em] text-primary uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground">
          {title}
        </h2>
      </div>
      <div className="space-y-6 text-lg leading-8 text-pretty text-muted-foreground">
        {children}
      </div>
    </section>
  )
}

type StoryMediaProps = {
  medium: StoryMedium
  className?: string
  priority?: boolean
}

export function StoryMedia({
  medium,
  className,
  priority = false,
}: StoryMediaProps) {
  const avifSource = getAvifSource(medium.filepath)

  return (
    <figure className={cn("space-y-3", className)}>
      {medium.filepath.endsWith(".mp4") ? (
        <video
          aria-label={medium.alt}
          autoPlay
          className="aspect-video w-full rounded-md border border-border object-cover object-top"
          loop
          muted
          playsInline
        >
          <source src={medium.filepath} type="video/mp4" />
        </video>
      ) : (
        <picture className="block overflow-hidden rounded-md border border-border">
          {avifSource ? <source srcSet={avifSource} type="image/avif" /> : null}
          <img
            alt={medium.alt}
            className="aspect-video w-full object-cover object-top"
            loading={priority ? "eager" : "lazy"}
            src={medium.filepath}
          />
        </picture>
      )}
      {medium.caption ? (
        <figcaption className="text-sm leading-6 text-muted-foreground text-center">
          {medium.caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

type StoryDetailsProps = {
  children: ReactNode
  title: string
}

export function StoryDetails({ children, title }: StoryDetailsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const reducedMotion = useReducedMotion()
  const contentId = useId()

  return (
    <div className="rounded-md border border-border bg-card/30 px-5 py-4">
      <button
        aria-controls={contentId}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-base font-medium text-foreground"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <span>{title}</span>
        <motion.span
          animate={reducedMotion ? undefined : { rotate: isOpen ? 180 : 0 }}
          className="grid size-4 shrink-0 place-items-center text-primary"
          transition={
            reducedMotion ? undefined : { duration: 0.28, ease: easeOut }
          }
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            animate={reducedMotion ? undefined : { height: "auto", opacity: 1 }}
            exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
            initial={reducedMotion ? false : { height: 0, opacity: 0 }}
            id={contentId}
            className="overflow-hidden"
            transition={
              reducedMotion ? undefined : { duration: 0.32, ease: easeOut }
            }
          >
            <div className="mt-4 space-y-4 border-t border-border pt-4 text-base leading-7 text-muted-foreground">
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

type StoryCalloutProps = {
  children: ReactNode
  title?: string
}

export function StoryCallout({ children, title = "Learning" }: StoryCalloutProps) {
  return (
    <aside className="border-l border-primary pl-5 text-base leading-7 text-foreground">
      <p className="mb-2 text-sm tracking-[0.2em] text-primary uppercase">
        {title}
      </p>
      <div className="text-muted-foreground">{children}</div>
    </aside>
  )
}

type StoryTextBox = {
  contents: ReactNode
  title: string
}

type StoryTextPairProps = {
  boxes: [StoryTextBox, StoryTextBox]
  heading: string
  paragraph: string
}

export function StoryTextPair({
  boxes,
  heading,
  paragraph,
}: StoryTextPairProps) {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground">
          {heading}
        </h2>
        <p className="text-lg leading-8 text-pretty text-muted-foreground">
          {paragraph}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {boxes.map((box) => (
          <article
            className="rounded-md border border-border bg-card/30 p-5"
            key={box.title}
          >
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {box.title}
            </h3>
            <div className="mt-4 text-base leading-7 text-pretty text-muted-foreground">
              {box.contents}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function StoryLinkBar({ links }: { links: StoryLink[] }) {
  return (
    <div className="mt-32">
      <div className="flex flex-col gap-8 sm:flex-row items-stretch w-full sm:max-w-6xl mx-auto">
        {links.map((link, index) => (
          <div className="contents" key={link.href}>
            {index > 0 ? <Separator orientation="vertical" /> : null}
            <div className="flex min-w-0 flex-1 flex-col items-center justify-end gap-4 sm:gap-8 px-4 text-center">
              <span className="text-muted-foreground text-balance text-lg">
                {link.cta}
              </span>
              <Button asChild className="rounded-full min-w-32 font-bold text-md px-4 py-4" size="sm">
                <a href={link.href} rel="noreferrer" target="_blank" className="leading-3">
                  {link.buttonText}
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
