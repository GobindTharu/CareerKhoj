import React, { useState } from "react";

import ResumeForm from "./ResumeForm";
import ResumeTemplate1 from "./ResumeTemplate1";
import ResumeTemplate2 from "./ResumeTemplate2";
import ResumeTemplate3 from "./ResumeTemplate3";
import ResumeTemplate4 from "./ResumeTemplate4";
import ResumeTemplate5 from "./ResumeTemplate5";


const ResumeBuilder = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState("1");

  const handleSubmit = (data) => {
    console.log("Received form data in resume.jsx:", data); // Debug log
    setIsLoading(true);
    // Simulate async submission (e.g., API call)
    setTimeout(() => {
      setFormData(data);
      setIsSubmitted(true);
      setIsLoading(false);
    }, 500); // Short delay to show loading state
  };

  const handleEdit = () => {
    setIsSubmitted(false);
    setFormData(null);
  };

  const templates = {
    1: ResumeTemplate1,
    2: ResumeTemplate2,
    3: ResumeTemplate3,
    4: ResumeTemplate4,
    5: ResumeTemplate5,
  };

  const SelectedTemplate = templates[selectedTemplate];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          Build Your Professional Resume
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Create a standout resume in minutes with our easy-to-use, guided form.
          Choose a template after submitting your details.
        </p>
        {isLoading ? (
          <div className="text-center py-8">
            <p className="text-lg text-gray-600">
              Generating your resume preview...
            </p>
          </div>
        ) : isSubmitted && formData ? (
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Choose a Resume Template
              </h3>
              <div className="flex space-x-4">
                <select
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className="p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="1">Classic</option>
                  <option value="2">Modern</option>
                  <option value="3">Minimalist</option>
                  <option value="4">Creative</option>
                  <option value="5">Professional</option>
                </select>
                <button
                  onClick={handleEdit}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  Back to Form
                </button>
                <button
                  onClick={() => alert("PDF generation placeholder")}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Download PDF
                </button>
              </div>
            </div>
            <SelectedTemplate {...formData} />
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
            <ResumeForm onSubmit={handleSubmit} />
          </div>
        )}
        {isSubmitted && !formData && (
          <div className="text-center py-8 text-red-600">
            <p>
              Error: No data received. Please try submitting the form again.
            </p>
            <button
              onClick={handleEdit}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Back to Form
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
