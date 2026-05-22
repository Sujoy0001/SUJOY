import { Link } from 'react-router-dom';
import { portfolioData } from '../constants/portfolioData';

export default function Footer() {
  const { contact } = portfolioData;

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white px-6 md:px-12 lg:px-16 xl:px-24 pt-16 pb-12 font-sans transition-colors duration-300 border-t border-zinc-200/60 dark:border-zinc-900 selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Row 1: Grid with Thin Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-t border-b border-zinc-200 dark:border-zinc-800">
          
          {/* Column 1: Info and Copyright */}
          <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between min-h-[220px] border-b border-zinc-200 dark:border-zinc-800 md:border-b-0 md:border-r">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md text-left leading-relaxed font-normal">
              Specialized in engineering high-performance SaaS architectures, secure API gateways, optimized databases, and custom responsive web applications with strategic visual excellence.
            </p>
            <div className="text-xs text-zinc-500 dark:text-zinc-500 text-left pt-6">
              © meow {new Date().getFullYear()}
            </div>
          </div>

          {/* Column 2: Explore (Right-aligned list, Left-aligned header) */}
          <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between min-h-[220px] border-b border-zinc-200 dark:border-zinc-800 md:border-b-0 md:border-r">
            <span className="text-xs text-zinc-400 dark:text-zinc-550 text-left lowercase tracking-wider font-semibold">
              explore
            </span>
            <div className="flex flex-col items-end text-right space-y-2 mt-6">
              <Link to="/" className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors lowercase">home</Link>
              <Link to="/skills" className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors lowercase">skills</Link>
              <Link to="/projects" className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors lowercase">projects</Link>
              <Link to="/contact" className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors lowercase">contact</Link>
            </div>
          </div>

          {/* Column 3: Follow (Right-aligned list, Left-aligned header) */}
          <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between min-h-[220px]">
            <span className="text-xs text-zinc-400 dark:text-zinc-550 text-left lowercase tracking-wider font-semibold">
              follow
            </span>
            <div className="flex flex-col items-end text-right space-y-2 mt-6">
              {contact.socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors lowercase"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Row 2: Giant Text Banner (High impact agency tagline) */}
        <div className="py-20 md:py-28 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-950 dark:text-white leading-none uppercase max-w-5xl select-none">
            creative and reliable full saas & web development
          </h2>
        </div>

        {/* Bottom Row: Logo & Contact info */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-row justify-between items-center gap-4">
          <Link to="/" className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white hover:opacity-85 transition-opacity">
            meow<span className="text-green-500">.</span>
          </Link>
          
          <div className="flex flex-col items-end text-right">
            <span className="text-[10px] text-zinc-450 dark:text-zinc-550 lowercase tracking-wider font-semibold">
              contact me
            </span>
            <a 
              href={`mailto:${contact.cta.email}`} 
              className="text-sm md:text-base font-bold text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white transition-colors"
            >
              {contact.cta.email}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
