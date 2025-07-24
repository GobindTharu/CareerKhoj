import React, { useEffect, useState } from "react";
import NavBar from "../../components/JobPortalSections/components/NavBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useGetAllCompanies from "../../hooks/useGetAllCompanies";
import CompaniesTable from "./CompaniesTable";
import { setSearchCompanyByText } from "../../redux/companySlice";

const Companies = () => {
  const navigate = useNavigate();
  const company = useSelector((state) => state.company);

  useGetAllCompanies();

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
  }, [input]);

  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto py-32">
        <div className="flex justify-between items-center px-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Filter by name"
            className="border-gray-700 border-1 py-2 px-3 rounded-lg"
          />
          <button
            onClick={() => {
              navigate("/recruiter/company/create");
            }}
            className="text-white hover:bg-black bg-gray-800 py-2 px-3 rounded-md"
          >
            Add Companies
          </button>
        </div>
        <CompaniesTable key={company?._id} company={company} />
      </div>
    </>
  );
};

export default Companies;
