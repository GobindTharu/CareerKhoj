import React, { forwardRef } from "react";
import { Phone, Mail, MapPin, Link as LinkIcon } from "lucide-react";

const MinimalTemplate = forwardRef(({ formData = {} }, ref) => {
  const {
    firstName,
    lastName,
    designation,
    phone,
    email,
    portfolio,
    city,
    summary,
    experience = [],
    education = [],
    skills = [],
  } = formData;

  return (
    <div
      ref={ref}
      className="bg-white text-gray-900 p-10 max-w-4xl mx-auto font-sans"
    >
      {/* HEADER */}
      <div className="text-left mb-8">
        <h1 className="text-4xl font-extrabold text-purple-700 uppercase">
          {firstName} {lastName}
        </h1>
        <p className="text-orange-500 font-semibold">{designation}</p>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-700 items-center">
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            {phone}
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            {email}
          </span>
          {portfolio && (
            <span className="flex items-center gap-1">
              <LinkIcon className="w-4 h-4" />
              {portfolio}
            </span>
          )}
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {city}
          </span>
        </div>
      </div>

      {/* SUMMARY */}
      <section className="mb-6">
        <h2 className="text-md font-extrabold uppercase text-purple-900 mb-1">
          Summary
        </h2>
        <p className="text-sm text-gray-800">{summary}</p>
      </section>

      {/* EXPERIENCE */}
      <section className="mb-6">
        <h2 className="text-md font-extrabold uppercase text-purple-900 mb-3">
          Experience
        </h2>
        {experience.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-[100px_1fr] gap-4 mb-4">
            <div className="text-xs text-gray-600">
              {exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate}
            </div>
            <div>
              <p className="text-sm font-bold text-purple-800">{exp.role}</p>
              <p className="text-sm text-orange-500 font-semibold">
                {exp.company}
              </p>
              <p className="text-xs text-gray-600">{exp.location}</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                {exp.description?.split("\n").map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* EDUCATION */}
      <section className="mb-6">
        <h2 className="text-md font-extrabold uppercase text-purple-900 mb-3">
          Education
        </h2>
        {education.map((edu, idx) => (
          <div key={idx} className="grid grid-cols-[100px_1fr] gap-4 mb-3">
            <div className="text-xs text-gray-600">
              {edu.startDate} - {edu.endDate}
            </div>
            <div>
              <p className="text-sm font-semibold text-purple-700">
                {edu.degree}
              </p>
              <p className="text-sm text-orange-500 font-semibold">
                {edu.school}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <section className="mb-6">
        <h2 className="text-md font-extrabold uppercase text-purple-900 mb-2">
          Skills
        </h2>
        {skills.map((skill, idx) => (
          <div key={idx} className="mb-2">
            <p className="text-sm text-gray-800 font-medium">{skill}</p>
            <div className="border-b w-20 border-gray-300 mt-1" />
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section className="mb-6">
        <h2 className="text-md font-extrabold uppercase text-purple-900 mb-3">
          Projects
        </h2>
        {formData.projects?.map((proj, idx) => (
          <div key={idx} className="grid grid-cols-[100px_1fr] gap-4 mb-3">
            <div className="text-xs text-gray-600">{proj.date}</div>
            <div>
              <p className="text-sm font-bold text-purple-800">{proj.title}</p>
              <p className="text-sm text-orange-500 font-semibold">
                {proj.technologies}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                {proj.description?.split("\n").map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* TRAINING & CERTIFICATIONS */}
      <section className="mb-6">
        <h2 className="text-md font-extrabold uppercase text-purple-900 mb-3">
          Training & Certifications
        </h2>
        {formData.trainings?.map((training, idx) => (
          <div key={idx} className="grid grid-cols-[100px_1fr] gap-4 mb-3">
            <div className="text-xs text-gray-600">
              {training.startDate} -{" "}
              {training.currentlyWorking ? "Present" : training.endDate}
            </div>
            <div>
              <p className="text-sm font-bold text-purple-800">
                {training.title}
              </p>
              <p className="text-sm text-orange-500 font-semibold">
                {training.organization}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                {training.description?.split("\n").map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
});

export default MinimalTemplate;
