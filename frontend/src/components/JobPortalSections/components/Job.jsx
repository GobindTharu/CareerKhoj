import React from "react";
import { Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  const daysLeft = getDaysLeftToApply(job.deadline);
  const postedAgo = getPostedDaysAgo(job.createdAt);

  return (
    <div className="p-3 rounded-md shadow-xl bg-white border-gray-100">
      <div className="flex items-center justify-between ">
        <p className="text-sm text-blue-600">{postedAgo}</p>
        <button className=" rounded-full text-sm text-white bg-gray-400 hover:bg-gray-300 p-2 border">
          <Bookmark />
        </button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <button className="py-1">
          <div className=" flex items-center justify-center w-16 h-16">
            <img src="./company.png" alt=" company logo" />
          </div>
        </button>
        <div>
          <h1 className="font-medium text-lg ">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>

<<<<<<< HEAD
        <p className="h-15 overflow-y-hidden text-sm text-gray-600">
          {job?.description}
        </p>
=======
        <p className="h-15 overflow-hidden text-sm text-gray-600">{job?.description}</p>
>>>>>>> backend
      </div>
      <div className="flex items-center gap-2 mt-8">
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-2 py-1 rounded-full shadow-sm">
          {job?.positions} Positions
        </span>
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-2 py-1 rounded-full shadow-sm">
          {job.jobType}
        </span>
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-2 py-1 rounded-full shadow-sm">
          Rs.{job?.salary}salary
        </span>
      </div>
      <p className="flex justify-end pt-12 text-sm text-blue-600">{daysLeft}</p>
      <div className="flex justify-between mt-3 px-2">
        <button
          onClick={() => navigate(`/job-details/${job?._id}`)}
          className="px-3 py-1 text-white bg-gray-950 rounded-lg mr-2 disabled:opacity-50"
        >
          Details
        </button>
        <button className="px-3 py-1 text-white bg-gray-950 rounded-lg disabled:opacity-50">
          Apply
        </button>
      </div>
    </div>
  );
};

export const getPostedDaysAgo = (createdAt) => {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const diffTime = Math.abs(now - createdDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays === 0
    ? "Today"
    : `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
};

export const getDaysLeftToApply = (deadline) => {
  const deadlineDate = new Date(deadline);
  const now = new Date();
  const diffTime = deadlineDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "Application closed";
  if (diffDays === 0) return "Last day to apply!";
  return `${diffDays} day${diffDays > 1 ? "s" : ""} left`;
};

export default Job;
