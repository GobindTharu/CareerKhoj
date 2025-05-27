import React from 'react';

const ResumeTemplate1 = ({ 
  name = 'Your Name', 
  email = 'your.email@example.com', 
  phone = 'Your Phone Number',
  address = 'Your Address',
  socialLinks = {}, // { linkedin: '', github: '', portfolio: '' }
  education = [],    // [{ degree, institution, year }]
  skills = [],       // ['Skill 1', 'Skill 2']
  experience = []    // [{ jobTitle, company, years, description }]
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-xl font-sans text-gray-800">
      {/* Header */}
      <header className="border-b-4 border-blue-600 pb-5 mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">{name}</h1>
        <div className="text-lg text-gray-600 italic mt-1">{email} | {phone}</div>
        <div className="text-sm text-gray-500">{address}</div>
        <div className="flex gap-4 mt-2 text-sm text-blue-600">
          {socialLinks.linkedin && <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
          {socialLinks.github && <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {socialLinks.portfolio && <a href={socialLinks.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>}
        </div>
      </header>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-200 pb-2 mb-3">Education</h2>
        {education.length ? (
          <ul className="space-y-2">
            {education.map((edu, index) => (
              <li key={index}>
                <p className="font-bold">{edu.degree}</p>
                <p className="text-sm text-gray-600">{edu.institution} — {edu.year}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">Add your degree, institution, and graduation year.</p>
        )}
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-200 pb-2 mb-3">Skills</h2>
        {skills.length ? (
          <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-x-6">
            {skills.map((skill, i) => (
              <li key={i} className="capitalize">{skill}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">Mention your skills like JavaScript, React, UI/UX, etc.</p>
        )}
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-200 pb-2 mb-3">Experience</h2>
        {experience.length ? (
          <ul className="space-y-4">
            {experience.map((exp, index) => (
              <li key={index}>
                <p className="font-bold text-lg">{exp.jobTitle}</p>
                <p className="text-sm text-gray-600">{exp.company} — {exp.years}</p>
                <p className="text-gray-700 mt-1 whitespace-pre-line">{exp.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">Mention job title, company, years, and your key contributions.</p>
        )}
      </section>
    </div>
  );
};

export default ResumeTemplate1;
