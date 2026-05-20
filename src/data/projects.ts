import type { ProjectEntry } from "@/types/content"

export const projects: ProjectEntry[] = [
  {
    id: "capstone-manual",
    title: "Designing documentation for full-stack capstone class",
    year: 2026,
    type: "coding",
    summary:
      "Identified learners' needs and developed an interactive solution using MKDocs to guide graduate students through a full-stack capstone project including Flask, MySQL, and AWS deployment.",
    keywords: [
      "Documentation",
      "Learning Engineering",
      "Flask",
      "Full Stack",
      "Python",
      "AWS",
    ],
    projectType: "Handbook",
    links: [
      { label: "Browse the handbook", href: "https://groenerfelix.github.io/capstone-project-handbook" },
      { label: "Code", href: "https://github.com/groenerfelix/capstone-project-handbook" },
    ],
  },
  {
    id: "mcsr-analysis",
    title: "Data analysis platform for speedrun statistics",
    year: 2026,
    type: "coding",
    summary:
      "Fetching player data from the official game API, running analyses, and presenting informative visualizations.",
    keywords: [
      "React",
      "Tailwind",
      "Shadcn",
      "Python",
      "Typescript",
      "Data Science",
      "API",
    ],
    projectType: "Full Stack Web App",
    links: [
      { label: "Project page", href: "https://eyespy.nikosiaphd.com" },
      { label: "Code", href: "https://github.com/NikosiaPhD/mcsr-analysis" },
    ],
  },
  {
    id: "discord-assistant",
    title: "Minimal moldable LLM agent, driven by markdown files ",
    year: 2025,
    type: "coding",
    summary:
      "An LLM agent that writes its own workflows and data in markdown files, which are mirrored in a discord server for transparency.",
    keywords: ["LLMs", "Agents", "Python", "API", "Generative AI"],
    projectType: "Backend",
    links: [
      {
        label: "Code",
        href: "https://github.com/groenerfelix/discord-assistant",
      },
    ],
  },
  {
    id: "ui-designs-and-llm-expectations",
    title:
      "Investigating the impact of UI designs on expectations about LLMs' capabilities",
    year: 2024,
    type: "publication",
    summary:
      "Showed a variety of prompts in different user interface designs and queried people for their expectations.",
    keywords: ["LLMs", "Expectations", "UI Design", "Human Participants"],
    projectType: "Conference Paper",
    authors: "F. Gröner and E.K. Chiou",
    firstAuthor: true,
    publication_info:
      "Proceedings of the Human Factors and Ergonomics Society Annual Meeting 2024",
    links: [
      { label: "Paper", href: "https://doi.org/10.1177/10711813241260399" },
    ],
  },
  {
    id: "trust-repair-strategies-after-error",
    title:
      "The tendency to anthropomorphize and technology affinity affect trust repair strategies after error",
    year: 2023,
    type: "publication",
    summary:
      "Investigated the effects on trust of different verbal reactions of a robot to making a mistake.",
    keywords: ["Trust", "Human-AI", "Robots"],
    projectType: "Conference Paper",
    authors: "J.M. Kraus, J. Merger, F. Gröner, and J. Pätz",
    firstAuthor: false,
    publication_info:
      "Companion of the 2023 ACM/IEEE International Conference on Human-Robot Interaction",
    links: [
      {
        label: "Paper",
        href: "https://dl-acm-org.ezproxy1.lib.asu.edu/doi/10.1145/3568294.3580122",
      },
    ],
  },
  {
    id: "llm-transparency-and-verification-behavior",
    title:
      "Increasing transparency of LLM systems does not always improve people's verification behavior",
    year: 2026,
    type: "publication",
    summary:
      "Results from an empirical study of AI-assisted intelligence analysis reporting.",
    keywords: [
      "LLMs",
      "Transparency",
      "Verification",
      "Intelligence Analysis",
      "Generative AI",
    ],
    projectType: "Under Review",
    authors: "F. Gröner, M.V. Mancenido, N. Kim, E. Summers, and E.K. Chiou",
    firstAuthor: true,
    links: [],
  },
  {
    id: "llm-powered-simulated-users",
    title:
      "Caveats of replacing human participants with LLM-powered simulated users",
    year: 2026,
    type: "publication",
    summary:
      "Comparing the results of the same experiment with human and synthetic participants produced useful qualitative insights.",
    keywords: [
      "LLMs",
      "Simulations",
      "Synthetic Participants",
      "Generative AI",
    ],
    projectType: "Under Review",
    authors: "F. Gröner and E.K. Chiou",
    firstAuthor: true,
    links: [],
  },
  {
    id: "expertise-in-human-ai-interaction",
    title: "Considering expertise as a factor in human-AI interaction research",
    year: 2026,
    type: "publication",
    summary:
      "A book chapter in preparation on how expertise should shape study design and interpretation in human-AI interaction research.",
    keywords: ["Human-AI", "Expertise"],
    projectType: "In Preparation",
    authors: "F. Gröner, M.V. Mancenido, and E.K. Chiou",
    firstAuthor: true,
    links: [],
  },
  {
    id: "ai-generated-abstract-artworks",
    title: "Perception of original and AI-generated abstract artworks",
    year: 2026,
    type: "publication",
    summary:
      "A catalogue of computational metrics to model people's perception of AI-generated art.",
    keywords: ["AI Images", "Cognitive Psychology", "Generative AI"],
    projectType: "Under Review",
    authors: "F. Gröner and D.V. Becker",
    firstAuthor: true,
    links: [
      { label: "Preprint", href: "https://ssrn.com/abstract=6482420" },
      {
        label: "Interactive exploration",
        href: "https://felixgroener.de/abstract-art",
      },
    ],
  },
  {
    id: "interactive-learning-experiences-agentic-pipeline",
    title:
      "Automatically generating interactive learning experiences with an LLM-driven agentic pipeline",
    year: 2026,
    type: "coding",
    summary:
      "Developed a pipeline from topic to tutorial website, with prompt engineering informed by learning science.",
    keywords: [
      "LLMs",
      "Learning Engineering",
      "UI Design",
      "Prompt Engineering",
      "Generative AI",
      "Full Stack",
      "Python",
      "Typescript",
    ],
    projectType: "Full Stack Web App",
    authors: "F. Gröner, A. Verma, and J. Bronowitz",
    firstAuthor: true,
    publication_info:
      "Proceedings of the Learning Engineering Research Network Convening (LERN 2026)",
    links: [
      {
        label: "Project Page",
        href: "https://tutorial-generator.felixgroener.de",
      },
      {
        label: "Conference Publication",
        href: "https://doi.org/10.59668/2551.25387",
      },
      {
        label: "Code",
        href: "https://github.com/groenerfelix/tutorial-generator-v2",
      },
    ],
  },
  {
    id: "validity-of-llm-simulations",
    title: "Threats to the validity of LLM simulations",
    year: 2026,
    type: "publication",
    summary:
      "Examines the theoretical obstacles that arise when using LLM agents to simulate synthetic participants.",
    keywords: [
      "LLMs",
      "Simulations",
      "Agents",
      "Synthetic Participants",
      "Generative AI",
    ],
    projectType: "In Preparation",
    authors: "F. Gröner and E.K. Chiou",
    firstAuthor: true,
    links: [],
  },
  {
    id: "engineering-approaches-human-llm-interaction",
    title:
      "Engineering approaches to improve human-LLM interaction: A scoping literature review",
    year: 2025,
    type: "publication",
    summary:
      "A taxonomy of engineering approaches that categorizes 39 empirical studies and surfaces under-explored intervention strategies and reporting gaps.",
    keywords: ["LLMs", "Human-AI", "Literature Review", "Generative AI"],
    projectType: "Preprint",
    authors: "F. Gröner and E.K. Chiou",
    firstAuthor: true,
    links: [{ label: "Preprint", href: "https://ssrn.com/abstract=6505859" }],
  },
  {
    id: "semantic-leakage-synthetic-datasets",
    title:
      "Semantic leakage is an issue when experimenting with synthetic datasets",
    year: 2025,
    type: "other",
    summary:
      "Generated a synthetic dataset to assess an LLM's ability to infer user attributes from conversations, then found that semantic leakage contaminated the data and explored mitigation strategies.",
    keywords: ["Interpretability", "Synthetic Data", "LLMs"],
    projectType: "Experiment",
    links: [],
    // TODO: add blog post
  },
  {
    id: "custom-experimentation-platform",
    title: "Custom experimentation platform for human-LLM interaction",
    year: 2025,
    type: "coding",
    summary:
      "A survey platform that gives researchers fine-grained control over the interface and LLM behavior while recording all interactions and responses for later analysis.",
    keywords: ["Full Stack", "NextJS", "LLMs"],
    projectType: "Full Stack Web App",
    links: [],
    // TODO: add blog post
  },
  {
    id: "people-llms-learning-competencies",
    title: "People and LLMs learning each other's competencies",
    year: 2025,
    type: "other",
    summary:
      "Explores whether people can accurately calibrate expectations of LLMs across domains and whether LLMs can recognize when the human is more competent than the model.",
    keywords: [
      "AI Safety",
      "Expectations",
      "Mental Models",
      "LLMs",
      "Human Participants",
    ],
    projectType: "Experiment",
    links: [],
  },
  {
    id: "gpt4-intelligence-analysis-reporting",
    title: "Prompting GPT-4 for intelligence analysis reporting standards",
    year: 2024,
    type: "other",
    summary:
      "Tests whether GPT-4 can follow intelligence-community reporting standards and whether that improves analysts' ability to assess the system's reliability.",
    keywords: ["Prompt Engineering", "Intelligence Analysis", "LLMs"],
    projectType: "Experiment",
    links: [],
    // TODO: add blog post
  },
  {
    id: "perceptions-of-ai-recommendations",
    title: "What factors influence people's perceptions of AI recommendations?",
    year: 2023,
    type: "other",
    summary:
      "Compared global and local explanations for AI recommendations and found that participants' self-perceived expertise mattered more than the explanation style.",
    keywords: [
      "Explainable AI (XAI)",
      "Human Participants",
      "Transparency",
      "LIME",
    ],
    projectType: "Experiment",
    links: [],
  },
  {
    id: "generative-ai-cognitive-psychology-poster",
    title:
      "Two dimensions describe how we perceive original and AI generated abstract art",
    year: 2026,
    type: "other",
    summary:
      "Discussing chances and risks of using AI to generate stimuli for research.",
    keywords: ["Cognitive Psychology", "Generative AI"],
    projectType: "Poster",
    links: [],
    publication_info:
      "Cognitive Science Conclave at the University of Arizona, April 25, Tuscan, AZ",
  },
  {
    id: "caveats-llm-simulations-talk",
    title: "Caveats of replacing human participants with LLM simulations",
    year: 2026,
    type: "other",
    summary:
      "Presenting my proposed dissertation work to uncover methodological caveats of using LLMs to simulate human participants.",
    keywords: ["LLMs", "Simulations", "Synthetic Participants"],
    projectType: "Talk",
    links: [],
    publication_info:
      "2026 IEEE Conference on Cognitive and Computational Aspects of Situation management (CogSIMA), March 9-12, Tempe, AZ",
  },
  {
    id: "engineering-approaches-human-llm-interaction-poster",
    title: "Engineering approaches to improve human-LLM interaction",
    year: 2026,
    type: "other",
    summary:
      "Showcasing the landscape of engineering interventions for human-LLM interaction.",
    keywords: ["LLMs", "Human-AI", "Literature Review"],
    projectType: "Poster",
    links: [],
    publication_info: "AI Impact Pre-Summit @ ASU, January 29, Mesa, AZ",
  },
  {
    id: "llm-transparency-verification-talk",
    title:
      "Increasing transparency of LLM systems does not always improve people's verification behavior and performance",
    year: 2025,
    type: "other",
    summary:
      "Presenting preliminary insights from the forthcoming journal publication.",
    keywords: ["LLMs", "Transparency", "Verification", "Intelligence Analysis"],
    projectType: "Talk",
    links: [],
    publication_info:
      "69th HFES International Annual Meeting: ASPIRE, October 13-17, Chicago, IL",
  },
  {
    id: "mast-project-update-talk",
    title:
      "Multi-source AI Scorecard Table (MAST) for evaluating generative AI in worker-automation team tasks",
    year: 2024,
    type: "other",
    summary:
      "Project update presented to stakeholders at the Center for Accelerating Operational Efficiency (CAOE).",
    keywords: ["LLMs", "Generative AI"],
    projectType: "Talk",
    links: [],
    publication_info: "CAOE Annual Meeting, April 8-9, Washington, DC",
  },
]
