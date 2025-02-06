import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold">Md Fazle Azim</h3>
            <p className="text-gray-400 text-sm mt-2">
              Frontend & MERN Stack Developer
            </p>
          </div>

          <div className="flex space-x-6">
            {/* Social Media Icons */}
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-xl hover:text-teal-400 transition duration-300"></i>
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-xl hover:text-teal-400 transition duration-300"></i>
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-xl hover:text-teal-400 transition duration-300"></i>
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-xl hover:text-teal-400 transition duration-300"></i>
            </a>
            <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-xl hover:text-teal-400 transition duration-300"></i>
            </a>
            <a href="https://www.youtube.com/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube text-xl hover:text-teal-400 transition duration-300"></i>
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400">
          <p className="text-sm">
            © {new Date().getFullYear()} Md Fazle Azim. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;