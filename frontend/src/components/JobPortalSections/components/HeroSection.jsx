import React from "react";
import { Stats } from "./Stats";
import { JobSearchForm } from "./JobSearchForm";
import { JobCategories } from "./JobCategory";
import Resume from "../../../Pages/Home/Dashboard";


const HeroSection = () => (
  <>
    <div className=" flex flex-col gap-2 bg-gradient-to-r from-indigo-700 to-purple-600 text-white pt-22 px-8 text-center">
      <p className="text-sm mb-2">
        Find Job, Employment, and Career Opportunities
      </p>
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
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
