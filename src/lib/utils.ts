import { useEffect, useState } from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const getReducedMotionPreference = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

export const useReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState(getReducedMotionPreference)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")

    const update = () => setReduced(mq.matches)

    update()
    mq.addEventListener("change", update)

    return () => mq.removeEventListener("change", update)
  }, [])

  return reduced
}

export function getAvifSource(image: string) {
  const extensionStart = image.lastIndexOf(".")

  if (extensionStart === -1) {
    return undefined
  }

  return `${image.slice(0, extensionStart)}.avif`
}