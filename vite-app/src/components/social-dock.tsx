import { socialLinks } from "@/data/social"
import type { SocialLink } from "@/types/content"

const iconSrcMap: Partial<Record<SocialLink["label"], string>> = {
  GitHub: "github-logo.svg",
  LinkedIn: "linkedin-logo.svg",
  Email: "envelope.svg",
  Scholar: "graduation-cap.svg",
  Twitter: "twitter-logo.svg"
}

export function SocialDock() {
  return (
    <div className="flex flex-row justify-around w-125 mx-auto">
      {socialLinks.map((link) => {
        const iconSrc = `/logos/${iconSrcMap[link.label]}`

        return (
          <a
            key={link.label}
            className="group flex flex-col items-center justify-center gap-2 py-3 text-center transition-colors hover:text-primary"
            href={link.href}
          >
            <span
              aria-hidden="true"
              className="size-10 bg-foreground/75 transition-colors group-hover:bg-primary"
              style={{
                WebkitMaskImage: `url(${iconSrc})`,
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskImage: `url(${iconSrc})`,
                maskPosition: "center",
                maskRepeat: "no-repeat",
                maskSize: "contain",
              }}
            />
            <span className="text-sm text-foreground/72 transition-colors group-hover:text-primary">
              {link.label}
            </span>
          </a>
        )
      })}
    </div>
  )
}
