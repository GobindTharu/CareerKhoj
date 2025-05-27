import React from 'react';

const ResumeTemplate1 = ({ name, email, education, skills, experience }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-lg font-sans text-gray-800">
      {/* Header */}
      <header className="border-b-4 border-blue-600 pb-4 mb-8">
        <h1 className="text-4xl font-extrabold tracking-wide">{name || 'Your Name'}</h1>
        <p className="mt-1 text-lg text-gray-600 italic">{email || 'your.email@example.com'}</p>
      </header>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-200 pb-2 mb-3">
          Education
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {education || 'Enter your education details here, including degree, institution, and years attended.'}
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-200 pb-2 mb-3">
          Skills
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          {(skills && skills.split(',').map((skill, i) => (
            <li key={i} className="capitalize">{skill.trim()}</li>
          ))) || <li>List your skills separated by commas</li>}
        </ul>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-200 pb-2 mb-3">
          Experience
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {experience || 'Describe your work experience including roles, responsibilities, and achievements.'}
        </p>
      </section>
    </div>
  );
};

export default ResumeTemplate1;
