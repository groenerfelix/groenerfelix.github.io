import { LinkButton } from "@/components/ui/button"
import type { ProjectEntry } from "@/types/content"

type ProjectRowProps = {
  project: ProjectEntry
}

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <article className="grid gap-4 border-b border-white/8 py-6 md:grid-cols-[15%_auto] md:gap-8">
      <div className="flex flex-col space-y-2 text-sm">
        {project.projectType ? (
          <span className="tracking-[0.2em] text-foreground/45 uppercase">
            {project.projectType}
          </span>
        ) : null}
      </div>

      <div>
        <h3 className="max-w-3xl pb-1 text-xl leading-5 font-medium tracking-tight text-foreground">
          {project.title}
        </h3>
        {project.publication_info ? (
          <div className="text-sm text-muted-foreground">
            {project.publication_info}
          </div>
        ) : null}
        {project.authors ? (
          <div className="text-sm text-muted-foreground">{project.authors}</div>
        ) : null}

        <p className="max-w-4xl pt-4 leading-5 text-muted-foreground">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-5 pt-1">
          {project.links.map((link) => (
            <LinkButton key={link.label} href={link.href}>
              {link.label}
            </LinkButton>
          ))}
        </div>
      </div>
    </article>
  )
}
