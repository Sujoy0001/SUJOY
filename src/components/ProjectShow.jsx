import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioData } from "../constants/portfolioData";

export default function FeaturedWorks() {
  const { bentoCategories } = portfolioData.projects;

  return (
    <section className="bg-[#f5f5f3] dark:bg-zinc-950 px-14 py-28 max-md:px-6 border-b border-zinc-200/50 dark:border-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">

        {/* Header Section */}
        <div className="mb-16 flex items-end justify-between border-b border-zinc-200/80 dark:border-zinc-900 pb-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-4 py-1.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Selected Works
            </div>
            <h2 className="text-5xl font-bold tracking-[-0.05em] text-zinc-950 dark:text-white max-md:text-4xl">
              Featured works & projects
            </h2>
          </div>

          <Link
            to="/projects"
            className="group flex items-center gap-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-6 py-3 text-sm font-semibold text-zinc-900 dark:text-white transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:-translate-y-0.5"
          >
            All Works
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4 sm:px-8">
          {bentoCategories.map((work) => (
            <Link
              key={work.id}
              to={work.link}
              className={`group flex flex-col justify-between bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-900 rounded-[32px] p-6 sm:p-8 overflow-hidden relative shadow-xs hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:hover:border-zinc-800 transition-all duration-500 min-h-[420px] ${work.gridSpan}`}
            >
              {/* Subtle Grid Dotted Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

              {/* Text Context (Top-Aligned) */}
              <div className="relative z-10 flex items-start justify-between w-full">
                <div className="space-y-3.5 text-left">
                  <span className="inline-block rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-3.5 py-1 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    {work.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-500 transition-colors duration-300 leading-tight">
                    {work.title}
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-all duration-500 shrink-0">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Browser Window Mockup (Bottom-Aligned) */}
              <div className="relative z-10 mt-8 w-full aspect-video rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-[0_15px_35px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-500 transform group-hover:translate-y-[-4px] group-hover:shadow-[0_25px_45px_rgba(0,0,0,0.07)]">
                {/* Browser Top Navigation Bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200/60 dark:border-zinc-800/80">
                  <span className="w-2 h-2 rounded-full bg-zinc-300/80 dark:bg-zinc-700" />
                  <span className="w-2 h-2 rounded-full bg-zinc-300/80 dark:bg-zinc-700" />
                  <span className="w-2 h-2 rounded-full bg-zinc-300/80 dark:bg-zinc-700" />
                  {/* Fake Address bar for realism */}
                  <div className="mx-auto w-1/3 h-4 rounded bg-zinc-200/50 dark:bg-zinc-800 flex items-center justify-center">
                    <span className="text-[9px] text-zinc-400 dark:text-zinc-500 font-semibold lowercase tracking-wide">meow.dev/{work.id === 1 ? 'saas' : work.id === 2 ? 'design' : work.id === 3 ? 'oss' : 'hack'}</span>
                  </div>
                </div>
                {/* Image Inside Browser Mockup */}
                <div className="w-full h-full overflow-hidden bg-zinc-50 dark:bg-zinc-900">
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}