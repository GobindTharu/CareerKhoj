import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaUsers, FaMoneyBillWave } from "react-icons/fa";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/job-details/${job?._id}`)}
      className="cursor-pointer bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between h-full"
    >
      {/* Company & Location */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-gray-300 flex items-center justify-center bg-gray-50">
          <img
            src={job?.company?.logo || "/company.png"}
            alt={`${job?.company?.name} logo`}
            className="object-contain w-full h-full"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{job?.company?.name}</h3>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>

      {/* Job Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{job?.title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {job?.description || "No description available."}
      </p>

      {/* Job info tags */}
      <div className="flex flex-wrap gap-3 mt-auto">
        <span className="flex items-center gap-1 text-blue-600 bg-blue-100 rounded-full px-3 py-1 text-xs font-medium shadow-sm">
          <FaUsers className="w-3 h-3" /> {job?.positions} Position{job?.positions > 1 ? "s" : ""}
        </span>

        <span className="flex items-center gap-1 text-blue-600 bg-blue-100 rounded-full px-3 py-1 text-xs font-medium shadow-sm">
          <FaBriefcase className="w-3 h-3" /> {job?.jobType}
        </span>

        <span className="flex items-center gap-1 text-blue-600 bg-blue-100 rounded-full px-3 py-1 text-xs font-medium shadow-sm">
          <FaMoneyBillWave className="w-3 h-3" /> Rs. {job?.salary || "N/A"} Salary
        </span>
      </div>
    </div>
  );
};

export default LatestJobCards;
