import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import type { RouteId } from "@/types/content"
import { Button } from "./ui/button"

type SiteHeaderProps = {
  activeRoute: RouteId
  mobileMenuOpen: boolean
  onToggleMenu: () => void
  onNavigate: (route: RouteId) => void
}

const links: { label: string; route: RouteId }[] = [
  { label: "Home", route: "home" },
  { label: "Projects", route: "projects" },
  { label: "CV", route: "cv" },
]

export function SiteHeader({
  activeRoute,
  mobileMenuOpen,
  onToggleMenu,
  onNavigate,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-background/80 backdrop-blur-xl select-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <div>
          <div className="text-[0.7rem] uppercase tracking-[0.32em] text-primary">
            Felix Gr&ouml;ner
          </div>
          <div className="text-sm text-muted-foreground">
            Human-LLM Interaction Researcher
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.route}
              className={cn(
                "text-sm transition-colors hover:text-primary",
                activeRoute === link.route ? "text-primary" : "text-muted-foreground cursor-pointer"
              )}
              onClick={() => onNavigate(link.route)}
              type="button"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <Button
          aria-label="Toggle navigation"
          className="inline-flex size-10 items-center justify-center border border-white/10 text-foreground transition-colors hover:border-primary/50 hover:text-primary md:hidden"
          onClick={onToggleMenu}
          variant={"ghost"}
        >
          {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </Button>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-white/8 px-5 py-3 md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <button
                key={link.route}
                className={cn(
                  "border-b border-white/6 py-3 text-left text-sm transition-colors hover:text-primary",
                  activeRoute === link.route ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => onNavigate(link.route)}
                type="button"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
