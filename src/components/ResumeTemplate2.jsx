import React from 'react';

const ResumeTemplate2 = ({ name, email, education, skills, experience }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 font-sans shadow-lg">
      <div className="bg-blue-600 text-white p-6 mb-6">
        <h1 className="text-3xl font-bold">{name || 'Your Name'}</h1>
        <p className="text-sm">{email || 'your.email@example.com'}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-blue-600 mb-2">Education</h2>
          <p className="text-gray-600">{education || 'Enter your education details'}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-blue-600 mb-2">Skills</h2>
          <p className="text-gray-600">{skills || 'List your skills'}</p>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold text-blue-600 mb-2">Experience</h2>
          <p className="text-gray-600">{experience || 'Describe your experience'}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate2;