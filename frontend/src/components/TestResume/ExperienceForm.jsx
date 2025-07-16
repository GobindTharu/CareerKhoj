import React, { useState } from "react";

const ExperienceForm = ({ formData, setFormData }) => {
  const [experienceEntry, setExperienceEntry] = useState({
    company: "",
    role: "",
    city: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setExperienceEntry({ ...experienceEntry, [name]: newValue });
  };

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [...(formData.experience || []), experienceEntry],
    });
    setExperienceEntry({
      company: "",
      role: "",
      city: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      description: "",
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Experience</h2>
      <p className="text-gray-500 mb-6">List your past work experience.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={experienceEntry.company}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="role"
          placeholder="Job Title / Role"
          value={experienceEntry.role}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={experienceEntry.city}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="month"
          name="startDate"
          placeholder="Start Date"
          value={experienceEntry.startDate}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="month"
          name="endDate"
          placeholder="End Date"
          value={experienceEntry.endDate}
          onChange={handleChange}
          disabled={experienceEntry.currentlyWorking}
          className="border p-2"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="currentlyWorking"
            checked={experienceEntry.currentlyWorking}
            onChange={handleChange}
          />
          I currently work here
        </label>
      </div>

      <div className="mt-4">
        <textarea
          name="description"
          placeholder="Brief description of your role/responsibilities"
          value={experienceEntry.description}
          onChange={handleChange}
          className="w-full border p-2"
          rows={4}
        />
      </div>

      <div className="mt-4">
        <button
          type="button"
          onClick={handleAddExperience}
          className="text-blue-600 hover:underline"
        >
          + Add Experience
        </button>
      </div>
    </div>
  );
};

export default ExperienceForm;
