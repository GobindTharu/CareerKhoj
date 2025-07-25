import React, { forwardRef } from "react";

const ModernTemplate = forwardRef(({ formData = {} }, ref) => {
  return (
    <div ref={ref} className="bg-gradient-to-br from-indigo-100 to-white min-h-screen p-10 shadow-md text-gray-800">
      <div className="text-center mb-6">
        {formData.photo && (
          <img
            src={formData.photo instanceof File ? URL.createObjectURL(formData.photo) : formData.photo}
            alt="Profile"
            className="mx-auto h-24 w-24 rounded-full object-cover mb-3"
          />
        )}
        <h1 className="text-3xl font-bold">{formData.firstName} {formData.lastName}</h1>
        <p className="text-indigo-600">{formData.designation}</p>
      </div>
      <div className="text-center text-sm">
        <p>{formData.email}</p>
        <p>{formData.phone}</p>
        <p>{formData.address}, {formData.city}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold border-b pb-1 mb-3">Summary</h2>
        <p className="text-sm">{formData.summary}</p>
      </div>
    </div>
  );
});

export default ModernTemplate;
