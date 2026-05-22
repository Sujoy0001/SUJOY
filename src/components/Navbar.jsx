import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Download, ArrowUpRight, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

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

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <>
      {/* Outer Floating Bar (No Border, Transparent, pointer-events-none) */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl flex items-center justify-between pointer-events-none transition-all duration-500 ease-out ${
        scrolled ? 'top-4' : 'top-6'
      }`}>
        
        {/* LEFT SITE: Logo & Download CV (Has its own rounded border & background) */}
        <div className={`flex items-center gap-5 rounded-full border-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md py-1 pl-5 pr-1 pointer-events-auto transition-all duration-300 ${
          scrolled 
            ? 'border-zinc-300 dark:border-zinc-800 shadow-[0_12px_30px_rgba(0,0,0,0.08)]' 
            : 'border-zinc-200/80 dark:border-zinc-800/80 shadow-[0_8px_20px_rgba(0,0,0,0.02)]'
        }`}>
          <Link to="/" className="text-xl font-black tracking-tight text-zinc-950 dark:text-white hover:opacity-85 transition-opacity">
            meow<span className="text-green-500">.</span>
          </Link>

          {/* Download Button (Icon + Text, Black BG) */}
          <a 
            href="/resume.pdf" 
            download="Sujoy_Resume.pdf"
            className="flex items-center gap-2 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-4 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-300 group"
            title="Download Resume"
          >
            <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" />
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>

        {/* RIGHT SITE: Nav Links & Theme Toggle & Contact Button */}
        <div className={`hidden md:flex items-center gap-4 rounded-full border-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md py-1 pl-2 pr-1 pointer-events-auto transition-all duration-300 ${
          scrolled 
            ? 'border-zinc-300 dark:border-zinc-800 shadow-[0_12px_30px_rgba(0,0,0,0.08)]' 
            : 'border-zinc-200/80 dark:border-zinc-800/80 shadow-[0_8px_20px_rgba(0,0,0,0.02)]'
        }`}>
          {/* Main Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => 
                  `px-4 py-3 text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white' 
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Theme Toggle Button (Light/Dark) */}
          <button 
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700/80 transition-all cursor-pointer shadow-2xs"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Contact Button (Black BG, with Icon) */}
          <NavLink 
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-full bg-zinc-950 dark:bg-white px-5 py-3 text-xs font-black uppercase tracking-widest text-white dark:text-zinc-950 shadow-xs hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-300 group ${
                isActive ? 'ring-2 ring-zinc-950 dark:ring-white ring-offset-2 dark:ring-offset-zinc-900' : ''
              }`
            }
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </NavLink>
        </div>

        {/* MOBILE ACTIONS MENU */}
        <div className="md:hidden flex items-center gap-2 pointer-events-auto">
          {/* Mobile Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-200 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>
          
          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm text-zinc-950 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors z-50 animate-fade-in cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </nav>

      {/* Mobile Drawer (Matches width, rounded container) */}
      {isOpen && (
        <div className="md:hidden fixed left-1/2 -translate-x-1/2 w-[90%] top-[85px] bg-white dark:bg-zinc-900 border-2 border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-lg rounded-[32px] shadow-2xl p-4 flex flex-col space-y-2.5 z-40 transition-all duration-300 pointer-events-auto">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-sm font-black tracking-widest uppercase py-3.5 px-6 rounded-2xl transition-all duration-300 text-center ${
                  isActive 
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white font-bold' 
                    : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          {/* Mobile Contact Link */}
          <NavLink 
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 rounded-2xl bg-zinc-950 dark:bg-white py-3.5 px-6 text-sm font-black uppercase tracking-widest text-white dark:text-zinc-950 shadow-xs hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-300"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-4 h-4" />
          </NavLink>
        </div>
      )}
    </>
  );
}
