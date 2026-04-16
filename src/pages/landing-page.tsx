import { ArrowRight } from "lucide-react"
import { useState } from "react"

import { FeaturedWorkRow } from "@/components/featured-work-row"
import { SegmentedToggle } from "@/components/segmented-toggle"
import { SocialDock } from "@/components/social-dock"
import { Button } from "@/components/ui/button"
import { featuredProjects } from "@/data/featured"
import type { RouteId } from "@/types/content"

type LandingTrack = "researcher" | "coder"

function HeroSection() {
  return (
    <section className="min-h-[65vh] w-full flex flex-col gap-12 justify-center select-none">
      <div className="flex flex-col pt-5 md:pt-0 md:flex-row justify-center items-center gap-12">
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
            <p className="text-primary mb-0">Human-LLM Interaction Researcher,</p>
            <p className="text-primary">LLM Product Designer & Developer</p>
            <p className="text-xs uppercase text-muted-foreground">
              Open to work in the US, UK, and EU
            </p>
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

      <section className="space-y-8 mt-8">
        <SegmentedToggle
          label="I'm interested in"
          onChange={setTrack}
          options={[
            { label: "Felix the scientist", value: "researcher" },
            { label: "Felix the coder", value: "coder" },
          ]}
          value={track}
        />
        <div className="flex flex-col gap-6 pt-24 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {track === "researcher" ? "Human-LLM Interaction Researcher" : "Full Stack Web Applications Featuring LLMs"}
            </h2>
            <p className="text-base leading-8 text-foreground/72 sm:text-lg">
              {track === "researcher" ? 
              <div>
                <p>Quantitative and qualitative science at the intersection of Human Factors and AI, currently researching:</p>
                <ul className="list-disc pl-6 pt-1 space-y-1 text-md">
                  <li>What <b>expectations</b> do people have for LLM applications?</li>
                  <li>What <b>transparency</b> measures guide people to appropriate use?</li>
                  <li>Can we use <b>synthetic participants</b> in our research?</li>
                </ul>
              </div>
                :
              <div>
                <p>Building prototypes for research and shipping web apps for production:</p>
                <ul className="list-disc pl-6 pt-1 space-y-1 text-md">
                  <li><b>Python</b> backends: FastAPI</li>
                  <li><b>TypeScript</b> frontends: <b>React</b>, Vite, Tailwind, Shadcn</li>
                  <li><b>OpenAI, Discord, and other API</b> integrations</li>
                  <li>Hosted on VPS or Vercel</li>
                </ul>
              </div>
              }
            </p>
          </div>
        </div>

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
