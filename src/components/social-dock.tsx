import { useRef, useState } from "react"
import { motion } from "motion/react"
import { cn, useReducedMotion, easeOut } from "@/lib/utils"
import { socialLinks } from "@/data/social"

const dockVariants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      delayChildren: delay,
      staggerChildren: 0.1,
    },
  }),
}

const dockItemVariants = {
  hidden: { opacity: 0, x: -12, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: easeOut },
  },
}

export function SocialDock({ delay = 0 }: { delay?: number }) {
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [pointerX, setPointerX] = useState<number | null>(null)
  const [itemCenters, setItemCenters] = useState<(number | null)[]>([])
  const reducedMotion = useReducedMotion()

  const influenceRadius = 75

  const measureItems = () => {
    setItemCenters(
      itemRefs.current.map((element) => {
        const rect = element?.getBoundingClientRect()
        return rect ? rect.left + rect.width / 2 : null
      })
    )
  }

  return (
    <motion.div
      animate={reducedMotion ? undefined : "visible"}
      className="mx-auto flex max-w-[90vw] flex-row flex-wrap items-center justify-center gap-10 py-3"
      custom={delay}
      initial={reducedMotion ? false : "hidden"}
      onMouseLeave={() => setPointerX(null)}
      onMouseEnter={measureItems}
      onMouseMove={(event) => setPointerX(event.clientX)}
      variants={dockVariants}
    >
      {socialLinks.map((link, index) => {
        const opensInNewTab = !/^(mailto|tel):/i.test(link.href)
        const itemCenter = itemCenters[index] ?? null
        const distance =
          pointerX !== null && itemCenter !== null
            ? Math.abs(pointerX - itemCenter)
            : influenceRadius
        const intensity = reducedMotion
          ? 0
          : Math.max(0, 1 - distance / influenceRadius)
        const iconScale = 1 + intensity * 0.9
        const labelScale = 1 + intensity * 0.12
        const lift = intensity * -8

        return (
          <motion.a
            key={link.label}
            ref={(element) => {
              itemRefs.current[index] = element
            }}
            className={cn(
              "group cursor-pointer flex-col items-center justify-center gap-y-1 text-muted-foreground hover:text-primary",
              link.hideOnSmallScreens ? "hidden sm:flex" : "flex"
            )}
            href={link.href}
            rel={opensInNewTab ? "noreferrer" : undefined}
            target={opensInNewTab ? "_blank" : undefined}
            variants={dockItemVariants}
          >
            <link.logo
              aria-hidden="true"
              className="size-10 transition-[color,transform] duration-200 ease-out xl:size-12"
              focusable="false"
              style={{
                transform: `scale(${iconScale}) translateY(${lift}px)`,
              }}
            />
            <span
              className="transition-[color,transform] duration-200 ease-out"
              style={{
                transform: `scale(${labelScale}) translateY(${(lift * 3) / 4}px)`,
              }}
            >
              {link.label}
            </span>
          </motion.a>
        )
      })}
    </motion.div>
  )
}
