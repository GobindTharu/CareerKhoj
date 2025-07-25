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
      <head>
        <title>CareerKhoj</title>
        <meta name="CareerKhoj" content="" />
        <link rel="canonical" href={`https://careerkhoj.com/jobs/`} />
        <meta property="og:title" content={` CareerKhoj`} />
        <meta property="og:description" content="careerkhoj" />
        <meta property="og:image" content="careerkhoj" />
      </head>
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
