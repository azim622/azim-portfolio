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
    <section className="w-full py-12 px-4 md:px-8 lg:px-16 bg-base-100 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-2 border-gray-300 pb-4 dark:border-gray-600">
          Educational Qualification
        </h2>

        <div className="flex flex-col gap-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Institution:</strong> {edu.institution}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Year:</strong> {edu.year}</p>
              {edu.cgpa && (
                <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>CGPA:</strong> {edu.cgpa}</p>
              )}
              {edu.gpa && (
                <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>GPA:</strong> {edu.gpa}</p>
              )}
              <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> {edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
