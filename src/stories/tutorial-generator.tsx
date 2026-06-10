import {
  StoryFrame,
  StoryMedia,
  StorySection,
  StoryTextPair,
  type StoryMetadata,
} from "@/components/story-layout"

// eslint-disable-next-line react-refresh/only-export-components
export const projectData: StoryMetadata = {
  title: "Leveraging LLMs for interactive tutorial websites",
  description: "How can AI generate education experiences that are interactive rather than passive?",
  date: "2025",
  projectId: "tutorial-generator",
  tags: ["LLM systems", "Learning engineering", "Automated UX", "Prompt engineering"],
  media: [
    {
      filepath: "/images/tutorial-generator-demo-2.mp4",
      alt: "Demo video 1",
      caption:
        "Students learn better from interactive experiments. This app generates tutorial pages, with prompts backed by learning science."
    },
    {
      filepath: "/images/tutorial-generator-flow.jpg",
      alt: "Tutorial generator workflow",
      caption:
        "LangGraph orchestrates the workflow, including iterative refinement. It interfaces with the OpenAI and Gemini APIs for different tasks."
    },
    {
      filepath: "/images/tutorial-generator-demo-1.mp4",
      alt: "Demo video 2",
      caption:
        "The core UX challenges were to ensure generative AI code quality using linting and playwright, and making the loading process transparent to users."
    },
  ],
  links: [
    {
      cta: "Visit the web app and give it a try!",
      buttonText: "Open the app",
      href: "https://tutorial-generator.felixgroener.de/",
    },
    {
      cta: "This project was presented at a Learning Engineering conference.",
      buttonText: "Read the paper",
      href: "https://lern.edtechbooks.org/lern_2026/lwftkgxnbu",
    },
    {
      cta: "The code is available in my GitHub.",
      buttonText: "See the code",
      href: "https://github.com/groenerfelix/tutorial-generator-v2",
    },
  ],
}

export function TutorialGeneratorStory() {
  return (
    <StoryFrame metadata={projectData}>
      <StorySection eyebrow="Purpose" title="Using AI to make learning affordable, effective, personalized, and convenient">
        <p>
          Learning science has shown that students learn better when they engage with material on a deeper cognitive level.
          One of the best ways is to learn by experimenting, where learners can manipulate a concept instead of only reading about it. 
        </p>
        <p>
          This project explores how we can leverage LLMs' ability to generate interactive web experiences to provide value to educators and learners.
        </p>
      </StorySection>

      <StoryMedia medium={projectData.media[0]} />

      <StorySection eyebrow="Technical Challenge" title="Ensuring UX quality in the pipeline">
        <p>
          A single prompt covering pedagogical, usability, and coding guidelines often overwhelmed the LLM.
          Thus, the first step was to separate these steps into a <i>LangGraph</i> pipeline.
          However, the initial output often had obvious layout or interaction flaws.
        </p>
        <p>
          To fix this, we integrated a review step in which an LLM critizes the current version of website given the code, runtime errors, and a screenshot, recorded with the help of <i>Playwright</i>.
          If any of the three reviewers finds critical issues, the pipeline moves to a code-fixing step and then loops back to the review phase.
        </p>
      </StorySection>

      <StoryMedia medium={projectData.media[1]} />

      <StoryTextPair
        heading="Prompt engineering at the core of this project"
        paragraph="The prompts were engineered following best practices and relevant frameworks from learning science. We leverage personas, examples, and clear separation of tasks."
        boxes={[
          {
            title: "Tutorial design prompt excerpt",
            contents: (
              <div className="font-mono space-y-2">
                <p>
                  Write like a careful teacher who clarifies uncertainty and prioritizes learner mental models.
                </p>
                <p className="font-bold">Core Values</p>
                <ul className="list-disc pl-5">
                  <li>
                    Show, don’t tell: learners see and change each step of the computation.
                  </li>
                  <li>
                    Segmentation: Organize your tutorial into sections. Only cover one concept or step per section to reduce cognitive load.
                  </li>
                  <li>
                    Transparency: every intermediate result shown should come from code that’s visible or explained.
                  </li>
                  <li>
                    Continuity: each step’s output feeds into the next.
                  </li>
                  <li>
                    Activity and Constructivity: Ensure each tutorial requires learner input (e.g., adjusting, predicting, testing).
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: "Visual critic prompt excerpt",
            contents: (
              <div className="font-mono space-y-2">
                <p>
                  Your task is to closely inspect the screenshot and perform a usability analysis. Limit your analysis to what you can see and do not speculate about anything else.
                </p>
                <p className="font-bold">Look for UI layout and UX issues:</p>
                <ul className="list-disc pl-5">
                  <li>
                    Especially look for overflowing text and misaligned elements.
                  </li>
                  <li>
                    Point out critical issues of color contrast (e.g., gray text on white), guiding/distracting highlights (e.g., too much color), or spacing. In most cases, these will be overflowing layouts, too much color, or too little contrast.
                  </li>
                  <li>
                    The most commonly problematic elements are plots/graphs and buttons Ask yourself: Is the font size right? Is the color contrast right? Are there any black lines on dark gray ground?
                  </li>
                </ul>
              </div>
            ),
          },
        ]}
      />

      <StorySection eyebrow="UX Challenge" title="Creating an understanding for loading processes">
        <p>
          A recurring issue of UX design is giving instantaneous feedback to user inputs to clear up any uncertainty whether an action was successful. For LLM workflows that can take minutes, the app should be transparent about the expected duration justify it.
        </p>
        <p>
          For this pipeline, we return a success response right after the generation started and then follow up with server-sent events. Instead of showing one slow progress bar, we break down the process into its separate steps to make it appear shorter and to justify the wait. 
        </p>
      </StorySection>

      <StoryMedia medium={projectData.media[2]} />

      <StorySection eyebrow="Future Plans" title="A pathway towards generative UI">
        <p>
          This project has shown how generative AI can provide value to learners but I believe that this is only the first step.
          While interactive websites already allow visitors to engage with a topic at a deeper cognitive level, it is still a static website.
        </p>
        <p>
          It would be even better to develop the topic step by step in collaboration with the student.
          One logical continuation could be a chat-based interface for which the LLM generates interactive UI elements and reacts to the learner asking follow-up questions.
        </p>
      </StorySection>
    </StoryFrame>
  )
}
