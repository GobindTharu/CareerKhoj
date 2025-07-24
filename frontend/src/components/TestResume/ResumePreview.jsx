import React, { forwardRef } from "react";

const ResumePreview = forwardRef((props, ref) => {
  const { formData = {} } = props;

  return (
    <div ref={ref} className=" flex min-h-screen border shadow-md">
      <div className="w-1/4 bg-[#2f3244] text-white p-6">
        {formData.photo ? (
          <img
            src={
              formData.photo instanceof File
                ? URL.createObjectURL(formData.photo)
                : formData.photo
            }
            alt="Preview"
            className="h-32 w-32 rounded-full border object-cover"
          />
        ) : (
          <span>No Photo</span>
        )}
        <h2 className="text-lg font-semibold border-b border-gray-400 pb-1 mb-4">
          CONTACT
        </h2>
        <p>{formData.email}</p>
        <p>{formData.phone}</p>
        <p>
          {formData.address} {formData.city}
        </p>
      </div>

      <div className="w-3/4 p-6">
        <h1 className="text-xl font-bold">
          {formData.firstName} {formData.lastName}
        </h1>
        <p>{formData.designation}</p>
      </div>
    </div>
  );
});

export default ResumePreview;
