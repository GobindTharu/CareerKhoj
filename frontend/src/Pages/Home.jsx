import WhyChooseCareerKhoj from "../components/JobPortalSections/components/WhyChooseCareerKhoj";
import Footer from "../components/JobPortalSections/components/Footer";
import HeroSection from "../components/JobPortalSections/components/HeroSection";
import NavBar from "../components/JobPortalSections/components/NavBar";
import LatestJobs from "../components/JobPortalSections/components/LatestJobs";
import HomeResumeLink from "../components/JobPortalSections/components/HomeResumeLink";

export default function HomePage() {
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
