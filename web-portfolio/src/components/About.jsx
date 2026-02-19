import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/node.svg";
import jsLogo from "../assets/javascript.svg";
import tailwindLogo from "../assets/tailwindcss.svg";
import supabaseLogo from "../assets/supabase.svg";
import githubLogo from "../assets/github.svg";
import gitLogo from "../assets/git.svg";
import figmaLogo from "../assets/figma.svg";
import htmlLogo from "../assets/html5.svg";
import cssLogo from "../assets/css.svg";

const languagesAndFrameworks = [
  { name: "HTML 5", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
];

const tools = [
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "Figma", logo: figmaLogo },
  { name: "Supabase", logo: supabaseLogo },
];

const About = () => {
  return (
    <section id="about" className="w-full py-20 px-6 md:px-12 lg:px-20">
      {/* ABOUT ME */}
      <div className="mb-20 max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          About Me
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
          Building solutions with clean code and clear thinking
        </h2>

        <div className="mt-6 space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed">
          <p>
            I am a fullstack developer focused on building responsive,
            interactive web applications that solve real-world problems. I
            prioritize clean architecture, performance, and intuitive design.
          </p>

          <p>
            My work blends frontend precision with backend reliability, ensuring
            applications are both beautiful and scalable.
          </p>

          <p>
            I continuously refine my skills, experiment with modern
            technologies, and aim to deliver solutions that create real impact.
          </p>
        </div>
      </div>

      {/* SKILLS */}
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Skills
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
          Technologies I work with
        </h2>

        {/* Languages & Frameworks */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-6 text-gray-700">
            Languages & Frameworks
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
            {languagesAndFrameworks.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 group"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-12 group-hover:scale-110 transition"
                />
                <span className="text-sm text-gray-600">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold mb-6 text-gray-700">Tools</h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-2 group"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-12 group-hover:scale-110 transition"
                />
                <span className="text-sm text-gray-600">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
