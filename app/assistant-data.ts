// Knowledge base and matching logic for the portfolio's "Ask the portfolio" assistant.
// Every fact here is grounded in Khai's resume (public/assets/khai-nguyen-resume.pdf).

export type KnowledgeEntry = {
  id: string;
  prompt: string;
  keywords: string[];
  answer: string;
};

export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: "photoguard",
    prompt: "Tell me about PhotoGuard",
    keywords: [
      "photoguard",
      "photo guard",
      "watermark",
      "sjhacks",
      "hackathon",
      "dct",
      "opencv",
      "image protection",
    ],
    answer:
      "PhotoGuard is a full-stack image protection app I built for SJHacks2026. The frontend is React/TypeScript and the backend is FastAPI. I implemented visible and invisible watermarking with OpenCV and NumPy, embedding watermark text by modifying mid-frequency coefficients in 8×8 Discrete Cosine Transform (DCT) blocks. The API covers upload, retrieval, download, sharing, and access revocation, with UUID-based local file storage.",
  },
  {
    id: "travel",
    prompt: "Tell me about the travel booking platform",
    keywords: [
      "travel",
      "booking",
      "hotel",
      "cmpe 131",
      "cmpe131",
      "spring boot",
      "reservation",
      "pet-friendly",
      "pet friendly",
    ],
    answer:
      "For CMPE 131 at SJSU, I worked as a backend developer on a travel booking platform. I built 5 REST API endpoints across attraction search and hotel search/reservation in a Spring Boot backend, collaborating with a 6-person team through the full controller-service-repository stack. I also designed a custom pet-friendly filtering service so users could refine hotel results by pet policy, plus the DTOs and relational schema behind hotel and reservation data.",
  },
  {
    id: "strongest-skill",
    prompt: "What is your strongest skill?",
    keywords: [
      "strongest skill",
      "best at",
      "good at",
      "strength",
      "superpower",
    ],
    answer:
      "I'm strongest at turning a fuzzy product need into working backend logic and a clear user experience. I enjoy the seams between API design, data modeling, debugging, and the interface people actually touch — PhotoGuard's watermarking API and the travel platform's filtering service are both examples of that.",
  },
  {
    id: "stack",
    prompt: "What's your tech stack?",
    keywords: [
      "tech stack",
      "language",
      "languages",
      "programming language",
      "framework",
      "stack",
      "java",
      "python",
      "typescript",
      "javascript",
      "c++",
      "sql",
    ],
    answer:
      "My core languages are Java, Python, JavaScript, TypeScript, C++, SQL, and HTML. On top of that I've shipped with React, FastAPI, and Spring Boot, and I work daily in Figma, VS Code, Git/GitHub, Docker, and Office365.",
  },
  {
    id: "looking-for",
    prompt: "What are you looking for?",
    keywords: [
      "looking for",
      "opportunity",
      "internship",
      "job",
      "role",
      "hire",
      "hiring",
      "position",
    ],
    answer:
      "I'm looking for software engineering internships and early-career roles where I can contribute across the stack, learn from a strong team, and build reliable products with real users in mind. I'm based in San Jose, CA and open to remote or Bay Area teams.",
  },
  {
    id: "teamwork",
    prompt: "How do you work with teams?",
    keywords: [
      "team",
      "collaborate",
      "collaboration",
      "teamwork",
      "work with others",
    ],
    answer:
      "On the travel booking platform, I collaborated with a six-person team through the controller-service-repository stack. I like making the contract between layers explicit, communicating early about scope, and leaving code easier to understand than I found it.",
  },
  {
    id: "tutoring",
    prompt: "Tell me about your tutoring experience",
    keywords: [
      "tutor",
      "tutoring",
      "teach",
      "teaching",
      "mentor",
      "evergreen valley",
    ],
    answer:
      "I spent about a year and a half as a Computer Science Tutor at Evergreen Valley College. I coordinated with instructors to teach Java fundamentals in VS Code, diagnosed gaps in students' understanding of object-oriented programming, and introduced live debugging techniques that cut down repeated syntax and logic errors. Assignment scores went up roughly 10% and students spent about 20% less time rewriting code. That patience for finding the 'why' behind a bug shapes how I build today.",
  },
  {
    id: "education",
    prompt: "What are you studying?",
    keywords: [
      "education",
      "study",
      "studying",
      "school",
      "university",
      "college",
      "gpa",
      "degree",
      "major",
      "sjsu",
      "san jose state",
    ],
    answer:
      "I'm pursuing a B.S. in Software Engineering at San José State University (2025–2027, GPA 3.628), with coursework in Data Structures and Algorithms, Object-Oriented Design, and Software Engineering. Before that, I earned my A.S. in Computer Science at Evergreen Valley College (GPA 3.681).",
  },
  {
    id: "why-swe",
    prompt: "Why did you choose software engineering?",
    keywords: [
      "why software",
      "why did you choose",
      "why swe",
      "why engineering",
      "motivation",
    ],
    answer:
      "I like that software lets an idea go from a sketch to something people actually use in the same week. Tutoring showed me how satisfying it is to help someone get unstuck — building products scratches that same itch, just at a larger scale.",
  },
  {
    id: "contact",
    prompt: "How can I reach you?",
    keywords: [
      "contact",
      "reach",
      "email",
      "connect",
      "get in touch",
      "linkedin",
    ],
    answer:
      "The fastest way is email: khainguynwork@gmail.com. You can also find my code on GitHub at github.com/khaisjsu, or grab my resume from the download link in the hero section.",
  },
  {
    id: "resume",
    prompt: "Can I see your resume?",
    keywords: ["resume", "cv", "pdf"],
    answer:
      "Of course — there's a \"Download resume\" link right under the intro at the top of this page, or you can jump straight to /assets/khai-nguyen-resume.pdf.",
  },
  {
    id: "location",
    prompt: "Where are you based?",
    keywords: ["location", "based", "live", "san jose", "bay area", "where"],
    answer:
      "I'm based in San Jose, CA, currently studying at San José State University. I'm open to Bay Area teams as well as remote work.",
  },
  {
    id: "challenge",
    prompt: "What's the hardest problem you've solved?",
    keywords: [
      "hardest",
      "challenge",
      "difficult",
      "tricky",
      "debug",
      "bug",
      "problem you've solved",
    ],
    answer:
      "Getting invisible watermarking right on PhotoGuard was the trickiest part — I had to embed data into mid-frequency DCT coefficients so it survived compression without becoming visible to the eye. It took a lot of trial and error with OpenCV and NumPy before the watermark was both robust and imperceptible.",
  },
  {
    id: "greeting",
    prompt: "What is this?",
    keywords: ["hello", "hi", "hey", "what is this", "who are you"],
    answer:
      "Hi, I'm Khai's portfolio assistant. Ask me about his projects (PhotoGuard, the travel booking platform), his skills, his tutoring experience, or what he's looking for next.",
  },
];

