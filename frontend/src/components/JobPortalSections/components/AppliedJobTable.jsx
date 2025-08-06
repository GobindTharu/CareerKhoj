import React from "react";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const allAppliedJobs = useSelector((state) => state.job?.allAppliedJobs);

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-gray-200 rounded-md shadow-sm">
        <caption className="caption-bottom text-sm text-gray-500 py-2">
          A list of your applied jobs
        </caption>
        <thead className="bg-gray-100 text-left text-sm text-gray-700 uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3 border-b">Date</th>
            <th className="px-4 py-3 border-b">Job Role</th>
            <th className="px-4 py-3 border-b">Company</th>
            <th className="px-4 py-3 border-b text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {allAppliedJobs?.length <= 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-6 text-gray-500">
                You haven't applied to any job yet.
              </td>
            </tr>
          ) : (
            allAppliedJobs?.map((appliedJob) => (
              <tr
                key={appliedJob._id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3 border-b">
                  {appliedJob?.createdAt?.split("T")[0]}
                </td>
                <td className="px-4 py-3 border-b">
                  {appliedJob.job?.title || "—"}
                </td>
                <td className="px-4 py-3 border-b">
                  {appliedJob.job?.company?.name || "—"}
                </td>
                <td className="px-4 py-3 border-b text-right">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      appliedJob?.status === "rejected"
                        ? "bg-red-500"
                        : appliedJob?.status === "pending"
                        ? "bg-gray-500"
                        : "bg-green-500"
                    }`}
                  >
                    {appliedJob?.status?.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppliedJobTable;
