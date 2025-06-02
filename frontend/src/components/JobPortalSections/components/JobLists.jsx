import React from "react";
import { useNavigate } from "react-router-dom";

const jobList = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "F1Soft International Pvt. Ltd.",
    location: "Kathmandu, Bāgmatī, Nepal",
    tag: "1 school alum works here",
  },
  {
    id: 2,
    title: "Mid-level React Native Developer",
    company: "TalentSathi - Simplifying the Recruitment",
    location: "Kathmandu, Bāgmatī, Nepal (On-site)",
    tag: "Company review time is typically 1 week",
  },
  {
    id: 3,
    title: "Service Technician",
    company: "Generation Next Communication Pvt. Ltd.",
    location: "Kathmandu, Bāgmatī, Nepal (On-site)",
    tag: "Actively reviewing applicants",
  },
];

const JobList = () => {
  const navigate = useNavigate();

  const handleClick = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white border rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-4">Top job picks for you</h2>
      <p className="text-sm text-gray-600 mb-4">
        Based on your profile, preferences, and activity like applies, searches, and saves
      </p>
      <ul className="space-y-4">
        {jobList.map((job) => (
          <li
            key={job.id}
            className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer flex justify-between items-start"
            onClick={() => handleClick(job.id)}
          >
            <div>
              <p className="text-blue-600 font-medium">{job.title}</p>
              <p className="text-sm text-gray-700">{job.company} · {job.location}</p>
              {job.tag && (
                <p className="text-xs text-gray-500 mt-1">{job.tag}</p>
              )}
              <p className="text-xs text-gray-400 mt-1">Viewed · Easy Apply</p>
            </div>
            <button className="text-gray-400 hover:text-red-500 text-lg font-bold">×</button>
          </li>
        ))}
      </ul>
      <div className="text-center mt-4">
        <button className="text-blue-600 hover:underline font-medium text-sm">
          Show all →
        </button>
      </div>
    </div>
  );
};

export default JobList;
