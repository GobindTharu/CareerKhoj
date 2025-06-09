import React from 'react';

const ResumeTemplate3 = ({ 
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
    <div className="max-w-3xl mx-auto bg-white p-8 font-sans rounded-lg shadow-md">
      
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h1>
      <p className="text-gray-500">{email}</p>
      <p className="text-gray-500">{phone}</p>
      <p className="text-gray-500 mb-4">{address}</p>
      {socialLinks.length > 0 && (
        <div className="flex space-x-4 mb-6 flex-wrap">
          {socialLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 underline text-sm"
            >
              {link.platform}
            </a>
          ))}
        </div>
      )}

      {/* Body Sections */}
      <div className="space-y-6">

        {/* Education */}
        <div>
          <h2 className="text-lg font-medium text-gray-700 mb-2">Education</h2>
          {education.length > 0 ? (
            education.map((edu, idx) => (
              <div key={idx} className="mb-3">
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500 text-sm italic">{edu.year}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Add your education details here.</p>
          )}
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-lg font-medium text-gray-700 mb-2">Skills</h2>
          {skills.length > 0 ? (
            <ul className="list-disc list-inside text-gray-600">
              {skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">List your skills here.</p>
          )}
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-lg font-medium text-gray-700 mb-2">Experience</h2>
          {experience.length > 0 ? (
            experience.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-semibold">{exp.position}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-gray-500 text-sm italic">{exp.duration}</p>
                <p className="text-gray-600 whitespace-pre-line mt-1">{exp.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Describe your professional experience here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate3;
