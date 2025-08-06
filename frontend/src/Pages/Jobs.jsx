import Footer from "../components/JobPortalSections/components/Footer";
import JobLists from "../components/JobPortalSections/components/JobLists";
import NavBar from "../components/JobPortalSections/components/NavBar";
import useGetAllJobs from "../hooks/useGetAllJobs";
import SEO from "../SEO/SEO";

export default function Jobs() {
  useGetAllJobs();
  return (
    <>
      <SEO
        title="Browse Latest Job Openings in Nepal"
        description="Explore the most recent job listings across IT, government, and private sectors in Nepal. Apply easily through CareerKhoj."
        url="https://careerkhoj.balgobindchaudhary.com.np/jobs"
      />
      <NavBar />
      <JobLists />
      <Footer />
    </>
  );
}
