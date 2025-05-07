import React from 'react';

const Collaboration = () => {
  return (
    <section id="collaboration" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">🤝 Collaboration Project</h2>

        <div className="bg-white rounded-2xl shadow-md p-6 md:flex md:gap-8 items-center">
          <img
            src="https://i.ibb.co.com/GvvghvVY/Capture-PNG-879.png"
            alt="Agrospare Project"
            className="w-full md:w-1/2 rounded-xl shadow"
          />
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Agrospare – Smart Farming Platform</h3>
            <p className="text-gray-600 mb-4">
              Agrospare is a collaborative agri-tech platform where farmers can sell waste products, manage to-do tasks,
              connect with the community, and get weather updates. I contributed as a frontend developer, working on UI
              components, protected routes, and dashboard features.
            </p>
            <div className="flex flex-wrap gap-3 text-sm mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">React</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Tailwind</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">MongoDB</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Firebase</span>
            </div>
            <a
              href="https://agrosphere-4564a.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-xl transition"
            >
              🔗 View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
