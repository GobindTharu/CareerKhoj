import { Edit2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const companies = [
  { name: "Abc", logo: "/company.png", date: "2025-01-12" },
  { name: "Abc", logo: "/company.png", date: "2025-01-12" },
  { name: "Abc", logo: "/company.png", date: "2025-01-12" },
  { name: "Abc", logo: "/company.png", date: "2025-01-12" },
  { name: "Abc", logo: "/company.png", date: "2025-01-12" },
];

const JobsTable = (companyId) => {
  const [isOpen, setIsOpen] = useState(null);
  const navigate = useNavigate();

  const handleOpen = () => {
    if (isOpen == "open") {
      setIsOpen(null);
    } else {
      setIsOpen("open");
    }
  };

  const handleDelete = async () => {
    // try {
    //   const res = await axiosInstance.delete(
    //     `/company/delete/${}`,
    //     {
    //       withCredentials: true,
    //     }
    //   );
    // } catch (error) {
    // }
  };

  return (
    <>
      <div className="mb-16">
        <h2 className="flex item justify-center font-semibold text-lg mb-3">
          All Jobs
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3">S.N</th>
                <th className="px-4 py-3 ">Name</th>
                <th className="px-4 py-3">Date </th>
                <th className="px-4 py-3 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-3 w-1/4 text-center">{index + 1}</td>
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
                      {isOpen == "open" && (
                        <>
                          <span
                            onClick={() =>
                              navigate(`/recruiter/company-update/${companyId}`)
                            }
                            className=" flex items-center justify-center bg-gray-200 w-16 py-2 px-8 "
                          >
                            Edit
                          </span>
                          <span
                            onClick={handleDelete}
                            className=" flex items-center justify-center bg-gray-200 w-16 py-2 px-8 "
                          >
                            Delete
                          </span>
                        </>
                      )}
                    </div>
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

export default JobsTable;
