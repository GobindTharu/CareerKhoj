import React from "react";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/job-details/${job?._id}`)}
      className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer"
    >
      <div className="py-2 flex items-center gap-4 ">
        <div className=" flex items-center justify-center w-16 h-16  ">
          <img src={job?.company?.logo || "/company.png"} alt="" className="" />
        </div>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl my-2">{job?.title}</h1>
        <p className="h-15 overflow-y-hidden text-sm text-gray-600">
          {" "}
          {job?.description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
          {job?.positions} Positions
        </span>
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
          {job.jobType}
        </span>
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
          Rs. {job?.salary} Salary
        </span>
      </div>
    </div>
  );
};

export default LatestJobCards;
