// src/components/ProjectSection.jsx
import ProjectShowBox from "./ui/ProjectShowBox";
import { projectsData } from "../constants/projectsData";

const ProjectSection = () => {
  return (
    <section className="py-16 px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-semibold">Featured works</h2>

        <button className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
          All Works →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <ProjectShowBox
            key={project.id}
            image={project.image}
            title={project.title}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;