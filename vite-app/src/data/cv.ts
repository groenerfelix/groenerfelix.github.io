import type { TimelineEntry } from "@/types/content"

export const educationEntries: TimelineEntry[] = [
  {
    id: "msc",
    title: "M.Sc. Human-Computer Interaction",
    org: "Example University",
    timespan: "2022 - 2024",
    bullets: [
      "Thesis on designing language-model interfaces for appropriate expectations.",
      "Focused on human-AI interaction, experimental design, and cognitive ergonomics.",
    ],
    keywords: ["hci", "human-ai interaction", "research methods"],
  },
  {
    id: "bsc",
    title: "B.Sc. Cognitive Science",
    org: "Example University",
    timespan: "2018 - 2022",
    bullets: [
      "Combined psychology, computation, and philosophy of mind.",
      "Built a strong base for interdisciplinary AI interaction research.",
    ],
    keywords: ["cognitive science", "psychology", "computation"],
  },
]

export const workEntries: TimelineEntry[] = [
  {
    id: "current-research",
    title: "Human-LLM Interaction Researcher",
    org: "Independent / collaborative research",
    timespan: "2024 - Present",
    bullets: [
      "Researching how to design language-model products for better calibrated user expectations.",
      "Developing methods for using LLM simulations as synthetic participants in early-stage studies.",
      "Turning research findings into product-ready recommendations and prototypes.",
    ],
    keywords: ["llms", "ux research", "prototyping"],
    current: true,
  },
  {
    id: "research-assistant",
    title: "Research Assistant",
    org: "Human-AI Interaction Lab",
    timespan: "2022 - 2024",
    bullets: [
      "Supported experimental studies, literature reviews, and publication drafting.",
      "Built internal tools for organizing papers, studies, and iterative findings.",
    ],
    keywords: ["experiments", "literature review", "tooling"],
  },
  {
    id: "design-engineering",
    title: "Design Technologist",
    org: "Product studio collaborations",
    timespan: "2020 - 2022",
    bullets: [
      "Designed and shipped front-end prototypes for research-heavy product teams.",
      "Bridged design concepts with production-ready implementation detail.",
    ],
    keywords: ["frontend", "prototyping", "product design"],
  },
]
