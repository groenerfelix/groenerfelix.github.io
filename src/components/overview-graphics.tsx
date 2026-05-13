import { Entrance } from "@/components/entrance"
import { DevelopmentSVG, DesignSVG, ResearchSVG } from "@/components/svg"
import { Separator } from "@/components/ui/separator"

const developmentCycleSvgClass =
  "mx-auto h-auto w-full max-w-[67vw] text-muted-foreground transition-colors duration-500 group-hover:text-primary"

export function OverviewGraphics() {
  return (
    <section className="space-y-10 pt-16 md:space-y-16 lg:pt-0">
      <Entrance className="space-y-2" delay={2} y={10}>
        <h2 className="text-4xl font-medium tracking-tighter text-balance sm:text-5xl">
          Owning the entire development cycle
        </h2>
        <p className="text-xl tracking-tight text-muted-foreground sm:text-2xl">
          Bridging research, design, and technology; transforming abstract ideas
          into shippable products.
        </p>
      </Entrance>
      <Entrance className="space-y-2" delay={2.1} y={10}>
        <div className="grid w-full max-w-full grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-4">
          <div className="group mx-auto space-y-6">
            <ResearchSVG className={developmentCycleSvgClass} />
            <div>
              <h3 className="px-2 leading-10">Human Factors Research</h3>
              <p className="px-2 text-muted-foreground md:text-balance">
                Identifying contextual user needs, defining evaluation metrics,
                and conceptualizing quantitative & qualitative experiments.
              </p>
            </div>
          </div>
          <Separator orientation="vertical" className="mx-4 hidden md:block" />
          <div className="group mx-auto space-y-6">
            <DesignSVG className={developmentCycleSvgClass} />
            <div>
              <h3 className="px-2 leading-10">Intuitive Interaction Design</h3>
              <p className="px-2 text-muted-foreground md:text-balance">
                Creating seamless flows, enriching experiences, respecting
                cognitive patterns, and guiding towards appropriate use.
              </p>
            </div>
          </div>
          <Separator orientation="vertical" className="mx-4 hidden md:block" />
          <div className="group mx-auto space-y-6">
            <DevelopmentSVG className={developmentCycleSvgClass} />
            <div>
              <h3 className="px-2 leading-10">
                Iterative Prototype Development
              </h3>
              <p className="px-2 text-muted-foreground md:text-balance">
                Architecting end-to-end, shipping fast, planning strategic
                roadmaps, coordinating with stakeholders.
              </p>
            </div>
          </div>
        </div>
      </Entrance>
    </section>
  )
}
