import { motion } from "motion/react"
import { Entrance } from "@/components/entrance"
import { SocialDock } from "@/components/social-dock"
import { useReducedMotion, easeOut } from "@/lib/utils"

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
        <p className="text-xl leading-6 text-primary">
          Human-LLM Interaction Researcher,
          <br />
          LLM Product Designer & Developer
        </p>
        <p className="text-xs text-muted-foreground uppercase">
          Open to work in the US, UK, and EU
        </p>
      </div>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="flex min-h-[65vh] w-full flex-col justify-center gap-8 select-none">
      <div className="flex flex-col items-center justify-center gap-12 pt-8 md:pt-0 lg:flex-row">
        <Entrance
          className="relative aspect-square w-72 overflow-hidden rounded-full border-[3px] border-primary/70 after:absolute after:inset-0 after:bg-background after:opacity-10 after:mix-blend-multiply sm:w-82.5"
          delay={0}
          y={12}
        >
          <picture>
            <source srcSet="/images/portrait.avif" type="image/avif" />
            <img
              alt="Portrait of Felix Groener"
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
