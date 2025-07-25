import React, { forwardRef } from "react";

const ClassicTemplate = forwardRef(({ formData = {} }, ref) => {
  return (
    <div ref={ref} className="flex min-h-screen border shadow-md bg-white text-gray-800">
      <div className="w-1/4 bg-gray-800 text-white p-6">
        {formData.photo ? (
          <img
            src={formData.photo instanceof File ? URL.createObjectURL(formData.photo) : formData.photo}
            alt="Preview"
            className="h-28 w-28 rounded-full object-cover mb-4"
          />
        ) : (
          <span>No Photo</span>
        )}
        <h2 className="font-bold text-lg mb-2">Contact</h2>
        <p className="text-sm">{formData.email}</p>
        <p className="text-sm">{formData.phone}</p>
        <p className="text-sm">{formData.address}, {formData.city}</p>
      </div>
      <div className="w-3/4 p-6">
        <h1 className="text-3xl font-bold">{formData.firstName} {formData.lastName}</h1>
        <h2 className="text-lg text-indigo-600">{formData.designation}</h2>
        <p className="mt-4">{formData.summary}</p>
      </div>
    </div>
  );
});

export default ClassicTemplate;
