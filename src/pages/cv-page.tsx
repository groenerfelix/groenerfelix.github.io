import { useState } from "react"
import { SegmentedToggle } from "@/components/segmented-toggle"
import { TimelineRow } from "@/components/timeline-row"
import { educationEntries, workEntries, cvDownloadLink } from "@/data/cv"

type CvTrack = "degrees" | "work"

export function CvPage() {
  const [track, setTrack] = useState<CvTrack>("degrees")
  const entries = track === "degrees" ? educationEntries : workEntries

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 pt-12 pb-20 md:px-8 md:pt-16 md:pb-28">
      <div className="flex flex-col gap-6 pt-24 pb-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Curriculum Vitae
        </h2>
        <p className="text-base leading-8 text-foreground/72 sm:text-lg">
          A complete timeline of my academic background and professional experience.
        </p>
        <a 
          href={cvDownloadLink.href}
          target="_blank"
          className="group text-primary hover:text-foreground transition-colors underline inline-flex items-center gap-1"
          >
            <span
              aria-hidden="true"
              className="inline-flex size-5 bg-primary group-hover:bg-foreground transition-colors"
              style={{
                WebkitMaskImage: `url(${cvDownloadLink.iconSrc})`,
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskImage: `url(${cvDownloadLink.iconSrc})`,
                maskPosition: "center",
                maskRepeat: "no-repeat",
                maskSize: "contain",
              }}
            />
            Open my CV as a PDF
          </a>
      </div>
      
    </div>
      <section className="space-y-8">
        <SegmentedToggle
          label="I'm interested in"
          onChange={setTrack}
          options={[
            { label: "Education", value: "degrees" },
            { label: "Work experience", value: "work" },
          ]}
          value={track}
        />

        <div>
          {entries.map((entry) => (
            <TimelineRow key={entry.id} entry={entry} />
          ))}
        </div>
      </section>
    </div>
  )
}
