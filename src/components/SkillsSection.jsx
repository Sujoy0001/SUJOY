import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import 'devicon/devicon.min.css';

const skills = [
  { name: "React.js", iconClass: "devicon-react-original colored" },
  { name: "Django", iconClass: "devicon-django-plain colored" },
  { name: "FastAPI", iconClass: "devicon-fastapi-plain colored" },
  { name: "Python", iconClass: "devicon-python-plain dark:text-white" },
  { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
  { name: "Redis", iconClass: "devicon-redis-plain colored" },
  { name: "Nginx", iconClass: "devicon-nginx-original colored" },
  { name: "Docker", iconClass: "devicon-docker-plain colored" },
  { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored" },
  { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
  { name: "GitHub", iconClass: "devicon-github-original dark:text-white" },
  { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
];

export default function SkillsSection() {
  return (
    <section className="bg-[#f5f5f3] dark:bg-zinc-950 px-14 py-28 max-md:px-6 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-6 border-b border-zinc-200/80 dark:border-zinc-900 pb-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-4 py-1.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Technical Toolbelt
            </div>
            <h2 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-zinc-950 dark:text-white max-md:text-4xl">
              Scalable tools & frameworks engineered for performance
            </h2>
          </div>

          <Link
            to="/skills"
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-zinc-950 dark:bg-white px-8 py-3.5 text-[14px] font-semibold tracking-wide text-white dark:text-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800 dark:hover:bg-zinc-100"
          >
            Explore Skills
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* SKILLS GRID */}
        <div className="px-18 flex flex-wrap gap-8 max-md:px-0 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Icon Container */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                <i className={`${skill.iconClass} text-4xl`} />
              </div>
              
              {/* Skill Name */}
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-300 transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-500">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}