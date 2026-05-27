import { useRef, useState, type CSSProperties, type PointerEvent } from "react"

import { stackLogos } from "@/data/featured"
import { cn } from "@/lib/utils"

// const rowClassName =
//   "flex w-full flex-wrap items-center justify-center gap-x-16 gap-y-4 px-8 py-8"
const rowClassName =
  "mx-auto grid w-fit grid-cols-2 md:grid-cols-3 justify-items-center gap-x-8 gap-y-8 px-8 py-8 xl:grid-cols-6"

const itemClassName =
  "inline-flex items-center gap-2 text-xl font-bold cursor-default select-none"

const maskStyle = {
  WebkitMaskImage:
    "radial-gradient(circle 6.5rem at var(--stack-mask-x) var(--stack-mask-y), #000 0%, #000 46%, rgba(0,0,0,0.62) 60%, transparent 76%)",
  maskImage:
    "radial-gradient(circle 6.5rem at var(--stack-mask-x) var(--stack-mask-y), #000 0%, #000 46%, rgba(0,0,0,0.62) 60%, transparent 76%)",
} satisfies CSSProperties

const initialMaskPosition = {
  "--stack-mask-x": "50%",
  "--stack-mask-y": "50%",
} as CSSProperties

function StackLogoItems() {
  return (
    <>
      {stackLogos.map((logo) => (
        <span className={itemClassName} key={logo.label}>
          <logo.logo aria-hidden="true" className="size-8" focusable="false" />
          {logo.label}
        </span>
      ))}
    </>
  )
}

export function StackLogoRow({ className }: { className?: string }) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isLit, setIsLit] = useState(false)

  const updateMaskPosition = (event: PointerEvent<HTMLDivElement>) => {
    const row = rowRef.current

    if (!row) return

    const bounds = row.getBoundingClientRect()

    row.style.setProperty("--stack-mask-x", `${event.clientX - bounds.left}px`)
    row.style.setProperty("--stack-mask-y", `${event.clientY - bounds.top}px`)
  }

  return (
    <div
      className={cn("relative mt-16", className)}
      onPointerEnter={(event) => {
        updateMaskPosition(event)
        setIsLit(true)
      }}
      onPointerLeave={() => setIsLit(false)}
      onPointerMove={updateMaskPosition}
      ref={rowRef}
      style={initialMaskPosition}
    >
      <div className={cn(rowClassName, "text-muted-foreground")}>
        <StackLogoItems />
      </div>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 text-foreground transition-opacity duration-200",
          isLit ? "opacity-100" : "opacity-0"
        )}
        style={maskStyle}
      >
        <div className={rowClassName}>
          <StackLogoItems />
        </div>
      </div>
    </div>
  )
}
