import { useState } from "react";
import axiosInstance from "../../../libs/axiosInstance";
import Job from "./Job";

export const JobSearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/jobs/search", {
        withCredentials: true,
        params: {
          keyword,
        },
      });
      console.log(res.data);
      setJobs(res.data.jobs);
    } catch (err) {
      console.error("Search failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 bg-gray-50 text-black rounded-lg shadow-md w-full max-w-5xl mx-auto p-6">
      <h1 className="font-bold text-2xl">
        Search, Apply &{" "}
        <span className="text-blue-600">Get Your Dream Job</span>
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault(); // prevents page reload
          handleSearch();
        }}
        className="flex flex-col md:flex-row gap-4 items-center py-8"
      >
        <input
          type="text"
          placeholder="e.g. Web Developer, Graphic Designer"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 p-2 border rounded w-full"
        />

        <button
          onClick={handleSearch}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); 
              handleSearch();
            }
          }}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 w-full md:w-auto"
        >
          Search
        </button>
      </form>

      <div className="w-5xl absolute z-10 mt-4 bg-gray-200">
        <h2 className="text-xl font-semibold mb-4">Search Results</h2>

        {loading ? (
          <p className="text-gray-600">Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <p className="text-gray-500">No jobs found for your criteria.</p>
        ) : (
          <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
            <div className="grid grid-cols-3 gap-4 p-1">
              {jobs.map((job) => (
                <div>
                  <Job key={job?._id} job={job} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
