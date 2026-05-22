import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Code2, MonitorPlay, Check, Calendar, Landmark } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

const iconMap = {
  Layers: Layers,
  Code2: Code2,
  MonitorPlay: MonitorPlay
};

export default function ServicesPage() {
  const { services } = portfolioData;

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
          <h1 className="text-xs font-bold text-neutral-400 tracking-widest uppercase">Full Catalog</h1>
          <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-none">
            Detailed Service Capabilities
          </h2>
          <p className="text-neutral-500 text-base sm:text-lg leading-relaxed pt-2">
            {services.subheading}
          </p>
        </motion.div>

        {/* Detailed Service Cards */}
        <div className="space-y-16">
          {services.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Code2;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-neutral-50 border border-neutral-100 rounded-[32px] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                {/* Left col: Title and full description */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex p-4 rounded-2xl bg-neutral-900 text-white shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-900">{item.title}</h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{item.longDescription}</p>
                  
                  {/* Financial & Time Estimates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    <div className="flex gap-3 items-start bg-white p-5 rounded-2xl border border-neutral-200/50">
                      <Landmark className="w-5 h-5 text-neutral-800 flex-shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-neutral-400 block uppercase tracking-wider">Investment</span>
                        <span className="text-sm font-bold text-neutral-800">{item.pricing}</span>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start bg-white p-5 rounded-2xl border border-neutral-200/50">
                      <Calendar className="w-5 h-5 text-neutral-800 flex-shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-neutral-400 block uppercase tracking-wider">Timeframe</span>
                        <span className="text-sm font-bold text-neutral-800">{item.timeline}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right col: Specific Deliverables */}
                <div className="lg:col-span-5 bg-white border border-neutral-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-start">
                  <h4 className="text-xs font-bold text-neutral-400 tracking-wider uppercase mb-6">Process Deliverables</h4>
                  <ul className="space-y-4">
                    {item.deliverables.map((del) => (
                      <li key={del} className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-900 text-white flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm sm:text-base font-semibold text-neutral-700">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
