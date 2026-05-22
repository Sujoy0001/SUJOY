import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { hero } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Skills', path: '/skills' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-neutral-100 shadow-sm py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="text-xl font-extrabold tracking-tight text-neutral-950 hover:opacity-85 transition-opacity">
          carter<span className="text-neutral-400">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-semibold transition-colors duration-300 relative group py-1 ${
                  isActive ? 'text-neutral-950' : 'text-neutral-500 hover:text-neutral-950'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-neutral-950 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="text-xs font-bold tracking-wider uppercase text-neutral-900 border-b-2 border-neutral-900 hover:text-neutral-500 hover:border-neutral-400 transition-all duration-300 pb-0.5"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-900 p-1 hover:bg-neutral-100 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white border-b border-neutral-100 shadow-lg px-6 py-8 flex flex-col space-y-6 z-40 transition-all duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-neutral-800 hover:text-neutral-950 py-1 border-b border-neutral-50"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="group flex items-center justify-between bg-neutral-950 text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-md"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-white transition-colors" />
          </Link>
        </div>
      )}
    </nav>
  );
}
