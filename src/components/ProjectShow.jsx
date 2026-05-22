import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import saasImg from "../assets/saas.png";
import designImg from "../assets/download.jpg";
import contributeImg from "../assets/download.jpg";
import hackathonImg from "../assets/saas.png";

const works = [
  {
    id: 1,
    title: "SaaS Projects",
    tag: "Full Stack & AI",
    image: saasImg,
    link: "/saas-projects",
  },
  {
    id: 2,
    title: "Design Works",
    tag: "UI / UX",
    image: designImg,
    link: "/design-works",
  },
  {
    id: 3,
    title: "Project Contributions",
    tag: "Open Source",
    image: contributeImg,
    link: "/project-contributions",
  },
  {
    id: 4,
    title: "Hackathon Projects",
    tag: "Competition",
    image: hackathonImg,
    link: "/hackathon-projects",
  },
];

export default function FeaturedWorks() {
  return (
    <section className="bg-[#f5f5f3] px-14 py-24 max-md:px-6">
      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="mb-14 flex items-center justify-between">
          <h2 className="text-5xl font-bold tracking-[-0.05em] text-zinc-950">
            Featured Works
          </h2>

          <Link
            to="/all-works"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            All Works

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 px-8">
          {works.map((work) => (
            <Link
              key={work.id}
              to={work.link}
              className="group relative overflow-hidden rounded-4xl"
            >
              <img
                src={work.image}
                alt={work.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-7 left-7">
                <span className="mb-4 inline-block rounded-full border border-white/30 px-4 py-2 text-sm text-white backdrop-blur-md">
                  {work.tag}
                </span>

                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-semibold text-white">
                    {work.title}
                  </h3>

                  <ArrowUpRight
                    size={24}
                    className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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