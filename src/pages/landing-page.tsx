import { useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { Entrance } from "@/components/entrance"
import { FeaturedWorkRow } from "@/components/featured-work-row"
import { SegmentedToggle } from "@/components/segmented-toggle"
import { SocialDock } from "@/components/social-dock"
import { StackLogoRow } from "@/components/stack-logo-row"
import { LinkButton } from "@/components/ui/button"
import { featuredProjects } from "@/data/featured"
import type { RouteId, LandingTrack } from "@/types/content"
import { Separator } from "@/components/ui/separator"
import { ResearchSVG, DesignSVG, DevelopmentSVG } from "@/components/svg"
import { useReducedMotion } from "@/lib/utils"

const easeOut = [0.22, 1, 0.36, 1] as const

function OverviewGraphics() {
  const developmentCycleSvgClass =
    "h-auto w-full max-w-[67vw] mx-auto transition-colors duration-500 text-muted-foreground group-hover:text-primary "

  return (
    <section className="space-y-10 md:space-y-16 pt-16 lg:pt-0">
      <Entrance className="space-y-2" delay={2} y={10}>
        <h2 className="text-4xl font-medium tracking-tighter text-balance sm:text-5xl">
          Owning the entire development cycle
        </h2>
        <p className="text-muted-foreground text-xl tracking-tight sm:text-2xl">
          Bridging research, design, and technology; transforming abstract
          ideas into shippable products.
        </p>
      </Entrance>
      <Entrance className="space-y-2" delay={2.1} y={10}>
        <div className="grid w-full max-w-full grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-4">
          <div className="group mx-auto space-y-6">
            <ResearchSVG className={developmentCycleSvgClass} />
            <div>
              <h3 className="px-2 leading-10">Human Factors Research</h3>
              <p className="px-2 text-muted-foreground md:text-balance">
                Identifying contextual user needs, defining evaluation metrics,
                and conceptualizing quantitative & qualitative experiments.
              </p>
            </div>
          </div>
          <Separator orientation={"vertical"} className="mx-4 hidden md:block" />
          <div className="group mx-auto space-y-6">
            <DesignSVG className={developmentCycleSvgClass} />
            <div>
              <h3 className="px-2 leading-10">Intuitive Interaction Design</h3>
              <p className="px-2 text-muted-foreground md:text-balance">
                Creating seamless flows, enriching experiences, respecting
                cognitive patterns, and guiding towards appropriate use.
              </p>
            </div>
          </div>
          <Separator orientation={"vertical"} className="mx-4 hidden md:block" />
          <div className="group mx-auto space-y-6">
            <DevelopmentSVG className={developmentCycleSvgClass} />
            <div>
              <h3 className="px-2 leading-10">Iterative Prototype Development</h3>
              <p className="px-2 text-muted-foreground md:text-balance">
                Architecting end-to-end, shipping fast, planning strategic
                roadmaps, coordinating with stakeholders.
              </p>
            </div>
          </div>
        </div>
      </Entrance>
    </section>
  )
}

function HeroText() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      animate={
        reducedMotion
          ? undefined
          : { opacity: 1, width: "auto", y: 0, filter: "blur(0px)" }
      }
      className="overflow-hidden"
      initial={
        reducedMotion
          ? false
          : { opacity: 0, width: 0, y: 12, filter: "blur(2px)" }
      }
      transition={
        reducedMotion
          ? undefined
          : { delay: 0.32, duration: 0.7, ease: easeOut }
      }
    >
      <div className="w-max max-w-[calc(100vw-2rem)] space-y-4">
        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
          Felix Gr&ouml;ner
        </h1>
        <p className="text-primary text-xl leading-6">
          Human-LLM Interaction Researcher,
          <br />
          LLM Product Designer & Developer
        </p>
        <p className="text-xs uppercase text-muted-foreground">
          Open to work in the US, UK, and EU
        </p>
      </div>
    </motion.div>
  )
}

function HeroSection() {
  return (
    <section className="flex min-h-[65vh] w-full select-none flex-col justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-12 pt-8 md:pt-0 lg:flex-row">
        <Entrance
          className="relative aspect-square w-72 overflow-hidden rounded-full border-[3px] border-primary/70 after:absolute after:inset-0 after:bg-background after:opacity-10 after:mix-blend-multiply sm:w-82.5"
          delay={0}
          y={12}
        >
          <picture>
            <source srcSet="/images/portrait.avif" type="image/avif" />
            <img
              alt="portrait"
              className="-scale-x-100"
              src="images/portrait.jpg"
            />
          </picture>
        </Entrance>

        <HeroText />
      </div>

      <div className="flex w-full flex-row justify-center">
        <SocialDock delay={1.05} />
      </div>
    </section>
  )
}

function LandingBackground() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden
      animate={reducedMotion ? undefined : { opacity: 1 }}
      className="pointer-events-none absolute left-1/2 top-0 -z-10 h-svh w-full -translate-x-1/2 overflow-hidden"
      initial={reducedMotion ? false : { opacity: 0 }}
      transition={reducedMotion ? undefined : { duration: 1.8, ease: "easeIn" }}
    >
      <div
        className="absolute inset-x-[-10%] top-0 h-[88svh] opacity-[0.16] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[72px_72px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(186deg, #000 0%, #000 42%, rgba(0,0,0,0.72) 62%, rgba(0,0,0,0.22) 82%, transparent 100%)",
          maskImage:
            "linear-gradient(186deg, #000 0%, #000 42%, rgba(0,0,0,0.72) 62%, rgba(0,0,0,0.22) 82%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-x-[-10%] top-0 h-[88svh] opacity-70 bg-size-[72px_72px]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklch, var(--primary) 6%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklch, var(--primary) 6%, transparent) 1px, transparent 1px)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 33%, #000 0%, rgba(0,0,0,0.85) 19%, rgba(0,0,0,0.38) 38%, transparent 58%)",
          maskImage:
            "radial-gradient(ellipse at 50% 33%, #000 0%, rgba(0,0,0,0.85) 19%, rgba(0,0,0,0.38) 38%, transparent 58%)",
        }}
      />
    </motion.div>
  )
}


export function LandingPage({ onNavigate }: { onNavigate: (route: RouteId) => void }) {
  const [track, setTrack] = useState<LandingTrack>("developer")
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
          orientation="horizontal"
          className="my-20 md:my-32"
          ref={featuredSection}
        />

        <section className="space-y-8">
          <SegmentedToggle
            label="I'm interested in"
            onChange={setTrack}
            options={[
              { label: "Felix the developer", value: "developer" },
              { label: "Felix the scientist", value: "researcher" },
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
                reducedMotion
                  ? undefined
                  : { duration: 0.22, ease: "easeIn" }
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
            <span className="mt-2 text-primary uppercase tracking-[0.2em] sm:text-right">
              Next stop
            </span>
            <Separator orientation="vertical" className="hidden sm:block" />
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <LinkButton onClick={scrollToFeaturedSection}>
                See featured{" "}
                {track === "developer" ? "research" : "software"} projects
              </LinkButton>
              <LinkButton
                href="#projects"
                onClick={(event) => {
                  event.preventDefault()
                  onNavigate("projects")
                }}
              >
                See all projects
              </LinkButton>
              <LinkButton
                href="#cv"
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
