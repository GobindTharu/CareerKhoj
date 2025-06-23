import { useSelector } from "react-redux";
import useGetAllJobs from "../../../hooks/useGetAllJobs";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useState } from "react";
import { Filter } from "lucide-react";

const JobLists = () => {
  useGetAllJobs(); // Fetch all jobs
  const allJobs = useSelector((state) => state.job.allJobs);
  const [showFilter, setShowFilter] = useState(false); // Toggle filter on mobile

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header and Filter Toggle */}
      <div className="flex items-center justify-between md:justify-start md:gap-8 mb-6 pt-16">
        <h1 className="text-2xl font-bold text-gray-800">Available Jobs</h1>
        <button
          className="md:hidden flex items-center gap-2 text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded border"
          onClick={() => setShowFilter(!showFilter)}
        >
          <Filter className="w-4 h-4" />
          {showFilter ? "Hide" : "Filter"}
        </button>
      </div>

      {/* Main Content: Flex-column on mobile, row on desktop */}
      <div className="flex flex-col md:flex-row gap-6 py-2">
        {/* Filter Sidebar */}
        {(showFilter || window.innerWidth >= 768) && (
          <div className="w-full md:w-1/4 lg:w-1/5  p-4 rounded">
            <FilterCard />
          </div>
        )}

        {/* Job Listings */}
        <div className="flex-1 max-h-[120vh] overflow-y-auto pr-2 custom-scroll shadow">
          {allJobs?.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              No jobs found.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {allJobs.map((job) => (
                <div key={job?._id}>
                  <Job job={job} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobLists;
