import React from "react";

const ResumePreview = ({ formData }) => {
  const edu = formData.education[0] || {};
  return (
    <div className="w-full flex min-h-screen border m-12 ">
      <div className="w-1/4 min-h-screen border-red-600 bg-[#2f3244] text-white p-6 overflow-auto">
        {formData.photo instanceof File ? (
          <img
            src={URL.createObjectURL(formData.photo)}
            alt="Preview"
            className="h-42 w-42 rounded-full border object-cover "
          />
        ) : formData.photo ? (
          <img
            src={formData.photo}
            alt="Preview"
            className="h-42 w-42 rounded-full border object-cover "
          />
        ) : (
          <span>No Photo</span>
        )}

        <h2 className="text-lg font-semibold border-b border-gray-400 pb-1 mb-4">
          CONTACT
        </h2>

        <p className="mb-2">{formData.email}</p>
        <p className="mb-2">{formData.phone}</p>
        <p className="mb-2">
          {formData.address}, {formData.city}
        </p>

        <h2 className="text-lg font-semibold border-b border-gray-400 pb-1 mt-6 mb-4">
          SUMMARY
        </h2>
        <p className="mb-4 whitespace-pre-wrap">{formData.summary}</p>

        {edu.school && (
          <>
            <h2 className="text-lg font-semibold border-b border-gray-400 pb-1 mt-6 mb-4">
              EDUCATION
            </h2>
            <p className="mb-1 font-semibold">
              {edu.degree} - {edu.school}
            </p>
            <p className="mb-1 text-sm italic">{edu.city}</p>
            <p className="mb-1 text-sm">
              {edu.startDate} - {edu.endDate}
            </p>
            <p className="text-sm whitespace-pre-wrap">{edu.description}</p>
          </>
        )}
      </div>
      <div className="w-3/4 min-h-screen">
        <p className="mb-2">
          {formData.firstName} {formData.lastName}
        </p>
        <p className="mb-2">{formData.designation}</p>
      </div>
    </div>
  );
};

export default ResumePreview;
