import { Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
	  return (
		      <footer className="w-full bg-white border-t mt-20">
		        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
		          
		          {/* Left Section */}
		          <p className="text-sm text-gray-600 text-center md:text-left">
		        © 2026 Michael Boateng Mensah. All rights reserved.
		          </p>

		          {/* Right Section */}
		          <div className="flex items-center gap-5">
		            <a
		              href="https://linkedin.com/in/michael-boateng-mensah"
		              target="_blank"
		              rel="noopener noreferrer"
		              className="text-gray-600 hover:text-black transition"
		              aria-label="LinkedIn"
		            >
		              <Linkedin size={20} />
		            </a>

		            <a
		              href="https://github.com/mikeboat45"
		              target="_blank"
		              rel="noopener noreferrer"
		              className="text-gray-600 hover:text-black transition"
		              aria-label="GitHub"
		            >
		              <Github size={20} />
		            </a>

		            <a
		              href="https://twitter.com/b_mykke"
		              target="_blank"
		              rel="noopener noreferrer"
		              className="text-gray-600 hover:text-black transition"
		              aria-label="Twitter"
		            >
		              <Twitter size={20} />
		            </a>
		          </div>

		        </div>
		      </footer>
		    );
};

export default Footer;
