import {
  BookOpen,
  Check,
  Code2,
  FolderKanban,
  type LucideIcon,
} from "lucide-react"

import type { ProjectTypeFilters } from "@/lib/project-filters"
import { cn } from "@/lib/utils"

type ProjectInterestOption = {
  icon: LucideIcon
  label: string
  value: keyof ProjectTypeFilters
}

const projectInterestOptions: ProjectInterestOption[] = [
  { icon: BookOpen, label: "Publications", value: "publication" },
  { icon: Code2, label: "Coding projects", value: "coding" },
  { icon: FolderKanban, label: "Other projects", value: "other" },
]

type InterestCheckboxGroupProps = {
  value: ProjectTypeFilters
  onToggle: (type: keyof ProjectTypeFilters) => void
}

export function InterestCheckboxGroup({
  value,
  onToggle,
}: InterestCheckboxGroupProps) {
  return (
    <div className="space-y-5">
      <div className="text-center text-base tracking-[0.2em] text-muted-foreground uppercase">
        I&apos;m interested in
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <div className="grid gap-3 lg:grid-cols-3">
          {projectInterestOptions.map((option) => {
            const isActive = value[option.value]
            const Icon = option.icon

            return (
              <button
                key={option.value}
                aria-pressed={isActive}
                className={cn(
                  "group flex min-h-0 cursor-pointer items-center justify-between gap-3 rounded-full border px-4 py-3 text-left transition-all duration-300",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground hover:bg-primary/75"
                    : "border-border bg-background/55 text-muted-foreground hover:border-primary/45 hover:bg-accent hover:text-foreground"
                )}
                onClick={() => onToggle(option.value)}
                type="button"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors",
                      isActive
                        ? "border-primary-foreground/30 bg-primary-foreground/12"
                        : "border-border bg-card text-muted-foreground group-hover:text-foreground"
                    )}
                  >
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0 text-base font-semibold tracking-tight">
                    {option.label}
                  </div>
                </div>
                <span
                  className={cn(
                    "inline-flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors",
                    isActive
                      ? "border-primary-foreground/30 bg-primary-foreground/14 text-primary-foreground"
                      : "border-border text-transparent group-hover:border-primary/45"
                  )}
                >
                  <Check className="size-3.5" />
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
