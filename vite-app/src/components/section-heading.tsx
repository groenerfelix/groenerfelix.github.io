import type { ReactNode } from "react"

type SectionHeadingProps = {
  action?: ReactNode
  description: string
  title: string
}

export function SectionHeading({
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-6 pt-24 pb-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-foreground/72 sm:text-lg">
          {description}
        </p>
        {action}
      </div>
      
    </div>
  )
}
