import { useEffect, useState } from "react";
import myImage from "../assets/sujoy.png";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
      
      {/* ORIGINAL DESKTOP BACKGROUND IMAGE (HIDDEN ON MOBILE) */}
      <div className="absolute inset-0 transition-all duration-1000 ease-out hidden md:block">
        <img
          src={myImage}
          alt="Sujoy"
          className="w-full h-full object-contain object-top mt-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#f5f5f3]/20 via-[#f5f5f3]/0 to-[#f5f5f3] dark:from-zinc-950/20 dark:via-zinc-950/0 dark:to-zinc-950 transition-colors duration-300" />
      </div>

      {/* TABLET & MOBILE VIEW PORTRAIT CARD (HIDDEN ON DESKTOP) */}
      <div className="md:hidden flex flex-col items-center justify-center pt-28 px-6 w-full max-w-sm mx-auto">
        <div className={`relative group w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-900 shadow-xs p-3 transition-all duration-750 ease-out ${
          visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
        }`}>
          <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-zinc-100 dark:bg-zinc-950">
            <img 
              src={myImage} 
              alt="Sujoy" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ORIGINAL RESPONSIVE CONTENT SHELL */}
      <div className="relative z-10 flex min-h-screen md:items-end flex-col justify-end px-14 py-16 max-md:px-6">
        <div className="grid w-full grid-cols-2 items-end gap-20 max-md:grid-cols-1 max-md:gap-10">
          
          {/* Left Block - Headline */}
          <div
            className={`transition-all duration-700 ease-out ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-6 flex items-center gap-2 text-base font-semibold tracking-wide text-zinc-600 dark:text-zinc-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-700 shadow-[0_0_0_3px_rgba(61,186,91,0.2)]" />
              Available for freelance work
            </div>

            <h1 className="max-w-[700px] text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-zinc-950 dark:text-white">
              Building modern digital experiences with strategic design
            </h1>
          </div>

          {/* Right Block - Description & CTA */}
          <div
            className={`ml-auto flex max-w-[420px] flex-col items-start gap-8 transition-all duration-700 delay-150 ease-out mb-20 max-md:ml-0 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-[15px] font-semibold leading-[1.9] text-zinc-700 dark:text-zinc-300">
              Backend developer focused on building scalable APIs,
              authentication systems, database architectures, and
              high-performance server-side applications using Django,
              FastAPI, PostgreSQL, and modern backend technologies.
            </p>

            <Link
              to="/about"
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-zinc-900 dark:bg-white px-8 py-3.5 text-[14px] font-semibold tracking-wide text-white dark:text-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800 dark:hover:bg-zinc-100 hover:shadow-[0_14px_30px_rgba(0,0,0,0.15)]"
            >
              More About Me
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}