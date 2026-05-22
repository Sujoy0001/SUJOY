import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layers, Code2, MonitorPlay, ArrowRight } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

// Map icon strings to actual Lucide Icon Components
const iconMap = {
  Layers: Layers,
  Code2: Code2,
  MonitorPlay: MonitorPlay
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
    <section id="services" className="w-full py-20 lg:py-28 bg-neutral-50 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Header Block */}
        <div className="max-w-3xl text-center space-y-4 mb-16">
          <h2 className="text-xs font-bold text-neutral-400 tracking-widest uppercase">{services.heading}</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            What type of freelancing I do
          </h3>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            {services.subheading}
          </p>
        </div>

        {/* Services Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.items.map((item) => {
            const IconComponent = iconMap[item.icon] || Code2;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white border border-neutral-100 rounded-3xl p-8 text-left flex flex-col justify-between shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-neutral-200/60 transition-all duration-500 group"
              >
                <div className="space-y-6">
                  {/* Icon Frame */}
                  <div className="inline-flex p-4 rounded-2xl bg-neutral-50 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-500">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Info */}
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-neutral-900 group-hover:text-neutral-950">{item.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.shortDescription}</p>
                  </div>
                </div>

                {/* Sub info & CTA link */}
                <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-400">{item.pricing}</span>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-neutral-500 transition-colors"
                  >
                    <span>Details</span>
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
            to="/services"
            className="inline-flex items-center gap-2.5 bg-neutral-950 hover:bg-neutral-900 text-white font-semibold text-xs px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-[1.02] duration-300"
          >
            <span>View Pricing & Process Deliverables</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
