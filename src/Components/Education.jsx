import React from 'react';

const Education = () => {
    const educationData = [
        {
          degree: 'Bachelor of Science in Mathematics',
          institution: 'New Model Degree College (NU)',
          year: '2021 - Present',
          description: 'Pursuing a degree in Mathematics, focusing on advanced mathematical theories, statistics, and problem-solving techniques.',
        },
        {
          degree: 'Higher Secondary Certificate (HSC)',
          institution: 'Ideal College , Dhanmondi',
          year: '2017 - 2018',
          description: 'Completed high school with a focus on science subjects, particularly mathematics and computer science.',
        },
      ];
    
    return (
        <div>
            <section className="mx-16  my-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Educational Qualification</h2>
      <div className="border-2 border-green-500 p-6 rounded-lg bg-gray-50">
        {educationData.map((education, index) => (
          <div className={`py-4 ${index !== educationData.length - 1 ? 'border-b border-gray-300' : ''}`} key={index}>
            <h3 className="text-2xl font-semibold text-green-500 mb-2">{education.degree}</h3>
            <p><strong className="text-gray-700">Institution:</strong> {education.institution}</p>
            <p><strong className="text-gray-700">Year:</strong> {education.year}</p>
            <p><strong className="text-gray-700">Description:</strong> {education.description}</p>
          </div>
        ))}
      </div>
    </section>
        </div>
    );
};

export default Education;