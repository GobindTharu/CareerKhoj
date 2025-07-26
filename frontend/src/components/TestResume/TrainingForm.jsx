import React from "react";

const TrainingForm = ({ formData, setFormData }) => {
  // Ensure trainings array exists in formData
  const trainings = formData.trainings || [
    {
      title: "",
      organization: "",
      startDate: "",
      endDate: "",
      description: "",
      certificate: null,
    },
  ];

  const updateTraining = (index, e) => {
    const { name, value, files } = e.target;
    const updatedTrainings = [...trainings];

    if (name === "certificate") {
      updatedTrainings[index][name] = files[0] || null;
    } else {
      updatedTrainings[index][name] = value;
    }

    setFormData({ ...formData, trainings: updatedTrainings });
  };

  const addTraining = () => {
    setFormData({
      ...formData,
      trainings: [
        ...trainings,
        {
          title: "",
          organization: "",
          startDate: "",
          endDate: "",
          description: "",
          certificate: null,
        },
      ],
    });
  };

  const removeTraining = (index) => {
    const updatedTrainings = trainings.filter((_, i) => i !== index);
    setFormData({ ...formData, trainings: updatedTrainings });
  };

  return (
    <div className="w-full rounded ">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">
        Training & Certifications
      </h2>
      <p className="text-gray-500 mb-6">
        Add your trainings or certifications.
      </p>

      {trainings.map((training, idx) => (
        <div key={idx} className="mb-6   rounded relative">
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
            <input
              type="text"
              name="title"
              placeholder="Training Title"
              value={training.title}
              onChange={(e) => updateTraining(idx, e)}
              className="border-b p-2 focus:outline-none"
            />

            <input
              type="text"
              name="organization"
              placeholder="Organization"
              value={training.organization}
              onChange={(e) => updateTraining(idx, e)}
              className="border-b p-2 focus:outline-none"
            />

            <input
              type="month"
              name="startDate"
              value={training.startDate}
              onChange={(e) => updateTraining(idx, e)}
              className="border-b p-2 focus:outline-none"
            />

            <input
              type="month"
              name="endDate"
              value={training.endDate}
              onChange={(e) => updateTraining(idx, e)}
              className="border-b p-2 focus:outline-none"
              placeholder="Leave blank if ongoing"
            />
          </div>

          <textarea
            name="description"
            value={training.description}
            onChange={(e) => updateTraining(idx, e)}
            placeholder="Briefly describe the training or skills gained"
            className="w-full border p-2 mt-4"
            rows={3}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addTraining}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-2 py-2 rounded transition"
      >
        + Add Training
      </button>
    </div>
  );
};

export default TrainingForm;
