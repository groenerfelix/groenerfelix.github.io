import {
  StoryDetails,
  StoryFrame,
  StoryMedia,
  StorySection,
  StoryTextPair,
  type StoryMetadata,
} from "@/components/story-layout"

// eslint-disable-next-line react-refresh/only-export-components
export const projectData: StoryMetadata = {
  title: "Designing a new way to inferface with my Zotero library",
  description: "Exploring LLM transparency, traceability, and verifiability in complex research tasks.",
  date: "2026",
  projectId: "zotero-explorer",
  tags: ["LLM systems", "AI for research", "UX engineering"],
  media: [
    {
      filepath: "/images/zotero-explorer-demo-1.mp4",
      alt: "Demo video 1",
      caption:
        "Users can set the model, tools, and context scope when sending a query."
    },
    {
      filepath: "/images/zotero-explorer-demo-2.mp4",
      alt: "Demo video 2",
      caption:
        "The LLM's references reveal a tooltip on hover and open the PDF at the cited page on click."
    }
  ],
  // links: [
  //   {
  //     cta: "Visit the web app and give it a try!",
  //     buttonText: "Open the app",
  //     href: "https://tutorial-generator.felixgroener.de/",
  //   },
  //   {
  //     cta: "This project was presented at a Learning Engineering conference.",
  //     buttonText: "Read the paper",
  //     href: "https://lern.edtechbooks.org/lern_2026/lwftkgxnbu",
  //   },
  //   {
  //     cta: "The code is available in my GitHub.",
  //     buttonText: "See the code",
  //     href: "https://github.com/groenerfelix/tutorial-generator-v2",
  //   },
  // ],
}

export function ZoteroExplorerStory() {
  return (
    <StoryFrame metadata={projectData}>
      <StorySection eyebrow="Purpose" title="I needed an AI assistant grounded in my library">
        <p>
          A common use case is that I remember reading a paper that made an argument, but not remembering which one. 
          Asking ChatGPT and even specialized tools like Consensus or Edison produced results of questionable quality and did not find the paper I was looking for.
        </p>
        <p>
          To solve this, I built an agent chat interface that searches and reads the articles that I have curated throughout my academic carreer.
        </p>
      </StorySection>

      <StoryMedia medium={projectData.media[0]} />

      <StorySection eyebrow="Design Choices" title="Putting transparency and verifiability first">
        <p>
          The core UI challenge and goal were to provide details about the system state and model reasoning without overwhelming the user.
          The design achieves this by hiding details in collapsed tool call boxes and tooltips for sources.
        </p>
        <p>
          The LLM is prompted to cite sources in a way that can be parsed and turned into links. This conveniently allows users to quickly verify the relevant pages.
          The context scope of each query is made transparent above the input field and with every user message in the chat. 
        </p>
      </StorySection>

      <StoryMedia medium={projectData.media[1]} />

      <StoryTextPair
        heading="Prompting for transparency"
        paragraph="The prompt engineering was informed by my prior research on LLM applications in intelligence analyis & reporting."
        boxes={[
          {
            title: "Intelligence analysis prompt excerpt",
            contents: (
              <div className="font-mono space-y-2">
                <p className="font-bold">Reporting Guidelines</p>
                <p>
                  For each major analytic judgement you make, provide the following information. 
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Clearly indicate what is your judgement and what is reported data. Be transparent about your assumptions.
                  </li>
                  <li>
                    Mention factors that could affect the source quality and credibility. Provide diagnostic information about the quality of each source.
                  </li>
                  <li>
                    If there are ambiguities or conflicting views, make this transparent. Analyze alternative possibilities, explain their underlying evidence and reasoning. 
                  </li>
                  <li>...</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Research background",
            contents: (
              <div className="space-y-2">
                <p>
                  This prompt has been developed as part of a research project on the human-LLM interaction of intelligence analystis, funded by the Department of Homeland Security.
                  We evaluated to what extent LLMs could follow the best reporting practices of the U.S. intelligence community and what effect that would have on people's reliance on LLM systems.
                </p>
                <p>
                  We developed five different prompt variations and generated an analysis on a fictional set of news articles. 
                  Two graders independently scored the reports which resulted into this final version of the prompt.
                  </p>
                <p>
                  For the overarching study, which is currently under review, we developed custom verification-behavior metrics. 
                  The general finding is that laypeople were likely overwhelmed by the additional information, which might be less of a problem for analytically-trained users.
                </p>
              </div>
            ),
          },
        ]}
      />

      <StorySection eyebrow="Usability" title="Control and convenience">
        <p>
          Another challenge was to fit all necessary elements into one view to avoid the need for context switching.
          I solved this by placing the core panels into resizable containers which let the user decide on what to focus. 
        </p>
        <p>
          The user also controls the scope of the context search by selecting all, the current collection, or the current paper below the input field. 
          Additional sources can be added with the @-command. 
          The desired LLM can be selected and tools can be toggled on and off.
        </p>
      </StorySection>


      <StoryDetails
        title="Technical details"
      >
        <p>
          This app was built with my default stack:
        </p>
        <ul className="list-disc pl-5">
          <li>
            Python backend with FastAPI
          </li>
          <li>
            TypeScript frontend with React in Vite
          </li>
          <li>
            Styling with Tailwind CSS and Shadcn UI components; animated with Framer Motion
          </li>
          <li>
            Local SQLite database for a mirror of the Zotero metadata and for the article full texts (FTS5)
          </li>
        </ul>

        <p>
          With this project I also tried out some new tech:
        </p>
        <ul className="list-disc pl-5">
          <li>
            The agent uses OpenAI's agent SDK
          </li>
          <li>
            I switched from managed Zotero hosting to my own WebDAV server for syncing original files
          </li>
          <li>
            The read-only tools are exposed via a private MCP to be used in my other projects
          </li>
        </ul>
      </StoryDetails>

    </StoryFrame>
  )
}
