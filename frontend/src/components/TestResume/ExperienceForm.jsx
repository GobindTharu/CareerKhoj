import React from "react";

const ExperienceForm = ({ formData, setFormData }) => {
  // Ensure experience array exists
  const experiences = formData.experience || [
    {
      company: "",
      role: "",
      city: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      description: "",
    },
  ];

  // Update specific field for a specific experience
  const updateExperience = (index, e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    const updatedExperiences = [...experiences];
    updatedExperiences[index][name] = newValue;
    setFormData({ ...formData, experience: updatedExperiences });
  };

  // Add new blank experience
  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...experiences,
        {
          company: "",
          role: "",
          city: "",
          startDate: "",
          endDate: "",
          currentlyWorking: false,
          description: "",
        },
      ],
    });
  };

  // Remove experience at index
  const removeExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: updatedExperiences });
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Experience</h2>
      <p className="text-gray-500 mb-6">List your past work experiences.</p>

      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="mb-6 border border-gray-300 p-4 rounded relative"
        >
          {experiences.length > 1 && (
            <button
              type="button"
              onClick={() => removeExperience(idx)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold"
              title="Remove Experience"
            >
              &times;
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={exp.company}
              onChange={(e) => updateExperience(idx, e)}
              className="border p-2"
            />
            <input
              type="text"
              name="role"
              placeholder="Job Title / Role"
              value={exp.role}
              onChange={(e) => updateExperience(idx, e)}
              className="border p-2"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={exp.city}
              onChange={(e) => updateExperience(idx, e)}
              className="border p-2"
            />
            <input
              type="month"
              name="startDate"
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) => updateExperience(idx, e)}
              className="border p-2"
            />
            <input
              type="month"
              name="endDate"
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) => updateExperience(idx, e)}
              disabled={exp.currentlyWorking}
              className="border p-2"
            />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="currentlyWorking"
                checked={exp.currentlyWorking}
                onChange={(e) => updateExperience(idx, e)}
              />
              I currently work here
            </label>
          </div>

          <div className="mt-4">
            <textarea
              name="description"
              placeholder="Brief description of your role/responsibilities"
              value={exp.description}
              onChange={(e) => updateExperience(idx, e)}
              className="w-full border p-2"
              rows={4}
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addExperience}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
      >
        + Add Another Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
