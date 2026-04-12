import { Search, X } from "lucide-react"
import { useDeferredValue, useEffect, useMemo, useState } from "react"

import { FilterGroup } from "@/components/filter-group"
import {
  initialProjectTypeFilters,
  InterestCheckboxGroup,
} from "@/components/interest-checkbox-group"
import { ProjectRow } from "@/components/project-row"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/data/projects"
import type { ProjectEntry, ProjectSubType } from "@/types/content"

export function ProjectsPage() {
  const [query, setQuery] = useState("")
  const deferredQuery = useDeferredValue(query)
  const [typeFilters, setTypeFilters] = useState(initialProjectTypeFilters)
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([])
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<ProjectSubType[]>([])
  const [firstAuthorOnly, setFirstAuthorOnly] = useState(false)

  const availableProjectTypes = useMemo(() => {
    return Array.from(
      new Set(
        projects
          .filter((project) => typeFilters[project.type])
          .map((project) => project.projectType)
          .filter((value): value is ProjectSubType => Boolean(value))
      )
    ).sort()
  }, [typeFilters])

  const availableKeywords = useMemo(() => {
    return Array.from(
      new Set(
        projects
          .filter((project) => typeFilters[project.type])
          .flatMap((project) => project.keywords)
      )
    ).sort()
  }, [typeFilters])

  useEffect(() => {
    setSelectedKeywords((current) =>
      current.filter((keyword) => availableKeywords.includes(keyword))
    )
  }, [availableKeywords])

  useEffect(() => {
    setSelectedProjectTypes((current) =>
      current.filter((projectType) => availableProjectTypes.includes(projectType))
    )
  }, [availableProjectTypes])

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
        selectedProjectTypes.length > 0 &&
        (!project.projectType || !selectedProjectTypes.includes(project.projectType))
      ) {
        return false
      }

      if (
        firstAuthorOnly &&
        project.type === "publication" &&
        !project.firstAuthor
      ) {
        return false
      }

      if (!normalizedQuery) {
        return true
      }

      const haystack = [
        project.title,
        project.summary,
        project.authors,
        project.projectType,
        project.publication_info,
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
    selectedProjectTypes,
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

  const toggleProjectType = (projectType: ProjectSubType) => {
    setSelectedProjectTypes((current) =>
      current.includes(projectType)
        ? current.filter((item) => item !== projectType)
        : [...current, projectType]
    )
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16">
      <SectionHeading
        title="All my projects"
        description="Search through all my publications, talks, coding projects, and other experiments."
      />

      <InterestCheckboxGroup
        onToggle={(type) =>
          setTypeFilters((current) => ({
            ...current,
            [type]: !current[type],
          }))
        }
        value={typeFilters}
      />

      <section className=" py-8">
        <div className="space-y-6">
          <FilterGroup
            label="Project type"
            options={[
              ...availableProjectTypes.map((projectType) => ({
                active: selectedProjectTypes.includes(projectType),
                label: projectType,
                onClick: () => toggleProjectType(projectType),
              })),
              ...(typeFilters.publication
                ? [
                    {
                      active: firstAuthorOnly,
                      label: "First Author",
                      onClick: () => setFirstAuthorOnly((value) => !value),
                    },
                  ]
                : []),
            ]}
          />

          <FilterGroup
            label="Keywords"
            options={availableKeywords.slice(0, 12).map((keyword) => ({
              active: selectedKeywords.includes(keyword),
              label: keyword,
              onClick: () => toggleKeyword(keyword),
            }))}
          />

          <label className="block space-y-3 rounded-4xl border border-primary/50 focus:border-primary p-3">

            <span className="relative block">
              <Search className="pointer-events-none absolute left-0 top-1/2 size-4 -translate-y-1/2 text-primary/75" />
              <input
                className="w-full pl-7 pr-10 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search title, summary, keywords, authors..."
                value={query}
              />
              {query ? (
                <button
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/45 transition-colors hover:text-primary cursor-pointer"
                  onClick={() => setQuery("")}
                  type="button"
                >
                  <X className="size-4" />
                </button>
              ) : null}
            </span>
          </label>
        </div>
      </section>

      <section>
        { filteredProjects.length === 0 && 
          <div className="pb-4 text-sm text-foreground/45">
            No matching entries; try adjusting the filters.
          </div>
        }
        {years.map((year) => (
          <div key={year}>
            <div className="pt-10 text-lg uppercase text-primary border-b border-primary/50">
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
