// src/components/ProjectShowBox.jsx

const ProjectShowBox = ({ image, title, tags = [] }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl group cursor-pointer">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300" />

      {/* Content */}
      <div className="absolute bottom-5 left-5 text-white z-10">
        <h3 className="text-xl font-semibold">{title}</h3>

        <div className="flex gap-2 mt-2 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowBox;