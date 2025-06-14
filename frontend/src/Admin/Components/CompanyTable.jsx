import { Edit2 } from "lucide-react";
import React, { useState } from "react";
const companies = [
  { name: "Abc", logo: "/company.png", date: "2025-01-12" },
  { name: "Abc", logo: "/company.png", date: "2025-01-12" },
  { name: "Abc", logo: "/company.png", date: "2025-01-12" },
  { name: "Abc", logo: "/company.png", date: "2025-01-12" },
  { name: "Abc", logo: "/company.png", date: "2025-01-12" },
];

const CompanyTable = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleOpen = () => {
    if (isOpen == "open") {
      setIsOpen(null);
    } else {
      setIsOpen("open");
    }
  };

  return (
    <>
      <div className="mb-16">
        <h2 className="flex item justify-center font-semibold text-lg mb-3">All Company</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3">S.N</th>
                <th className="px-4 py-3 ">Logo</th>
                <th className="px-4 py-3 ">Name</th>
                <th className="px-4 py-3">Date </th>
                <th className="px-4 py-3 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-3 w-1/4 text-center">{index + 1}</td>
                  <td className="px-4 py-3">
                    <img
                      src={company?.logo}
                      className="w-12 h-12 items-center"
                    />
                  </td>
                  <td className="px-4 py-3 w-1/4 text-center">
                    {company?.name}
                  </td>
                  <td className="px-4 py-3 w-1/4 text-center ">
                    {company?.date}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center w-fit cursor-pointer">
                      <Edit2
                        onClick={handleOpen}
                        className="w-16 font-bold relative "
                      />
                    </div>
                    {isOpen == "open" && (
                      <span className="absolute bg-gray-200 w-16 px-2">
                        Edit
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CompanyTable;
