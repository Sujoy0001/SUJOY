/**
 * Portfolio Data Constants
 * All copy and image links for the entire multi-page application are loaded from here.
 * You can replace the local portraitUrl or project imagePaths with your own ImageKit URLs.
 */

import codeimg from "../assets/saas1.png";


import rag from "../assets/pro/rag.png";
import tca from "../assets/pro/tca.png";

import img1 from "../assets/pro/kush.jpeg";
import img2 from "../assets/pro/dockra.png";
import img3 from "../assets/pro/kristi.png";

export const portfolioData = {
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

  projects: {
    heading: "Selected Works",
    subheading: "Explore my latest case studies highlighting SaaS architecture, design work, open source, and hackathons.",
    bentoCategories: [
      {
        id: 1,
        title: "SaaS Projects",
        tag: "Full Stack & AI",
        imageUrl: codeimg,
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
        title: "RAGENGINE - AI Workspace Dashboard",
        category: "saas",
        shortDescription: "A sophisticated RAG-powered AI platform designed to optimize intelligent document search, contextual retrieval, and accurate AI-generated responses from custom knowledge bases.",
        longDescription: "RAGEngine is an enterprise-grade AI platform built to index, process, and query massive internal document repositories using Retrieval-Augmented Generation (RAG). The platform delivers fast, context-aware answers with citation tracking, source highlighting, and clean response structures, creating a seamless experience for navigating complex organizational knowledge bases.",
        techStack: [
          "Python",
          "FastAPI",
          "React.js",
          "MongoDB",
          "Tailwind CSS",
          "Framer Motion",
          "Docker",
          "Jina AI Embeddings",
          "ChromaDB",
          "Vector Search",
          "Retrieval-Augmented Generation (RAG)",
          "REST API",
          "AI Document Search",
          "Semantic Search",
          "LLM Integration",
          "JSON",
          "Git",
          "GitHub"
        ],
        imageUrl: rag,
        role : "Full-Stack AI Engineer & Frontend Developer",
        timeline: "6 weeks",
        challenges: [
          "Building scalable semantic document retrieval for large AI knowledge bases.",
          "Optimizing vector search performance and embedding accuracy for fast AI responses.",
          "Designing a clean AI chat interface with source citations and markdown rendering."
        ],
        outcomes: [
          "Implemented a high-performance RAG pipeline using Jina Embeddings and ChromaDB.",
          "Developed a responsive AI interface with real-time response streaming and syntax highlighting.",
          "Successfully deployed a scalable AI document search platform with optimized retrieval accuracy."
        ],
        liveLink: "https://ragenginev1.vercel.app/",
        githubLink: "https://github.com/Sujoy0001/NootBookLM"
      },
     {
        id: "problem-solver",
        title: "AI Problem Solver Platform",
        category: "saas",
        shortDescription: "A collaborative AI-powered platform for coding discussions, solution sharing, and developer learning.",
        longDescription: "A full-stack problem-solving platform built for developers and students to post problems, share solutions, discuss approaches, and interact through an AI-powered assistant. The system supports threaded discussions, voting, accepted answers, file uploads, and AI-based code explanations with multi-language conversion support.",
        techStack: ["Python", "Django", "SQLite", "JavaScript", "Tailwind CSS", "AI Integration"],
        imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
        role: "Full-Stack Developer",
        timeline: "8 weeks",
        challenges: [
          "Designing scalable discussion and solution management architecture.",
          "Implementing AI-powered code explanation and language conversion features.",
          "Handling dynamic markdown rendering and file attachment management."
        ],
        outcomes: [
          "Built a collaborative platform supporting problem discussions and accepted solutions.",
          "Integrated AI-powered assistant for explaining and converting source code.",
          "Created a responsive and clean developer-focused user experience."
        ],
        liveLink: "https://www.sujoygarai.in",
        githubLink: "https://github.com/Sujoy0001/problemsolver"
      },
      {
        id: "teacher-course-allotment",
        title: "Teacher Course Allotment System",
        category: "saas",
        shortDescription: "A smart academic management platform for efficient teacher and subject allocation.",
        longDescription: "A web-based course allotment management platform developed to streamline teacher-course assignments for educational institutions. The system manages faculty data, subject allocation, workload balancing, and department-wise scheduling through an intuitive administrative dashboard.",
        techStack: ["Python", "FastAPI", "MongoDB", "HTML", "CSS", "JavaScript", "Bootstrap"],
        imageUrl: tca,
        role: "Backend Developer & System Designer",
        timeline: "5 weeks",
        challenges: [
          "Managing conflict-free teacher and course allocation workflows.",
          "Designing efficient relational database structures for academic records.",
          "Building an intuitive admin dashboard for department management."
        ],
        outcomes: [
          "Automated teacher-course assignment workflows reducing manual effort.",
          "Developed centralized academic management tools for administrators.",
          "Improved allocation accuracy and simplified departmental scheduling."
        ],
        liveLink: "https://tcasystem.vercel.app/",
        githubLink: "https://github.com/Sujoy0001/College-project-0.1"
      },
      {
        id: "kushal portfolio",
        title: "Kushal Portfolio",
        category: "design",
        shortDescription: "A modern, premium interactive portfolio crafted to showcase projects, skills, and creative web experiences with smooth animations and a clean professional interface.",
        imageUrl: img1,
        liveLink: "https://www.kushprods.site/"
      },
      {
        id: "Dockra",
        title: "Unique Dockra workshop website",
        category: "design",
        shortDescription: "A modern, premium art marketplace platform crafted to showcase and sell digital artworks with elegant visuals, smooth interactions, and a clean immersive shopping experience.",
        imageUrl: img2,
        liveLink: "https://www.uniquedokraworkshop.com/"
      },
      {
        id: "kristi",
        title: "Kiristi Portfolio",
        category: "design",
        shortDescription: "A modern, premium interactive portfolio crafted to showcase projects, skills, and creative web experiences with smooth animations and a clean professional interface.",
        imageUrl: img3,
        liveLink: "https://www.animeshdey.in/" // No live link - will show nothing!
      },
      {
        id: "chatroom",
        title: "ChatRoom - Anonymous Group Chat Platform",
        category: "contributions",
        shortDescription: "Designed and developed a real-time group chat platform enabling users to communicate instantly without authentication.",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
        liveLink: "https://cheatroom.tech/"
      },
      {
        id: "rag-microservice",
        title: "RAG Chatbot Microservice",
        category: "contributions",
        shortDescription: "Built a modular RAG-based microservice for powering AI chatbot applications with semantic document retrieval.",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
        liveLink: ""
      },
      {
        id: "crisisIQ",
        title: "CrisisIQ - Real-Time Disaster Management Platform",
        category: "hackathon",
        shortDescription: "Developed the frontend for a real-time tracking platform designed for hospitals, malls, hotels, and large public venues.",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        liveLink: "https://crisis-iq-opal.vercel.app/"
      },
      {
        id: "catalysms",
        title: "Catalysms - Agriculture & Farmer Ecosystem",
        category: "hackathon",
        shortDescription: "Built a full-stack agriculture platform helping farmers manage, promote, and sell products directly through a digital marketplace.",
        imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800",
        liveLink: ""
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
