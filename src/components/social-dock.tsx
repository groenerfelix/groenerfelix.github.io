import { useRef, useState } from "react"
import { useReducedMotion } from "@/lib/utils"

import { socialLinks } from "@/data/social"
import type { SocialLink } from "@/types/content"

const iconSrcMap: Partial<Record<SocialLink["label"], string>> = {
  GitHub: "github-logo.svg",
  LinkedIn: "linkedin-logo.svg",
  Email: "envelope.svg",
  Scholar: "graduation-cap.svg",
  Twitter: "twitter-logo.svg",
}

export function SocialDock() {
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [pointerX, setPointerX] = useState<number | null>(null)
  const reducedMotion = useReducedMotion()

  const influenceRadius = 75

  return (
    <div
      className="mx-auto flex w-125 max-w-[90vw] flex-row justify-around"
      onMouseLeave={() => setPointerX(null)}
      onMouseMove={(event) => setPointerX(event.clientX)}
    >
      {socialLinks.map((link, index) => {
        const iconSrc = link.iconSrc ?? `/logos/${iconSrcMap[link.label]}`
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
            className="group flex cursor-pointer flex-col items-center justify-center gap-2 py-3 text-center transition-[color,transform] duration-200 ease-out hover:text-primary"
            href={link.href}
            rel="noreferrer"
            // style={{ transform: `translateY(${lift}px)` }}
            target="_blank"
          >
            <span
              aria-hidden="true"
              className="size-10 bg-foreground/75 transition-[background-color,transform] duration-200 ease-out group-hover:bg-primary"
              style={{
                WebkitMaskImage: `url(${iconSrc})`,
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskImage: `url(${iconSrc})`,
                maskPosition: "center",
                maskRepeat: "no-repeat",
                maskSize: "contain",
                transform: `scale(${iconScale}) translateY(${lift}px)`,
              }}
            />
            <span
              className="text-sm text-foreground/72 transition-[color,transform] duration-200 ease-out group-hover:text-primary"
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
