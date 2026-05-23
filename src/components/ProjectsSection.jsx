import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderGit } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

export default function ProjectsSection() {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 18 }
    }
  };

  return (
    <section id="projects" className="w-full py-20 lg:py-28 bg-neutral-50 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Block */}
        <div className="max-w-3xl text-center space-y-4 mb-16">
          <h2 className="text-xs font-bold text-neutral-400 tracking-widest uppercase">{projects.heading}</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Latest 2 Projects
          </h3>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            {projects.subheading}
          </p>
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12"
        >
          {projects.items.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white border border-neutral-100 rounded-[32px] p-6 sm:p-8 text-left flex flex-col justify-between shadow-sm hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] hover:border-neutral-200/50 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="space-y-6">
                
                {/* Visual Image Container */}
                <div className="w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-neutral-100 relative">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"
                  />
                  {/* Glass Tag Overlay */}
                  <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-[11px] font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                    <FolderGit className="w-3.5 h-3.5" />
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-3.5">
                  <h4 className="text-xl sm:text-2xl font-black text-neutral-900 group-hover:text-neutral-950">
                    {project.title}
                  </h4>
                  <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-semibold px-3.5 py-1.5 bg-neutral-50 border border-neutral-200/40 rounded-full text-neutral-600 transition-colors group-hover:bg-neutral-100 group-hover:text-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Case Study Navigation Button */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex justify-end">
                <Link 
                  to={`/project/${project.id}`} 
                  className="group inline-flex items-center gap-2.5 bg-neutral-950 hover:bg-neutral-900 text-white font-semibold text-xs px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-800"
                >
                  <span>View Full Case Study</span>
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-800 text-neutral-300 group-hover:bg-neutral-100 group-hover:text-neutral-900 transition-colors duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
