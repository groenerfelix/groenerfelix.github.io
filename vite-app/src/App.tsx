import { Search, X, ArrowRight } from "lucide-react"
import { useDeferredValue, useEffect, useMemo, useState } from "react"

import { FeaturedWorkRow } from "@/components/featured-work-row"
import { ProjectRow } from "@/components/project-row"
import { SegmentedToggle } from "@/components/segmented-toggle"
import { SiteHeader } from "@/components/site-header"
import { SocialDock } from "@/components/social-dock"
import { TimelineRow } from "@/components/timeline-row"
import { educationEntries, workEntries } from "@/data/cv"
import { featuredProjects } from "@/data/featured"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"
import type { ProjectEntry, PublicationType, RouteId } from "@/types/content"
import { Button } from "./components/ui/button"

type LandingTrack = "researcher" | "coder"
type CvTrack = "degrees" | "work"

const publicationTypes = Array.from(
  new Set(
    projects
      .map((project) => project.publicationType)
      .filter((value): value is PublicationType => Boolean(value))
  )
)

const keywordOptions = Array.from(
  new Set(projects.flatMap((project) => project.keywords))
).sort()

function getInitialRoute(): RouteId {
  if (typeof window === "undefined") {
    return "home"
  }

  const hash = window.location.hash.replace("#", "")
  if (hash === "projects" || hash === "cv" || hash === "home") {
    return hash
  }

  return "home"
}

function useHashRoute() {
  const [route, setRoute] = useState<RouteId>(getInitialRoute)

  useEffect(() => {
    const sync = () => {
      setRoute(getInitialRoute())
    }

    window.addEventListener("hashchange", sync)
    return () => {
      window.removeEventListener("hashchange", sync)
    }
  }, [])

  const navigate = (nextRoute: RouteId) => {
    window.location.hash = nextRoute
    setRoute(nextRoute)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return { route, navigate }
}

function BackgroundField() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-x-[-15%] top-[-18%] h-136 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,213,0,0.22),rgba(255,213,0,0.04)_32%,rgba(255,213,0,0)_64%)] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_38%),linear-gradient(180deg,rgba(6,6,7,0.3),rgba(6,6,7,0.92)_28%,rgba(6,6,7,1))]" />
    </div>
  )
}

function SectionHeading({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl space-y-4 pt-24 pb-8">
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-foreground/72 sm:text-lg">
        {description}
      </p>
    </div>
  )
}

