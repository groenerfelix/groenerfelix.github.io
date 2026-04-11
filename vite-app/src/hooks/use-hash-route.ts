import { useEffect, useState } from "react"

import type { RouteId } from "@/types/content"

function getInitialRoute(): RouteId {
  if (typeof window === "undefined") {
    return "home"
  }

  const hash = window.location.hash.replace("#", "")
  if (hash === "projects" || hash === "cv" || hash === "home") {
    return hash
  }

  return "home"
}

export function useHashRoute() {
  const [route, setRoute] = useState<RouteId>(getInitialRoute)

  useEffect(() => {
    const sync = () => {
      setRoute(getInitialRoute())
    }

    window.addEventListener("hashchange", sync)
    return () => {
      window.removeEventListener("hashchange", sync)
    }
  }, [])

  const navigate = (nextRoute: RouteId) => {
    window.location.hash = nextRoute
    setRoute(nextRoute)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return { route, navigate }
}
