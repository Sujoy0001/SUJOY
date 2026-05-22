import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Layout, 
  Database, 
  KeyRound, 
  BrainCircuit, 
  Settings, 
  Globe, 
  GitFork,
  Cloud,
  Image,
  Bot,
  Server,
  Binary
} from 'lucide-react';
import 'devicon/devicon.min.css';

const skillCategories = [
  {
    name: "Languages",
    icon: Code2,
    items: [
      { name: "Python (Advanced)", icon: "devicon-python-plain colored" },
      { name: "JavaScript (Intermediate)", icon: "devicon-javascript-plain colored" },
      { name: "C (Intermediate)", icon: "devicon-c-plain colored" },
      { name: "Java (Basic)", icon: "devicon-java-plain colored" }
    ]
  },
  {
    name: "Backend Engineering",
    icon: Cpu,
    items: [
      { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { name: "Django", icon: "devicon-django-plain colored" },
      { name: "REST APIs", icon: "devicon-nodejs-plain colored" },
      { name: "Microservices", icon: "devicon-kubernetes-plain colored" },
      { name: "JWT Auth", icon: "devicon-oauth-plain colored" },
      { name: "OAuth2", icon: "devicon-oauth-plain colored" },
      { name: "WebSockets", icon: "devicon-socketio-original colored" },
      { name: "Pydantic", icon: "devicon-python-plain colored" }
    ]
  },
  {
    name: "Frontend Engineering",
    icon: Layout,
    items: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Vite", icon: "devicon-vite-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" }
    ]
  },
  {
    name: "Databases",
    icon: Database,
    items: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Firebase Realtime DB", icon: "devicon-firebase-plain colored" },
      { name: "Schema & Indexing", icon: "devicon-sqlite-plain colored" }
    ]
  },
  {
    name: "Auth & Storage",
    icon: KeyRound,
    items: [
      { name: "Firebase Auth", icon: "devicon-firebase-plain colored" },
      { name: "Firebase Storage", icon: "devicon-firebase-plain colored" },
      { name: "ImageKit", icon: Image },
      { name: "Cloudinary", icon: Cloud }
    ]
  },
  {
    name: "AI & RAG Architectures",
    icon: BrainCircuit,
    items: [
      { name: "RAG Architecture", icon: "devicon-jupyter-plain colored" },
      { name: "Chroma Vector DB", icon: "devicon-sqlite-plain colored" },
      { name: "Jina Embeddings", icon: Binary },
      { name: "LLM & Prompt Eng.", icon: Bot }
    ]
  },
  {
    name: "DevOps & Infrastructure",
    icon: Settings,
    items: [
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain colored" },
      { name: "Git Version Control", icon: "devicon-git-plain colored" },
      { name: "Load Balancers", icon: "devicon-redis-plain colored" },
      { name: "CI/CD basics", icon: "devicon-githubactions-plain colored" }
    ]
  },
  {
    name: "Cloud Deployment",
    icon: Globe,
    items: [
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "Render", icon: Cloud },
      { name: "Railway", icon: "devicon-heroku-original colored" },
      { name: "Prod Deployments", icon: Server }
    ]
  },
  {
    name: "System Design",
    icon: GitFork,
    items: [
      { name: "Microservice Sep.", icon: "devicon-kubernetes-plain colored" },
      { name: "Scalability Patterns", icon: "devicon-nginx-original colored" },
      { name: "API Gateway", icon: "devicon-nginx-original colored" },
      { name: "Distributed Data Flow", icon: "devicon-apache-plain colored" }
    ]
  }
];

export default function SkillsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <div className="w-full pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-[#f5f5f3] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-center min-h-screen transition-colors duration-300">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-4 py-1.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Skills & Expertise
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-none">
            Technical Proficiency Matrix
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg leading-relaxed pt-2 font-medium">
            A comprehensive directory of my backend systems, database schemas, frontend interfaces, deployment engines, and DevOps architectures.
          </p>
        </motion.div>

        {/* Categories rendering */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div key={category.name} className="w-full">
                
                {/* Category Header */}
                <div className="flex items-center justify-center gap-3 border-zinc-200 dark:border-zinc-800 pb-4 mb-8 text-center">
                  <CategoryIcon className="w-6 h-6 text-zinc-950 dark:text-white" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                    {category.name}
                  </h2>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-6 justify-center">
                  {category.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group rounded-2xl p-3 flex flex-row items-center gap-4 text-left transition-all duration-300 hover:-translate-y-1 bg-white/50 dark:bg-zinc-900/40 border border-zinc-200/30 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-2xs cursor-default"
                    >
                      {/* Icon Container (No Border, Left Side) */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-zinc-800 shadow-xs group-hover:scale-105 transition-transform duration-300">
                        {typeof skill.icon === 'string' ? (
                          <i className={`${skill.icon} text-2xl`} />
                        ) : (
                          <skill.icon className="w-6 h-6 text-zinc-950 dark:text-zinc-200" />
                        )}
                      </div>
                      
                      {/* Skill Name */}
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-200 leading-tight group-hover:text-green-600 dark:group-hover:text-green-500 transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </motion.div>
                  ))}
                </div>

              </div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