const fallbackAnswer =
  "I don't have a canned answer for that one yet, but you can ask me about PhotoGuard, the travel booking platform, Khai's skills, his tutoring experience, or how to reach him directly at khainguynwork@gmail.com.";

const STOPWORDS = new Set([
  "a",
  "an",
  "the",
  "is",
  "are",
  "was",
  "were",
  "do",
  "does",
  "did",
  "you",
  "your",
  "yours",
  "of",
  "to",
  "for",
  "in",
  "on",
  "and",
  "or",
  "what",
  "whats",
  "how",
  "tell",
  "me",
  "about",
  "with",
  "can",
  "i",
  "it",
  "he",
  "his",
  "khai",
  "this",
  "that",
  "these",
  "those",
]);

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9+.\s]/g, " ");
}

function tokenize(text: string): string[] {
  return normalize(text)
    .split(/\s+/)
    .filter((word) => word.length > 1 && !STOPWORDS.has(word));
}

export function findAnswer(query: string): string {
  const normalizedQuery = normalize(query);
  const queryTokens = new Set(tokenize(query));
  if (queryTokens.size === 0) return fallbackAnswer;

  let bestEntry: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;

    for (const keyword of entry.keywords) {
      const normalizedKeyword = normalize(keyword);
      if (normalizedKeyword.includes(" ")) {
        if (normalizedQuery.includes(normalizedKeyword)) score += 4;
      } else if (queryTokens.has(normalizedKeyword)) {
        score += 2;
      }
    }

    const promptTokens = tokenize(entry.prompt);
    const overlap = promptTokens.filter((t) => queryTokens.has(t)).length;
    if (promptTokens.length > 1) {
      score += (overlap / promptTokens.length) * 3;
    }

    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  return bestEntry && bestScore >= 2 ? bestEntry.answer : fallbackAnswer;
}

export const suggestionPool: string[] = knowledgeBase
  .filter((entry) => entry.id !== "greeting")
  .map((entry) => entry.prompt);

export function pickSuggestions(exclude: string[], count = 3): string[] {
  const pool = suggestionPool.filter((q) => !exclude.includes(q));
  const source = pool.length >= count ? pool : suggestionPool;
  const shuffled = [...source].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
