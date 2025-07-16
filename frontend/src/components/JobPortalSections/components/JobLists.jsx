import { useSelector } from "react-redux";
import useGetAllJobs from "../../../hooks/useGetAllJobs";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useEffect, useState } from "react";
import { Filter } from "lucide-react";
import { motion } from "framer-motion";

const JobLists = () => {
  useGetAllJobs();
  const allJobs = useSelector((state) => state.job.allJobs);
  const searchedQuery = useSelector((state) => state.job.searchedQuery);
  const [showFilter, setShowFilter] = useState(false);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery && typeof searchedQuery === "string") {
      const filteredJobs = allJobs.filter((job) => {
        const query = searchedQuery.toLowerCase();

        if (query.includes("k") || query.includes("lakh")) {
          const salary = Number(job?.offer);

          if (query === "0-40k") return salary <= 40000;
          if (query === "42-1 lakh") return salary > 40000 && salary <= 100000;
          if (query === "1 lakh to 5 lakh")
            return salary > 100000 && salary <= 500000;

          return false;
        }

        // General text search
        return (
          job?.title?.toLowerCase().includes(query) ||
          job?.description?.toLowerCase().includes(query) ||
          job?.location?.toLowerCase().includes(query)
        );
      });

      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
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

      <div className="flex flex-col md:flex-row gap-6 py-2">
        {(showFilter || window.innerWidth >= 768) && (
          <div className="w-full md:w-1/4 lg:w-1/5  p-4 rounded">
            <FilterCard />
          </div>
        )}

        <div className="flex-1 max-h-[120vh] overflow-y-auto pr-2 custom-scroll shadow">
          {filterJobs?.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              No jobs found.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filterJobs.map((job) => (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  key={job?._id}
                >
                  <Job job={job} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobLists;
