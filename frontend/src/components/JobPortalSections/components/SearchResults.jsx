import React from "react";
import NavBar from "./NavBar";
import Job from "./Job";

const ranJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const SearchResults = ({ job }) => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20">
        <h1 className="font-bold text-xl my-6">
          Search Results ( {ranJobs.length} )
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {job.map((job) => {
            return <Job key={job._id} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
