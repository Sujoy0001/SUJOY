/**
 * Portfolio Data Constants
 * All copy and image links for the entire multi-page application are loaded from here.
 * You can replace the local portraitUrl or project imagePaths with your own ImageKit URLs.
 */
export const portfolioData = {
  hero: {
    badge: {
      text: "2 projects left in March",
      status: "active",
    },
    title: "Carter is solving problems through strategic design and compelling visuals",
    description: "As a digital product designer with a strong focus on visual design and Framer websites, he collaborates closely with teams to craft seamless, user-centered, and reliable partner in bringing ideas to life.",
    cta: {
      text: "Email Me",
      email: "sujoygarai89@gmail.com",
      subject: "Project Inquiry",
    },
    portraitUrl: "/designer_portrait.png",
  },
  
  services: {
    heading: "Freelance Offerings",
    subheading: "High-impact design and engineering services custom-built to elevate your online business.",
    items: [
      {
        id: "web-dev",
        title: "Web Development",
        shortDescription: "Custom, responsive, and search-optimized websites designed with absolute visual excellence and built using modern frameworks like React, Vite, and Tailwind CSS.",
        icon: "Code2",
        deliverables: ["Custom React & Vite builds", "Tailwind CSS styling", "SEO configuration", "Responsive mobile layouts"]
      },
      {
        id: "saas-dev",
        title: "Full SaaS Development",
        shortDescription: "End-to-end cloud software applications, custom SaaS architectures, multi-tenant databases, API gateways, and scalable backend infrastructure.",
        icon: "Layers",
        deliverables: ["FastAPI & Django systems", "PostgreSQL database schemas", "JWT Auth & OAuth2 security", "Dockerized cloud deployments"]
      }
    ]
  },

  skills: {
    heading: "Technical Toolbelt",
    subheading: "A detailed matrix of languages, backend and frontend engineering, databases, cloud DevOps, AI/RAG architectures, and scalability patterns I utilize to build modern server-side and client-side applications.",
    categories: [
      {
        name: "Languages",
        items: [
          { name: "Python", level: 95 },
          { name: "JavaScript", level: 85 },
          { name: "C Language", level: 75 },
          { name: "Java", level: 60 }
        ]
      },
      {
        name: "Backend",
        items: [
          { name: "FastAPI", level: 92 },
          { name: "Django", level: 95 },
          { name: "REST APIs & Microservices", level: 90 },
          { name: "JWT Auth & OAuth2", level: 88 },
          { name: "WebSockets & Pydantic", level: 86 }
        ]
      },
      {
        name: "Frontend",
        items: [
          { name: "React & Vite", level: 90 },
          { name: "Tailwind CSS", level: 95 },
          { name: "HTML5 & CSS3", level: 92 },
          { name: "Bootstrap", level: 80 }
        ]
      },
      {
        name: "Databases",
        items: [
          { name: "PostgreSQL", level: 90 },
          { name: "MongoDB", level: 85 },
          { name: "Firebase Realtime DB", level: 88 },
          { name: "Schema & Query Optimization", level: 85 }
        ]
      },
      {
        name: "Auth & Storage",
        items: [
          { name: "Firebase Auth", level: 90 },
          { name: "Firebase Storage", level: 88 },
          { name: "ImageKit", level: 85 },
          { name: "Cloudinary", level: 86 }
        ]
      },
      {
        name: "AI / RAG",
        items: [
          { name: "RAG Architecture", level: 92 },
          { name: "Chroma Vector DB", level: 88 },
          { name: "Jina Embeddings", level: 85 },
          { name: "LLM & Prompt Engineering", level: 90 }
        ]
      },
      {
        name: "DevOps & Infra",
        items: [
          { name: "Docker & Linux", level: 88 },
          { name: "Load Balancers & Caching", level: 80 },
          { name: "Git Version Control", level: 92 },
          { name: "CI/CD basics", level: 75 }
        ]
      },
      {
        name: "Deployment",
        items: [
          { name: "Vercel", level: 90 },
          { name: "Render", level: 88 },
          { name: "Railway", level: 85 },
          { name: "Production Deployments", level: 90 }
        ]
      },
      {
        name: "System Design",
        items: [
          { name: "Microservice Separation", level: 85 },
          { name: "Scalability Patterns", level: 88 },
          { name: "API Gateway", level: 84 },
          { name: "Distributed Data Flow", level: 80 }
        ]
      }
    ]
  },

  projects: {
    heading: "Selected Works",
    subheading: "Explore my latest case studies highlighting SaaS architecture, design work, open source, and hackathons.",
    bentoCategories: [
      {
        id: 1,
        title: "SaaS Projects",
        tag: "Full Stack & AI",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        link: "/projects/saas",
        gridSpan: "md:col-span-7",
      },
      {
        id: 2,
        title: "Design Works",
        tag: "UI / UX Design",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        link: "/projects/design",
        gridSpan: "md:col-span-5",
      },
      {
        id: 3,
        title: "Project Contributions",
        tag: "Open Source",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        link: "/projects/contributions",
        gridSpan: "md:col-span-5",
      },
      {
        id: 4,
        title: "Hackathon Projects",
        tag: "Rapid Prototyping",
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
        link: "/projects/hackathon",
        gridSpan: "md:col-span-7",
      },
    ],
    items: [
      {
        id: "rag",
        title: "RAG - AI Engine Workspace",
        category: "saas",
        shortDescription: "A sophisticated AI workspace dashboard optimizing document search using Retrieval-Augmented Generation.",
        longDescription: "RAG is an enterprise-grade AI interface built to index, digest, and query massive corporate internal document stores. The project focuses on creating a seamless user experience for querying complex knowledge graphs, offering citation tracking, source highlightings, and clean, beautiful response structures.",
        techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Vector Embeddings", "FastAPI"],
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        role: "Lead UI Designer & Frontend Engineer",
        timeline: "8 weeks",
        challenges: [
          "Presenting multi-layered AI response citations without cluttering the chat view.",
          "Ensuring instant response streaming with smooth markdown rendering and syntax highlighting.",
          "Designing complex data visualization layouts for document ingestion pipelines."
        ],
        outcomes: [
          "Developed an elegant citation preview card system reducing query navigation by 40%.",
          "Engineered a fully customized markdown renderer using Tailwind styling system.",
          "Successfully deployed to production catering to 5,000+ active enterprise queries daily."
        ],
        liveLink: "https://rag.carter.design",
        githubLink: "https://github.com/carter/rag-ai-workspace"
      },
      {
        id: "billing-gateway",
        title: "SaaS Billing Gateway",
        category: "saas",
        shortDescription: "High-performance Stripe subscription webhook broker and customer billing analytical dashboard.",
        longDescription: "An enterprise-grade SaaS billing dashboard and event processing broker integrated with Stripe and PostgreSQL. Capable of processing hundreds of transactional webhook events per second, delivering clean user interfaces for sub management, subscription tier toggles, and analytical charts.",
        techStack: ["Python", "FastAPI", "Stripe API", "PostgreSQL", "Redis", "Recharts"],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        role: "Backend Architect & Systems Engineer",
        timeline: "6 weeks",
        challenges: [
          "Handling Stripe webhooks concurrently under high volume without double-billing.",
          "Ensuring absolute data consistency across relational billing ledger tables.",
          "Optimizing database query latencies for user analytical panels."
        ],
        outcomes: [
          "99.99% webhook delivery success rate using Redis queuing brokers.",
          "Transactional database ledgers preventing race conditions during checkout.",
          "Analytical dashboards rendering in under 120ms for large dataset profiles."
        ],
        liveLink: "https://billing.carter.design",
        githubLink: "https://github.com/carter/stripe-saas-billing"
      },
      {
        id: "api-gateway",
        title: "Multi-tenant API Gateway",
        category: "saas",
        shortDescription: "A custom high-performance API gateway with rate-limiting, secure JWT authentication, and routing.",
        longDescription: "A central entry-point gateway engineered to proxy internal microservice requests. Offers built-in JWT authorization, dynamic route mapping, and token-bucket algorithm rate-limiting, drastically simplifying access management for client-side applications.",
        techStack: ["Go", "Redis", "JWT Auth", "Docker", "Prometheus", "Grafana"],
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
        role: "Solo Developer",
        timeline: "5 weeks",
        challenges: [
          "Maintaining proxy response latency overhead strictly under 5 milliseconds.",
          "Implementing dynamic route resolution without restarts.",
          "Constructing robust unit tests for authentication filters."
        ],
        outcomes: [
          "Achieved average latency overhead of 3.2ms.",
          "Integrated Redis token-bucket rate limiting serving 10,000+ operations/min.",
          "Automated dynamic route syncing from consul configuration registries."
        ],
        liveLink: "https://gateway.carter.design",
        githubLink: "https://github.com/carter/api-gateway"
      },
      {
        id: "kush-portfolio",
        title: "Kush Portfolio",
        category: "design",
        shortDescription: "A fully immersive, premium interactive portfolio for standard architectural design studios.",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
        liveLink: "https://kush.carter.design"
      },
      {
        id: "nova-ui",
        title: "Nova Glass UI Kit",
        category: "design",
        shortDescription: "A premium glassmorphic UI library for dark-themed dashboards and agency landing pages.",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        liveLink: "https://nova.carter.design"
      },
      {
        id: "solaria",
        title: "Solaria Mobile Mockups",
        category: "design",
        shortDescription: "High-fidelity solar panel energy monitoring mobile app interfaces designed in Figma.",
        imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
        liveLink: "" // No live link - will show nothing!
      },
      {
        id: "fastapi-rate-limiter",
        title: "FastAPI Sliding Window Limiter",
        category: "contributions",
        shortDescription: "Contributed an asynchronous sliding-window rate limiting dependency plugin to the FastAPI package ecosytem.",
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
        liveLink: "https://github.com/fastapi/fastapi"
      },
      {
        id: "tailwind-grid-helper",
        title: "Tailwind CSS Grid Helper",
        category: "contributions",
        shortDescription: "Proposed and pushed an optimization for fractional grid layout calculations in Tailwind CSS grid modules.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        liveLink: "" // No live link - will show nothing!
      },
      {
        id: "ecoscan",
        title: "EcoScan - AI Trash Classifier",
        category: "hackathon",
        shortDescription: "Won 1st place in GreenTech Hackathon. Built a computer vision recycling item classifier on the edge.",
        imageUrl: "https://images.unsplash.com/photo-1532996127610-5975b803a620?auto=format&fit=crop&q=80&w=800",
        liveLink: "https://ecoscan.devpost.com"
      },
      {
        id: "docuquery",
        title: "DocuQuery - RAG Web Extension",
        category: "hackathon",
        shortDescription: "Engineered a local browser extension to dynamically query and summarize PDF content using chroma embeddings.",
        imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
        liveLink: "" // No live link - will show nothing!
      }
    ]
  },

  faq: {
    heading: "Frequently Asked Questions",
    subheading: "Got questions? Find clear answers regarding freelance billing, operational processes, and timelines.",
    items: [
      {
        id: "q1",
        question: "What is your typical project timeline?",
        answer: "Every project differs depending on complexity, but simple landing page builds average 1 to 2 weeks. Comprehensive product design cycles (UI/UX + Development) generally run between 4 to 8 weeks, spaced out into clear weekly milestones."
      },
      {
        id: "q2",
        question: "How do you structure payment and billing?",
        answer: "Typically, I bill projects at a flat-rate split into standard milestones: 50% upfront deposit to book the slot, 25% upon design approval, and 25% upon final build completion and deployment. Retainers and ongoing maintenance models are also available."
      },
      {
        id: "q3",
        question: "Can we collaborate if I already have Figma design files?",
        answer: "Absolutely! I am more than happy to act purely as a developer. I will audit your Figma designs, provide an engineering scope of work, and translate your designs into pixel-perfect, highly responsive React or Framer websites."
      },
      {
        id: "q4",
        question: "What platforms do you build websites on?",
        answer: "I specialize in custom code using React, Vite, Next.js, and Tailwind CSS for custom web app architectures. For marketing sites, landing pages, and content sites, I strongly prefer Framer because it offers my clients seamless direct editing afterwards."
      }
    ]
  },

  contact: {
    heading: "Let's work together",
    subheading: "Ready to kickstart your next digital venture? Get in touch today for a free project audit.",
    description: "I am currently accepting freelance design and engineering contracts for late Q2 2026. Drop a message to discuss your objectives, timeline, and budget.",
    cta: {
      text: "Get In Touch",
      email: "sujoygarai89@gmail.com",
      phone: "+91 6294178990",
      location: "Durgapur, West Bengal, India",
    },
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/sujoygarai/" },
      { name: "GitHub", url: "https://github.com/Sujoy0001" },
      { name: "Instagram", url: "https://www.instagram.com/_sujoygarai_?igsh=Nmx0YjVwZXV6M3Bv" },
      { name: "Portfolio", url: "https://sujoygarai.in" }
    ]
  }
};
