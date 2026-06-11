import {
  StoryFrame,
  StoryMedia,
  StorySection,
  StoryTextPair,
  type StoryMetadata,
} from "@/components/story-layout"

// eslint-disable-next-line react-refresh/only-export-components
export const projectData: StoryMetadata = {
  title: "Making data analysis intuitive and impactful",
  description: "How can we prepare and visualize data so that players can quickly gain insights?",
  date: "2026",
  projectId: "speedrun-analysis",
  tags: ["Data visualization", "Data analysis", "UX engineering"],
  media: [
    {
      filepath: "/images/eyespy-demo-1.mp4",
      alt: "Demo video 1",
      caption:
        "Looking up a player shows aggregate statistics with secondary plots stored away into other tabs. Fun microinteractions make the app memorable."
    },
    {
      filepath: "/images/eyespy-demo-2.mp4",
      alt: "Demo video 2",
      caption:
        "Comparing two players shows the most relevant information at a glance while providing more details on the same page."
    }
  ],
  links: [
    {
      cta: "Visit the web app and give it a try! (e.g., search `Feinberg`)",
      buttonText: "Open the app",
      href: "https://eyespy.nikosiaphd.com/",
    }
  ],
}

export function SpeedrunAnalysisStory() {
  return (
    <StoryFrame metadata={projectData}>
      <StorySection eyebrow="Problem Statement" title="Making complex data easily digestible">
        <p>
          It can be very difficult for players to identify objective patterns in their own gameplay.
          Minecraft speedruns in particular produce a lot of data due to the randomness of the world generation.
        </p>
        <p>
          This app interfaces with the official MCSR Ranked API to fetch the timelines of a player's recent speedruns.
          It then calculates relevant statistics and identifies patterns that can indicate players' strengths and weaknesses.
        </p>
      </StorySection>

      <StoryMedia medium={projectData.media[0]} />

      <StorySection eyebrow="UX Challenge" title="Putting the right plots in the right place">
        <p>
          Data aggreation and analysis platforms always face the issue of making the data digestible and insightful.
          I put great consideration into the plot types and made sure they produce a useful narrative.
        </p>
        <p>
          To not overwhelm visitors of the website, most plots are hidden in separate tabs. And for some plots, the user can toggle between alternative visualizations.
        </p>
      </StorySection>

      <StoryMedia medium={projectData.media[1]} />

      <StoryTextPair
        heading="Iterating plot designs with user feedback"
        paragraph="I combined user feedback with uncertainty visualization research to find plot designs that made player patterns readable while also communicating the uncertainty in the data."
        boxes={[
          {
            title: "From bar charts to violin plots",
            contents: (
              <div className="space-y-4">
                <p>
                  The naive approach was to show bar graphs with error bars. Because there were two players to compare across 7 time segments, the lines quickly became messy.
                </p>
                <img
                  alt="Early EyeSpy bar chart design"
                  className="aspect-video w-full rounded-md border border-border object-cover object-top-left"
                  loading="lazy"
                  src="/images/eyespy-v1.webp"
                />
                <p>
                  Furthermore, a player's distributions were often skewed but hidden behind uniform error bars.
                  Converting these into violin plots made the insights much easier to grasp at a glance.
                </p>
                <img
                  alt="EyeSpy violin plot design"
                  className="aspect-video w-full rounded-md border border-border object-cover object-top-left"
                  loading="lazy"
                  src="/images/eyespy-v2.avif"
                />
              </div>
            ),
          },
          {
            title: "Unexpected issues with Gantt charts",
            contents: (
              <div className="space-y-4">
                <p>
                  I also experimented with showing the same data as a Gantt chart by ordering the segments in the order they occur.
                  I expected these to be more intuitive but people struggled to interpret them if they weren't familiar with Gantt charts.
                </p>
                <img
                  alt="EyeSpy Gantt chart with uncertainty gradient"
                  className="aspect-video w-full rounded-md border border-border object-cover object-top-left"
                  loading="lazy"
                  src="/images/eyespy-v3.avif"
                />
                <p>
                  Testers further reported that they found the gradients indicating variance visually straining. 
                  Thus, I added toggles that let users switch between violin and Gantt views, with or without uncertainty.
                </p>
                <img
                  alt="EyeSpy visualization toggles for uncertainty and chart type"
                  className="aspect-video w-full rounded-md border border-border object-cover object-top-left"
                  loading="lazy"
                  src="/images/eyespy-v4.avif"
                  />
              </div>
            ),
          },
        ]}
      />

      <StorySection eyebrow="Fun Design" title="Memorable microinteractions">
        <p>
          Another focus of this project was to capture an audience with subtle yet fun microinteractions. Pages and plots have entrance animations.
          The stats and rank selector panel have playful animations on hover.
        </p>
        <p>
          This seemed to be very successful as several testers were fidgeting with these elements. 
          The microinteractions were so memorable that testers mentioned and praised them unprompted in exit interviews. 
        </p>
      </StorySection>

    </StoryFrame>
  )
}
