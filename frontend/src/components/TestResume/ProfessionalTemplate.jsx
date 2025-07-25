import React, { forwardRef } from "react";

const ProfessionalTemplate = forwardRef(({ formData = {} }, ref) => {
  return (
    <div ref={ref} className="min-h-screen p-8 bg-white shadow-md border border-gray-200">
      <div className="flex items-center gap-6 mb-6">
        {formData.photo && (
          <img
            src={formData.photo instanceof File ? URL.createObjectURL(formData.photo) : formData.photo}
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover"
          />
        )}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{formData.firstName} {formData.lastName}</h1>
          <h2 className="text-sm text-gray-500">{formData.designation}</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-1">Summary</h3>
          <p className="text-sm text-gray-700">{formData.summary}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Contact</h3>
          <p className="text-sm">{formData.email}</p>
          <p className="text-sm">{formData.phone}</p>
          <p className="text-sm">{formData.address}, {formData.city}</p>
        </div>
      </div>
    </div>
  );
});

export default ProfessionalTemplate;
