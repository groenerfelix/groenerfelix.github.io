import type { ProjectEntry, ProjectSubType, ProjectType } from "@/types/content"

export const initialProjectTypeFilters = {
  publication: true,
  coding: false,
  other: false,
} satisfies Record<ProjectType, boolean>

export type ProjectTypeFilters = typeof initialProjectTypeFilters

type ProjectFilterOptions = {
  firstAuthorOnly: boolean
  query: string
  selectedKeywords: string[]
  selectedProjectTypes: ProjectSubType[]
  typeFilters: ProjectTypeFilters
}

const isVisibleProject = (
  project: ProjectEntry,
  typeFilters: ProjectTypeFilters
) => typeFilters[project.type]

export function getAvailableProjectTypes(
  projects: ProjectEntry[],
  typeFilters: ProjectTypeFilters
) {
  return Array.from(
    new Set(
      projects
        .filter((project) => isVisibleProject(project, typeFilters))
        .map((project) => project.projectType)
        .filter((value): value is ProjectSubType => Boolean(value))
    )
  ).sort()
}

export function getAvailableKeywords(
  projects: ProjectEntry[],
  typeFilters: ProjectTypeFilters
) {
  return Array.from(
    new Set(
      projects
        .filter((project) => isVisibleProject(project, typeFilters))
        .flatMap((project) => project.keywords)
    )
  ).sort()
}

export function filterProjects(
  projects: ProjectEntry[],
  {
    firstAuthorOnly,
    query,
    selectedKeywords,
    selectedProjectTypes,
    typeFilters,
  }: ProjectFilterOptions
) {
  const normalizedQuery = query.trim().toLowerCase()

  return projects.filter((project) => {
    if (!isVisibleProject(project, typeFilters)) {
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
      (!project.projectType ||
        !selectedProjectTypes.includes(project.projectType))
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
}

export function groupProjectsByYear(projects: ProjectEntry[]) {
  return projects.reduce<Record<number, ProjectEntry[]>>((acc, project) => {
    acc[project.year] ??= []
    acc[project.year].push(project)
    return acc
  }, {})
}

export function getProjectYears(
  groupedProjects: Record<number, ProjectEntry[]>
) {
  return Object.keys(groupedProjects)
    .map(Number)
    .sort((a, b) => b - a)
}
