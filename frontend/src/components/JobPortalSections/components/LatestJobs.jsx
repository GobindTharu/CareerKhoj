import React from "react";
import LatestJobCards from "./LatestJobCards";

const RandomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LatestJobs = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto my-20">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-600">Latest & Top </span>
          JObs Openings
        </h1>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-7  mx-5 my-5 md:my-12 ">
          {RandomJobs.map((item, index) => (
            <LatestJobCards />
          ))}
        </div>

        {/* next and prevs */}
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
