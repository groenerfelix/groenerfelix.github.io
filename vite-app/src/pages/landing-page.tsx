import { ArrowRight } from "lucide-react"
import { useState } from "react"

import { FeaturedWorkRow } from "@/components/featured-work-row"
import { SectionHeading } from "@/components/section-heading"
import { SegmentedToggle } from "@/components/segmented-toggle"
import { SocialDock } from "@/components/social-dock"
import { Button } from "@/components/ui/button"
import { featuredProjects } from "@/data/featured"
import type { RouteId } from "@/types/content"

type LandingTrack = "researcher" | "coder"

function HeroSection() {
  return (
    <section className="min-h-[65vh] w-full flex flex-col gap-12 justify-center select-none">
      <div className="flex justify-center items-center gap-12">
        <img
          alt="portrait"
          className="w-82.5 aspect-square rounded-full border-[3px] border-primary -scale-x-100"
          src="images/portrait.jpg"
        />
        <div className="space-y-6">
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
            Felix Gr&ouml;ner
          </h1>
          <div className="max-w-3xl space-y-3 text-lg">
            <p className="text-primary">Human-LLM Interaction Researcher</p>
            <p className="text-xs uppercase text-muted-foreground">
              Open to work in the US, UK, and EU
            </p>
            <p>currently researching:</p>
            <ul className="list-disc pl-6">
              <li>Designing LLMs for appropriate use</li>
              <li>Providing transparency and control</li>
              <li>Synthetic research participants</li>
            </ul>
          </div>
        </div>
      </div>
      <SocialDock />
    </section>
  )
}

type LandingPageProps = {
  onNavigate: (route: RouteId) => void
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const [track, setTrack] = useState<LandingTrack>("researcher")
  const trackProjects = featuredProjects.filter((project) => project.track === track)

  return (
    <div className="mx-auto flex max-w-7xl flex-col px-5">
      <HeroSection />

      <section className="space-y-8">
        <SegmentedToggle
          label="I'm interested in"
          onChange={setTrack}
          options={[
            { label: "Felix the researcher", value: "researcher" },
            { label: "Felix the coder", value: "coder" },
          ]}
          value={track}
        />
        {track === "researcher" ? (
          <SectionHeading
            description="Featured work that best captures the breadth and variety of my research interests."
            title="Highlighted Publications"
          />
        ) : (
          <SectionHeading
            description="A selection of projects to showcase my skillset. I mostly create LLM applications with Python FastAPI backends and Typescript React frontends."
            title="Highlighted Coding Projects"
          />
        )}
        <div>
          {trackProjects.map((project) => (
            <FeaturedWorkRow key={project.id} project={project} />
          ))}
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Next stop
          </span>
          <Button
            className="font-bold text-2xl px-8 py-6 underline transition-colors hover:text-foreground"
            onClick={() => onNavigate("projects")}
            variant="link"
          >
            See all projects <ArrowRight className="size-6" />
          </Button>
        </div>
      </section>
    </div>
  )
}
