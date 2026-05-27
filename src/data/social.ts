import { cvDownloadLink } from "@/data/cv"
import type { SocialLink } from "@/types/content"
import * as SVG from "@/components/svg"

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:fgroener@asu.edu", logo: SVG.Envelope },
  {
    label: "Scholar",
    href: "https://scholar.google.com/citations?user=NfGdPT0AAAAJ",
    logo: SVG.GraduationCap,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/felix-gröner-195a08280",
    logo: SVG.LinkedIn,
  },
  { label: "GitHub", href: "https://github.com/groenerfelix?tab=repositories", logo: SVG.GitHub },
  {
    label: "Twitter",
    href: "https://x.com/felixgroener",
    logo: SVG.Twitter,
    hideOnSmallScreens: true,
  },
  { ...cvDownloadLink, hideOnSmallScreens: true },
]
