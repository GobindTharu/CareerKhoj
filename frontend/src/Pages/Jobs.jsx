import Footer from "../components/JobPortalSections/components/Footer";
import JobLists from "../components/JobPortalSections/components/JobLists";
import NavBar from "../components/JobPortalSections/components/NavBar";
import useGetAllJobs from "../hooks/useGetAllJobs";

export default function Jobs() {
  useGetAllJobs();
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
      <JobLists />
      <Footer />
    </>
  );
}
