import React from 'react';
import { useParams } from 'react-router-dom';

const ViewMore = () => {
  const { id } = useParams();

  const projectsData = [
    {
      id: '1',
      name: 'Artifacts Tracker',
      image: 'https://i.ibb.co/5WZnbDtW/Capture.png',
      "techStack": ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind CSS"],
      description: 'A web application built using React and Node.js with a MongoDB database.',
      liveLink: 'https://histrorical-artifacts-tracker.web.app',
      githubLink: 'https://github.com/azim622/artifacts-tracker-client',
      challenges: 'Integrating front-end and back-end seamlessly.',
      futurePlans: 'Add more features like authentication and user profiles.',
    },
    {
      id: '2',
      name: 'Fitness Tracker',
      image: 'https://i.ibb.co.com/nsrQT7vQ/Capture.png',
      "techStack": ["React", "Node.js", "Express","stripe", "MongoDB", "Firebase", "Tailwind CSS"],
      description: 'An e-commerce site allowing users to browse and purchase products.',
      liveLink: 'https://fitness-tracker-site-b8b97.web.app/',
      githubLink: 'https://github.com/azim622/fitness-tracker',
      challenges: 'Implementing secure payment gateway integration.',
      futurePlans: 'Improve UI/UX design and add an admin panel.',
    },
    {
        "id": "3",
        "name": "Visa Navigator",
        "image": "https://i.ibb.co.com/F4sQNSRJ/Capture.png",
        "techStack": ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind CSS"],
        "description": "A user-friendly portal for checking visa requirements, applying for visas online, and tracking applications in real-time.",
        "liveLink": "https://visa-navigate-project.web.app/",
        "githubLink": "https://github.com/azim622/visa-navigate-client",
        "challenges": "Implementing dynamic filtering for visa types, integrating authentication, and ensuring smooth CRUD operations.",
        "futurePlans": "Enhance the UI, add multi-language support, integrate third-party visa APIs, and implement advanced tracking features."
      }
      
  ];

  const project = projectsData.find((p) => p.id === id);
  if (!project) return <div className="text-center text-red-500 font-bold text-xl">Project not found</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-8">
      <div className="max-w-3xl bg-white shadow-2xl rounded-lg overflow-hidden p-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">{project.name}</h2>
        <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Tech Stack:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">{tech}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Description:</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Challenges Faced:</h3>
            <p className="text-gray-700">{project.challenges}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Future Plans:</h3>
            <p className="text-gray-700">{project.futurePlans}</p>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg shadow-lg font-semibold hover:opacity-90 transition"
          >
            Live Project
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-2 rounded-lg shadow-lg font-semibold hover:opacity-90 transition"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ViewMore;
