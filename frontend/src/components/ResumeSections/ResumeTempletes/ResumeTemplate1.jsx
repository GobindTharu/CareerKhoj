import React from 'react';

const ResumeTemplate1 = ({ 
  name = "Your Name", 
  email = "your.email@example.com", 
  phone = "123-456-7890", 
  address = "Your Address, City, Country",
  socialLinks = [], // array of { platform: 'LinkedIn', url: 'https://...' }
  education = [], // array of { degree: '', institution: '', year: '' }
  skills = [], // array of strings
  experience = [] // array of { position: '', company: '', duration: '', description: '' }
}) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-lg font-sans text-gray-800">
      
      {/* Header */}
      <header className="border-b-4 border-blue-600 pb-4 mb-8">
        <h1 className="text-4xl font-extrabold tracking-wide">{name}</h1>
        <p className="mt-1 text-lg text-gray-600 italic">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600">{address}</p>
        {socialLinks.length > 0 && (
          <div className="flex space-x-4 mt-2">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-200 pb-2 mb-3">Education</h2>
        {education.length > 0 ? (
          education.map((edu, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution}</p>
              <p className="text-gray-500 italic">{edu.year}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-700">Add your educational background here.</p>
        )}
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-200 pb-2 mb-3">Skills</h2>
        {skills.length > 0 ? (
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            {skills.map((skill, idx) => (
              <li key={idx} className="capitalize">{skill}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">List your key skills here.</p>
        )}
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-200 pb-2 mb-3">Experience</h2>
        {experience.length > 0 ? (
          experience.map((exp, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-xl font-bold">{exp.position}</h3>
              <p className="text-gray-700">{exp.company}</p>
              <p className="text-gray-500 italic">{exp.duration}</p>
              <p className="text-gray-700 whitespace-pre-line">{exp.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-700">Include details about your previous roles and achievements here.</p>
        )}
      </section>
    </div>
  );
};

export default ResumeTemplate1;
