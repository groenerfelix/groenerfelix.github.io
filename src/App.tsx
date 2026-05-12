import { useState } from "react"

// import { BackgroundField } from "@/components/background-field"
import { SiteHeader } from "@/components/site-header"
import { useHashRoute } from "@/hooks/use-hash-route"
import { CvPage } from "@/pages/cv-page"
import { LandingPage } from "@/pages/landing-page"
import { ProjectsPage } from "@/pages/projects-page"

function App() {
  const { route, navigate } = useHashRoute()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigate = (nextRoute: "home" | "projects" | "cv") => {
    setMobileMenuOpen(false)
    navigate(nextRoute)
  }

  return (
    <div className="min-h-svh bg-background text-foreground">
      {/* <BackgroundField /> */}
      <SiteHeader
        activeRoute={route}
        mobileMenuOpen={mobileMenuOpen}
        onNavigate={handleNavigate}
        onToggleMenu={() => setMobileMenuOpen((open) => !open)}
      />

      <main className="relative z-10">
        {route === "home" ? <LandingPage onNavigate={handleNavigate} /> : null}
        {route === "projects" ? <ProjectsPage /> : null}
        {route === "cv" ? <CvPage /> : null}
      </main>

      <footer className="relative z-10 text-muted-foreground border-t border-border w-full flex flex-col items-center py-4 mt-16 text-sm gap-2">
        <a className="cursor-pointer hover:text-foreground transition-colors" href="mailto:fgroener@asu.edu">
          fgroener@asu.edu
        </a>
        <p>Last updated in May 2026</p>
      </footer>
    </div>
  )
}

export default App
