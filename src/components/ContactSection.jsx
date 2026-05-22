import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

export default function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="w-full py-20 lg:py-28 bg-white dark:bg-zinc-950 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#f5f5f3] dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-900 rounded-[48px] p-10 sm:p-16 text-center space-y-8 relative overflow-hidden shadow-2xs"
        >
          {/* Dynamic Background Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 dark:bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-8 flex flex-col items-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-4 py-1.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              {contact.heading}
            </div>

            {/* Title */}
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-zinc-950 dark:text-white">
              Let's create something remarkable
            </h3>

            {/* Description */}
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-medium">
              {contact.description}
            </p>

            {/* Button */}
            <div className="pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-zinc-950 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-bold text-sm sm:text-base px-8 py-4.5 rounded-full shadow-md transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
              >
                <span>{contact.cta.text}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
