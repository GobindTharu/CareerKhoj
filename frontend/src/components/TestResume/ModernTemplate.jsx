import React, { forwardRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

// Helper: Sort by latest date
const sortByLatest = (arr = []) => {
  return [...arr].sort((a, b) => {
    const dateA = new Date(a.endDate || a.startDate || 0);
    const dateB = new Date(b.endDate || b.startDate || 0);
    return dateB - dateA; // Latest first
  });
};

const ModernTemplate = forwardRef(({ formData = {} }, ref) => {
  const projects = sortByLatest(formData.projects);
  const trainings = sortByLatest(formData.trainings);

  return (
    <div
      ref={ref}
      className="bg-white text-gray-900 p-8 max-w-5xl mx-auto text-base"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-purple-800">
          {formData.firstName} {formData.lastName}
        </h1>
        <p className="text-2xl text-purple-600">{formData.designation}</p>
        <div className="flex justify-center gap-6 mt-3 text-base flex-wrap text-gray-600">
          <span className="flex items-center gap-1">
            <Phone className="w-5 h-5" /> {formData.phone}
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-5 h-5" /> {formData.email}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-5 h-5" /> {formData.city}
          </span>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="col-span-2">
          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-purple-800 font-bold border-b-2 border-purple-800 mb-2 uppercase text-xl">
              Summary
            </h2>
            <p>{formData.summary}</p>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-purple-800 font-bold border-b-2 border-purple-800 mb-2 uppercase text-xl">
              Experience
            </h2>
            {formData.experience?.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <p className="font-bold text-lg">{exp.role}</p>
                <p className="text-purple-600 text-base">{exp.company}</p>
                <div className="flex gap-4 text-sm text-gray-600 mb-1">
                  <span>
                    {exp.startDate} –{" "}
                    {exp.currentlyWorking ? "Present" : exp.endDate}
                  </span>
                  <span>{exp.location}</span>
                </div>
                <ul className="list-disc list-inside text-gray-700">
                  {exp.description?.split("\n").map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Projects (latest first) */}
          {projects?.length > 0 && (
            <section className="mb-6">
              <h2 className="text-purple-800 font-bold border-b-2 border-purple-800 mb-2 uppercase text-xl">
                Projects
              </h2>
              {projects.map((proj, idx) => (
                <div key={idx} className="mb-3">
                  <p className="font-bold text-lg">{proj.title}</p>
                  <p className="text-purple-600 text-base">
                    {proj.technologies}
                  </p>
                  {/* {proj.projectUrl && (
                    <p className="max-w-full break-words whitespace-normal">
                      <a
                        href={
                          proj.projectUrl.startsWith("http")
                            ? proj.projectUrl
                            : `http://${proj.projectUrl}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline text-sm"
                        style={{ wordBreak: "break-word" }}
                      >
                        {proj.projectUrl}
                      </a>
                    </p>
                  )} */}
                  <ul className="list-disc list-inside text-gray-700 mt-1">
                    {proj.description?.split("\n").map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Training & Certifications (latest first) */}
          {trainings?.length > 0 && (
            <section className="mb-6">
              <h2 className="text-purple-800 font-bold border-b-2 border-purple-800 mb-2 uppercase text-xl">
                Training & Certifications
              </h2>
              {trainings.map((training, idx) => (
                <div key={idx} className="mb-3">
                  <p className="font-bold text-lg">{training.title}</p>
                  <p className="text-purple-600 text-base">
                    {training.organization}
                  </p>
                  <div className="flex gap-4 text-sm text-gray-600 mb-1">
                    <span>
                      {training.startDate} –{" "}
                      {training.currentlyWorking ? "Present" : training.endDate}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700">
                    {training.description?.split("\n").map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Education */}
          <section className="mb-6">
            <h2 className="text-purple-800 font-bold border-b-2 border-purple-800 mb-2 uppercase text-xl">
              Education
            </h2>
            {formData.education?.map((edu, idx) => (
              <div key={idx} className="mb-3">
                <p className="font-bold text-lg">{edu.degree}</p>
                <p className="text-purple-600 text-base">{edu.school}</p>
                <p className="text-sm">
                  {edu.startDate} – {edu.endDate}
                </p>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-purple-800 font-bold border-b-2 border-purple-800 mb-2 uppercase text-xl">
              Skills
            </h2>
            {formData.skills?.map((skill, idx) => (
              <p key={idx} className="text-base mb-1">
                {skill}
              </p>
            ))}
          </section>

          {/* Strengths */}
          {formData.strengths?.length > 0 && (
            <section className="mb-6">
              <h2 className="text-purple-800 font-bold border-b-2 border-purple-800 mb-2 uppercase text-xl">
                Strengths
              </h2>
              {formData.strengths.map((s, idx) => (
                <div key={idx} className="mb-2">
                  <p className="font-semibold text-base">{s.title}</p>
                  <p className="text-sm text-gray-600">{s.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Languages */}
          {formData.languages?.length > 0 && (
            <section>
              <h2 className="text-purple-800 font-bold border-b-2 border-purple-800 mb-2 uppercase text-xl">
                Languages
              </h2>
              {formData.languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between mb-2"
                >
                  <div>
                    <p className="font-semibold text-base">{lang.name}</p>
                    <p className="text-sm text-gray-600">{lang.level}</p>
                  </div>
                  {/* Dot rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < lang.rating ? "bg-blue-500" : "bg-gray-300"
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
});

export default ModernTemplate;
