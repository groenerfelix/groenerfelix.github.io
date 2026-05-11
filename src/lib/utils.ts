import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { useEffect, useState } from "react"

export const useReducedMotion = (): boolean => {
    const [reduced, setReduced] = useState(false)

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