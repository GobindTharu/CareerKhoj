import Footer from "../components/JobPortalSections/components/Footer";
import JobLists from "../components/JobPortalSections/components/JobLists";
import NavBar from "../components/JobPortalSections/components/NavBar";
import useGetAllJobs from "../hooks/useGetAllJobs";

export default function Jobs() {
  useGetAllJobs();
  return (
    <>
      <NavBar />
      <JobLists />
      <Footer />
    </>
  );
}
