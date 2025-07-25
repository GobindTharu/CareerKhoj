import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ClassicTemplate from "./ClassicTemplate";
import ProfessionalTemplate from "./ProfessionalTemplate";
import ModernTemplate from "./ModernTemplate";
import MinimalTemplate from "./MinimalTemplate";

const ResumeDownloadPage = ({ formData, selectedTemplate }) => {
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
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
      <div className="w-full text-end">
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
