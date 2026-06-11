import type { FC, SVGProps } from "react"

import * as SVG from "@/components/svg"

export type StackLogo = {
  label: string
  logo: FC<SVGProps<SVGSVGElement>>
}

export const stackLogos: StackLogo[] = [
  { label: "Python", logo: SVG.Python },
  { label: "TypeScript", logo: SVG.TypeScript },
  { label: "React", logo: SVG.React },
  { label: "TailwindCSS", logo: SVG.TailwindCSS },
  { label: "Shadcn/ui", logo: SVG.ShadcnUI },
  { label: "LangGraph", logo: SVG.LangGraph },
]
