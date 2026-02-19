import projects from "../data/projectsData.json";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <main className="w-full py-20 px-6 md:px-12 lg:px-20">
      <p className="text-sm uppercase tracking-widest text-gray-500">
        Projects
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-10">
        All Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
