const data = {
    publications: [
        {
            title: "Investigating the Impact of User Interface Designs on Expectations About Large Language Models’ Capabilities",
            description: "Showed a variety of prompts in different user interface designs and queried people for their expectations.",
            authors: ["F. Gröner", "E. K. Chiou"],
            publication: "Proceedings of the Human Factors and Ergonomics Society Annual Meeting 2024",
            link: "https://doi.org/10.1177/10711813241260399",
            image: "img/hfes-plot.png"
        },
        {
            title: "The Tendency to Anthropomorphize and Technology Affinity Affect Trust in Repair Strategies after Error",
            description: "Investigated the effects on trust of different verbal reactions of a robot to making a mistake.",
            authors: ["J. M. Kraus", "J. Merger", "F. Gröner", "J. Pätz"],
            publication: "Companion of the 2023 ACM/IEEE International Conference on Human-Robot Interaction",
            link: "https://doi.org/10.1145/3568294.3580122",
            image: "img/hri-plot.png"
        }
    ],
    currentProjects: [
        {
            title: "People and LLMs Learning Each Other's Competencies",
            description: "Can people accurately calibrate their expectations ofr LLMs in various domains? Can LLMs identify whether they or or the individual prompting them is more competent?",
            image: "img/aisafe-model.png"
        },
        {
            title: "LLMs Inferring Individual Preferences From Edits to Their Outputs",
            description: "Do LLM-generated summaries improve if preferences are inferred from people's revisions of previous summaries?",
            image: "img/gao-scatter.png"
        },
        {
            title: "GPT-4 for Intelligence Analysis Reporting",
            description: "Can GPT-4 adhere to the intelligence community's best practices for reporting and does that help analysts to assess the reliability of the system?",
            image: "img/result-net.png"
        },
        {
            title: "Designing LLM UIs for Appropriate Reliance",
            description: "What user interface elements (e.g., warnings, confidence bars, cognitive-forcing functions) can assist people in correctly calibrating their reliance on LLMs?",
            image: "img/guide-screenshot.png"
        },
        {
            title: "AI Images for Cognitive Psychology Research",
            description: "What computational metrics explain people's internal representations of abstract art? And can we use synthetic AI-generated mixes of original artworks?",
            link: "https://groenerfelix.github.io/abstract-art",
            image: "img/abstract-art-1.jpeg"
        },
        {
            title: "Effects of Different Uncertainty Visualizations on Human-AI Interaction",
            description: "Literature review on the effects of uncertainty metrics and visualizations on people using AI systems.",
        }
    ]
};


const publicationsContainer = document.getElementById('publications-container');
const projectsContainer = document.getElementById('projects-container');

// Helper function to format authors
function formatAuthors(authors) {
    const authorList = authors.map(author => author.trim());
    const formattedAuthors = authorList.map(author => 
        author === "F. Gröner" ? `<strong>${author}</strong>` : author
    );
    if (formattedAuthors.length > 2) {
        return formattedAuthors.slice(0, -1).join(', ') + ', and ' + formattedAuthors.slice(-1);
    } else if (formattedAuthors.length === 2) {
        return formattedAuthors.join(' and ');
    }
    return formattedAuthors[0];
}

// Unified function to create a card
function createCard({ title, description, authors, publication, link, image }) {
    const card = document.createElement(link ? 'a' : 'div');
    if (link) {
        card.href = link;
        card.target = '_blank';
    }
    card.className = 'rounded-lg shadow-md overflow-hidden transform transition duration-200 hover:scale-105';
    card.innerHTML = `
        <div class="p-6 flex xl:flex-row md:flex-row flex-col-reverse lg:flex-col-reverse card items-center">
            <div class="flex flex-col justify-center pr-4">
                <h3 class="text-xl font-semibold mb-2">${title}</h3>
                <p class="mb-4">${description}</p>
                <small>
                    ${authors ? `<p>${formatAuthors(authors)}</p>` : ''}
                    ${publication ? `<p>${publication}</p>` : ''}
                </small>
            </div>
            ${image ? `<img src="${image}" class="xl:max-w-64 max-h-64 xl:max-h-48 lg:max-w-[100%] lg:max-h-64 md:max-w-48 filter grayscale rounded-lg mb-4 xl:mb-0 mx-auto">` : ''}
        </div>
    `;
    return card;
}

// Populate Publications
data.publications.forEach(pub => {
    const publicationCard = createCard(pub);
    publicationsContainer.appendChild(publicationCard);
});

// Populate Current Projects
data.currentProjects.forEach(project => {
    const projectCard = createCard(project);
    projectsContainer.appendChild(projectCard);
});


