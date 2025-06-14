import React from "react";
import NavBar from "../../components/JobPortalSections/components/NavBar";
import Footer from "../../components/JobPortalSections/components/Footer";
import CompanyTable from "./CompanyTable";
import { useNavigate } from "react-router-dom";

const Companies = () => {
const navigate = useNavigate();

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
          <button onClick={() => {
            navigate("/recruiter/company/create")
          }
          } className="text-white hover:bg-black bg-gray-800 py-2 px-3 rounded-md">
            New Company
          </button>
        </div>
        <CompanyTable />
      </div>
    </>
  );
};

export default Companies;
