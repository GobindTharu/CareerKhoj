import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const allJobs = useSelector((state) => state.job.allJobs);
  return (
    <>
      <div className="max-w-7xl mx-auto my-20">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-600">Latest & Top </span>
          JObs Openings
        </h1>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-7  mx-5 my-5 md:my-12 ">
          {Array.isArray(allJobs) && allJobs.length <= 0 ? (
            <span>No Jobs Available</span>
          ) : (
            allJobs
              ?.slice(0, 6)
              .map((job) => <LatestJobCards key={job._id} job={job} />)
          )}
        </div>
      </div>
    </>
  );
};

export default LatestJobs;
