const SkillsForm = ({ formData, setFormData, onChange }) => {
  // Handle skill change
  const handleSkillChange = (index, value) => {
    const updated = [...formData];
    updated[index] = value;
    setFormData(updated);

    // Send non-empty formData to parent
    if (onChange) onChange(updated.filter((s) => s.trim() !== ""));
  };

  // Add new skill
  const addSkill = () => {
    setFormData([...formData, ""]);
  };

  // Remove a skill
  const removeSkill = (index) => {
    const updated = formData.filter((_, i) => i !== index);
    setFormData(updated);

    // Update parent with filtered formData
    if (onChange) onChange(updated.filter((s) => s.trim() !== ""));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-2">Skills</h2>
      <p className="text-gray-500 mb-6">List your formData and strengths.</p>

      {formData.map((skill, idx) => (
        <div key={idx} className="mb-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter a skill (e.g., React, Node.js)"
              value={skill}
              onChange={(e) => handleSkillChange(idx, e.target.value)}
              className="border p-2 focus:outline-none w-full"
            />
          </div>

          {/* Remove button */}
          {formData.length > 1 && (
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

      {/* Add Skill Button */}
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
