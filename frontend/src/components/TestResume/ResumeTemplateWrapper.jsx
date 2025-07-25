import React from "react";
import { useParams } from "react-router-dom";
import ClassicTemplate from "./ClassicTemplate";
import ProfessionalTemplate from "./ProfessionalTemplate";
import ModernTemplate from "./ModernTemplate";
import MinimalTemplate from "./MinimalTemplate";


const ResumeTemplateWrapper = () => {
  const { templateId } = useParams();

  switch (templateId) {
    case "classic":
      return <ClassicTemplate/>;
    case "professional":
      return <ProfessionalTemplate/>;
    case "modern":
      return <ModernTemplate/>;
    case "minimal":
      return <MinimalTemplate/>;
  
    default:
      return <div>Template not found</div>;
  }
};

export default ResumeTemplateWrapper;
