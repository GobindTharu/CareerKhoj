import React, { forwardRef } from "react";

const MinimalTemplate = forwardRef(({ formData = {} }, ref) => {
  return (
    <div ref={ref} className="min-h-screen p-6 bg-white text-gray-800 font-light">
      <h1 className="text-2xl font-semibold border-b mb-2">
        {formData.firstName} {formData.lastName}
      </h1>
      <p className="italic text-sm text-gray-500">{formData.designation}</p>

      <div className="mt-4">
        <p className="text-sm">{formData.email}</p>
        <p className="text-sm">{formData.phone}</p>
        <p className="text-sm">{formData.address}, {formData.city}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-md font-medium mb-1">Summary</h2>
        <p className="text-sm">{formData.summary}</p>
      </div>
    </div>
  );
});

export default MinimalTemplate;
