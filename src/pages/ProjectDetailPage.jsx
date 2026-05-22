import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Landmark, Clock, UserCheck, CheckSquare, AlertTriangle } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

// Custom lightweight SVG for Github icon since recent Lucide releases removed brand assets
const Github = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectDetailPage() {
  const { id } = useParams();
  const { projects } = portfolioData;

  // Find matching project
  const project = projects.items.find((item) => item.id === id);

  // Fallback if project is not found
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-[#f5f5f3] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <h2 className="text-3xl font-extrabold text-zinc-950 dark:text-white">Case Study Not Found</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2 mb-8">The project case study you requested could not be retrieved.</p>
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold text-xs px-6 py-3.5 rounded-full shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-[#f5f5f3] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-left transition-colors duration-300 min-h-screen">
      <div className="w-full max-w-[1200px] mx-auto space-y-12">
        
        {/* Back Link */}
        <Link 
          to="/projects/saas" 
          className="inline-flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>

        {/* Dynamic Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-xs font-bold text-green-600 dark:text-green-500 uppercase tracking-widest block">SaaS Case Study</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight leading-none">
            {project.title}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed pt-2">
            {project.shortDescription}
          </p>
        </motion.div>

        {/* Project Meta Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          
          <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-900 shadow-2xs">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-900 dark:text-white flex-shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 block uppercase tracking-wider">Role</span>
              <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{project.role}</span>
            </div>
          </div>

          <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-900 shadow-2xs">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-900 dark:text-white flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 block uppercase tracking-wider">Duration</span>
              <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{project.timeline}</span>
            </div>
          </div>

          <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-900 shadow-2xs">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-900 dark:text-white flex-shrink-0">
              <Landmark className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 block uppercase tracking-wider">External Connections</span>
              <div className="flex items-center gap-3 text-xs font-bold">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-zinc-900 dark:text-white hover:text-green-600 dark:hover:text-green-500 inline-flex items-center gap-0.5"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.liveLink && project.githubLink && <span className="text-zinc-200 dark:text-zinc-800">|</span>}
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-zinc-900 dark:text-white hover:text-green-600 dark:hover:text-green-500 inline-flex items-center gap-0.5"
                  >
                    <span>Repository</span>
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Large Cover Image Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-[16/9] rounded-[32px] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-900 shadow-sm"
        >
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Case Study Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          
          {/* Main Content Column (Left) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-zinc-950 dark:text-white tracking-tight">Project Overview</h2>
              <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed font-medium">
                {project.longDescription}
              </p>
            </div>
 
            {/* Challenges */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-zinc-950 dark:text-white tracking-tight">Key Technical Challenges</h2>
              <div className="space-y-4">
                {project.challenges && project.challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-900 shadow-2xs">
                    <AlertTriangle className="w-5 h-5 text-zinc-700 dark:text-zinc-350 flex-shrink-0 mt-0.5" />
                    <p className="text-zinc-600 dark:text-zinc-450 text-sm sm:text-base leading-relaxed font-medium">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-zinc-950 dark:text-white tracking-tight">Results & Core Outcomes</h2>
              <div className="space-y-4">
                {project.outcomes && project.outcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-900 shadow-2xs">
                    <CheckSquare className="w-5 h-5 text-zinc-700 dark:text-zinc-350 flex-shrink-0 mt-0.5" />
                    <p className="text-zinc-700 dark:text-zinc-350 text-sm sm:text-base leading-relaxed font-semibold">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Tech Specs (Right) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-900 shadow-2xs rounded-[32px] p-6 sm:p-8 space-y-6">
              <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 tracking-wider uppercase">System Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack && project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-bold px-3.5 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-zinc-650 dark:text-zinc-350 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="pt-6 border-t border-zinc-200/60 dark:border-zinc-800/80 flex flex-col space-y-4">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group flex items-center justify-between bg-zinc-950 dark:bg-white hover:bg-zinc-900 dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-bold text-xs px-6 py-4 rounded-full shadow-md transition-all duration-300"
                  >
                    <span>Launch Live Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group flex items-center justify-between bg-zinc-50 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-bold text-xs px-6 py-4 rounded-full transition-all duration-300"
                  >
                    <span>Verify Codebase</span>
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
