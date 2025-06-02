import Footer from "../components/JobPortalSections/components/Footer";
import NavBar from "../components/JobPortalSections/components/NavBar";
import ResumeBuilder from "../components/ResumeSections/ResumeTempletes/ResumeBuilder";

export default function BuildResume() {
  return (
    <>
      <NavBar />
      <ResumeBuilder />
      <Footer />
    </>
  );
}