function HeroSection(){
  return (
  <section className="min-h-[65vh] w-full flex flex-col gap-12 justify-center select-none">
    <div className="flex justify-center items-center gap-12">
      <img 
      className="w-82.5 aspect-square rounded-full border-[3px] border-primary -scale-x-100"
      src="images/portrait.jpg" 
      alt="portrait" 
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
          <p className="">currently researching:</p>
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

function LandingPage({ onNavigate }: { onNavigate: (route: RouteId) => void }) {
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
        {
          track === "researcher" ? 

          <SectionHeading
            title="Highlighted Publications"
            description="Featured work that best captures the breadth and variety of my research interests."
          />
          :
          <SectionHeading
            title="Highlighted Coding Projects"
            description="A selection of projects to showcase my skillset. I mostly create LLM applications with Python FastAPI backends and Typescript React frontends."
          />
        }
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
            variant={"link"}
            >
              See all projects <ArrowRight className="size-6" />
          </Button>
        </div>
      </section>
    </div>
  )
}

function FilterGroup({
  label,
  options,
}: {
  label: string
  options: { label: string; active: boolean; onClick: () => void }[]
}) {
  return (
    <div className="space-y-3">
      <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-3">
        {options.map((option) => (
          <button
            key={option.label}
            className={cn(
              "border-b pb-1 text-sm transition-colors",
              option.active
                ? "border-primary text-primary"
                : "border-white/15 text-foreground/62 hover:border-white/35 hover:text-white"
            )}
            onClick={option.onClick}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function ProjectsPage() {
  const [query, setQuery] = useState("")
  const deferredQuery = useDeferredValue(query)
  const [typeFilters, setTypeFilters] = useState({
    publication: true,
    coding: true,
    other: true,
  })
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([])
  const [selectedPublicationTypes, setSelectedPublicationTypes] = useState<
    PublicationType[]
  >([])
  const [firstAuthorOnly, setFirstAuthorOnly] = useState(false)

  const filteredProjects = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase()

    return projects.filter((project) => {
      if (!typeFilters[project.type]) {
        return false
      }

      if (
        selectedKeywords.length > 0 &&
        !selectedKeywords.every((keyword) => project.keywords.includes(keyword))
      ) {
        return false
      }

      if (
        selectedPublicationTypes.length > 0 &&
        (!project.publicationType ||
          !selectedPublicationTypes.includes(project.publicationType))
      ) {
        return false
      }

      if (firstAuthorOnly && !project.firstAuthor) {
        return false
      }

      if (!normalizedQuery) {
        return true
      }

      const haystack = [
        project.title,
        project.summary,
        project.authors,
        project.authorRole,
        project.publicationType,
        project.status,
        ...project.keywords,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()

      return haystack.includes(normalizedQuery)
    })
  }, [
    deferredQuery,
    firstAuthorOnly,
    selectedKeywords,
    selectedPublicationTypes,
    typeFilters,
  ])

  const groupedProjects = useMemo(() => {
    return filteredProjects.reduce<Record<number, ProjectEntry[]>>((acc, project) => {
      acc[project.year] ??= []
      acc[project.year].push(project)
      return acc
    }, {})
  }, [filteredProjects])

  const years = useMemo(
    () => Object.keys(groupedProjects).map(Number).sort((a, b) => b - a),
    [groupedProjects]
  )

  const toggleKeyword = (keyword: string) => {
    setSelectedKeywords((current) =>
      current.includes(keyword)
        ? current.filter((item) => item !== keyword)
        : [...current, keyword]
    )
  }

  const togglePublicationType = (publicationType: PublicationType) => {
    setSelectedPublicationTypes((current) =>
      current.includes(publicationType)
        ? current.filter((item) => item !== publicationType)
        : [...current, publicationType]
    )
  }

  const resetFilters = () => {
    setQuery("")
    setSelectedKeywords([])
    setSelectedPublicationTypes([])
    setFirstAuthorOnly(false)
    setTypeFilters({
      publication: true,
      coding: true,
      other: true,
    })
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16">
      <SectionHeading
        description="One index for publications, coding work, and everything in between. Search, type toggles, and filters stay visible without turning into a dashboard."
        title="The complete list"
      />

      <section className="grid gap-10 border-y border-white/8 py-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-6">
          <label className="block space-y-3">
            <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Search
            </span>
            <span className="relative block">
              <Search className="pointer-events-none absolute left-0 top-1/2 size-4 -translate-y-1/2 text-foreground/35" />
              <input
                className="w-full border-b border-white/12 bg-transparent py-3 pl-7 pr-10 text-base text-white outline-none transition-colors placeholder:text-foreground/30 focus:border-primary"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search title, summary, keywords, authors..."
                value={query}
              />
              {query ? (
                <button
                  aria-label="Clear search"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground/45 transition-colors hover:text-primary"
                  onClick={() => setQuery("")}
                  type="button"
                >
                  <X className="size-4" />
                </button>
              ) : null}
            </span>
          </label>

          <FilterGroup
            label="Show"
            options={[
              {
                active: typeFilters.publication,
                label: "Publications",
                onClick: () =>
                  setTypeFilters((current) => ({
                    ...current,
                    publication: !current.publication,
                  })),
              },
              {
                active: typeFilters.coding,
                label: "Coding projects",
                onClick: () =>
                  setTypeFilters((current) => ({
                    ...current,
                    coding: !current.coding,
                  })),
              },
              {
                active: typeFilters.other,
                label: "Other projects",
                onClick: () =>
                  setTypeFilters((current) => ({
                    ...current,
                    other: !current.other,
                  })),
              },
            ]}
          />

          <FilterGroup
            label="Publication type"
            options={publicationTypes.map((publicationType) => ({
              active: selectedPublicationTypes.includes(publicationType),
              label: publicationType,
              onClick: () => togglePublicationType(publicationType),
            }))}
          />

          <FilterGroup
            label="Keywords"
            options={keywordOptions.slice(0, 12).map((keyword) => ({
              active: selectedKeywords.includes(keyword),
              label: keyword,
              onClick: () => toggleKeyword(keyword),
            }))}
          />

          <button
            className={cn(
              "border-b pb-1 text-sm transition-colors",
              firstAuthorOnly
                ? "border-primary text-primary"
                : "border-white/15 text-foreground/62 hover:border-white/35 hover:text-white"
            )}
            onClick={() => setFirstAuthorOnly((value) => !value)}
            type="button"
          >
            First-author publications only
          </button>
        </div>

        <div className="flex items-end justify-between gap-6 border-t border-white/8 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div className="max-w-xl text-base leading-8 text-foreground/68">
            Search covers project titles, summaries, publication metadata, and
            keywords. Filters combine instantly, and the layout stays compact so
            the content remains the main event.
          </div>
          <button
            className="border-b border-white/15 pb-1 text-sm text-foreground/62 transition-colors hover:border-white/35 hover:text-white"
            onClick={resetFilters}
            type="button"
          >
            Reset all
          </button>
        </div>
      </section>

      <section>
        <div className="border-b border-white/8 pb-4 text-sm text-foreground/45">
          {filteredProjects.length} matching entries
        </div>
        {years.map((year) => (
          <div key={year}>
            <div className="pt-10 text-xs uppercase tracking-[0.32em] text-muted-foreground">
              {year}
            </div>
            <div>
              {groupedProjects[year].map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

function CvPage() {
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

function App() {
  const { route, navigate } = useHashRoute()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const handleNavigate = (nextRoute: RouteId) => {
    setMobileMenuOpen(false)
    navigate(nextRoute)
  }

  return (
    <div className="min-h-svh bg-background text-foreground">
      <BackgroundField />
      <SiteHeader
        activeRoute={route}
        onNavigate={handleNavigate}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen((open) => !open)}
      />

      <main className="relative z-10">
        {route === "home" ? <LandingPage onNavigate={handleNavigate} /> : null}
        {route === "projects" ? <ProjectsPage /> : null}
        {route === "cv" ? <CvPage /> : null}
      </main>

      <footer className="relative z-10 text-muted-foreground border-t border-border w-full flex flex-col items-center py-4 mt-16 text-sm gap-2">
        <a href="mailto:fgroener@asu.edu">fgroener@asu.edu</a>
        <p>Last updated in April 2026</p>
      </footer>
    </div>
  )
}

export default App
