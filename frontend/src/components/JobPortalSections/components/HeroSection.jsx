import React from "react";
import { Stats } from "./Stats";
import { JobSearchForm } from "./JobSearchForm";
import { JobCategories } from "./JobCategory";
import Resume from "../../../Pages/Home/Dashboard";

const HeroSection = () => (
  <>
    <div
      className="flex flex-col gap-4 pt-24 px-6 text-center min-h-[90vh]"
      style={{
        backgroundImage: `url('./homepagebackground.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundAttachment: "fixed",  // <-- Added this line
        color: "white",
          
      }}
    >
      <p className="text-sm mb-2 text-transparent bg-clip-text bg-white">
        Find Job, Employment, and Career Opportunities
      </p>

      <h1
        className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-white"
        style={{
          WebkitBackgroundClip: "text",
        }}
      >
        CareerKhoj: Your Personal Career Launchpad
      </h1>

      <Stats />
      <JobSearchForm />
      <JobCategories />
    </div>

    <Resume />
  </>
);

export default HeroSection;

