import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Fazle Azim</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="cursor-pointer text-gray-800 hover:text-blue-600 transition">Home</a>
          <a href="#about" className="cursor-pointer text-gray-800 hover:text-blue-600 transition">About</a>
          <a href="#skills" className="cursor-pointer text-gray-800 hover:text-blue-600 transition">Skills</a>
          <a href="#projects" className="cursor-pointer text-gray-800 hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="cursor-pointer text-gray-800 hover:text-blue-600 transition">Contact</a>
        </div>

        {/* Resume Button */}
        <a href="/resume.pdf" download className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none pr-4" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md transition-transform duration-300 ${
          isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 p-6">
          <a href="#home" className="cursor-pointer text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="cursor-pointer text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="cursor-pointer text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="cursor-pointer text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="cursor-pointer text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a>
          
        </div>
        <a href="/resume.pdf" download className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            Resume
          </a>
      </div>
    </nav>
  );
};

export default Navbar;
