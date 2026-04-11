export type RouteId = "home" | "projects" | "cv"

export type SocialLink = {
  href: string
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
export type PublicationType =
  | "conference"
  | "journal"
  | "preprint"
  | "workshop"
  | "book chapter"

export type ProjectEntry = {
  id: string
  title: string
  year: number
  type: ProjectType
  summary: string
  keywords: string[]
  links: ProjectLink[]
  sourceCategory: "selected" | "archive"
  publicationType?: PublicationType
  authors?: string
  authorRole?: string
  firstAuthor?: boolean
  status?: string
}

export type TimelineEntry = {
  id: string
  title: string
  org: string
  timespan: string
  bullets: string[]
  keywords: string[]
  current?: boolean
}
