import { motion } from "motion/react"

import { useReducedMotion } from "@/lib/utils"

export function LandingBackground() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden
      animate={reducedMotion ? undefined : { opacity: 1 }}
      className="pointer-events-none absolute top-0 left-1/2 -z-10 h-svh w-full -translate-x-1/2 overflow-hidden"
      initial={reducedMotion ? false : { opacity: 0 }}
      transition={reducedMotion ? undefined : { duration: 1.8, ease: "easeIn" }}
    >
      <div
        className="absolute inset-x-[-10%] top-0 h-[88svh] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[72px_72px] opacity-[0.16]"
        style={{
          WebkitMaskImage:
            "linear-gradient(186deg, #000 0%, #000 42%, rgba(0,0,0,0.72) 62%, rgba(0,0,0,0.22) 82%, transparent 100%)",
          maskImage:
            "linear-gradient(186deg, #000 0%, #000 42%, rgba(0,0,0,0.72) 62%, rgba(0,0,0,0.22) 82%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-x-[-10%] top-0 h-[88svh] bg-size-[72px_72px] opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklch, var(--primary) 6%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklch, var(--primary) 6%, transparent) 1px, transparent 1px)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 33%, #000 0%, rgba(0,0,0,0.85) 19%, rgba(0,0,0,0.38) 38%, transparent 58%)",
          maskImage:
            "radial-gradient(ellipse at 50% 33%, #000 0%, rgba(0,0,0,0.85) 19%, rgba(0,0,0,0.38) 38%, transparent 58%)",
        }}
      />
    </motion.div>
  )
}
