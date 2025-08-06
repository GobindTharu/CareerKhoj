import WhyChooseCareerKhoj from "../components/JobPortalSections/components/WhyChooseCareerKhoj";
import Footer from "../components/JobPortalSections/components/Footer";
import HeroSection from "../components/JobPortalSections/components/HeroSection";
import NavBar from "../components/JobPortalSections/components/NavBar";
import LatestJobs from "../components/JobPortalSections/components/LatestJobs";
import HomeResumeLink from "../components/JobPortalSections/components/HomeResumeLink";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../redux/userSlice";
import useGetAllJobs from "../hooks/useGetAllJobs";
import { useNavigate } from "react-router-dom";
import FeatureSection from "../components/JobPortalSections/components/Responsve";
import CustomizePage from "../components/JobPortalSections/components/Customization";
import SEO from "../SEO/SEO";

export default function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.user);

  useEffect(() => {
    if (user?.role === "admin") {
      navigate("/admin/all-user");
    } else if (user?.role === "recruiter") {
      navigate("/recruiter/companies");
    }
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  useGetAllJobs();

  return (
    <>
      <SEO
        title="Nepal’s Leading Job Portal for Job Seekers & Employers"
        description="Find your dream job or hire skilled professionals in Nepal with CareerKhoj. Browse verified job listings, post jobs, and explore career opportunities today."
        url="https://careerkhoj.balgobindchaudhary.com.np/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "CareerKhoj",
          url: "https://careerkhoj.balgobindchaudhary.com.np",
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://careerkhoj.balgobindchaudhary.com.np/jobs?search={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <NavBar />
      <HeroSection />
      <HomeResumeLink />

      <CustomizePage />
      <LatestJobs />
      <WhyChooseCareerKhoj />
      <Footer />
    </>
  );
}
