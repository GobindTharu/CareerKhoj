import React from 'react';

const ResumeTemplate5 = ({ name, email, education, skills, experience }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 font-sans border-t-4 border-blue-600">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{name || 'Your Name'}</h1>
        <p className="text-gray-600">{email || 'your.email@example.com'}</p>
      </div>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-600 pb-1">Education</h2>
          <p className="text-gray-600 mt-2">{education || 'Enter your education details'}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-600 pb-1">Skills</h2>
          <p className="text-gray-600 mt-2">{skills || 'List your skills'}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-600 pb-1">Experience</h2>
          <p className="text-gray-600 mt-2">{experience || 'Describe your experience'}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate5;