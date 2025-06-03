import { JobCategories } from "./JobCategory";
import { JobSearchForm } from "./JobSearchForm";
import { Stats } from "./Stats";

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
        backgroundAttachment: "fixed", // <-- Added this line
        color: "white",
      }}
    >
      <p className="text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-purple-700">
        Find Job, Employment, and Career Opportunities
      </p>

      <h1
        className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-white"
        style={{
          WebkitBackgroundClip: "text",
        }}
      >
       <span className="text-blue-600">CareerKhoj</span> : Your Personal Career Launchpad
      </h1>

      <Stats />
      <JobSearchForm />
      <JobCategories />
    </div>

 
  </>
);

export default HeroSection;
