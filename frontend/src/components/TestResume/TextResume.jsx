import React, { useState } from "react";
import Sidebar from "./SideBar";
import ResumePreview from "./ResumePreview";
import AboutForm from "./AboutForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkilsForm";
import ExperienceForm from "./ExperienceForm";
import ProjectsForm from "./ProjectsForm";
import TrainingForm from "./TrainingForm";
import LanguageForm from "./LanguageForm";
import NavBar from "../JobPortalSections/components/NavBar";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    address: "",
    city: "",
    email: "",
    phone: "",
    summary: "",
    photo: null,
    education: [],
    school: "",
    degree: "",
    city: "",
    startDate: "",
    endDate: "",
    currentlyStudying: false,
    description: "",
  });

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
      case "Language":
        return <LanguageForm formData={formData} setFormData={setFormData} />;
      default:
        return <AboutForm formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <NavBar />
      <main className="py-20 w-full flex ">
        <Sidebar
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />

        <div className="flex mx-4 w-full  h-screen bg-gray-50 text-gray-700">
          <section className=" flex p-6 m-12 ">{renderSection()}</section>
          <ResumePreview formData={formData} />
        </div>
      </main>
    </>
  );
};

export default ResumeBuilder;
