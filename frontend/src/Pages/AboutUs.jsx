import About from "../components/JobPortalSections/components/About";
import Footer from "../components/JobPortalSections/components/Footer";
import NavBar from "../components/JobPortalSections/components/NavBar";

export default function AboutPage() {
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
      <About />
      <Footer />
    </>
  );
}
