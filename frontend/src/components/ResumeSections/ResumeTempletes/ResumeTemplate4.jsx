import React from 'react';

const ResumeTemplate4 = ({ name, email, education, skills, experience }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 font-sans border-l-4 border-blue-500">
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h1 className="text-3xl font-bold text-blue-700">{name || 'Your Name'}</h1>
        <p className="text-blue-600">{email || 'your.email@example.com'}</p>
      </div>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-blue-700 bg-blue-50 p-2 rounded">Education</h2>
          <p className="text-gray-600 mt-2">{education || 'Enter your education details'}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-blue-700 bg-blue-50 p-2 rounded">Skills</h2>
          <p className="text-gray-600 mt-2">{skills || 'List your skills'}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-blue-700 bg-blue-50 p-2 rounded">Experience</h2>
          <p className="text-gray-600 mt-2">{experience || 'Describe your experience'}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate4;