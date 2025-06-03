import React from "react";
import { Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3 rounded-md shadow-xl bg-white border-gray-100">
      <div className="flex items-center justify-between ">
        <p className="text-sm text-gray-500">2 day ago</p>
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
          <h1 className="font-medium text-lg ">Company Name</h1>
          <p className="text-sm text-gray-500">Tinkune, Kathmandu</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          perspiciatis tenetur
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-2 py-1 rounded-full shadow-sm">
          10 Positions
        </span>
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-2 py-1 rounded-full shadow-sm">
          Full-Time
        </span>
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-2 py-1 rounded-full shadow-sm">
          Rs.40k-60 salary
        </span>
      </div>
      <div className="flex justify-between mt-12 px-2">
        <button
          onClick={() => navigate("/job-details")}
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

export default Job;
