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
      email: "hello@carter.design",
      subject: "Project Inquiry",
    },
    portraitUrl: "/designer_portrait.png",
  },
  
  services: {
    heading: "Freelance Offerings",
    subheading: "High-impact digital services to elevate your brand and build seamless customer experiences.",
    items: [
      {
        id: "ui-ux",
        title: "UI/UX & Product Design",
        shortDescription: "Crafting modern, intuitive user interfaces and user experiences focused on visual excellence and clarity.",
        longDescription: "I design digital products from scratch, covering user research, wireframing, interactive prototyping, and fully-polished visual designs. I focus on creating cohesive visual design systems that seamlessly express your brand and drive actual business results.",
        icon: "Layers",
        pricing: "Starts at $2,500 / project",
        timeline: "2-4 weeks typical delivery",
        deliverables: ["Figma source files", "Interactive prototypes", "Design system documentation", "Component libraries"]
      },
      {
        id: "frontend-dev",
        title: "React & Frontend Engineering",
        shortDescription: "Converting design assets into blazing fast, interactive, and fully responsive frontend applications.",
        longDescription: "Using React, Vite, and Tailwind CSS, I build modern web applications optimized for speed, SEO, and seamless user interaction. I write highly clean, modular, and maintainable code with professional entry and micro-animations using Framer Motion.",
        icon: "Code2",
        pricing: "Starts at $3,500 / project",
        timeline: "3-6 weeks typical delivery",
        deliverables: ["React source code (GitHub)", "Vite build configuration", "Tailwind styling system", "Deployment & domain setup"]
      },
      {
        id: "framer",
        title: "Premium Framer Websites",
        shortDescription: "Designing and developing state-of-the-art interactive marketing sites directly inside Framer.",
        longDescription: "I create premium, highly animated, and fast-loading promotional and landing websites in Framer. Perfect for startups, creators, and brands that need standard speed-to-market, SEO readiness, and the absolute freedom to edit content directly.",
        icon: "MonitorPlay",
        pricing: "Starts at $1,800 / project",
        timeline: "1-2 weeks typical delivery",
        deliverables: ["Framer project transfer", "Custom domain setup", "SEO metadata config", "Training & editor guides"]
      }
    ]
  },

  skills: {
    heading: "Technical Toolbelt",
    subheading: "A curated selection of languages, frameworks, and creative software I employ to build digital products.",
    categories: [
      {
        name: "Design & UX",
        items: [
          { name: "Figma & UI Systems", level: 95 },
          { name: "Visual Identity & Branding", level: 88 },
          { name: "Wireframing & Prototyping", level: 92 },
          { name: "Motion & Interaction", level: 85 }
        ]
      },
      {
        name: "Frontend Development",
        items: [
          { name: "React.js & Hooks", level: 90 },
          { name: "Tailwind CSS (v3/v4)", level: 95 },
          { name: "JavaScript (ES6+)", level: 88 },
          { name: "Vite & Build Tools", level: 85 }
        ]
      },
      {
        name: "Workflows & Platforms",
        items: [
          { name: "Framer & Webflow", level: 92 },
          { name: "Git & Version Control", level: 85 },
          { name: "Next.js Architecture", level: 80 },
          { name: "SEO & Optimization", level: 88 }
        ]
      }
    ]
  },

  projects: {
    heading: "Selected Works",
    subheading: "Explore my latest case studies highlighting product design, AI solutions, and visual aesthetics.",
    items: [
      {
        id: "rag",
        title: "RAG - AI Engine Workspace",
        category: "AI Integration & Product Design",
        shortDescription: "A sophisticated AI workspace dashboard optimizing document search using Retrieval-Augmented Generation.",
        longDescription: "RAG is an enterprise-grade AI interface built to index, digest, and query massive corporate internal document stores. The project focuses on creating a seamless user experience for querying complex knowledge graphs, offering citation tracking, source highlightings, and clean, beautiful response structures.",
        techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Vector Embeddings", "FastAPI"],
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", // ImageKit placeholder path
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
        id: "kush-portfolio",
        title: "Kush Portfolio",
        category: "Creative Web Design",
        shortDescription: "A fully immersive, premium interactive portfolio for standard architectural design studios.",
        longDescription: "The Kush Portfolio is a high-end personal showcase site designed for Kush Architects. The design highlights editorial layouts, minimalist visual structures, dynamic typography, and full-screen image transitions. Built using modern interaction methods, it provides a gallery-like experience for physical art and design structures.",
        techStack: ["Next.js", "Tailwind CSS v4", "Framer Motion", "Lenis Smooth Scroll", "Sanity CMS"],
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", // ImageKit placeholder path
        role: "Creative Director & Solo Developer",
        timeline: "4 weeks",
        challenges: [
          "Maintaining fast load times with ultra-high resolution photography portfolios.",
          "Implementing custom page transitions that mimic physically flipping architectural design catalogs.",
          "Ensuring pixel-perfect responsive alignments for asymmetrical grid structures."
        ],
        outcomes: [
          "Implemented lazy loading and next-gen ImageKit compression reducing load time by 60%.",
          "Crafted customized Framer Motion page flip animations operating at a locked 60fps.",
          "Featured on several CSS gallery and design inspiration showcase websites."
        ],
        liveLink: "https://kush.carter.design",
        githubLink: "https://github.com/carter/kush-portfolio-minimal"
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
      email: "hello@carter.design",
      phone: "+1 (555) 019-2834",
      location: "San Francisco, CA (GMT-8)",
    },
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com/in/carter-designer" },
      { name: "GitHub", url: "https://github.com/carter-dev" },
      { name: "Twitter", url: "https://twitter.com/carter_creates" },
      { name: "Dribbble", url: "https://dribbble.com/carter_design" }
    ]
  }
};
