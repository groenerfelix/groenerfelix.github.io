import type { FeaturedProject } from "@/types/content"

export type StackLogo = {
  label: string
  imageName: string
}

export const stackLogos: StackLogo[] = [
  { label: "Python", imageName: "python" },
  // { label: "FastAPI", imageName: "fastapi" },
  { label: "TypeScript", imageName: "typescript" },
  // { label: "Vite", imageName: "vite" },
  { label: "React", imageName: "react" },
  { label: "TailwindCSS", imageName: "tailwindcss" },
  { label: "Shadcn/ui", imageName: "shadcnui" },
  { label: "LangGraph", imageName: "langgraph" },
]

export const featuredProjects: FeaturedProject[] = [
  {
    id: "paper-synth-2025",
    track: "researcher",
    title: "Can LLM Simulations Replace Human Participants?",
    eyebrow: "Dissertation Research",
    summary:
      "A case study of the potential of and issues with LLM simulations in place of experiment with human participants",
    bullets: [
      "Conducted the same experiment once with 76 human participants and once with LLMs simulating participants",
      "Quantitative divergence of results would lead to different conclusions",
      "Qualitative inspection revealed fundamental issues of LLM simulations",
    ],
    image: "/images/paper-synth-2025.jpg",
    imageAlt: "Page from Gröner & Chiou, under review.",
    links: [
      // { label: "Project page", href: "#projects" },
      // { label: "Read details", href: "#projects" },
    ],
  },
  {
    id: "paper-comp-2025",
    track: "researcher",
    title: "Human-LLM Interaction Engineering",
    eyebrow: "Literature Review",
    summary:
      "Reviewed 39 empirical studies to catalogue engineering approaches, and categorize them on three dimensions",
    bullets: [
      "Identified intervention purpose, step, and method as the dimensions of a new framework",
      "Showed which approaches are popular and which ones are under-explored",
      "Uncovered general issues of the the current literature",
    ],
    image: "/images/paper-comp-2025.jpg",
    imageAlt: "Page of Gröner & Chiou, 2025",
    links: [
      { label: "Read the Preprint", href: "https://ssrn.com/abstract=6505859" },
    ],
  },
  {
    id: "paper-hfes-2024",
    track: "researcher",
    title: "What do People Expect from LLMs?",
    eyebrow: "Appropriate Reliance",
    summary:
      "Asked 45 participants for their confidence that a chatbot would be capable of 26 tasks, varying the UI design between subjects.",
    bullets: [
      "People have clear expectations for chatbots' capabilities",
      "Drastic aesthetic differences in design did not produce systematically different expectations",
    ],
    image: "/images/paper-hfes-2024.jpg",
    imageAlt: "Title page of Gröner & Chiou, 2024",
    links: [
      { label: "Read the Conference Paper", href: "https://doi.org/10.1177/10711813241260399" },
    ],
  },
  {
    id: "project-lern-2026",
    track: "developer",
    title: "LLM Pipeline to Generate Interactive Tutorial Websites",
    eyebrow: "LangChain",
    summary:
      "From a short topic prompt to a full, interactive tutorial page",
    bullets: [
      "LangGraph orchestrates workflow including tutorial draft, website generation, code review, visual review, pedagogical review, and code fixing",
      "Prompt engineering informed by Learning Engineering science",
      "Uses a combination of OpenAI's GPT-5 and Google's Gemini 3",
    ],
    image: "/images/screenshot-tutorial-generator.jpg",
    imageAlt: "Screenshot of tutorial generator",
    links: [
      { label: "Visit project page", href: "https://tutorial-generator.felixgroener.de/" },
      { label: "Read the Conference Paper", href: "https://lern.edtechbooks.org/lern_2026/lwftkgxnbu" },
      { label: "See on GitHub", href: "https://github.com/groenerfelix/tutorial-generator-v2" },
    ],
  },
  {
    id: "project-next-2026",
    track: "developer",
    title: "Human-LLM Interaction Experimentation Platform with NextJS",
    eyebrow: "Chatbot",
    summary:
      "We needed a custom solution to manipulate LLM behavior, have full control over the user experience, and record all interaction",
    bullets: [
      "Full-stack project using NextJS, React, Tailwind CSS, Postgres database",
      "Tested in two experiments",
      "Pages are dynamically built following a questionnaire json",
    ],
    image: "/images/screenshot-next.jpg",
    imageAlt: "Screenshot of the chatbot experimentation platform",
    links: [ ],
  },
  {
    id: "project-mcsr-2026",
    track: "developer",
    title: "Data Analysis and Player Comparison App",
    eyebrow: "Data Science",
    summary:
      "Fetching player and speedrun data from official game API, run calculations, provide insights",
    bullets: [
      "Identify players' strengths and weaknesses",
      "Calculate outcome prediction for two players",
      "Show improvement over time",
    ],
    image: "/images/screenshot-mcsr.jpg",
    imageAlt: "Screenshot of the player statistics analysis platform",
    links: [
      { label: "Visit project page", href: "https://eyespy.nikosiaphd.com/" },
      { label: "See on GitHub", href: "https://github.com/NikosiaPhD/mcsr-analysis" },
    ],
  },
]
