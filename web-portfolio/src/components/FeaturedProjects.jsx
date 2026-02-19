import projects from "../data/projectsData.json";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="featured-projects"
      className="w-full py-20 px-6 md:px-12 lg:px-20"
    >
      <p className="text-sm uppercase tracking-widest text-gray-500">
        Projects
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 ">
        Featured Work
      </h2>
      <p className="text-gray-600 mt-2 leading-relaxed mb-10">
        A selection of projects that showcase my skills and passion
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-6">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          All Projects
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjects;
