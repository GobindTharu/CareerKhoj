import React from 'react';

const ResumeTemplate2 = ({ 
  name = "Your Name", 
  email = "your.email@example.com", 
  phone = "123-456-7890", 
  address = "Your Address, City, Country",
  socialLinks = [], // [{ platform: 'LinkedIn', url: 'https://...' }]
  education = [],   // [{ degree: '', institution: '', year: '' }]
  skills = [],      // ['React', 'Node.js', 'CSS']
  experience = []   // [{ position: '', company: '', duration: '', description: '' }]
}) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 font-sans shadow-lg rounded-lg">
      
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 mb-6 rounded-lg">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-sm">{email}</p>
        <p className="text-sm">{phone}</p>
        <p className="text-sm">{address}</p>
        {socialLinks.length > 0 && (
          <div className="flex space-x-4 mt-2 flex-wrap">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="underline text-sm">
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Education Section */}
        <div>
          <h2 className="text-lg font-semibold text-blue-600 mb-2">Education</h2>
          {education.length > 0 ? (
            education.map((edu, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-bold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500 text-sm italic">{edu.year}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Add your educational background here.</p>
          )}
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-lg font-semibold text-blue-600 mb-2">Skills</h2>
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

        {/* Experience Section - spans 2 columns */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold text-blue-600 mb-2">Experience</h2>
          {experience.length > 0 ? (
            experience.map((exp, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="font-bold">{exp.position}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-gray-500 text-sm italic">{exp.duration}</p>
                <p className="text-gray-600 whitespace-pre-line mt-1">{exp.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Include details about your work experience here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate2;
