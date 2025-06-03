import React from "react";
import { useNavigate } from "react-router-dom";

const LatestJobCards = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/job-details")}
      className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer"
    >
      <div className="py-2 flex items-center gap-4 ">
        <div className=" flex items-center justify-center w-16 h-16  ">
          <img src="./company.png" alt="" className="" />
        </div>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">Kathamndu</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicingdolor sit amet
          consectetur adipisicing elit. elit.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
          10 Positions
        </span>
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
          Full-Time
        </span>
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
          Rs. 40k-60k salary
        </span>
      </div>
    </div>
  );
};

export default LatestJobCards;
