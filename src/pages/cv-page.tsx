import { useState } from "react"
import { SegmentedToggle } from "@/components/segmented-toggle"
import { TimelineRow } from "@/components/timeline-row"
import { educationEntries, workEntries, cvDownloadLink } from "@/data/cv"
import { LinkButton } from "@/components/ui/button"

type CvTrack = "degrees" | "work"

export function CvPage() {
  const [track, setTrack] = useState<CvTrack>("degrees")
  const entries = track === "degrees" ? educationEntries : workEntries

  return (
    <div className="mx-auto max-w-360 w-full flex flex-col space-y-32 py-32 px-4 md:px-16">
      <div className="flex flex-col space-y-2 h-48">
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
      </div>
      <section className="space-y-32">
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
