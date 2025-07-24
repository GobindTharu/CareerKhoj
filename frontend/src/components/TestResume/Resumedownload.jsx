import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ResumePreview from "./ResumePreview";

const ResumeDownloadPage = ({ formData }) => {
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: resumeRef, // NEW API
    documentTitle: "resume",
  });

  return (
    <div className="p-4">
      <div className="w-full text-end">
        <button
          onClick={handlePrint}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>

      <ResumePreview ref={resumeRef} formData={formData} />
    </div>
  );
};

export default ResumeDownloadPage;
