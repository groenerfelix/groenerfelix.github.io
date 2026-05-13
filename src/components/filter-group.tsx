import { cn } from "@/lib/utils"

type FilterGroupProps = {
  label: string
  options: { label: string; active: boolean; onClick: () => void }[]
}

export function FilterGroup({ label, options }: FilterGroupProps) {
  const labelId = `filter-${label.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <div className="space-y-3">
      <div
        className="text-xs tracking-[0.2em] text-foreground uppercase"
        id={labelId}
      >
        Filter by {label}
      </div>
      <div
        aria-labelledby={labelId}
        className="flex flex-wrap gap-x-5 gap-y-3"
        role="group"
      >
        {options.map((option) => (
          <button
            key={option.label}
            aria-pressed={option.active}
            className={cn(
              "cursor-pointer text-sm underline underline-offset-4 transition-colors",
              option.active
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
            onClick={option.onClick}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
