import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="w-10 h-10 border-2 border-blue-600 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src="https://i.ibb.co/0yJ4wXTk/7fe62388-5742-43b6-9041-7171807c5d26.webp"
            alt="Azim Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-800 hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/skill" className="text-gray-800 hover:text-blue-600 transition">
            Skill
          </Link>
          <Link to="/project" className="text-gray-800 hover:text-blue-600 transition">
            Project
          </Link>
          <Link to="/contract" className="text-gray-800 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none pr-2 py-1 px-2 border rounded-md border-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-1/2 transform -translate-x-1/2 w-9/12 bg-white shadow-md rounded-lg transition-transform duration-300 ${
          isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          <Link to="/" className="text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/skill" className="text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Skill
          </Link>
          <Link to="/project" className="text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Project
          </Link>
          <Link to="/contract" className="text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
