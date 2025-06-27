import React from "react";
import NavBar from "../../components/JobPortalSections/components/NavBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import JobsTable from "./JobsTable";

const Companies = () => {
  const navigate = useNavigate();
  const company = useSelector((state) => state.Company);

  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto py-32">
        <div className="flex justify-between items-center px-6">
          <input
            type="text"
            placeholder="Filter by name"
            className="border-gray-700 border-1 py-2 px-3 rounded-lg"
          />
          <button
            onClick={() => {
              navigate("/recruiter/company/create");
            }}
            className="text-white hover:bg-black bg-gray-800 py-2 px-3 rounded-md"
          >
            New Company
          </button>
        </div>
        <JobsTable key={company?._id} company={company}/>
      </div>
    </>
  );
};

export default Companies;
