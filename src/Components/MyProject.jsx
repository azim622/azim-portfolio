import React from 'react';
import { Link } from 'react-router-dom';

const MyProject = () => {
  const projectsData = [
    {
      id: '1',
      name: 'Project 1: Artifacts Tracker',
      image: 'https://i.ibb.co/5WZnbDtW/Capture.png',
      techStack: ['React', 'Node.js', 'MongoDB'],
      description: 'A web application built using React and Node.js with a MongoDB database.',
    },
    {
      id: '2',
      name: 'Project 2: Fitness Tracker',
      image: 'https://i.ibb.co/nsrQT7vQ/Capture.png',
      techStack: ['React', 'Express', 'Stripe'],
      description: 'An e-commerce site allowing users to browse and purchase products.',
    },
    {
      id: '3',
      name: 'Visa Navigator',
      image: 'https://i.ibb.co/F4sQNSRJ/Capture.png',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS'],
      description: 'A user-friendly portal for checking visa requirements, applying for visas online, and tracking applications in real-time.',
    },
  ];

  return (
    <div>
      <section className="mx-4 md:mx-16 my-12 md:my-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              className="w-11/12 md:max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              key={project.id}
            >
              <img src={project.image} alt={project.name} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4">
                  <Link to={`/projectDetails/${project.id}`}>
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-green-600 transition duration-300">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyProject;
