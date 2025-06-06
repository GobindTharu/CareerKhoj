import { JobCategories } from "./JobCategory";
import { JobSearchForm } from "./JobSearchForm";
import { Stats } from "./Stats";

const HeroSection = () => (
  <div className="relative min-h-[90vh]">
    {/* Blurred Background Layer */}
    <div
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed filter blur-8"
      style={{
        backgroundImage: `url('./homepagebackground.avif')`,
      }}
    ></div>

    {/* Overlay */}
    <div className="absolute inset-0 z-10 bg-black/20"></div>

    {/* Main Content */}
    <div className="relative z-20 flex flex-col gap-4 pt-24 px-6 text-center text-white">
      <p className="text-lg font-bold mb-2 text-transparent bg-clip-text bg-white">
        Find Job, Employment, and Career Opportunities
      </p>

      <h1
        className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-white"
        style={{
          WebkitBackgroundClip: "text",
        }}
      >
        <span className="text-blue-600">CareerKhoj</span> : Your Personal Career
        Launchpad
      </h1>

      <Stats />
      <JobSearchForm />
      <JobCategories />
    </div>
  </div>
);

export default HeroSection;
