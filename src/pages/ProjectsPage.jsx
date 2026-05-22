import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Layers, 
  Paintbrush, 
  GitBranch, 
  Trophy,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

const categories = [
  { id: 'saas', name: 'SaaS Projects', icon: Layers, desc: 'High-performance cloud software, optimized databases, and backend services.' },
  { id: 'design', name: 'Design Works', icon: Paintbrush, desc: 'Premium editorial user interfaces, responsive layouts, and Figma wireframes.' },
  { id: 'contributions', name: 'Contributions', icon: GitBranch, desc: 'Open-source system integrations, rate limiters, and code contributions.' },
  { id: 'hackathon', name: 'Hackathons', icon: Trophy, desc: 'Award-winning rapid prototypes, local AI engines, and competitive builds.' }
];

export default function ProjectsPage() {
  const { category: routeCategory } = useParams();
  const navigate = useNavigate();
  
  // Default to 'saas' if no route category specified or invalid category
  const initialCategory = categories.some(cat => cat.id === routeCategory) ? routeCategory : 'saas';
  const [activeTab, setActiveTab] = useState(initialCategory);
  
  const { projects } = portfolioData;

  useEffect(() => {
    if (routeCategory && categories.some(cat => cat.id === routeCategory)) {
      setActiveTab(routeCategory);
    } else {
      setActiveTab('saas');
    }
  }, [routeCategory]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    navigate(`/projects/${tabId}`);
  };

  // Filter items based on active category
  const filteredItems = projects.items.filter(item => item.category === activeTab);

  return (
    <div className="w-full pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-[#f5f5f3] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen text-left transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        
        {/* Title Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-4 py-1.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Portfolio Hub
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight leading-none">
            Selected Works
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg leading-relaxed pt-2">
            Explore my engineering blueprints, user interfaces, open-source modules, and standard SaaS architectures.
          </p>
        </motion.div>

        {/* Tab Controls Bar */}
        <div className="w-full border-zinc-200 dark:border-zinc-800 pb-2 flex flex-wrap gap-2 sm:gap-4 overflow-x-auto scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                className={`relative flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                  isActive 
                    ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-md' 
                    : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-zinc-900/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-900 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 flex items-start sm:items-center gap-3">
          <Sparkles className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5 sm:mt-0" />
          <span>{categories.find(c => c.id === activeTab)?.desc}</span>
        </div>

        {/* Dynamic Project Grid Container */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredItems.map((item, index) => {
                const isSaaS = activeTab === 'saas';
                const hasLive = !!item.liveLink;
                
                return (
                  <div
                    key={item.id}
                    className="group bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-900 rounded-[32px] overflow-hidden p-6 flex flex-col justify-between shadow-2xs hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:border-zinc-300 dark:hover:border-zinc-800 hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="space-y-6">
                      
                      {/* Project Thumbnail Image */}
                      <div className="w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-150/40 dark:border-zinc-800 relative">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
                        />
                      </div>

                      {/* Content block */}
                      <div className="space-y-3">
                        {isSaaS && item.techStack && (
                          <div className="flex flex-wrap gap-1.5">
                            {item.techStack.slice(0, 3).map((tech) => (
                              <span 
                                key={tech} 
                                className="text-[10px] font-bold px-2.5 py-0.5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700 rounded-full text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <h3 className="text-xl sm:text-2xl font-black text-zinc-955 dark:text-white leading-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                          {item.shortDescription}
                        </p>
                      </div>

                    </div>

                    {/* Bottom Action Section (Changes behavior dynamically based on rules!) */}
                    <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                      {isSaaS ? (
                        /* SaaS Category: Navigates to details page */
                        <>
                          <div className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                            Role: {item.role}
                          </div>
                          <Link 
                            to={`/project/${item.id}`}
                            className="group/btn inline-flex items-center gap-1.5 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 font-bold text-xs px-5 py-3 rounded-full shadow-2xs hover:scale-[1.02] transition-all duration-300"
                          >
                            <span>View Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                          </Link>
                        </>
                      ) : (
                        /* Other Categories: Show direct live links, and show NO buttons/links if live link is absent! */
                        <>
                          <div className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                            Category: {catIdToName(item.category)}
                          </div>
                          {hasLive ? (
                            <a 
                              href={item.liveLink}
                              target="_blank"
                              rel="noreferrer"
                              className="group/btn inline-flex items-center gap-1.5 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 font-bold text-xs px-5 py-3 rounded-full shadow-2xs hover:scale-[1.02] transition-all duration-300"
                            >
                              <span>Launch Project</span>
                              <ExternalLink className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </a>
                          ) : (
                            /* No live link: show nothing (empty fragment/blank space) */
                            <span className="text-[10px] font-semibold text-zinc-350 dark:text-zinc-650 italic">Project Archive Only</span>
                          )}
                        </>
                      )}
                    </div>

                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

// Map category string to human readable name
function catIdToName(catId) {
  switch (catId) {
    case 'design': return 'Design Work';
    case 'contributions': return 'Open Source';
    case 'hackathon': return 'Hackathon Build';
    default: return 'Project';
  }
}
