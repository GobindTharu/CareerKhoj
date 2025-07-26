import { useState } from "react";
import NavBar from "../JobPortalSections/components/NavBar";
import AboutForm from "./AboutForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
// import LanguageForm from "./LanguageForm";
import ResumeDownloadPage from "./Resumedownload";
import Sidebar from "./SideBar";
import TrainingForm from "./TrainingForm";
import ProjectsForm from "./ProjectsForm";
import SkillsForm from "./SkilsForm";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({});
  console.log(formData);
  const [currentSection, setCurrentSection] = useState("About");

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
      // case "Language":
      //   return <LanguageForm formData={formData} setFormData={setFormData} />;
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
            <ResumeDownloadPage formData={formData} />
          </div>
        </div>
      </main>
    </>
  );
};

export default ResumeBuilder;
