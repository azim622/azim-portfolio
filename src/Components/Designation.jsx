import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Designation = () => {
  return (
    <div>
       <section className="flex flex-col md:flex-row items-center justify-between  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              {/* Information Section */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }}
                className="md:w-1/2 text-center md:text-left"
              >
                <h1 className="text-4xl font-bold text-gray-900">Md Fazle Azim</h1>
                <h2 className="text-2xl text-blue-600 mt-2">Frontend & MERN Stack Developer</h2>
                <p className="text-gray-700 my-4">
                  Passionate about building interactive web applications and
                  creating seamless user experiences.
                </p>
                <a href="/resume.pdf" download className="bg-blue-600 text-white px-4 py-2 my-16 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">Resume</a>
                
                {/* Social Links */}
                <div className="flex space-x-4 mt-4">
                  <a href="https://github.com/azim622" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 text-2xl">
                    <FaGithub />
                  </a>
                  {/* <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 text-2xl">
                    <FaLinkedin />
                  </a> */}
                  <a href="https://x.com/home?lang=en" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 text-2xl">
                    <FaTwitter />
                  </a>
                  <a href="https://www.facebook.com/mdfazle.azim.7" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 text-2xl">
                    <FaFacebook />
                  </a>
                </div>
              </motion.div>
              
              {/* Image Section */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8 }}
                className="md:w-1/2 flex justify-center mt-6 md:mt-0"
              >
                <img
                  src='https://i.ibb.co.com/MkWNmwbR/470203565-2390972847913826-3804411578746235717-n.jpg'
                  alt="Md Fazle Azim"
                  className="w-60 h-60 object-cover rounded-full shadow-lg border-4 border-blue-600"
                />
              </motion.div>
            </section>
    </div>
  );
};

export default Designation;
