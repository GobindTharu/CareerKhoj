import React, { useEffect, useState } from "react";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const companies = useSelector((state) => state.company?.allCompany || []);
  const searchCompanyByText = useSelector(
    (state) => state.company?.searchCompanyByText || ""
  );
  const [filterCompany, setFilterCompany] = useState(companies);
  const [openPopoverId, setOpenPopoverId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Array.isArray(companies)) {
      setFilterCompany([]);
      return;
    }
    const searchText =
      typeof searchCompanyByText === "string"
        ? searchCompanyByText.toLowerCase()
        : "";

    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!searchCompanyByText) return true;
        return company?.name?.toLowerCase().includes(searchText);
      });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);

  const togglePopover = (id) => {
    setOpenPopoverId(openPopoverId === id ? null : id);
  };

  return (
    <div className="overflow-x-auto mt-6  min-h-screen">
      <table className="min-w-full border border-gray-200 text-sm">
        <caption className="text-gray-500 py-2">
          A list of your recent registered companies
        </caption>
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left py-3 px-4 border-b">Logo</th>
            <th className="text-left py-3 px-4 border-b">Name</th>
            <th className="text-left py-3 px-4 border-b">Date</th>
            <th className="text-right py-3 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {filterCompany?.map((company) => (
            <tr key={company._id} className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b">
                <img
                  src={company?.logo || null}
                  alt={company.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </td>
              <td className="py-3 px-4 border-b">{company.name}</td>
              <td className="py-3 px-4 border-b">
                {company.createdAt?.split("T")[0]}
              </td>
              <td className="py-3 px-4 border-b text-right relative">
                <button
                  onClick={() => togglePopover(company._id)}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <MoreHorizontal size={18} />
                </button>

                {openPopoverId === company._id && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded z-10">
                    <div
                      onClick={() =>
                        navigate(`/recruiter/company-update/${company._id}`)
                      }
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <Edit2 size={16} />
                      <span>Edit</span>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompaniesTable;
