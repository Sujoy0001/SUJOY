import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../constants/portfolioData';

export default function Footer() {
  const { contact } = portfolioData;

  return (
    <footer className="w-full bg-neutral-50 border-t border-neutral-100 py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Logo and Tagline */}
        <div className="md:col-span-5 flex flex-col items-start space-y-4">
          <Link to="/" className="text-xl font-extrabold tracking-tight text-neutral-950">
            carter<span className="text-neutral-400">.</span>
          </Link>
          <p className="text-sm text-neutral-500 max-w-sm text-left">
            Crafting premium interactive digital experiences designed to convert, optimize, and wow.
          </p>
        </div>

        {/* Sitemap / Links */}
        <div className="md:col-span-3 flex flex-col items-start space-y-3">
          <h4 className="text-xs font-bold text-neutral-400 tracking-widest uppercase">Explore</h4>
          <div className="flex flex-col space-y-2 text-left">
            <Link to="/" className="text-sm font-semibold text-neutral-600 hover:text-neutral-950 transition-colors">Home</Link>
            <Link to="/services" className="text-sm font-semibold text-neutral-600 hover:text-neutral-950 transition-colors">Services</Link>
            <Link to="/skills" className="text-sm font-semibold text-neutral-600 hover:text-neutral-950 transition-colors">Skills</Link>
            <Link to="/faq" className="text-sm font-semibold text-neutral-600 hover:text-neutral-950 transition-colors">FAQ</Link>
            <Link to="/contact" className="text-sm font-semibold text-neutral-600 hover:text-neutral-950 transition-colors">Contact</Link>
          </div>
        </div>

        {/* Connect & Contact */}
        <div className="md:col-span-4 flex flex-col items-start space-y-4">
          <h4 className="text-xs font-bold text-neutral-400 tracking-widest uppercase">Connect</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-left">
            {contact.socials.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-semibold text-neutral-600 hover:text-neutral-950 transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
          <div className="text-xs text-neutral-400 text-left">
            Shoot me an email: <a href={`mailto:${contact.cta.email}`} className="text-neutral-600 hover:underline font-semibold">{contact.cta.email}</a>
          </div>
        </div>

      </div>

      <div className="w-full max-w-[1440px] mx-auto mt-12 pt-8 border-t border-neutral-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-400 font-medium">
        <div>
          © {new Date().getFullYear()} Carter. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <span>Built with React, Tailwind CSS v4 & Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
