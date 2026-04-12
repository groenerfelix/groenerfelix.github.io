import { useState } from "react"

import { SectionHeading } from "@/components/section-heading"
import { SegmentedToggle } from "@/components/segmented-toggle"
import { TimelineRow } from "@/components/timeline-row"
import { Button } from "@/components/ui/button"
import { educationEntries, workEntries, cvDownloadLink } from "@/data/cv"

type CvTrack = "degrees" | "work"

export function CvPage() {
  const [track, setTrack] = useState<CvTrack>("degrees")
  const entries = track === "degrees" ? educationEntries : workEntries

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 pt-12 pb-20 md:px-8 md:pt-16 md:pb-28">
      <SectionHeading
        title="Curriculum Vitae"
        description="A full timeline of my academic background and professional experience."
        action={
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
        }
      />

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
