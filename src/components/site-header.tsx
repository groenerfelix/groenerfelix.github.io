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
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl select-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-12 py-4">
        <button
              
              className="cursor-pointer text-left group"
              onClick={() => onNavigate("home")}
              type="button"
            >
          <div className="text-sm uppercase tracking-[0.2em] text-primary transition-all duration-300 group-hover:text-foreground leading-3">
            Felix Gr&ouml;ner
          </div>
          <div className="text-sm text-muted-foreground transition-all duration-300 group-hover:brightness-120">
            Human-LLM Interaction Researcher
          </div>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.route}
              className={cn(
                "text-sm transition-colors hover:text-primary",
                activeRoute === link.route ? "cursor-default text-primary" : "cursor-pointer text-muted-foreground"
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
          className="inline-flex size-10 cursor-pointer items-center justify-center border border-white/10 text-foreground transition-colors hover:border-primary/50 hover:text-primary md:hidden"
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
                  activeRoute === link.route ? "text-primary cursor-default" : "cursor-pointer text-muted-foreground"
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
