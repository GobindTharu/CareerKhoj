import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import { FaBriefcase } from "react-icons/fa";

const LatestJobs = () => {
  const allJobs = useSelector((state) => state.job.allJobs);

  return (
    <section className="max-w-7xl mx-auto my-24 px-6 sm:px-12 lg:px-24">
      {/* Header */}
      <header className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          Latest & Top Job Openings
        </h2>
        <div className="mt-2 h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
      </header>

      {/* Content */}
      {Array.isArray(allJobs) && allJobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-4 text-gray-500">
          <FaBriefcase size={56} className="opacity-30" />
          <p className="text-xl font-semibold">No Jobs Available</p>
          <p className="max-w-sm text-center text-gray-400">
            We couldn't find any jobs at the moment. Check back soon for fresh opportunities!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {allJobs?.slice(0, 6).map((job) => (
            <div
              key={job._id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <LatestJobCards job={job} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestJobs;
