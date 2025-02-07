import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Mathematics',
      institution: 'New Model Degree College (NU)',
      year: '2021 - Present',
      cgpa: 'Running CGPA: 3.57',
      description: 'Pursuing a degree in Mathematics, focusing on advanced mathematical theories, statistics, and problem-solving techniques.',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Ideal College, Dhanmondi',
      year: '2017 - 2018',
      gpa: 'GPA: 4.18',
      description: 'Completed high school with a focus on science subjects, particularly mathematics and computer science.',
    },
  ];

  return (
    <section className="w-full py-16 mx-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Educational Qualification</h2>
        <div className="space-y-6">
          {educationData.map((education, index) => (
            <div
              className="p-6 bg-white text-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
              key={index}
            >
              <h3 className="text-2xl font-semibold text-blue-600">{education.degree}</h3>
              <p className="text-lg"><strong className="text-gray-700">Institution:</strong> {education.institution}</p>
              <p className="text-lg"><strong className="text-gray-700">Year:</strong> {education.year}</p>
              {education.cgpa && <p className="text-lg"><strong className="text-gray-700">CGPA:</strong> {education.cgpa}</p>}
              {education.gpa && <p className="text-lg"><strong className="text-gray-700">GPA:</strong> {education.gpa}</p>}
              <p className="text-lg"><strong className="text-gray-700">Description:</strong> {education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
