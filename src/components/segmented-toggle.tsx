import { useId, useRef, useState, type PointerEvent } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react"
import type { LucideIcon } from "lucide-react"

import { cn, useReducedMotion } from "@/lib/utils"

export type SegmentedOption<T extends string> = {
  icon?: LucideIcon
  label: string
  value: T
}

type SegmentedToggleProps<T extends string> = {
  label: string
  value: T
  onChange: (value: T) => void
  options: SegmentedOption<T>[]
}

type SegmentedToggleOptionProps<T extends string> = {
  activeLayoutId: string
  hoverLayoutId: string
  isActive: boolean
  isHovered: boolean
  onChange: (value: T) => void
  onHoverChange: (value: T | null) => void
  option: SegmentedOption<T>
  reducedMotion: boolean
}

function SegmentedToggleOption<T extends string>({
  activeLayoutId,
  hoverLayoutId,
  isActive,
  isHovered,
  onChange,
  onHoverChange,
  option,
  reducedMotion,
}: SegmentedToggleOptionProps<T>) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const shineX = useMotionValue(0)
  const smoothShineX = useSpring(
    shineX,
    reducedMotion
      ? { duration: 0 }
      : { stiffness: 520, damping: 42, mass: 0.24 }
  )
  const Icon = option.icon

  const activeTransition = reducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 430, damping: 32, mass: 0.82 }

  const hoverTransition = reducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 520, damping: 38, mass: 0.55 }

  const moveShine = (event: PointerEvent<HTMLButtonElement>) => {
    const { left } = event.currentTarget.getBoundingClientRect()

    shineX.set(event.clientX - left)
  }

  return (
    <motion.button
      key={option.value}
      className={cn(
        "group relative isolate min-h-13 overflow-hidden rounded-full px-3 py-3 text-center font-medium transition-colors duration-300 sm:text-xl",
        isActive
          ? "cursor-default text-primary-foreground"
          : "cursor-pointer text-muted-foreground hover:text-foreground"
      )}
      onBlur={() => {
        onHoverChange(null)
      }}
      onClick={() => onChange(option.value)}
      onFocus={() => {
        onHoverChange(option.value)
      }}
      onPointerEnter={(event) => {
        onHoverChange(option.value)
        moveShine(event)
      }}
      onPointerLeave={() => {
        onHoverChange(null)
      }}
      onPointerMove={moveShine}
      ref={buttonRef}
      role="radio"
      aria-checked={isActive}
      type="button"
      whileTap={reducedMotion || isActive ? undefined : { scale: 0.985, y: 1 }}
    >
      <AnimatePresence>
        {!isActive && isHovered ? (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,color-mix(in_oklch,var(--primary)_12%,transparent),color-mix(in_oklch,var(--primary)_4%,transparent))] shadow-[inset_0_0_0_1px_color-mix(in_oklch,var(--primary)_20%,transparent)]"
            exit={{ opacity: 0, scale: 0.985 }}
            initial={{ opacity: 0, scale: 0.985 }}
            layoutId={hoverLayoutId}
            transition={hoverTransition}
            animate={{
              opacity: 1,
              scale: reducedMotion ? 1 : 1.015,
            }}
          >
            <motion.span
              className="pointer-events-none absolute top-1/2 left-0 h-[190%] w-24 -translate-x-1/2 -translate-y-1/2 rotate-12 bg-linear-to-r from-transparent via-white/25 to-transparent blur-md"
              style={{ x: smoothShineX }}
            />
          </motion.span>
        ) : null}
      </AnimatePresence>

      {isActive ? (
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-primary shadow-[0_18px_55px_color-mix(in_oklch,var(--primary)_24%,transparent),inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-18px_34px_rgba(0,0,0,0.14)]"
          layoutId={activeLayoutId}
          transition={activeTransition}
        >
          <motion.span
            className="pointer-events-none absolute top-1/2 left-0 h-[220%] w-28 -translate-x-1/2 -translate-y-1/2 rotate-12 bg-linear-to-r from-transparent via-white/45 to-transparent blur-md"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{
              opacity: reducedMotion || isHovered ? 0.72 : 0,
            }}
            style={{ x: smoothShineX }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
            }
          />
        </motion.span>
      ) : null}

      {isActive ? (
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full ring-1 ring-primary/60"
          key={option.value}
          initial={
            reducedMotion
              ? false
              : { opacity: 0.7, scale: 0.86, filter: "blur(0px)" }
          }
          animate={
            reducedMotion
              ? undefined
              : { opacity: 0, scale: 1.18, filter: "blur(3px)" }
          }
          transition={
            reducedMotion
              ? undefined
              : { duration: 0.58, ease: [0.22, 1, 0.36, 1] }
          }
        />
      ) : null}

      <span className="relative z-10 inline-flex translate-y-px items-center gap-3 font-bold">
        {Icon ? (
          <motion.span
            animate={
              isActive && !reducedMotion
                ? { rotate: [0, -8, 8, 0], scale: [1, 1.16, 1] }
                : { rotate: 0, scale: 1 }
            }
            className="grid size-5 shrink-0 place-items-center sm:size-6"
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <Icon className="size-5 sm:size-6" />
          </motion.span>
        ) : null}
        <motion.span
          animate={isActive && !reducedMotion ? { y: [1, -2, 1] } : { y: 1 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.36, ease: [0.22, 1, 0.36, 1] }
          }
        >
          {option.label}
        </motion.span>
      </span>
    </motion.button>
  )
}

export function SegmentedToggle<T extends string>({
  label,
  value,
  onChange,
  options,
}: SegmentedToggleProps<T>) {
  const reducedMotion = useReducedMotion()
  const id = useId().replace(/:/g, "")
  const labelId = `${id}-segmented-toggle-label`
  const activeLayoutId = `${id}-segmented-toggle-active`
  const hoverLayoutId = `${id}-segmented-toggle-hover`
  const [hoveredValue, setHoveredValue] = useState<T | null>(null)

  return (
    <div className="space-y-5">
      <div
        className="text-center tracking-[0.2em] text-muted-foreground uppercase"
        id={labelId}
      >
        {label}
      </div>

      <div className="mx-auto w-full max-w-4xl rounded-[30px] border border-border bg-card p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_22px_70px_rgba(0,0,0,0.18)] sm:rounded-full">
        <div
          aria-labelledby={labelId}
          className="grid grid-cols-1 gap-2 sm:grid-cols-2"
          role="radiogroup"
        >
          {options.map((option) => {
            const isActive = option.value === value
            const isHovered = hoveredValue === option.value

            return (
              <SegmentedToggleOption
                activeLayoutId={activeLayoutId}
                hoverLayoutId={hoverLayoutId}
                isActive={isActive}
                isHovered={isHovered}
                key={option.value}
                onChange={onChange}
                onHoverChange={setHoveredValue}
                option={option}
                reducedMotion={reducedMotion}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
