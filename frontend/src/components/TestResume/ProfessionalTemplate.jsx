import React, { forwardRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ImageResumeTemplate = forwardRef(({ formData = {} }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white text-gray-900 p-8 max-w-4xl mx-auto text-sm leading-relaxed"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">
          {formData.firstName} {formData.lastName}
        </h1>
        <p className="text-lg">{formData.designation}</p>
        <div className="flex justify-center gap-4 mt-2 text-sm flex-wrap">
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            {formData.phone}
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            {formData.email}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {formData.city}
          </span>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-4">
        <h2 className="text-lg font-bold border-b pb-1 mb-2">
          Professional Summary
        </h2>
        <p>{formData.summary}</p>
      </section>

      {/* Skills */}
      <section className="mb-4">
        <h2 className="text-lg font-bold border-b pb-1 mb-2">Skills</h2>
        {formData?.skills && (
          <>
            {formData?.skills && (
              <p>
                <span className="font-semibold"></span>{" "}
                {formData?.skills?.join(", ")}
              </p>
            )}
          </>
        )}
      </section>

      {/* Experience */}
      <section className="mb-4">
        <h2 className="text-lg font-bold border-b pb-1 mb-2">Experience</h2>
        {formData.experience?.map((exp, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between">
              <p className="font-bold">{exp.role}</p>
              <p className="text-sm">
                {exp.startDate} –{" "}
                {exp.currentlyWorking ? "Present" : exp.endDate}
              </p>
            </div>
            <p className="italic">
              {exp.company}, {exp.location}
            </p>
            <ul className="list-disc list-inside mt-1">
              {exp.description?.split("\n").map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-4">
        <h2 className="text-lg font-bold border-b pb-1 mb-2">Projects</h2>
        {formData.projects?.map((proj, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">
              {proj.title}{" "}
              <span className="italic text-sm">| {proj.technologies}</span>
            </p>
            <ul className="list-disc list-inside">
              {proj.description?.split("\n").map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Trainings */}
      {formData.trainings?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">
            Training & Certifications
          </h2>
          {formData.trainings.map((training, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between">
                <p className="font-bold">{training.title}</p>
                <p className="text-sm">
                  {training.startDate} –{" "}
                  {training.currentlyWorking ? "Present" : training.endDate}
                </p>
              </div>
              <p className="italic">{training.organization}</p>
              <ul className="list-disc list-inside mt-1">
                {training.description?.split("\n").map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      <section>
        <h2 className="text-lg font-bold border-b pb-1 mb-2">Education</h2>
        {formData.education?.map((edu, index) => (
          <div key={index} className="flex justify-between">
            <div>
              <p className="font-bold">{edu.school}</p>
              <p className="italic text-sm">{edu.degree}</p>
            </div>
            <p className="text-sm">
              {edu.startDate} – {edu.endDate}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
});

export default ImageResumeTemplate;
