import { useRef, useState } from "react"
import { useReducedMotion } from "@/lib/utils"
import { socialLinks } from "@/data/social"

export function SocialDock() {
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [pointerX, setPointerX] = useState<number | null>(null)
  const reducedMotion = useReducedMotion()

  const influenceRadius = 75

  return (
    <div
      className="mx-auto flex max-w-[90vw] py-3 gap-10 flex-row"
      onMouseLeave={() => setPointerX(null)}
      onMouseMove={(event) => setPointerX(event.clientX)}
    >
      {socialLinks.map((link, index) => {
        const rect = itemRefs.current[index]?.getBoundingClientRect()
        const itemCenter = rect ? rect.left + rect.width / 2 : null
        const distance =
          pointerX !== null && itemCenter !== null
            ? Math.abs(pointerX - itemCenter)
            : influenceRadius
        const intensity = reducedMotion ? 0 : Math.max(0, 1 - distance / influenceRadius)
        const iconScale = 1 + intensity * 0.9
        const labelScale = 1 + intensity * 0.12
        const lift = intensity * -8

        return (
          <a
            key={link.label}
            ref={(element) => {
              itemRefs.current[index] = element
            }}
            className="cursor-pointer group flex flex-col items-center justify-center gap-y-1 text-muted-foreground hover:text-primary"
            href={link.href}
            rel="noreferrer"
            target="_blank"
          >
            <link.logo className={`transition-[color,transform] duration-200 ease-out size-10 xl:size-12 aria-hidden:`} style={{transform: `scale(${iconScale}) translateY(${lift}px)`}}/>
            <span
              className=" transition-[color,transform] duration-200 ease-out"
              style={{ transform: `scale(${labelScale}) translateY(${lift*3/4}px)` }}
            >
              {link.label}
            </span>
          </a>
        )
      })}
    </div>
  )
}
