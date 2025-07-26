import { MoreVertical } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useGetApplicantsById } from "../../hooks/useGetApplicatById";
import axiosInstance from "../../libs/axiosInstance";

const shortlistingStatus = ["Accepted", "Rejected", "Pending"];

const ApplicantsTable = () => {
  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => setShowPopover(!showPopover);
  const applicants = useSelector((state) => state.application?.applicants);

  useGetApplicantsById();

  const statusHandler = async (status, id) => {
    try {
      const res = await axiosInstance.post(`/application/status/${id}/update`, {
        status,
      });

      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status");
    }
  };

  return (
    <div className="min-h-screen  overflow-x-auto py-2">
      <h2 className="text-lg font-semibold mb-3">
        A list of your recent applied users
      </h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Full Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Email
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Contact
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Resume
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
            <th className="border border-gray-300 px-4 py-2 text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {applicants &&
            applicants.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {item?.applicant?.fullName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item?.applicant?.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item?.applicant?.phoneNumber}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.applicant?.profile?.resume ? (
                    <a
                      href={`https://docs.google.com/gview?url=${encodeURIComponent(
                        item.applicant.profile.resume
                      )}&embedded=true`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {item.applicant.profile.resumeOriginalName}
                    </a>
                  ) : (
                    <span>NA</span>
                  )}
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  {item?.applicant?.createdAt?.split("T")[0]}
                </td>
                <td className="text-right relative cursor-pointer">
                  <div
                    onClick={togglePopover}
                    className="flex flex-row items-center justify-between "
                  >
                    <span
                      className={`px-2 capitalize ${
                        item.status.toLowerCase() === "accepted"
                          ? "text-green-700"
                          : item.status.toLowerCase() === "rejected"
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                    >
                      {item?.status}
                    </span>
                    <MoreVertical className="w-12 h-12 text-gray-600 px-2 hover:bg-gray-200 py-2 rounded-full" />{" "}
                  </div>

                  {showPopover && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 shadow-lg rounded z-50 p-2">
                      {shortlistingStatus.map((status, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            statusHandler(status, item?._id);
                            setShowPopover(false);
                          }}
                          className="px-2 py-1 mb-1 rounded hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                          {status}
                        </div>
                      ))}
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

export default ApplicantsTable;
