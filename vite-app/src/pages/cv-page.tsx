import { useState } from "react"

import { SectionHeading } from "@/components/section-heading"
import { SegmentedToggle } from "@/components/segmented-toggle"
import { TimelineRow } from "@/components/timeline-row"
import { educationEntries, workEntries } from "@/data/cv"

type CvTrack = "degrees" | "work"

export function CvPage() {
  const [track, setTrack] = useState<CvTrack>("degrees")
  const entries = track === "degrees" ? educationEntries : workEntries

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16">
      <SectionHeading
        description="A full timeline with the same calm layout language as the rest of the site. Toggle between academic background and professional experience."
        title="Timeline, not a stack of cards"
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
