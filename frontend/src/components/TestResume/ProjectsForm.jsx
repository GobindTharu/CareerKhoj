import React from "react";

const ProjectsForm = ({ formData, setFormData }) => {
  // Ensure projects array exists in formData
  const projects = formData.projects || [
    { title: "", description: "", technologies: "", projectUrl: "" },
  ];

  // Handle field change for specific project
  const handleChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;

    setFormData({
      ...formData,
      projects: updatedProjects,
    });
  };

  // Add new project
  const addProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...projects,
        { title: "", description: "", technologies: "", projectUrl: "" },
      ],
    });
  };

  // Remove project
  const removeProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      projects: updatedProjects,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-2">Projects</h2>
      <p className="text-gray-500 mb-6">Add details of your projects below.</p>

      {projects.map((project, idx) => (
        <div key={idx} className="mb-8 relative">
          {/* Remove button */}
          {projects.length > 1 && (
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
              placeholder="Project Title *"
              value={project.title}
              onChange={(e) => handleChange(idx, "title", e.target.value)}
              className="border p-2 focus:outline-none w-full"
              required
            />

            {/* Technologies Used */}
            <input
              type="text"
              placeholder="Technologies Used (e.g., React, Node.js)"
              value={project.technologies}
              onChange={(e) =>
                handleChange(idx, "technologies", e.target.value)
              }
              className="border p-2 focus:outline-none w-full"
            />

            {/* Project Description */}
            <textarea
              placeholder="Project Description"
              value={project.description}
              onChange={(e) => handleChange(idx, "description", e.target.value)}
              rows={3}
              className="col-span-1 md:col-span-2 border p-2 focus:outline-none w-full"
            />

            {/* Project URL */}
            <input
              type="url"
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
