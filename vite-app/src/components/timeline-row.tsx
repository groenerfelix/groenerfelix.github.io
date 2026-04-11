import { cn } from "@/lib/utils"
import type { TimelineEntry } from "@/types/content"

type TimelineRowProps = {
  entry: TimelineEntry
}

export function TimelineRow({ entry }: TimelineRowProps) {
  return (
    <article className="grid gap-4 border-t border-white/8 py-6 md:grid-cols-[180px_1fr] md:gap-8">
      <div className="text-sm text-primary">{entry.timespan}</div>

      <div className="space-y-3">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-medium tracking-tight text-white">
              {entry.title}
            </h3>
            <div className="pt-1 text-base text-foreground/62">{entry.org}</div>
          </div>
          <div
            className={cn(
              "text-xs uppercase tracking-[0.24em]",
              entry.current ? "text-primary" : "text-foreground/40"
            )}
          >
            {entry.current ? "Current" : "Timeline entry"}
          </div>
        </div>

        <ul className="space-y-3 text-sm leading-7 text-foreground/72">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-3 h-px w-6 shrink-0 bg-white/18" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/48">
          {entry.keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
