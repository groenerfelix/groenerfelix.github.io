import type { ReactNode } from "react"
import { motion } from "motion/react"
import { useReducedMotion, easeOut } from "@/lib/utils"

type EntranceProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
}

export function Entrance({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 14,
}: EntranceProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      animate={
        reducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y, filter: "blur(2px)" }}
      transition={
        reducedMotion ? undefined : { delay, duration, ease: easeOut }
      }
    >
      {children}
    </motion.div>
  )
}
