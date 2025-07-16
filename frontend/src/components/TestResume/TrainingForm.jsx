import React, { useState } from "react";

const TrainingForm = ({ onChange }) => {
  const [trainings, setTrainings] = useState([
    {
      title: "",
      organization: "",
      startDate: "",
      endDate: "",
      description: "",
      certificate: null,
    },
  ]);

  const handleInputChange = (index, e) => {
    const { name, value, files } = e.target;
    const updatedTrainings = [...trainings];
    if (name === "certificate") {
      updatedTrainings[index][name] = files[0] || null;
    } else {
      updatedTrainings[index][name] = value;
    }
    setTrainings(updatedTrainings);
    if (onChange) onChange(updatedTrainings);
  };

  const addTraining = () => {
    setTrainings([
      ...trainings,
      {
        title: "",
        organization: "",
        startDate: "",
        endDate: "",
        description: "",
        certificate: null,
      },
    ]);
  };

  const removeTraining = (index) => {
    const updatedTrainings = trainings.filter((_, i) => i !== index);
    setTrainings(updatedTrainings);
    if (onChange) onChange(updatedTrainings);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Training & Certifications</h2>

      {trainings.map((training, idx) => (
        <div
          key={idx}
          className="mb-6 border border-gray-300 p-4 rounded relative"
        >
          {trainings.length > 1 && (
            <button
              type="button"
              onClick={() => removeTraining(idx)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold"
              title="Remove Training"
            >
              &times;
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor={`title-${idx}`}
              >
                Training Title<span className="text-red-500">*</span>
              </label>
              <input
                id={`title-${idx}`}
                name="title"
                type="text"
                value={training.title}
                onChange={(e) => handleInputChange(idx, e)}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="e.g., React Bootcamp"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor={`organization-${idx}`}
              >
                Organization<span className="text-red-500">*</span>
              </label>
              <input
                id={`organization-${idx}`}
                name="organization"
                type="text"
                value={training.organization}
                onChange={(e) => handleInputChange(idx, e)}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="e.g., Coursera"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor={`startDate-${idx}`}
              >
                Start Date<span className="text-red-500">*</span>
              </label>
              <input
                id={`startDate-${idx}`}
                name="startDate"
                type="month"
                value={training.startDate}
                onChange={(e) => handleInputChange(idx, e)}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor={`endDate-${idx}`}
              >
                End Date
              </label>
              <input
                id={`endDate-${idx}`}
                name="endDate"
                type="month"
                value={training.endDate}
                onChange={(e) => handleInputChange(idx, e)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Leave blank if ongoing"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor={`description-${idx}`}
            >
              Description
            </label>
            <textarea
              id={`description-${idx}`}
              name="description"
              value={training.description}
              onChange={(e) => handleInputChange(idx, e)}
              rows={3}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Briefly describe the training or skills gained"
            />
          </div>

          <div className="mt-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor={`certificate-${idx}`}
            >
              Upload Certificate (optional)
            </label>
            <input
              id={`certificate-${idx}`}
              name="certificate"
              type="file"
              accept="image/*,application/pdf"
              onChange={(e) => handleInputChange(idx, e)}
              className="w-full"
            />
            {training.certificate && (
              <p className="mt-1 text-sm text-gray-600">
                Selected file: {training.certificate.name}
              </p>
            )}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addTraining}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
      >
        + Add Another Training
      </button>
    </div>
  );
};

export default TrainingForm;
