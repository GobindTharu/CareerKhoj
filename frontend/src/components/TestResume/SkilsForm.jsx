import React from "react";

const SkillsForm = ({ formData, setFormData }) => {
  // Ensure skills exists as an array
  const skills = Array.isArray(formData.skills) ? formData.skills : [""];

  // Handle skill change
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value; // directly store string
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  // Add new skill
  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...skills, ""],
    });
  };

  // Remove skill
  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-2">Skills</h2>
      <p className="text-gray-500 mb-6">List your skills individually.</p>

      {skills.map((skill, idx) => (
        <div key={idx} className="mb-4 relative">
          <input
            type="text"
            placeholder="Enter a skill (e.g., React)"
            value={skill}
            onChange={(e) => handleSkillChange(idx, e.target.value)}
            className="border p-2 focus:outline-none w-full"
          />

          {skills.length > 1 && (
            <button
              type="button"
              onClick={() => removeSkill(idx)}
              className="absolute top-0 right-0 text-red-500 hover:text-red-700 font-bold text-2xl leading-none"
              title="Remove Skill"
            >
              &times;
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addSkill}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 transition"
      >
        + Add Skill
      </button>
    </div>
  );
};

export default SkillsForm;
