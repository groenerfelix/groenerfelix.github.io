import { useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { CodeXml, GraduationCap } from "lucide-react"

import { FeaturedWorkRow } from "@/components/featured-work-row"
import { LandingBackground } from "@/components/landing-background"
import { HeroSection } from "@/components/landing-hero-section"
import { OverviewGraphics } from "@/components/overview-graphics"
import { SegmentedToggle } from "@/components/segmented-toggle"
import { StackLogoRow } from "@/components/stack-logo-row"
import { LinkButton } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { featuredProjects } from "@/data/featured"
import { useReducedMotion } from "@/lib/utils"
import type { RouteId, LandingTrack } from "@/types/content"

function getInitialTrack(): LandingTrack {
  if (typeof window === "undefined") {
    return "developer"
  }

  const params = new URLSearchParams(window.location.search)

  if (params.has("researcher")) {
    return "researcher"
  }

  return "developer"
}

export function LandingPage({
  onNavigate,
}: {
  onNavigate: (route: RouteId) => void
}) {
  const [track, setTrack] = useState<LandingTrack>(getInitialTrack)
  const trackProjects = featuredProjects.filter(
    (project) => project.track === track
  )
  const featuredSection = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const scrollToFeaturedSection = () => {
    const nextTrack = track === "developer" ? "researcher" : "developer"
    const target = featuredSection.current

    if (!target || reducedMotion) {
      target?.scrollIntoView({ behavior: "auto" })
      setTrack(nextTrack)
      return
    }

    let handled = false
    const handleScrollEnd = () => {
      if (handled) return

      handled = true
      window.removeEventListener("scrollend", handleScrollEnd)
      setTrack(nextTrack)
    }

    window.addEventListener("scrollend", handleScrollEnd, { once: true })
    window.setTimeout(handleScrollEnd, 1200)
    target.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <LandingBackground />
      <div className="relative isolate mx-auto flex max-w-360 flex-col px-4 md:px-16">
        <HeroSection />

        <OverviewGraphics />

        <Separator
          className="my-20 md:my-32"
          id="featured-work"
          orientation="horizontal"
          ref={featuredSection}
        />

        <section className="space-y-8">
          <SegmentedToggle
            label="I'm interested in"
            onChange={setTrack}
            options={[
              {
                icon: CodeXml,
                label: "Felix the developer",
                value: "developer",
              },
              {
                icon: GraduationCap,
                label: "Felix the scientist",
                value: "researcher",
              },
            ]}
            value={track}
          />
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              className="space-y-8"
              exit={reducedMotion ? undefined : { opacity: 0 }}
              initial={reducedMotion ? false : { opacity: 0 }}
              key={track}
              transition={
                reducedMotion ? undefined : { duration: 0.22, ease: "easeIn" }
              }
            >
              <h2 className="mt-16 mb-6 text-center text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl md:mt-32 md:mb-8">
                {track === "researcher"
                  ? "Quantitative and qualitative research at the intersection of Human Factors and AI"
                  : "Full-Stack Web Applications Featuring LLMs"}
              </h2>
              {track === "researcher" ? (
                <p className="mx-auto max-w-4xl text-center text-xl tracking-tight text-balance text-muted-foreground sm:text-2xl">
                  Innovative, impactful, and passionate science integrating
                  system-level thinking and individuals. Understanding mental
                  models, managing expectations, guiding attention, and ensuring
                  appropriate reliance for generative AI consumer applications.
                </p>
              ) : (
                <StackLogoRow />
              )}

              <div className="mt-10 md:mt-34">
                {trackProjects.map((project) => (
                  <FeaturedWorkRow key={project.id} project={project} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mx-auto grid w-full max-w-xl grid-cols-1 justify-center gap-4 text-center sm:grid-cols-[1fr_auto_1fr] sm:gap-8 sm:text-left">
            <span className="mt-2 tracking-[0.2em] text-primary uppercase sm:text-right">
              Next stop
            </span>
            <Separator orientation="vertical" className="hidden sm:block" />
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <LinkButton
                onClick={(event) => {
                  event.preventDefault()
                  scrollToFeaturedSection()
                }}
              >
                See featured {track === "developer" ? "research" : "software"}{" "}
                projects
              </LinkButton>
              <LinkButton
                href="/projects"
                onClick={(event) => {
                  event.preventDefault()
                  onNavigate("projects")
                }}
              >
                See all projects
              </LinkButton>
              <LinkButton
                href="/cv"
                onClick={(event) => {
                  event.preventDefault()
                  onNavigate("cv")
                }}
              >
                See my CV
              </LinkButton>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
