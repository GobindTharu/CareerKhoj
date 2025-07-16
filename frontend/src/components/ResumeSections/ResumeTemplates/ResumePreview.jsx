import React from "react";

const ResumePreview = ({ formData }) => {
  return (
    <div className="w-1/2 p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-bold">{formData.name || "Your Name"}</h1>
      <h2 className="text-lg text-gray-600">
        {formData.position || "Position"}
      </h2>
      <p className="mt-2">{formData.about || "About you..."}</p>

      <h3 className="font-semibold mt-4">Skills</h3>
      <ul className="list-disc ml-5">
        {formData.skills ? (
          formData.skills
            .split(",")
            .map((skill, idx) => <li key={idx}>{skill.trim()}</li>)
        ) : (
          <li>List your skills here</li>
        )}
      </ul>

      <h3 className="font-semibold mt-4">Experience</h3>
      <p>{formData.experience || "Describe your experience..."}</p>
    </div>
  );
};

export default ResumePreview;
