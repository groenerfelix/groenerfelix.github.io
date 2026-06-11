export type RouteId = "home" | "projects" | "cv"
export type AppRoute =
  | { kind: RouteId }
  | { kind: "story"; slug: string }
  | { kind: "not-found" }

export type SocialLink = {
  href: string
  logo: React.FC<React.SVGProps<SVGSVGElement>>
  label: string
  hideOnSmallScreens?: boolean
}

export type ProjectLink = {
  label: string
  href: string
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
  bullets: React.ReactNode[]
  keywords: string[]
}
