import { Search, X } from "lucide-react"
import { useDeferredValue, useMemo, useState } from "react"

import { Entrance } from "@/components/entrance"
import { FilterGroup } from "@/components/filter-group"
import { InterestCheckboxGroup } from "@/components/interest-checkbox-group"
import { ProjectRow } from "@/components/project-row"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { projects } from "@/data/projects"
import {
  filterProjects,
  getAvailableKeywords,
  getAvailableProjectTypes,
  getProjectYears,
  groupProjectsByYear,
  initialProjectTypeFilters,
} from "@/lib/project-filters"
import type { ProjectSubType } from "@/types/content"

export function ProjectsPage() {
  const [query, setQuery] = useState("")
  const deferredQuery = useDeferredValue(query)
  const [typeFilters, setTypeFilters] = useState(initialProjectTypeFilters)
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([])
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<
    ProjectSubType[]
  >([])
  const [firstAuthorOnly, setFirstAuthorOnly] = useState(false)

  const availableProjectTypes = useMemo(
    () => getAvailableProjectTypes(projects, typeFilters),
    [typeFilters]
  )

  const availableKeywords = useMemo(
    () => getAvailableKeywords(projects, typeFilters),
    [typeFilters]
  )

  const filteredProjects = useMemo(
    () =>
      filterProjects(projects, {
        firstAuthorOnly,
        query: deferredQuery,
        selectedKeywords,
        selectedProjectTypes,
        typeFilters,
      }),
    [
      deferredQuery,
      firstAuthorOnly,
      selectedKeywords,
      selectedProjectTypes,
      typeFilters,
    ]
  )

  const groupedProjects = useMemo(
    () => groupProjectsByYear(filteredProjects),
    [filteredProjects]
  )

  const years = useMemo(
    () => getProjectYears(groupedProjects),
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

  const toggleTypeFilter = (type: keyof typeof typeFilters) => {
    const nextTypeFilters = {
      ...typeFilters,
      [type]: !typeFilters[type],
    }
    const nextAvailableKeywords = getAvailableKeywords(
      projects,
      nextTypeFilters
    )
    const nextAvailableProjectTypes = getAvailableProjectTypes(
      projects,
      nextTypeFilters
    )

    setTypeFilters(nextTypeFilters)
    setSelectedKeywords((current) =>
      current.filter((keyword) => nextAvailableKeywords.includes(keyword))
    )
    setSelectedProjectTypes((current) =>
      current.filter((projectType) =>
        nextAvailableProjectTypes.includes(projectType)
      )
    )
  }

  return (
    <div className="mx-auto flex w-full max-w-360 flex-col px-4 py-32 md:px-16">
      <Entrance className="flex flex-col space-y-2" delay={0.06} y={12}>
        <h1 className="text-5xl font-semibold tracking-tight text-foreground">
          All my projects
        </h1>
        <p className="text-2xl leading-8 tracking-tight text-balance text-muted-foreground">
          Search through all my publications, talks, coding projects, and other
          experiments.
        </p>
      </Entrance>

      <section className="mx-auto w-full max-w-6xl space-y-16 pt-32 pb-16">
        <Entrance delay={0.18} y={10}>
          <InterestCheckboxGroup
            onToggle={toggleTypeFilter}
            value={typeFilters}
          />
        </Entrance>
        <Entrance className="space-y-6" delay={0.28} y={10}>
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
            options={availableKeywords.map((keyword) => ({
              active: selectedKeywords.includes(keyword),
              label: keyword,
              onClick: () => toggleKeyword(keyword),
            }))}
          />

          <InputGroup className="mt-12 max-w-xl cursor-default rounded-full border border-primary/50 bg-background px-1 py-6 text-base text-foreground">
            <InputGroupAddon className="cursor-default px-2">
              <Search className="text-primary/75" />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Search title, summary, keywords, authors..."
              className="text-base!"
              onChange={(event) => setQuery(event.target.value)}
              value={query}
            />
            {query ? (
              <InputGroupAddon align="inline-end">
                <Button
                  aria-label="Clear search"
                  className="bg-transparent hover:bg-transparent"
                  onClick={() => setQuery("")}
                  variant="ghost"
                >
                  <X className="size-4" />
                </Button>
              </InputGroupAddon>
            ) : null}
          </InputGroup>
        </Entrance>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <Entrance delay={0.38} y={10}>
          {filteredProjects.length === 0 ? (
            <div className="pb-4 text-sm text-foreground/45">
              No matching entries; try adjusting the filters.
            </div>
          ) : null}
          {years.map((year) => (
            <div key={year}>
              <div className="border-b border-primary/50 pt-10 text-lg text-primary uppercase">
                {year}
              </div>
              <div>
                {groupedProjects[year].map((project) => (
                  <ProjectRow key={project.id} project={project} />
                ))}
              </div>
            </div>
          ))}
        </Entrance>
      </section>
    </div>
  )
}
