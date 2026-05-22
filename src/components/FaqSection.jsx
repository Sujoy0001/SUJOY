import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, HelpCircle } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

export default function FaqSection() {
  const { faq } = portfolioData;
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section id="faq" className="w-full py-20 lg:py-28 bg-[#f5f5f3] dark:bg-zinc-950 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 transition-colors duration-300">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Header Block */}
        <div className="max-w-3xl text-center space-y-4 mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-4 py-1.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            {faq.heading}
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            {faq.subheading}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-4xl space-y-4"
        >
          {faq.items.slice(0, 3).map((item) => {
            const isOpen = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-zinc-950/80 dark:border-zinc-700 bg-white dark:bg-zinc-900/60 shadow-sm' 
                    : 'border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-900 dark:hover:border-zinc-700 bg-white/70 dark:bg-zinc-900/20'
                }`}
              >
                {/* FAQ Header (Trigger button) */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${
                      isOpen ? 'text-zinc-950 dark:text-white' : 'text-zinc-400 dark:text-zinc-500'
                    }`} />
                    <span className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white">{item.question}</span>
                  </div>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                    isOpen 
                      ? 'border-zinc-950 bg-zinc-950 dark:border-white dark:bg-white text-white dark:text-zinc-950 rotate-180' 
                      : 'border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* FAQ Body (Content Drawer) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pl-14 text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed border-t border-zinc-200/60 dark:border-zinc-800 pt-4 text-left">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View FAQ Page CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 bg-zinc-950 dark:bg-white hover:bg-zinc-900 dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-semibold text-xs px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-[1.02] duration-300 cursor-pointer"
          >
            <span>Have more questions? Contact Me</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
