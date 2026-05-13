import { useState } from "react"
import { Entrance } from "@/components/entrance"
import { AnimatePresence, motion } from "motion/react"
import { SegmentedToggle } from "@/components/segmented-toggle"
import { TimelineRow } from "@/components/timeline-row"
import { educationEntries, workEntries, cvDownloadLink } from "@/data/cv"
import { LinkButton } from "@/components/ui/button"
import { useReducedMotion } from "@/lib/utils"

type CvTrack = "degrees" | "work"

export function CvPage() {
  const [track, setTrack] = useState<CvTrack>("degrees")
  const entries = track === "degrees" ? educationEntries : workEntries
  const reducedMotion = useReducedMotion()

  return (
    <div className="mx-auto max-w-360 w-full flex flex-col space-y-32 py-32 px-4 md:px-16">
      <Entrance className="flex flex-col space-y-2 h-48" delay={0.06} y={12}>
        <h1 className="font-semibold tracking-tight text-foreground text-5xl">
          Curriculum Vitae
        </h1>
        <p className="h-32 text-2xl tracking-tight leading-8 text-muted-foreground text-balance">
          A timeline of my academic background and professional experience.
        </p>
        <p>
          <LinkButton href={cvDownloadLink.href} iconClassName="size-5">
            Open my CV as a PDF
          </LinkButton>
        </p>
      </Entrance>
      <section className="space-y-32">
        <Entrance delay={0.18} y={10}>
          <SegmentedToggle
            label="I'm interested in"
            onChange={setTrack}
            options={[
              { label: "Education", value: "degrees" },
              { label: "Work experience", value: "work" },
            ]}
            value={track}
          />
        </Entrance>

        <Entrance delay={0.28} y={10}>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0}}
              initial={reducedMotion ? false : { opacity: 0}}
              key={track}
              transition={
                reducedMotion
                  ? undefined
                  : { duration: 0.22, ease: "easeIn" }
              }
            >
            {entries.map((entry) => (
              <TimelineRow key={entry.id} entry={entry} />
            ))}
          </motion.div>
          </AnimatePresence>
        </Entrance>
      </section>
    </div>
  )
}
