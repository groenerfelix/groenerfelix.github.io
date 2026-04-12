import { cvDownloadLink } from "@/data/cv"
import type { SocialLink } from "@/types/content"

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:fgroener@asu.edu" },
  {
    label: "Scholar",
    href: "https://scholar.google.com/citations?user=NfGdPT0AAAAJ",
  },
  { label: "LinkedIn", href: "https://linkedin.com/in/felix-gröner-195a08280" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Twitter", href: "https://x.com/felixgroener" },
  cvDownloadLink
]
