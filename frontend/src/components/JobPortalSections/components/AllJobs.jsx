import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../../libs/axiosInstance";
import Job from "./Job";
import NavBar from "./NavBar";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Extract keyword from URL query
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  useEffect(() => {
    if (!keyword) return;
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get("/jobs/search", {
          params: { keyword },
        });
        setJobs(res.data.jobs || []);
      } catch (err) {
        console.error("Fetch failed", err);
        setError("Failed to fetch jobs. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [keyword]);

  return (
    <>
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">
          Search Results for: <span className="text-green-600">{keyword}</span>
        </h2>

        {loading && <p>Loading jobs...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && jobs.length === 0 && <p>No jobs found.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <Job key={job._id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default JobsPage;
