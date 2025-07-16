import React, { useState } from "react";

const EducationForm = ({ formData, setFormData }) => {
  const [educationEntry, setEducationEntry] = useState({
    school: "",
    degree: "",
    city: "",
    startDate: "",
    endDate: "",
    currentlyStudying: false,
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setEducationEntry({ ...educationEntry, [name]: newValue });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, educationEntry],
    });
    setEducationEntry({
      school: "",
      degree: "",
      city: "",
      startDate: "",
      endDate: "",
      currentlyStudying: false,
      description: "",
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-600 mb-2">Education</h2>
      <p className="text-gray-500 mb-6">
        Give a detailed look into your academic history.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="school"
          placeholder="School"
          value={educationEntry.school}
          onChange={handleInputChange}
          className="border p-2"
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={educationEntry.degree}
          onChange={handleInputChange}
          className="border p-2"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={educationEntry.city}
          onChange={handleInputChange}
          className="border p-2"
        />
        <input
          type="month"
          name="startDate"
          placeholder="Start Date"
          value={educationEntry.startDate}
          onChange={handleInputChange}
          className="border p-2"
        />
        <input
          type="month"
          name="endDate"
          placeholder="Graduation Date"
          value={educationEntry.endDate}
          onChange={handleInputChange}
          className="border p-2"
          disabled={educationEntry.currentlyStudying}
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="currentlyStudying"
            checked={educationEntry.currentlyStudying}
            onChange={handleInputChange}
          />
          I currently study here
        </label>
      </div>

      <div className="mt-4">
        <textarea
          name="description"
          value={educationEntry.description}
          onChange={handleInputChange}
          placeholder="Talk a little bit about your course of study."
          className="w-full border p-2"
          rows={4}
        />
      </div>

      <div className="mt-4">
        <button
          type="button"
          onClick={handleAddEducation}
          className="text-blue-600 hover:underline"
        >
          + Add Education
        </button>
      </div>
    </div>
  );
};

export default EducationForm;
