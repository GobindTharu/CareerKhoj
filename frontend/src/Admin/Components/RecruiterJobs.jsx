import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import RecruiterJobsTable from "./RecruiterJobsTable";
import { setSearchJobByText } from "../../redux/jobSlice"; // <- make sure this import exists
import useGetAllRecruiterJobs from "../../hooks/useGetAllRecruiterJobs";
import NavBar from "../../components/JobPortalSections/components/NavBar";

const RecruiterJobs = () => {
  useGetAllRecruiterJobs();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);

  return (
    <main>
      <NavBar />
      <div className="max-w-6xl mx-auto py-32">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between my-5">
          <input
            type="text"
            placeholder="Filter by name, role"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full sm:w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => navigate("/recruiter/jobs/create")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
          >
            New Job
          </button>
        </div>
        <RecruiterJobsTable />
      </div>
    </main>
  );
};

export default RecruiterJobs;
