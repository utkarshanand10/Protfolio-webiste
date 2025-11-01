import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgb(30,30,29)] backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 pl-4 pr-4 sm:pl-10 sm:pr-10">
          {/* Desktop Menu */}

          <a
            href="#home"
            className="text-white hover:text-blue-600 font-medium transition-colors duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="text-white hover:text-blue-600 font-medium transition-colors duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="text-white hover:text-blue-600 font-medium transition-colors duration-300 relative group"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="text-white hover:text-blue-600 font-medium transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Mobile Menu Button (Hamburger) */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
