import WhyChooseCareerKhoj from "../components/JobPortalSections/components/WhyChooseCareerKhoj";
import Footer from "../components/JobPortalSections/components/Footer";
import HeroSection from "../components/JobPortalSections/components/HeroSection";
import NavBar from "../components/JobPortalSections/components/NavBar";
import LatestJobs from "../components/JobPortalSections/components/LatestJobs";
import HomeResumeLink from "../components/JobPortalSections/components/HomeResumeLink";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../redux/userSlice";
import useGetAllJobs from "../hooks/useGetAllJobs";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  useGetAllJobs();

  return (
    <>
      <NavBar />
      <HeroSection />
      <HomeResumeLink />
      <LatestJobs />
      <WhyChooseCareerKhoj />
      <Footer />
    </>
  );
}
