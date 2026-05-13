import type { TimelineEntry, SocialLink } from "@/types/content"
import { Download } from "@/components/svg"
import { LinkButton } from "@/components/ui/button"

export const cvDownloadLink: SocialLink = {
  label: "CV PDF",
  href: "/cv_felix_groener_2026_04.pdf",
  logo: Download,
}

export const educationEntries: TimelineEntry[] = [
  {
    id: "phd-human-systems-engineering",
    title: "Ph.D. Human Systems Engineering",
    org: "Arizona State University, USA",
    timespan: ["2023", "Fall 2026*"],
    bullets: [
      "* Expected graduation in November 2026",
      "Status: Ph.D. candidate | GPA: 4.0",
      <span>
        Committee:{" "}
        <LinkButton href="https://search.asu.edu/profile/3015725">
          Erin K. Chiou
        </LinkButton>
        ,{" "}
        <LinkButton href="https://search.asu.edu/profile/61858">
          D. Vaughn Becker
        </LinkButton>
        ,{" "}
        <LinkButton href="https://search.asu.edu/profile/559491">
          Nancy J. Cooke
        </LinkButton>
      </span>,
      "Dissertation: Validating LLM-simulated synthetic participants for Human Factors research",
    ],
    keywords: [
      "User-Centered Design",
      "AI Safety",
      "Human-Computer Interaction",
    ],
  },
  {
    id: "msc-cognitive-systems",
    title: "M.Sc. Cognitive Systems",
    org: "Ulm University, Germany",
    timespan: ["2021", "2023"],
    bullets: [
      "Thesis: The role of explainable AI in trust and adherence to recommendations",
    ],
    keywords: ["Explainable AI (XAI)", "Neuroscience", "Cognitive Psychology"],
  },
  {
    id: "ma-international-politics-law",
    title: "M.A. International Politics & International Law",
    org: "Kiel University, Germany",
    timespan: ["2020", "2021"],
    bullets: [
      "Thesis: Necessity of adapting International Humanitarian Law to cyber warfare",
    ],
    keywords: ["International Relations", "European Law", "Cyber Warfare"],
  },
  {
    id: "ba-political-science",
    title: "B.A. Political Science",
    org: "Kiel University, Germany",
    timespan: ["2019", "2020"],
    bullets: ["Thesis: NATO's strategy to deter cyber attacks"],
    keywords: ["Political Theory", "Comparative Politics", "NATO"],
  },
  {
    id: "bsc-business-it",
    title: "B.Sc. Business IT",
    org: "Kiel University, Germany",
    timespan: ["2017", "2019"],
    bullets: [
      "Thesis: Choosing the right project management technique for software development",
    ],
    keywords: [
      "Programming",
      "Algorithms",
      "Project Management",
      "System Modeling",
    ],
  },
]

export const workEntries: TimelineEntry[] = [
  {
    id: "graduate-teaching-assistant-2026",
    title: "Graduate Teaching Assistant",
    org: "Arizona State University Polytechnic School",
    timespan: ["2026", "2026"],
    bullets: [
      "Developed a capstone class on full-stack web development",
      "Co-authored a handbook for students",
    ],
    keywords: [
      "Full-Stack Web Development",
      "Curriculum Design",
      "Student Mentoring",
    ],
  },
  {
    id: "graduate-research-assistant-2025",
    title: "Graduate Research Assistant",
    org: "Arizona State University Polytechnic School",
    timespan: ["2025", "2025"],
    bullets: [
      "Conducted literature reviews",
      "Wrote and submitted journal articles",
    ],
    keywords: ["Literature Reviews", "Journal Writing", "Academic Research"],
  },
  {
    id: "graduate-research-assistant-caoe",
    title: "Graduate Research Assistant",
    org: "Center for Accelerating Operational Efficiency",
    timespan: ["2023", "2025"],
    bullets: [
      "Developed and programmed a LLM-powered chatbot web application study paradigm with behavioral data recording",
      "Planned and prepared a study with human participants (IRB, Qualtrics, Prolific)",
      "Presented at conferences and meetings with stakeholders from CAOE, DHS, and USAF",
      "Wrote conference and journal submissions from research insights",
      "Planned and wrote project proposals for grant applications",
    ],
    keywords: [
      "LLM Applications",
      "Human Subjects Research",
      "Conference Presentations",
      "Grant Writing",
    ],
  },
  {
    id: "graduate-teaching-assistant-2023",
    title: "Graduate Teaching Assistant",
    org: "Arizona State University Polytechnic School",
    timespan: ["2023", "2023"],
    bullets: [
      "Taught Information Technology 101: Python programming, Raspberry Pi",
    ],
    keywords: ["Python", "Raspberry Pi", "Teaching"],
  },
  {
    id: "graduate-research-assistant-ulm",
    title: "Graduate Research Assistant",
    org: "Human Factors at Ulm University",
    timespan: ["2022", "2023"],
    bullets: [
      "Co-authored a research paper on the effects of trust repair strategies for robots",
      "Assisted in managing a large project studying passersby's perception of autonomous robots in public spaces",
    ],
    keywords: ["Human Factors", "Robotics", "Trust Repair"],
  },
  {
    id: "undergraduate-research-assistant-kiel",
    title: "Undergraduate Research Assistant",
    org: "Web Science at Kiel University",
    timespan: ["2019", "2019"],
    bullets: [
      "Set up an online survey for a research project investigating people's classification of political tweets",
    ],
    keywords: ["Survey Design", "Political Communication", "Web Science"],
  },
]
