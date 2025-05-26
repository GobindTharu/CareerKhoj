import React from 'react';

const ResumeTemplate3 = ({ name, email, education, skills, experience }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 font-sans">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">{name || 'Your Name'}</h1>
      <p className="text-gray-500 mb-6">{email || 'your.email@example.com'}</p>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-medium text-gray-700">Education</h2>
          <p className="text-gray-600">{education || 'Enter your education details'}</p>
        </div>
        <div>
          <h2 className="text-lg font-medium text-gray-700">Skills</h2>
          <p className="text-gray-600">{skills || 'List your skills'}</p>
        </div>
        <div>
          <h2 className="text-lg font-medium text-gray-700">Experience</h2>
          <p className="text-gray-600">{experience || 'Describe your experience'}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate3;