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
      <div className="min-h-[80vh] flex flex-col justify-center items-center px-6 text-center">
        <h2 className="text-3xl font-extrabold text-neutral-900">Project Not Found</h2>
        <p className="text-neutral-500 mt-2 mb-8">The project case study you requested could not be retrieved.</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-neutral-950 text-white font-semibold text-xs px-6 py-3 rounded-full shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-white text-neutral-900 text-left">
      <div className="w-full max-w-[1200px] mx-auto space-y-12">
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-neutral-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Dynamic Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block">{project.category}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-none">
            {project.title}
          </h1>
          <p className="text-neutral-500 text-base sm:text-lg max-w-3xl leading-relaxed pt-2">
            {project.shortDescription}
          </p>
        </motion.div>

        {/* Project Meta Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="flex gap-3 items-center bg-neutral-50 p-5 rounded-2xl border border-neutral-100">
            <UserCheck className="w-5 h-5 text-neutral-800 flex-shrink-0" />
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-neutral-400 block uppercase tracking-wider">Role</span>
              <span className="text-sm font-bold text-neutral-800">{project.role}</span>
            </div>
          </div>
          <div className="flex gap-3 items-center bg-neutral-50 p-5 rounded-2xl border border-neutral-100">
            <Clock className="w-5 h-5 text-neutral-800 flex-shrink-0" />
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-neutral-400 block uppercase tracking-wider">Duration</span>
              <span className="text-sm font-bold text-neutral-800">{project.timeline}</span>
            </div>
          </div>
          <div className="flex gap-3 items-center bg-neutral-50 p-5 rounded-2xl border border-neutral-100">
            <Landmark className="w-5 h-5 text-neutral-800 flex-shrink-0" />
            <div className="space-y-0.5 flex flex-wrap gap-1">
              <span className="text-xs font-bold text-neutral-400 block w-full uppercase tracking-wider">Links</span>
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs font-bold text-neutral-900 hover:text-neutral-500 inline-flex items-center gap-0.5"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-neutral-300">|</span>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs font-bold text-neutral-900 hover:text-neutral-500 inline-flex items-center gap-0.5"
              >
                <span>Repo</span>
                <Github className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Large Cover Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-[16/9] rounded-[32px] overflow-hidden bg-neutral-100 shadow-sm border border-neutral-100"
        >
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Project Write-up Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          
          {/* Main Case Study (Left) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Project Overview</h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Challenges */}
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Key Technical Challenges</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-150 text-left">
                    <AlertTriangle className="w-5 h-5 text-neutral-800 flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Results & Core Outcomes</h2>
              <div className="space-y-4">
                {project.outcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-150 text-left">
                    <CheckSquare className="w-5 h-5 text-neutral-800 flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-semibold">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Tech Specs (Right) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-neutral-50 border border-neutral-100 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xs font-bold text-neutral-400 tracking-wider uppercase">System Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-bold px-3.5 py-2 bg-white border border-neutral-200 rounded-full text-neutral-700 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="pt-6 border-t border-neutral-200/60 flex flex-col space-y-4">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group flex items-center justify-between bg-neutral-950 hover:bg-neutral-900 text-white font-semibold text-xs px-6 py-3.5 rounded-full shadow-md transition-all duration-300"
                >
                  <span>Launch Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group flex items-center justify-between bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 font-semibold text-xs px-6 py-3.5 rounded-full transition-all duration-300"
                >
                  <span>Verify Repository</span>
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
