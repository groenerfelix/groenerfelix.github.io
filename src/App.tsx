import { useState } from "react"

import { SiteHeader } from "@/components/site-header"
import { LinkButton } from "@/components/ui/button"
import { usePathRoute } from "@/hooks/use-path-route"
import { CvPage } from "@/pages/cv-page"
import { LandingPage } from "@/pages/landing-page"
import { ProjectsPage } from "@/pages/projects-page"
import { getStoryBySlug } from "@/stories/registry"
import type { RouteId } from "@/types/content"

function NotFoundPage({ onNavigate }: { onNavigate: (route: RouteId) => void }) {
  return (
    <div className="mx-auto flex min-h-[60svh] w-full max-w-360 flex-col justify-center px-4 py-32 md:px-16">
      <div className="max-w-2xl space-y-6">
        <p className="text-sm tracking-[0.2em] text-primary uppercase">
          Page not found
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-foreground">
          This page is not part of the portfolio.
        </h1>
        <p className="text-xl leading-8 text-muted-foreground">
          The route may have moved, or the story may not be published yet.
        </p>
        <LinkButton
          href="/"
          onClick={(event) => {
            event.preventDefault()
            onNavigate("home")
          }}
        >
          Return home
        </LinkButton>
      </div>
    </div>
  )
}

function App() {
  const { route, navigate } = usePathRoute()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigate = (nextRoute: RouteId) => {
    setMobileMenuOpen(false)
    navigate(nextRoute)
  }

  const activeRoute =
    route.kind === "home" || route.kind === "projects" || route.kind === "cv"
      ? route.kind
      : null
  const story = route.kind === "story" ? getStoryBySlug(route.slug) : undefined
  const StoryComponent = story?.Component
  const showNotFound =
    route.kind === "not-found" || (route.kind === "story" && !StoryComponent)

  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteHeader
        activeRoute={activeRoute}
        mobileMenuOpen={mobileMenuOpen}
        onNavigate={handleNavigate}
        onToggleMenu={() => setMobileMenuOpen((open) => !open)}
      />

      <main className="relative z-10">
        {route.kind === "home" ? (
          <LandingPage onNavigate={handleNavigate} />
        ) : null}
        {route.kind === "projects" ? <ProjectsPage /> : null}
        {route.kind === "cv" ? <CvPage /> : null}
        {StoryComponent ? <StoryComponent /> : null}
        {showNotFound ? <NotFoundPage onNavigate={handleNavigate} /> : null}
      </main>

      <footer className="relative z-10 mt-16 flex w-full flex-col items-center gap-2 border-t border-border py-4 text-sm text-muted-foreground">
        <a
          className="cursor-pointer transition-colors hover:text-foreground"
          href="mailto:fgroener@asu.edu"
        >
          fgroener@asu.edu
        </a>
        <p>Last updated in May 2026</p>
      </footer>
    </div>
  )
}

export default App
