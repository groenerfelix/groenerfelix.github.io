import { ArrowRight, ArrowUp } from "lucide-react"
import { useState, useRef } from "react"

import { FeaturedWorkRow } from "@/components/featured-work-row"
import { SegmentedToggle } from "@/components/segmented-toggle"
import { SocialDock } from "@/components/social-dock"
import { Button } from "@/components/ui/button"
import { featuredProjects, stackLogos } from "@/data/featured"
import type { RouteId, LandingTrack } from "@/types/content"
import { Separator } from "@/components/ui/separator"

function HeroSection() {
  return (
    <section className="min-h-[65vh] w-full flex flex-col gap-8 justify-center select-none">

      <div className="flex flex-col md:pt-0 lg:flex-row justify-center items-center gap-12">
        <div className="w-82.5 aspect-square rounded-full border-[3px] border-primary/70 overflow-hidden relative after:absolute after:inset-0 after:bg-background after:mix-blend-multiply after:opacity-10">
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

import { 
    ResearchSVG,
    DesignSVG,
    DevelopmentSVG
} from '@/components/svg';

const developmentCycleSvgClass =
  "h-auto w-full max-w-full transition-colors duration-500 text-muted-foreground group-hover:text-primary"

function LandingBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 -z-10 h-svh w-full -translate-x-1/2 overflow-hidden"
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
    </div>
  )
}


export function LandingPage({ onNavigate }: { onNavigate: (route: RouteId) => void }) {
  const [track, setTrack] = useState<LandingTrack>("developer")
  const trackProjects = featuredProjects.filter((project) => project.track === track)
  const featuredSection = useRef<HTMLDivElement>(null)

  const scrollToFeaturedSection = async () => {
  return new Promise(() => {
    // 1. Listen for the scrollend event
    const handleScrollEnd = () => {
      window.removeEventListener('scrollend', handleScrollEnd);
      setTrack(track === "developer" ? "researcher" : "developer");
      // resolve()
    };
    window.addEventListener('scrollend', handleScrollEnd);
    
    // 2. Start the scroll
    featuredSection.current?.scrollIntoView({ behavior: 'smooth' });
  });
};

  return (
    <>
    <LandingBackground />
    <div className="relative isolate max-w-360 mx-auto flex flex-col px-4 md:px-16">

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
          <div className="space-y-6 mx-auto group">
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
          <div className="space-y-6 mx-auto group">
            <DesignSVG
              className={developmentCycleSvgClass}
            />
            <div>
              <h3 className="px-2 leading-10">Intuitive Interaction Design</h3>
              <p className="px-2 text-muted-foreground text-balance">
                Creating seamless flows, enriching experiences, respecting cognitive patterns, and guiding towards appropriate use. 
              </p>
            </div>
          </div>
          <Separator orientation={"vertical"} className="mx-4"/>
          <div className="space-y-6 mx-auto group">
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

      <Separator orientation="horizontal" className="my-32" ref={featuredSection} />

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

        <h2 className="font-semibold tracking-tight text-foreground text-5xl mt-32 mb-8 text-center text-balance">
          {track === "researcher" ? "Quantitative and qualitative research at the intersection of Human Factors and AI" : "Full-Stack Web Applications Featuring LLMs"}
        </h2>
        {track === "researcher" ? 
          <p className="text-center text-muted-foreground text-2xl tracking-tight text-balance max-w-4xl mx-auto">
            Innovative, impactful, and passionate science integrating system-level thinking and individuals. Understanding mental models, managing expectations, guiding attention, and ensuring appropriate reliance for generative AI consumer applications.
          </p>
          :
          <div className="w-full flex items-center justify-center gap-x-16 gap-y-4 px-8 mt-16 flex-wrap lg:flex-nowrap">
            {stackLogos.map((logo) => (
              <span
                className="inline-flex items-center gap-2 text-xl font-bold text-muted-foreground cursor-default select-none"
                key={logo.label}
              >
                <logo.logo className="size-8"/>
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


        <div className="w-full max-w-xl mx-auto grid grid-cols-[1fr_auto_1fr] justify-center gap-8">
          <span className="mt-2 uppercase tracking-[0.2em] text-primary text-right">
            Next stop
          </span>
          <Separator orientation="vertical"/>
          <div>
            <Button
              className="text-sm underline transition-colors text-muted-foreground hover:text-primary"
              onClick={scrollToFeaturedSection}
              variant="link"
            >
              <ArrowUp className="size-4" /> See featured {track === "developer" ? "research" : "software"} projects 
            </Button>
            <Button
              className="underline transition-colors text-muted-foreground hover:text-primary"
              onClick={() => onNavigate("projects")}
              variant="link"
              size={"sm"}
            >
              <ArrowRight className="size-4" /> See all projects 
            </Button>
            <Button
              className="text-sm underline transition-colors text-muted-foreground hover:text-primary"
              onClick={() => onNavigate("cv")}
              variant="link"
            >
              <ArrowRight className="size-4" /> See my CV 
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
