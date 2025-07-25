const ProjectsForm = ({ formData, setFormData, onChange }) => {
  // Handle field change
  const handleChange = (index, field, value) => {
    const updated = [...formData];
    updated[index][field] = value;
    setFormData(updated);

    // Send only valid projects to parent
    if (onChange) onChange(updated.filter((p) => p.title.trim() !== ""));
  };

  // Add new project
  const addProject = () => {
    const updated = [
      ...formData,
      { title: "", description: "", technologies: "", projectUrl: "" },
    ];
    setFormData(updated);
  };

  // Remove project
  const removeProject = (index) => {
    const updated = formData.filter((_, i) => i !== index);
    setFormData(updated);
    if (onChange) onChange(updated.filter((p) => p.title.trim() !== ""));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-2">Projects</h2>
      <p className="text-gray-500 mb-6">Add details of your projects below.</p>

      {formData.map((project, idx) => (
        <div key={idx} className="mb-8 relative">
          {/* Remove button */}
          {formData.length > 1 && (
            <button
              type="button"
              onClick={() => removeProject(idx)}
              className="absolute top-0 right-0 text-red-500 hover:text-red-700 font-bold text-2xl leading-none"
              title="Remove Project"
            >
              &times;
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project Title */}
            <input
              type="text"
              name={`title-${idx}`}
              placeholder="Project Title *"
              value={project.title}
              onChange={(e) => handleChange(idx, "title", e.target.value)}
              required
              className="border p-2 focus:outline-none w-full"
            />

            {/* Technologies Used */}
            <input
              type="text"
              name={`technologies-${idx}`}
              placeholder="Technologies Used (e.g., React, Node.js)"
              value={project.technologies}
              onChange={(e) =>
                handleChange(idx, "technologies", e.target.value)
              }
              className="border p-2 focus:outline-none w-full"
            />

            {/* Project Description */}
            <textarea
              name={`description-${idx}`}
              placeholder="Project Description"
              value={project.description}
              onChange={(e) => handleChange(idx, "description", e.target.value)}
              rows={3}
              className="col-span-1 md:col-span-2 border p-2 focus:outline-none w-full"
            />

            {/* Project URL */}
            <input
              type="url"
              name={`projectUrl-${idx}`}
              placeholder="Project URL"
              value={project.projectUrl}
              onChange={(e) => handleChange(idx, "projectUrl", e.target.value)}
              className="border p-2 focus:outline-none w-full"
            />
          </div>
        </div>
      ))}

      {/* Add Project Button */}
      <button
        type="button"
        onClick={addProject}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 transition"
      >
        + Add Project
      </button>
    </div>
  );
};

export default ProjectsForm;
