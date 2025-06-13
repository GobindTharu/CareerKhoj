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
            allJobs?.map((job) => <LatestJobCards key={job._id} job={job} />)
          )}
        </div>

        <div className="flex justify-end mt-4">
          <button
            //   disabled={currentPage <= 1}
            //   onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 text-blue-600 bg-gray-200 rounded mr-2 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            //   disabled={currentPage >= totalPage}
            //   onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 text-blue-600 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default LatestJobs;
