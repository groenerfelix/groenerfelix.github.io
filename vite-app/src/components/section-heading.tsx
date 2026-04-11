type SectionHeadingProps = {
  description: string
  title: string
}

export function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4 pt-24 pb-8">
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-foreground/72 sm:text-lg">
        {description}
      </p>
    </div>
  )
}
