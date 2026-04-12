export type RouteId = "home" | "projects" | "cv"

export type SocialLink = {
  download?: string
  href: string
  iconSrc?: string
  label: string
}

export type ProjectLink = {
  label: string
  href: string
}

export type FeaturedProject = {
  id: string
  track: "researcher" | "coder"
  title: string
  eyebrow: string
  summary: string
  bullets: string[]
  image: string
  imageAlt: string
  links: ProjectLink[]
}

export type ProjectType = "publication" | "coding" | "other"
export type ProjectSubType = string

export type ProjectEntry = {
  id: string
  title: string
  year: number
  type: ProjectType
  summary: string
  keywords: string[]
  links: ProjectLink[]
  projectType?: ProjectSubType
  authors?: string
  firstAuthor?: boolean
  publication_info?: string
}

export type TimelineEntry = {
  id: string
  title: string
  org: string
  timespan: [string, string]
  bullets: string[]
  keywords: string[]
}
