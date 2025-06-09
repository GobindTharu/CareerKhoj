import React from 'react';

const ResumeTemplate5 = ({
  name = "Your Name",
  email = "your.email@example.com",
  phone = "123-456-7890",
  address = "Your Address, City, Country",
  socialLinks = [], // [{ platform: 'LinkedIn', url: 'https://...' }]
  education = [],   // [{ degree: '', institution: '', year: '' }]
  skills = [],      // ['React', 'JavaScript', 'Tailwind']
  experience = []   // [{ position: '', company: '', duration: '', description: '' }]
}) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 font-sans border-t-4 border-blue-600 shadow-md rounded-md">
      
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600">{address}</p>
        {socialLinks.length > 0 && (
          <div className="flex justify-center space-x-4 mt-2 flex-wrap">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 underline">
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-6">

        {/* Education Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-600 pb-1">Education</h2>
          {education.length > 0 ? (
            education.map((edu, idx) => (
              <div key={idx} className="mt-2">
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500 text-sm italic">{edu.year}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 mt-2">Add your education details here.</p>
          )}
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-600 pb-1">Skills</h2>
          {skills.length > 0 ? (
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 mt-2">List your skills here.</p>
          )}
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-600 pb-1">Experience</h2>
          {experience.length > 0 ? (
            experience.map((exp, idx) => (
              <div key={idx} className="mt-2">
                <h3 className="font-semibold">{exp.position}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-gray-500 text-sm italic">{exp.duration}</p>
                <p className="text-gray-600 whitespace-pre-line mt-1">{exp.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 mt-2">Describe your professional experience here.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default ResumeTemplate5;
