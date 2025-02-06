import React from 'react';
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaJava, FaJs } from 'react-icons/fa';
import { FaNodeJs as FaExpress } from 'react-icons/fa'; // Use FaNodeJs for Express, as there's no direct Express icon
import { FaDocker } from 'react-icons/fa'; // Using FaDocker for MongoDB (You can choose another if preferred)
import { IoLogoFirebase } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skill = () => {
  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: <FaReact />, description: 'A JavaScript library for building user interfaces.' },
        { name: 'HTML', level: 100, icon: <FaHtml5 />, description: 'Standard markup language for creating web pages.' },
        { name: 'CSS', level: 85, icon: <FaCss3Alt />, description: 'Style sheet language used for describing the presentation of web pages.' },
        { name: 'Tailwind CSS', level: 85, icon: <RiTailwindCssFill />, description: 'Utility-first CSS framework for rapidly building custom designs.' },
        { name: 'JavaScript', level: 90, icon: <FaJs />, description: 'A programming language for creating interactive effects within web browsers.' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, icon: <FaNode />, description: 'A JavaScript runtime environment for building scalable applications.' },
        { name: 'Express', level: 85, icon: <SiExpress />, description: 'Web framework for Node.js to build scalable APIs and applications.' },
        { name: 'MongoDB', level: 80, icon: <SiMongodb />, description: 'A NoSQL database used for scalable data storage.' },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'GitHub', level: 95, icon: <FaGithub />, description: 'A platform for hosting and collaborating on code projects.' },
        { name: 'VS Code', level: 90, icon: <VscVscode />, description: 'A source code editor with great features for development.' },
      ],
    },
  ];

  return (
    <div>
      <section className="skills-section py-16 px-16 bg-base-100">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Skills</h2>

        {/* Frontend Skills in Same Row */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Frontend</h3>
          <div className="grid grid-cols-4 gap-8">
            {skillsData[0].skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl text-teal-500 mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h4>
                <p className="text-gray-600 mb-4">{skill.description}</p>

                {/* Progress Bar with Percentage Display */}
                <div className="relative mb-4">
                  <div className="w-full bg-gray-300 h-2 rounded-full">
                    <div
                      className="bg-teal-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white font-semibold">
                    {skill.level}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Backend</h3>
          <div className="grid grid-cols-4 gap-8">
            {skillsData[1].skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl text-teal-500 mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h4>
                <p className="text-gray-600 mb-4">{skill.description}</p>

                {/* Progress Bar with Percentage Display */}
                <div className="relative mb-4">
                  <div className="w-full bg-gray-300 h-2 rounded-full">
                    <div
                      className="bg-teal-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white font-semibold">
                    {skill.level}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 ">Tools</h3>
          <div className="grid grid-cols-4 gap-8">
            {skillsData[2].skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl text-teal-500 mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h4>
                <p className="text-gray-600 mb-4">{skill.description}</p>

                {/* Progress Bar with Percentage Display */}
                <div className="relative mb-4">
                  <div className="w-full bg-gray-300 h-2 rounded-full">
                    <div
                      className="bg-teal-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="absolute top-0 p-4 left-1/2 transform -translate-x-1/2 text-white font-semibold">
                    {skill.level}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
