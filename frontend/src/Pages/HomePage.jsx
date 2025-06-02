import HeroSection from "../components/JobPortalSections/components/HeroSection";
import NavBar from "../components/JobPortalSections/components/NavBar";
import AuthGuard from "../guard/AuthGuard";
import GuestGuard from "../guard/GuestGuard";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  );
}
