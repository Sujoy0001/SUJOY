import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

export default function FaqPage() {
  const { faq } = portfolioData;
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-white text-neutral-900 text-left">
      <div className="w-full max-w-[1000px] mx-auto">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4 mb-20"
        >
          <h1 className="text-xs font-bold text-neutral-400 tracking-widest uppercase">Answers</h1>
          <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-none">
            Master FAQ Index
          </h2>
          <p className="text-neutral-500 text-base sm:text-lg leading-relaxed pt-2">
            {faq.subheading}
          </p>
        </motion.div>

        {/* Master FAQ Accordion List */}
        <div className="space-y-6">
          {faq.items.map((item, index) => {
            const isOpen = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-neutral-950/80 bg-neutral-50/50 shadow-sm' 
                    : 'border-neutral-200 hover:border-neutral-900 bg-white'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 sm:p-8 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5.5 h-5.5 flex-shrink-0 transition-colors ${
                      isOpen ? 'text-neutral-900' : 'text-neutral-400'
                    }`} />
                    <span className="text-base sm:text-lg font-bold text-neutral-900">{item.question}</span>
                  </div>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                    isOpen 
                      ? 'border-neutral-900 bg-neutral-900 text-white rotate-180' 
                      : 'border-neutral-200 text-neutral-500 hover:bg-neutral-50'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Content Drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pl-14 sm:pl-16 text-neutral-600 text-sm sm:text-base leading-relaxed border-t border-neutral-100/60 pt-4 text-left">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
