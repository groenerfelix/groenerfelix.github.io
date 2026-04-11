import { ArrowUpRight } from "lucide-react"
import type { FeaturedProject } from "@/types/content"

type FeaturedWorkRowProps = {
  project: FeaturedProject
}

export function FeaturedWorkRow({ project }: FeaturedWorkRowProps) {
  return (
    <article className="grid gap-10 border-t border-border py-35 md:grid-cols-[1.6fr_0.6fr] md:items-center">
      <div className="order-2 space-y-6 md:order-1">
        <div className="text-xs uppercase tracking-[0.28em] text-primary">
          {project.eyebrow}
        </div>
        <h3 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h3>
        <p className="max-w-2xl text-lg leading-8 text-secondary-foreground">
          {project.summary}
        </p>
        <ul className="space-y-3 text-md leading-7 text-secondary-foreground">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-3 h-px w-3 shrink-0 bg-primary/70" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-6 pt-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              className="inline-flex cursor-pointer items-center gap-2 border-b border-primary pb-1 text-sm font-medium text-primary transition-colors hover:border-foreground hover:text-foreground"
              href={link.href}
              target={ link.href.includes(".") ? "_blank" : "_self"}
            >
              {link.label}
              { link.href.includes(".") && <ArrowUpRight className="size-4" /> }
              
            </a>
          ))}
        </div>
      </div>

      <div className="order-1 md:order-2">
        <div className="group relative mx-auto max-w-md perspective-distant">
          <div className="absolute inset-0 bg-primary/12 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
          <img
            alt={project.imageAlt}
            className="relative w-full origin-center object-cover shadow-[0_40px_80px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out transform-[rotateY(-12deg)_rotateX(0deg)_rotateZ(2deg)] group-hover:transform-[rotateY(0deg)_rotateX(0deg)_rotateZ(0deg)]"
            src={project.image}
          />
        </div>
      </div>
    </article>
  )
}
