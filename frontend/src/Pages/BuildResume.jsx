import Footer from "../components/JobPortalSections/components/Footer";
import NavBar from "../components/JobPortalSections/components/NavBar";
import ResumeBuilder from "../components/ResumeSections/ResumeTemplates/ResumeBuilder";

export default function BuildResume() {
  return (
    <>
      <head>
        <title>CareerKhoj</title>
        <meta name="CareerKhoj" content="" />
        <link rel="canonical" href={`https://careerkhoj.com/jobs/`} />
        <meta property="og:title" content={` CareerKhoj`} />
        <meta property="og:description" content="careerkhoj" />
        <meta property="og:image" content="careerkhoj" />
      </head>
      <NavBar />
      <ResumeBuilder />
      <Footer />
    </>
  );
}
