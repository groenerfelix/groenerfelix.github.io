import { cn } from "@/lib/utils"

type FilterGroupProps = {
  label: string
  options: { label: string; active: boolean; onClick: () => void }[]
}

export function FilterGroup({ label, options }: FilterGroupProps) {
  return (
    <div className="space-y-3">
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Filter by {label}
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-3">
        {options.map((option) => (
          <button
            key={option.label}
            className={cn(
              "cursor-pointer border-b pb-1 text-sm transition-colors",
              option.active
                ? "border-primary text-primary"
                : "border-white/15 text-foreground/62 hover:border-white/35 hover:text-white"
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
