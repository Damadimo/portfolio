export interface Project {
  id: number
  title: string
  description: string
  image?: string
  technologies: string[]
  category: string
  featured: boolean
  status: string
  metrics: Record<string, string>
  links: {
    github?: string
    demo?: string
    video?: string
    company?: string
  }
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Self-Hosted Local LLM Dev Platform",
    description:
      "Re-engineered OpenAI's chat API for offline use on consumer hardware, streaming 25 tok/s from quantised 7B Llama model. Features JSON-Schema based function-calling engine and RAG implementation with 92% factual accuracy.",
    image: "/LLM Dev Platform Project Cover.png",
    technologies: ["FastAPI", "Transformers", "Qdrant", "Docker", "Python", "LLMs"],
    category: "AI/ML",
    featured: true,
    status: "Completed",
    metrics: {
      performance: "25 tok/s streaming",
      accuracy: "92% factual accuracy",
      tests: "1,000+ automated tests",
    },
    links: {
      github: "https://github.com/Damadimo/local-llm-api",
    },
  },
  {
    id: 2,
    title: "Gen-AI Website Cloner",
    description:
      "Engineered a GenAI pipeline that recreates any public website in <15s using 200K-token LLM processing. Built dual-mode scraper bypassing CAPTCHAs with 98% success rate across 50 test sites.",
    image: "/web_cloner_cover.png",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Claude 4 Sonnet", "Playwright", "Vercel"],
    category: "Full-Stack",
    featured: true,
    status: "Completed",
    metrics: {
      speed: "<15s recreation time",
      success: "98% capture rate",
      efficiency: "reduces 99% of manual frontend work",
    },
    links: {
      github: "https://github.com/Damadimo/PixelTwinWebCloner",
    },
  },
  {
    id: 3,
    title: "Semantic Similarity Engine",
    description:
      "Engineered an NLP pipeline to tokenize and normalize 1M+ words from classic literature, generating 300K+ co-occurrence-based semantic descriptors. Achieved 72% accuracy on TOEFL-style benchmarks.",
    image: "/Semantic Similarity Engine Cover.png",
    technologies: ["Python", "NLP", "Cosine Similarity", "Semantic Analysis", "Text Processing", "Machine Learning"],
    category: "AI/ML",
    featured: false,
    status: "Completed",
    metrics: {
      data: "1M+ words processed",
      descriptors: "300K+ semantic descriptors",
      accuracy: "72% accuracy on TOEFL-style benchmarks",
      performance: "Sub-second query processing",
      corpus: "Trained on 15+ classic literature works"
    },
    links: {
      github: "https://github.com/Damadimo/Semantic-Similarity-Engine",
      demo: "https://demo-link.com"
    },
  },
  {
    id: 4,
    title: "Interactive 2D Game with AI Integration",
    description:
      "Developed a hyper-realistic classroom-simulator game using Unity (C#) to help improve social skills of anxious users. Integrated ESP32 hardware to create physical responses to in-game interactions, such as turning lights on and off. Fine-tuned OpenAI GPT-3.5 with custom dialogue pairs to simulate realistic human interaction.",
    image: "/AI_Game_Cover.png",
    technologies: ["Unity", "C#", "ESP32", "OpenAI API", "WebSockets", "ElevenLabs", "IoT", "Real-time AI"],
    category: "ML/AI",
    featured: false,
    status: "Completed",
    metrics: {
      training: "Fine-tuned model on 10K dialogue pairs",
      response: "<200ms speech response time",
      integration: "Integrated real-time hardware feedback",
      latency: "50ms sensor response time"
    },
    links: {
      github: "https://github.com/Damadimo",
      video: "https://demo-video.com"
    },
  },
  {
    id: 5,
    title: "Data Maturity Assessment Platform",
    description:
      "Full-stack web application built during FI Solutions internship that replaced manual spreadsheet audits. Features ACID-safe REST API with transaction-safe inserts for enterprise data integrity.",
    image: "/DMA_Cover_Photo.png",
    technologies: ["Next.js", "SQL", "REST API", "Enterprise Systems", "PostgreSQL", "Auth0", "Analytics"],
    category: "Enterprise",
    featured: false,
    status: "Completed",
    metrics: {
      integrity: "100% data integrity with ACID-safe REST API",
      surveys: "500+ pilot surveys",
      users: "15+ enterprise users",
    },
    links: {
      company: "https://fisolutionsinc.com/",
    },
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description:
      "Modern, responsive portfolio website built with Next.js featuring dynamic project syncing, interactive terminal sections, and a minimalist black/white design. Includes functional contact form with email integration, expandable project cards, and smooth animations throughout.",
    image: "/Portfolio_Cover_Photo.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend", "React", "Lucide Icons"],
    category: "Full-Stack",
    featured: false,
    status: "Completed",
    metrics: {
      performance: "100% responsive design",
      features: "Dynamic project syncing",
      animations: "Smooth Framer Motion transitions",
      email: "Functional contact form with Resend integration",
    },
    links: {
      github: "https://github.com/Damadimo",
    },
  },
]

// Helper function to generate terminal project names based on actual project data
export const getTerminalProjectNames = (): string[] => {
  return projects.map(project => {
    // Convert project titles to terminal-style directory names
    let terminalName = project.title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters
      .replace(/\s+/g, '_') // Replace spaces with underscores
      .replace(/^(self_hosted_|gen_ai_|interactive_|data_)/i, '') // Remove common prefixes
    
    // Create more concise names based on project category and key technologies
    if (project.title.includes('LLM')) {
      terminalName = 'llm_platform'
    } else if (project.title.includes('Website Cloner')) {
      terminalName = 'web_cloner'
    } else if (project.title.includes('Semantic Similarity')) {
      terminalName = 'semantic_engine'
    } else if (project.title.includes('Game')) {
      terminalName = 'ai_game'
    } else if (project.title.includes('Data Maturity')) {
      terminalName = 'data_assessment'
    } else if (project.title.includes('Portfolio Website')) {
      terminalName = 'portfolio_site'
    }
    
    return terminalName + '/'
  })
} 