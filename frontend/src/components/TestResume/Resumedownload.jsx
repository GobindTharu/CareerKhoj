import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import ClassicTemplate from "./ClassicTemplate";
import ProfessionalTemplate from "./ProfessionalTemplate";
import ModernTemplate from "./ModernTemplate";
import MinimalTemplate from "./MinimalTemplate";

const ResumeDownloadPage = ({ formData }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value);
  };
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: resumeRef, // NEW API
    documentTitle: "resume",
  });

  const renderSelectedTemplate = () => {
    switch (selectedTemplate) {
      case "classic":
        return <ClassicTemplate ref={resumeRef} formData={formData} />;
      case "professional":
        return <ProfessionalTemplate ref={resumeRef} formData={formData} />;
      case "modern":
        return <ModernTemplate ref={resumeRef} formData={formData} />;
      case "minimal":
        return <MinimalTemplate ref={resumeRef} formData={formData} />;
      default:
        return <ClassicTemplate ref={resumeRef} formData={formData} />;
    }
  };

  return (
    <div className="p-4 w-full">
      <div className="flex items-center justify-between w-full text-end">
        <div className="flex justify-end mb-4">
          <label className="mr-2 text-base font-medium text-gray-700">
            Select Template:
          </label>
          <select
            onChange={handleTemplateChange}
            value={selectedTemplate}
            className="border border-gray-300 rounded px-3 py-1 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="classic">Classic</option>
            <option value="professional">Professional</option>
            <option value="modern">Modern</option>
            <option value="minimal">Minimal</option>
          </select>
        </div>
        <button
          onClick={handlePrint}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>

      {renderSelectedTemplate()}
    </div>
  );
};

export default ResumeDownloadPage;
