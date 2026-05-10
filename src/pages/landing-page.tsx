import { ArrowRight } from "lucide-react"
import { useState } from "react"

import { FeaturedWorkRow } from "@/components/featured-work-row"
import { SegmentedToggle } from "@/components/segmented-toggle"
import { SocialDock } from "@/components/social-dock"
import { Button } from "@/components/ui/button"
import { featuredProjects, stackLogos } from "@/data/featured"
import type { RouteId, LandingTrack } from "@/types/content"
import { Separator } from "@/components/ui/separator"

function HeroSection() {
  return (
    <section className="min-h-[65vh] w-full flex flex-col gap-16 justify-center select-none">

      <div className="flex flex-col md:pt-0 lg:flex-row justify-center items-center gap-12">
        <div className="w-82.5 aspect-square rounded-full border-[3px] border-primary/70 overflow-hidden relative after:absolute after:inset-0 after:bg-primary after:mix-blend-multiply after:opacity-10">
          <picture>
            <source srcSet="/images/portrait.avif" type="image/avif" />
            <img
              alt="portrait"
              className="-scale-x-100"
              src="images/portrait.jpg"
            />
          </picture>
        </div>

        <div className="space-y-4">
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
            Felix Gr&ouml;ner
          </h1>
            <p className="text-primary text-xl leading-6">
              Human-LLM Interaction Researcher,
              <br/>
              LLM Product Designer & Developer
            </p>
            <p className="text-xs uppercase text-muted-foreground">
              Open to work in the US, UK, and EU
            </p>
        </div>
      </div>

      <SocialDock />
    </section>
  )
}

type LandingPageProps = {
  onNavigate: (route: RouteId) => void
}

import ResearchSVG from '@/components/svg/undraw_data-trends_kv5v.svg?react';
import DesignSVG from '@/components/svg/undraw_approved-wireframe_odf4.svg?react';
import DevelopmentSVG from '@/components/svg/undraw_code-sample_kpju.svg?react';

const developmentCycleSvgClass =
  "h-auto w-full max-w-full transition-colors duration-500 text-muted-foreground hover:text-primary"


export function LandingPage({ onNavigate }: LandingPageProps) {
  const [track, setTrack] = useState<LandingTrack>("developer")
  const trackProjects = featuredProjects.filter((project) => project.track === track)

  return (
    <div className="max-w-360 mx-auto flex flex-col px-4 md:px-16">
      <HeroSection />

      <section className="space-y-16">
        <div className="space-y-2">
          <h2 className="text-5xl font-medium tracking-tighter text-balance">
            Owning the entire development cycle
          </h2>
          <p className="text-muted-foreground text-2xl tracking-tight">
            Bridging research, design, and technology; transforming abstract ideas into shippable products.
          </p>
        </div>
        <div className="grid w-full max-w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] gap-4">
          <div className="space-y-6 mx-auto">
            <ResearchSVG
              className={developmentCycleSvgClass}
            />
            <div>
              <h3 className="px-2 leading-10">Human Factors Research</h3>
              <p className="px-2 text-muted-foreground text-balance">
                Identifying contextual user needs, defining evaluation metrics, and conceptualizing quantitative & qualitative experiments.
              </p>
            </div>
          </div>
          <Separator orientation={"vertical"} className="mx-4"/>
          <div className="space-y-6 mx-auto">
            <DesignSVG
              className={developmentCycleSvgClass}
            />
            <div>
              <h3 className="px-2 leading-10">Intuitive Interaction Design</h3>
              <p className="px-2 text-muted-foreground text-balance">
                Creating intuitive flows, enrichting experiences, respecting cognitive patterns, and guiding towards appropriate use. 
              </p>
            </div>
          </div>
          <Separator orientation={"vertical"} className="mx-4"/>
          <div className="space-y-6 mx-auto">
            <DevelopmentSVG
              className={developmentCycleSvgClass}
            />
            <div>
              <h3 className="px-2 leading-10">Iterative Prototype Development</h3>
              <p className="px-2 text-muted-foreground text-balance">
                Architecting end-to-end, shipping fast, planning strategic roadmaps, coordinating with stakeholders. 
              </p>
            </div>
          </div>
        </div>

      </section>

      <Separator orientation="horizontal" className="my-32" />

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

        <h2 className="font-semibold tracking-tight text-foreground text-5xl mt-32 mb-16 text-center text-balance">
          {track === "researcher" ? "Human-LLM Interaction Researcher" : "Full-Stack Web Applications Featuring LLMs"}
        </h2>
        {track === "researcher" ? 
          <p className="text-base leading-8 text-foreground/72 sm:text-lg">
            <p>Quantitative and qualitative science at the intersection of Human Factors and AI, currently researching:</p>
            <ul className="list-disc pl-6 pt-1 space-y-1 text-md">
              <li>What <b>expectations</b> do people have for LLM applications?</li>
              <li>What <b>transparency</b> measures guide people to appropriate use?</li>
              <li>Can we use <b>synthetic participants</b> in our research?</li>
            </ul>
          </p>
          :
          <div className="w-full flex items-center justify-center gap-x-16 gap-y-4 px-8 flex-wrap lg:flex-nowrap">
            {stackLogos.map((logo) => (
              <span
                className="inline-flex items-center gap-2 text-xl font-bold text-muted-foreground cursor-default select-none"
                key={logo.imageName}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-8 object-contain"
                  src={`/logos/${logo.imageName}.svg`}
                />
                {logo.label}
              </span>
            ))}
          </div>
        }



        <div className="mt-10 md:mt-34">
          {trackProjects.map((project) => (
            <FeaturedWorkRow key={project.id} project={project} />
          ))}
        </div>


        <div className="w-full flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
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
