import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          Boateng<span className="text-gray-500">.dev</span>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-gray-600 transition">
            About
          </a>
          <a href="#projects" className="hover:text-gray-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-600 transition">
            Contact
          </a>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Hire Me
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white shadow-md">
          <a
            href="#about"
            className="block hover:text-gray-600 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block hover:text-gray-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block hover:text-gray-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <button
            className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
