const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      {/* Project Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-gray-600 text-sm">{project.description}</p>

        {/* Technologies */}
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-semibold text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
