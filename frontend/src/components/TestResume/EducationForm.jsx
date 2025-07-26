import React from "react";

const EducationForm = ({ formData, setFormData }) => {
  // Ensure education array exists
  const educationList = formData.education || [
    {
      school: "",
      degree: "",
      city: "",
      startDate: "",
      endDate: "",
      currentlyStudying: false,
      description: "",
    },
  ];

  // Update a specific education entry
  const handleInputChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    const updatedEducation = [...educationList];
    updatedEducation[index][name] = newValue;
    setFormData({ ...formData, education: updatedEducation });
  };

  // Add new blank education
  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...educationList,
        {
          school: "",
          degree: "",
          city: "",
          startDate: "",
          endDate: "",
          currentlyStudying: false,
          description: "",
        },
      ],
    });
  };

  // Remove education entry
  const removeEducation = (index) => {
    const updatedEducation = educationList.filter((_, i) => i !== index);
    setFormData({ ...formData, education: updatedEducation });
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-green-600 mb-2">Education</h2>
      <p className="text-gray-500 mb-6">
        Give a detailed look into your academic history.
      </p>

      {educationList.map((edu, idx) => (
        <div
          key={idx}
          className="mb-6 border border-gray-300 p-4 rounded relative"
        >
          {educationList.length > 1 && (
            <button
              type="button"
              onClick={() => removeEducation(idx)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold"
              title="Remove Education"
            >
              &times;
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="school"
              placeholder="School / University"
              value={edu.school}
              onChange={(e) => handleInputChange(idx, e)}
              className="border p-2"
            />
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleInputChange(idx, e)}
              className="border p-2"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={edu.city}
              onChange={(e) => handleInputChange(idx, e)}
              className="border p-2"
            />
            <input
              type="month"
              name="startDate"
              value={edu.startDate}
              onChange={(e) => handleInputChange(idx, e)}
              className="border p-2"
            />
            <input
              type="month"
              name="endDate"
              value={edu.endDate}
              onChange={(e) => handleInputChange(idx, e)}
              disabled={edu.currentlyStudying}
              className="border p-2"
            />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="currentlyStudying"
                checked={edu.currentlyStudying}
                onChange={(e) => handleInputChange(idx, e)}
              />
              I currently study here
            </label>
          </div>

          <div className="mt-4">
            <textarea
              name="description"
              value={edu.description}
              onChange={(e) => handleInputChange(idx, e)}
              placeholder="Talk a little bit about your course of study."
              className="w-full border p-2"
              rows={4}
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addEducation}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
      >
        + Add Another Education
      </button>
    </div>
  );
};

export default EducationForm;
