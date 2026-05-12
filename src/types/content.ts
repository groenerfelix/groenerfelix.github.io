export type RouteId = "home" | "projects" | "cv"
export type LandingTrack = "researcher" | "developer"

export type SocialLink = {
  download?: string
  href: string
  logo: React.FC<React.SVGProps<SVGSVGElement>>
  label: string
}

export type ProjectLink = {
  label: string
  href: string
}

export type FeaturedProjectMedia = {
  image: string
  imageAlt: string
  paragraph: string
  link?: ProjectLink
}

export type FeaturedProject = {
  id: string
  track: LandingTrack
  title: string
  media: FeaturedProjectMedia[]
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
