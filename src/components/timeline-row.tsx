import type { TimelineEntry } from "@/types/content"

export function TimelineRow({ entry }: { entry: TimelineEntry }) {
  const topics = entry.keywords.join(", ")
  const [start, end] = entry.timespan

  return (
    <article className="group grid gap-4 border-t border-border py-6 md:grid-cols-[180px_1fr] md:gap-8">
      <div className="flex min-h-full flex-row-reverse md:flex-col items-center justify-center self-stretch text-center text-sm text-primary">
        <span>{end}</span>
        <span className="mr-3 md:mr-0 md:mt-3 h-2 w-2 rounded-full bg-primary" />
        <span className="relative mx-2 h-px max-w-10 md:mx-0 md:h-auto md:my-2 md:w-px flex-1 overflow-hidden bg-border">
          <span className="absolute inset-y-0 -left-5 w-5 bg-linear-to-r from-transparent via-primary/70 to-transparent opacity-0 group-hover:animate-[timeline-streak-x_3s_ease-in-out_infinite] group-hover:opacity-100 md:inset-x-0 md:-top-5 md:left-auto md:h-5 md:w-full md:bg-linear-to-b md:group-hover:animate-[timeline-streak-y_3s_ease-in-out_infinite]" />
        </span>
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="mr-3 md:mr-0 md:mt-3">{start}</span>
      </div>

      <div className="space-y-3">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-medium tracking-tight text-foreground">
              {entry.title}
            </h3>
            <div className="pt-1 text-base text-muted-foreground">{entry.org}</div>
          </div>
        </div>

        <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
          {entry.bullets.map((bullet, index) => (
            <li key={`${entry.id}-bullet-${index}`} className="flex gap-2 mb-0">
              <span className="mt-3 h-px w-2 shrink-0 bg-border" />
              <span>{bullet}</span>
            </li>
          ))}
          <li className="flex gap-2 mb-0">
            <span className="mt-3 h-px w-2 shrink-0 bg-border" />
            <span>Topics: {topics}</span>
          </li>
        </ul>
      </div>
    </article>
  )
}
