import { ArrowUpRight } from "lucide-react"

import type { ProjectEntry } from "@/types/content"

type ProjectRowProps = {
  project: ProjectEntry
}

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <article className="grid gap-4 border-t border-white/8 py-6 md:grid-cols-[120px_1fr] md:gap-8">
      <div className="space-y-2 text-sm">
        <div className="text-primary">{project.year}</div>
        <div className="uppercase tracking-[0.2em] text-foreground/45">
          {project.type}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <h3 className="max-w-3xl text-2xl font-medium tracking-tight text-white">
            {project.title}
          </h3>
          <div className="text-sm text-foreground/45">
            {project.publicationType ? `${project.publicationType} · ` : ""}
            {project.status ?? project.sourceCategory}
          </div>
        </div>

        {project.authors ? (
          <div className="text-sm text-foreground/56">
            {project.authors}
            {project.firstAuthor ? " · First author" : ""}
          </div>
        ) : null}

        <p className="max-w-4xl text-base leading-7 text-foreground/72">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/52">
          {project.keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-5 pt-1">
          {project.links.map((link) => (
            <a
              key={link.label}
              className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              href={link.href}
            >
              {link.label}
              <ArrowUpRight className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
