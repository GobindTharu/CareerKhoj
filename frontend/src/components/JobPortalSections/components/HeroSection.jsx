import { JobSearchForm } from "./JobSearchForm";
import { Stats } from "./Stats";
// import { JobCategories } from "./JobCategory";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-full max-w-4xl px-4 text-center">
      <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-snug mb-4">
        <span className="text-blue-600 we">CareerKhoj</span>
        <span className="block">Your Personal Career Launchpad</span>
      </h1>

      <p className="text-base sm:text-lg text-gray-600 mb-8">
        Explore opportunities, find your path, and launch your future.
      </p>

      <div className="mb-10">
        <JobSearchForm />
      </div>

      <Stats />

      {/* <div className="mt-12">
        <JobCategories />
      </div> */}
    </div>
  </section>
);

export default HeroSection;
