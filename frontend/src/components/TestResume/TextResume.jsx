import React, { useState } from "react";
import Sidebar from "./SideBar";
import ResumeDownloadPage from "./Resumedownload";
import AboutForm from "./AboutForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import TrainingForm from "./TrainingForm";
import LanguageForm from "./LanguageForm";
import NavBar from "../JobPortalSections/components/NavBar";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({});
  console.log(formData);
  const [currentSection, setCurrentSection] = useState("About");
  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value); // ❌ Do NOT navigate
  };

  const renderSection = () => {
    switch (currentSection) {
      case "About":
        return <AboutForm formData={formData} setFormData={setFormData} />;
      case "Education":
        return <EducationForm formData={formData} setFormData={setFormData} />;
      case "Skills":
        return <SkillsForm formData={formData} setFormData={setFormData} />;
      case "Experience":
        return <ExperienceForm formData={formData} setFormData={setFormData} />;
      case "Projects":
        return <ProjectsForm formData={formData} setFormData={setFormData} />;
      case "Trainings":
        return <TrainingForm formData={formData} setFormData={setFormData} />;
      case "Language":
        return <LanguageForm formData={formData} setFormData={setFormData} />;
      default:
        return <AboutForm formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <NavBar />
      <main className="py-20 w-full flex">
        <Sidebar
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />

        <div className="flex flex-col md:flex-row mx-4 w-full min-h-screen bg-gray-50 text-gray-700">
          <section className="w-full md:w-1/4 flex p-6 m-12">
            {renderSection()}
          </section>

          <div className="flex flex-col w-full px-4 pt-8">
            <div className="flex justify-end mb-4">
              <label className="mr-2 text-sm font-medium text-gray-700">
                Select Template:
              </label>
              <select
                onChange={handleTemplateChange}
                value={selectedTemplate}
                className="border border-gray-300 rounded px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="classic">Classic</option>
                <option value="professional">Professional</option>
                <option value="modern">Modern</option>
                <option value="minimal">Minimal</option>
              </select>
            </div>

            <ResumeDownloadPage
              formData={formData}
              selectedTemplate={selectedTemplate}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default ResumeBuilder;
