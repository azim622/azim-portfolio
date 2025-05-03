import React from 'react';
import { FaReact, FaNode, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaJava } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNextdotjs } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { VscVscode } from 'react-icons/vsc';

const Skill = () => {
  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 80, icon: <FaReact />, description: 'A JavaScript library for building user interfaces.' },
        { name: 'Next.js', level: 75, icon: <SiNextdotjs />, description: 'A React framework for building full-stack web applications.' },
        { name: 'HTML', level: 90, icon: <FaHtml5 />, description: 'Standard markup language for creating web pages.' },
        { name: 'CSS', level: 75, icon: <FaCss3Alt />, description: 'Style sheet language used for describing the presentation of web pages.' },
        { name: 'Tailwind CSS', level: 85, icon: <RiTailwindCssFill />, description: 'Utility-first CSS framework for rapidly building custom designs.' },
        { name: 'JavaScript', level: 70, icon: <FaJs />, description: 'A programming language for creating interactive effects within web browsers.' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 70, icon: <FaNode />, description: 'A JavaScript runtime environment for building scalable applications.' },
        { name: 'Express', level: 70, icon: <SiExpress />, description: 'Web framework for Node.js to build scalable APIs and applications.' },
        { name: 'MongoDB', level: 75, icon: <SiMongodb />, description: 'A NoSQL database used for scalable data storage.' },
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
    <section className="py-12 px-6 md:px-12 lg:px-20 bg-base-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Skills</h2>
      {skillsData.map((category) => (
        <div key={category.category} className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">{category.category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition duration-300"
              >
                <div className="text-5xl text-blue-600 mb-4 flex justify-center">{skill.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 text-center mb-2">{skill.name}</h4>
                <p className="text-gray-500 text-sm text-center mb-4">{skill.description}</p>

                {/* Progress Bar with Percentage */}
                <div className="mb-2">
                  <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div
                      className="h-3 rounded-full bg-blue-500 transition-all duration-700 ease-in-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skill;
