import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layers, Code2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

// Map icon strings to actual Lucide Icon Components
const iconMap = {
  Layers: Layers,
  Code2: Code2
};

export default function ServicesSection() {
  const { services } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="services" className="w-full bg-[#f5f5f3] dark:bg-zinc-950 px-14 py-28 max-md:px-6 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Block */}
        <div className="w-full mb-16 flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-6 border-zinc-200/80 dark:border-zinc-900 pb-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-4 py-1.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              {services.heading}
            </div>
            <h2 className="max-w-[700px] text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-zinc-950 dark:text-white max-md:text-4xl">
              High-impact design & engineering custom-built to scale
            </h2>
          </div>

          <Link
            to="/contact"
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-zinc-950 dark:bg-white px-8 py-3.5 text-[14px] font-semibold tracking-wide text-white dark:text-zinc-950 transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-100 hover:-translate-y-0.5"
          >
            Hire Me
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Services Cards Grid (2-Columns for perfect balance) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.items.map((item) => {
            const IconComponent = iconMap[item.icon] || Code2;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white dark:bg-zinc-900/40 border border-zinc-200/40 dark:border-zinc-900 rounded-[32px] p-8 text-left flex flex-col justify-between shadow-xs hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:border-zinc-300 dark:hover:border-zinc-800 hover:-translate-y-2 transition-all duration-500 group h-full"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-950 group-hover:border-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:border-white dark:group-hover:text-zinc-950 transition-all duration-500 shadow-2xs">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Info */}
                  <div className="mt-6 space-y-3">
                    <h4 className="text-2xl font-bold text-zinc-950 dark:text-white group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[14px] leading-relaxed">
                      {item.shortDescription}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  {item.deliverables && (
                    <ul className="space-y-2.5 mt-6 border-t border-zinc-100 dark:border-zinc-800 pt-6">
                      {item.deliverables.map((deliv, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 dark:text-green-500 shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Card CTA Link */}
                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <Link 
                    to="/contact" 
                    className="group inline-flex items-center gap-1.5 text-xs font-bold text-zinc-950 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-350 transition-colors"
                  >
                    <span>Start A Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Global CTA Link */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 bg-zinc-950 dark:bg-white hover:bg-zinc-900 dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-semibold text-xs px-8 py-4 rounded-full shadow-md transition-all hover:scale-[1.02] duration-300"
          >
            <span>Let's Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
