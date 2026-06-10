import type { FeaturedProject } from "@/types/content"
import * as SVG from "@/components/svg"

export type StackLogo = {
  label: string
  logo: React.FC<React.SVGProps<SVGSVGElement>>
}

export const stackLogos: StackLogo[] = [
  { label: "Python", logo: SVG.Python },
  { label: "TypeScript", logo: SVG.TypeScript },
  { label: "React", logo: SVG.React },
  { label: "TailwindCSS", logo: SVG.TailwindCSS },
  { label: "Shadcn/ui", logo: SVG.ShadcnUI },
  { label: "LangGraph", logo: SVG.LangGraph },
]

export const featuredProjects: FeaturedProject[] = [
  {
    id: "synthetic-participants",
    track: "researcher",
    title: "Can LLM simulations replace human participants?",
    media: [
      {
        image: "/images/synthetic-participants2.jpg",
        imageAlt: "Presentation slide on synthetic participants",
        paragraph:
          "What makes us human? In my dissertation, I identify cognitive differences between people and LLM systems, and derive how LLM agents need to be engineered to produce more humanlike experiment results.",
      },
      {
        image: "/images/synthetic-participants.jpg",
        imageAlt: "Presentation slide on synthetic participants",
        paragraph:
          "I replicate a broad range of experiments covering human factors and cognitive psychology, then evaluate how closely the responses of LLMs match those of human participants, quantitatively and qualitatively.",
      },
      {
        image: "/images/synthetic-participants3.jpg",
        imageAlt: "Presentation slide on synthetic participants",
        paragraph:
          "This case study (under review) compares how human (n=30) and synthetic (n=48) participants apply writing styles when editing summaries for a given target audience.",
      },
    ],
  },
  {
    id: "llm-interaction-engineering",
    track: "researcher",
    title: "Human-LLM interaction engineering",
    media: [
      {
        image: "/images/lit-rev.jpg",
        imageAlt: "Poster presented at the ASU AI Pre-Summit",
        paragraph:
          "In this literature review, I cataloged 39 empirical studies and derived three dimensions of engineering: purpose, step, and method. I identify popular and under-explored approaches and point out systematic issues in the literature.",
        link: {
          label: "Read the preprint",
          href: "https://ssrn.com/abstract=6505859",
        },
      },
      {
        image: "/images/llm-mm-ui.jpg",
        imageAlt: "Figures from Gröner and Chiou, 2024",
        paragraph:
          "In this study, participants (n=45) saw a range of prompts typed into one of three UI designs and indicated their confidence that the chatbot will produce a good response. Aesthetic maniupulations did not change people's expectations.",
        link: {
          label: "Read the conference paper",
          href: "https://doi.org/10.1177/10711813241260399",
        },
      },
      {
        image: "/images/megawatt-conditions.jpg",
        imageAlt: "Experimental conditions of the LLM transparency study",
        paragraph:
          "In this sponsored project, we developed an LLM system through iterative prompt engineering to follow best practises of the intelligence analysis community. The increased transparency did not lead to more verification behavior or better performance.",
      },
    ],
  },
  {
    id: "project-lern-2026",
    track: "developer",
    title: "LLM pipeline to generate interactive tutorial websites",
    media: [
      {
        image: "/images/tutorial-generator-demo-2.mp4",
        imageAlt: "Screenshot of tutorial generator",
        paragraph:
          "Students learn better from interactive experiments. This app generates tutorial pages, with prompts backed by learning science.",
        link: {
          label: "Open the app",
          href: "https://tutorial-generator.felixgroener.de/",
        },
      },
      {
        image: "/images/tutorial-generator-flow.jpg",
        imageAlt: "Tutorial generator workflow",
        paragraph:
          "LangGraph orchestrates the workflow, including iterative refinement. It interfaces with the OpenAI and Gemini APIs for different tasks.",
        link: {
          label: "Read the conference paper",
          href: "https://lern.edtechbooks.org/lern_2026/lwftkgxnbu",
        },
      },
      {
        image: "/images/tutorial-generator-demo-1.mp4",
        imageAlt: "Screenshot of tutorial generator",
        paragraph:
          "The core UX challenges were to ensure generative AI code quality using linting and playwright, and making the loading process transparent to users.",
        link: {
          label: "Check the code",
          href: "https://github.com/groenerfelix/tutorial-generator-v2",
        },
      },
    ],
  },
  {
    id: "project-mcsr-2026",
    track: "developer",
    title: "Player data analysis platform",
    media: [
      {
        image: "/images/eyespy-demo-1.mp4",
        imageAlt: "Screenshot of the player statistics analysis platform",
        paragraph:
          "Providing valuable insights for players into their performance data, this app interfaces with the official game API. It shows the most impactful information at a glance and provides more detailed breakdowns through progressive disclosure.",
        link: { label: "Open the app", href: "https://eyespy.nikosiaphd.com/" },
      },
      {
        image: "/images/eyespy-demo-2.mp4",
        imageAlt: "Screenshot of the player statistics analysis platform",
        paragraph:
          "The primary UX challenges were to make data analyses and visualizations intuitive to understand (violin plots, Gantt chart, simplified labels), make the app memorable by adding delightful microinteractions, and keep polished aesthetics even during complex, staggered loading states.",
        link: {
          label: "See on GitHub",
          href: "https://github.com/NikosiaPhD/mcsr-analysis",
        },
      },
    ],
  },
  {
    id: "project-next-2026",
    track: "developer",
    title: "Custom human-LLM interaction experimentation platform",
    media: [
      {
        image: "/images/screenshot-llm-survey.jpg",
        imageAlt: "Screenshot of the chatbot experimentation platform",
        paragraph:
          "For my experiments I needed to manipulate LLM behavior, control the user experience, and record behavioral data. The goal was to minimize friction for using a chatbot (e.g., copy-paste buttons). This app was built with NextJS with a PostgreSQL DB and used in two experiments so far.",
      },
    ],
  },
]
