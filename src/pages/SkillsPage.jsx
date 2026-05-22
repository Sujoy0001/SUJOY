import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Settings, Zap } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

const iconMap = [
  ShieldCheck,
  Compass,
  Settings,
  Zap
];

export default function SkillsPage() {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 18 }
    }
  };

  return (
    <div className="w-full pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-white text-neutral-900 text-left">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4 mb-20"
        >
          <h1 className="text-xs font-bold text-neutral-400 tracking-widest uppercase">Expertise</h1>
          <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-none">
            Technical Proficiency Matrix
          </h2>
          <p className="text-neutral-500 text-base sm:text-lg leading-relaxed pt-2">
            {skills.subheading}
          </p>
        </motion.div>

        {/* Detailed Grid Map of Categories */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.categories.map((category, index) => {
            const CategoryIcon = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="bg-neutral-50 border border-neutral-100 rounded-[32px] p-8 space-y-8 flex flex-col justify-start shadow-sm hover:border-neutral-200/40 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-neutral-950 text-white shadow-sm">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900">{category.name}</h3>
                </div>

                {/* Progress bars list */}
                <div className="space-y-6 flex-grow">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-semibold text-neutral-800">
                        <span>{skill.name}</span>
                        <span className="text-xs text-neutral-400 font-bold">{skill.level}%</span>
                      </div>
                      
                      {/* Bar Container */}
                      <div className="w-full h-2.5 bg-neutral-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-neutral-950 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
