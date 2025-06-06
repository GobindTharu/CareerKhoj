import React from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import JobList from "./JobLists";

const JobLists = () => {
  const allJobs = useSelector((state) => state.job.allJobs);

  return (
    <>
      <div className="max-w-7xl mx-auto py-35">
        <div className="flex gap-5">
          <div className="w-20% ">
            <FilterCard />
          </div>

          {allJobs.length < 0 ? (
            <span>JOb Not Found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4 p-2">
                {allJobs.map((job) => (
                  <div>
                    <Job key={job._id} job={job} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobLists;
