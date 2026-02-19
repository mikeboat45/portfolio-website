import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-black">Michael Boateng</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-600 font-medium">
            Fullstack Developer
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-gray-600 text-base sm:text-lg leading-relaxed">
            I build responsive, interactive web applications with clean code and
            intuitive user experiences. Passionate about turning ideas into
            pixel-perfect reality.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#featured-projects"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            View Projects
            <ArrowDown size={18} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-black hover:bg-black hover:text-white transition"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex items-center gap-6">
          <a
            href="https://github.com/mikeboat45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>

          <a
            href="https://linkedin.com/in/michael-boateng-mensah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="mailto:boatengmensahmichael@gmail.com"
            className="text-gray-600 hover:text-black transition"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
