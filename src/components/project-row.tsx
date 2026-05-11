import { ArrowUpRight } from "lucide-react"

import type { ProjectEntry } from "@/types/content"

type ProjectRowProps = {
  project: ProjectEntry
}

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <article className="grid gap-4 border-b border-white/8 py-6 md:grid-cols-[120px_1fr] md:gap-8">
      <div className="space-y-2 text-sm flex flex-col">
        {project.projectType &&
        <span className="uppercase tracking-[0.2em] text-foreground/45">
          {project.projectType}
        </span>
        }
      </div>

      <div className="">
        <h3 className="max-w-3xl text-2xl font-medium tracking-tight text-foreground leading-7 pb-1">
          {project.title}
        </h3>
        {project.publication_info && 
          <div className="text-sm text-foreground/56">
            {project.publication_info}
          </div>
        }
        {project.authors && 
          <div className="text-sm text-foreground/56">
            {project.authors}
          </div>
        }


        <p className="max-w-4xl pt-4 text-foreground/72">
          {project.summary}
        </p>


        <div className="flex flex-wrap gap-5 pt-1">
          {project.links.map((link) => (
            <a
              key={link.label}
              className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary underline"
              href={link.href}
              target="_blank"
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
