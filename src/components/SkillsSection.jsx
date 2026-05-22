import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import 'devicon/devicon.min.css';

const skills = [
  { name: "React", iconClass: "devicon-react-original colored" },
  { name: "Django", iconClass: "devicon-django-plain colored" },
  { name: "FastAPI", iconClass: "devicon-fastapi-plain colored" },
  { name: "Python", iconClass: "devicon-python-plain colored" },
  { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
  { name: "Docker", iconClass: "devicon-docker-plain colored" },
  { name: "Tailwind", iconClass: "devicon-tailwindcss-original colored" },
  { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
];

export default function SkillsSection() {
  return (
    <section className="bg-[#f5f5f3] px-14 py-24 max-md:px-6">
      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="mb-14 flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-6">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Skills & Technologies
            </p>

            <h2 className="max-w-[700px] text-5xl font-bold leading-[1] tracking-[-0.05em] text-zinc-950 max-md:text-4xl">
              Modern technologies I use to build scalable products
            </h2>
          </div>

          <Link
            to="/skills"
            className="group flex items-center gap-2 rounded-full bg-zinc-950 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 hover:shadow-[0_14px_30px_rgba(0,0,0,0.15)]"
          >
            Explore Skills

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group rounded-[28px] border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-zinc-100">
                  {/* CHANGED: Swapped <img /> out for the devicon <i> tag */}
                  <i
                    className={`${skill.iconClass} text-5xl transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>

                <h3 className="text-lg font-semibold text-zinc-900">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}