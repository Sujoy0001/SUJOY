import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

export default function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="w-full py-24 lg:py-32 bg-neutral-950 text-white relative overflow-hidden px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      
      {/* Dynamic Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-800 rounded-full blur-[160px] pointer-events-none opacity-40" />

      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-center space-y-8 flex flex-col items-center"
        >
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-neutral-500 tracking-widest uppercase">{contact.heading}</h2>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
              Let's create something remarkable
            </h3>
          </div>

          {/* Description copy */}
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-light">
            {contact.description}
          </p>

          {/* Primary CTA Button that routes to /contact */}
          <div className="pt-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3.5 bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-[0_15px_40px_rgba(255,255,255,0.08)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.12)] transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span>{contact.cta.text}</span>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-900 text-white group-hover:bg-neutral-950 transition-colors duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
