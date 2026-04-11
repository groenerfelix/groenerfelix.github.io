import { BriefcaseBusiness, GraduationCap, Code, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export type SegmentedOption<T extends string> = {
  label: string
  value: T
}

const optionIcons: Record<string, LucideIcon> = {
  coder: Code,
  degrees: GraduationCap,
  researcher: GraduationCap,
  work: BriefcaseBusiness,
}

type SegmentedToggleProps<T extends string> = {
  label: string
  value: T
  onChange: (value: T) => void
  options: SegmentedOption<T>[]
}

export function SegmentedToggle<T extends string>({
  label,
  value,
  onChange,
  options,
}: SegmentedToggleProps<T>) {
  return (
    <div className="space-y-5">
      <div className="text-center text-md uppercase tracking-[0.32em] text-muted-foreground">
        {label}
      </div>

      <div className="mx-auto w-full max-w-4xl rounded-full border border-border bg-card p-2 shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {options.map((option) => {
            const isActive = option.value === value
            const Icon = optionIcons[option.value]

            return (
              <button
                key={option.value}
                className={cn(
                  "group rounded-full px-3 py-3 text-center text-base font-medium transition-all duration-300 sm:text-xl",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
                )}
                onClick={() => onChange(option.value)}
                type="button"
              >
                <span className="inline-flex items-center gap-3 font-bold translate-y-px">
                  {Icon ? <Icon className="size-5 shrink-0 sm:size-6" /> : null}
                  <span className="translate-y-px">{option.label}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
