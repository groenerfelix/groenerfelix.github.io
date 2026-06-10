import { useEffect, useState } from "react"

import { getStoryBySlug } from "@/stories/registry"
import type { AppRoute, RouteId } from "@/types/content"

const routePaths: Record<RouteId, string> = {
  home: "/",
  projects: "/projects",
  cv: "/cv",
}

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1)
  }

  return pathname
}

function getCurrentRoute(): AppRoute {
  if (typeof window === "undefined") {
    return { kind: "home" }
  }

  const pathname = normalizePath(window.location.pathname)

  if (pathname === "/") {
    return { kind: "home" }
  }

  if (pathname === "/projects") {
    return { kind: "projects" }
  }

  if (pathname === "/cv") {
    return { kind: "cv" }
  }

  if (pathname.startsWith("/stories/")) {
    const slug = pathname.slice("/stories/".length)

    if (slug && !slug.includes("/") && getStoryBySlug(slug)) {
      return { kind: "story", slug }
    }
  }

  return { kind: "not-found" }
}

export function getRoutePath(route: RouteId) {
  return routePaths[route]
}

export function usePathRoute() {
  const [route, setRoute] = useState<AppRoute>(getCurrentRoute)

  useEffect(() => {
    const sync = () => {
      setRoute(getCurrentRoute())
    }

    window.addEventListener("popstate", sync)
    return () => {
      window.removeEventListener("popstate", sync)
    }
  }, [])

  const navigate = (nextRoute: RouteId) => {
    const nextPath = getRoutePath(nextRoute)

    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, "", nextPath)
    }

    setRoute(getCurrentRoute())
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return { route, navigate }
}
