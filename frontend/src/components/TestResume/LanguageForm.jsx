const proficiencyLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Fluent",
  "Native",
];

const LanguageForm = ({ formData, setFormData, onChange }) => {
  const handleChange = (index, field, value) => {
    const updated = [...formData];
    updated[index][field] = value;  
    setFormData(updated);
    if (onChange) onChange(updated.filter((l) => l.language.trim() !== ""));
  };

  const addLanguage = () => {
    setFormData([...formData, { language: "", proficiency: "" }]);
  };

  const removeLanguage = (index) => {
    const updated = formData.filter((_, i) => i !== index);
    setFormData(updated);
    if (onChange) onChange(updated.filter((l) => l.language.trim() !== ""));
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Languages</h2>
      {formData.map((lang, idx) => (
        <div
          key={idx}
          className="mb-5 border border-gray-300 rounded p-4 relative"
        >
          {formData.length > 1 && (
            <button
              type="button"
              onClick={() => removeLanguage(idx)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold"
              title="Remove Language"
            >
              &times;
            </button>
          )}

          <div className="mb-3">
            <label
              htmlFor={`language-${idx}`}
              className="block text-sm font-medium mb-1"
            >
              Language<span className="text-red-500">*</span>
            </label>
            <input
              id={`language-${idx}`}
              type="text"
              value={lang.language}
              onChange={(e) => handleChange(idx, "language", e.target.value)}
              required
              placeholder="e.g., English"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor={`proficiency-${idx}`}
              className="block text-sm font-medium mb-1"
            >
              Proficiency<span className="text-red-500">*</span>
            </label>
            <select
              id={`proficiency-${idx}`}
              value={lang.proficiency}
              onChange={(e) => handleChange(idx, "proficiency", e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled>
                Select proficiency
              </option>
              {proficiencyLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addLanguage}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
      >
        + Add Language
      </button>
    </div>
  );
};

export default LanguageForm;
