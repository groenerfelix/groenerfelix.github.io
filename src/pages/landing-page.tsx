import { FeaturedWorkRow } from "@/components/featured-work-row"
import { LandingBackground } from "@/components/landing-background"
import { HeroSection } from "@/components/landing-hero-section"
import { OverviewGraphics } from "@/components/overview-graphics"
import { StackLogoRow } from "@/components/stack-logo-row"
import { StoryLinkButton } from "@/components/story-layout"
import { Separator } from "@/components/ui/separator"
import { stories } from "@/stories/registry"
import type { NavigableRoute } from "@/types/content"

export function LandingPage({
  onNavigate,
}: {
  onNavigate: (route: NavigableRoute) => void
}) {
  return (
    <>
      <LandingBackground />
      <div className="relative isolate mx-auto flex max-w-360 flex-col px-4 md:px-16">
        <HeroSection />

        <OverviewGraphics />

        <Separator
          className="my-20 md:my-32"
          id="featured-work"
          orientation="horizontal"
        />

        <section className="space-y-8">
          <div className="space-y-8">
            <h2 className="mt-16 mb-6 text-center text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl md:mt-32 md:mb-8">
              Selected project stories across LLM systems, research tools, and
              data-rich UX
            </h2>
            <p className="mx-auto max-w-4xl text-center text-xl tracking-tight text-balance text-muted-foreground sm:text-2xl">
              I build full-stack products that make complex systems useful, intuitive,
              and delightful to work with.
            </p>
            <StackLogoRow />

            <div className="mt-10 md:mt-34">
              {stories.map((story) => (
                <FeaturedWorkRow
                  key={story.slug}
                  onOpenStory={(slug) => onNavigate({ kind: "story", slug })}
                  story={story}
                />
              ))}
            </div>
          </div>

          <div className="mt-32 flex w-full flex-col items-stretch gap-8 sm:mx-auto sm:max-w-3xl sm:flex-row">
            <div className="flex min-w-0 flex-1 flex-col items-center justify-end gap-4 px-4 text-center sm:gap-8">
              <span className="text-lg text-balance text-muted-foreground">
                Browse a complete list of my projects and publications.
              </span>
              <StoryLinkButton
                href="/projects"
                onClick={(event) => {
                  event.preventDefault()
                  onNavigate("projects")
                }}
              >
                See all projects
              </StoryLinkButton>
            </div>
            <Separator orientation="vertical" className="hidden sm:block" />
            <div className="flex min-w-0 flex-1 flex-col items-center justify-end gap-4 px-4 text-center sm:gap-8">
              <span className="text-lg text-balance text-muted-foreground">
                See my academic background and work history.
              </span>
              <StoryLinkButton
                href="/cv"
                onClick={(event) => {
                  event.preventDefault()
                  onNavigate("cv")
                }}
              >
                Explore my CV
              </StoryLinkButton>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
