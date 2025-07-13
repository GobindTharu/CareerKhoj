import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RecruiterJobsTable = () => {
  const allRecruiterJobs = useSelector((state) => state.job?.recruiterJob);
  const searchJobByText = useSelector((state) => state.job?.searchJobByText);
  const [filterJobs, setFilterJobs] = useState([]);
  const [openPopoverId, setOpenPopoverId] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate();

  const buttonRefs = useRef({});

  useEffect(() => {
    const searchText =
      typeof searchJobByText === "string" ? searchJobByText.toLowerCase() : "";

    if (!Array.isArray(allRecruiterJobs)) {
      setFilterJobs([]);
      return;
    }

    const filtered = allRecruiterJobs.filter(
      (job) =>
        job?.title?.toLowerCase().includes(searchText) ||
        job?.company?.name?.toLowerCase().includes(searchText)
    );

    setFilterJobs(filtered);
  }, [allRecruiterJobs, searchJobByText]);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".popover-content") &&
        !event.target.closest(".popover-trigger")
      ) {
        setOpenPopoverId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePopover = (jobId) => {
    const button = buttonRefs.current[jobId];
    if (button) {
      const rect = button.getBoundingClientRect();
      setPopoverPosition({ top: rect.bottom + 8, left: rect.right - 140 }); // adjust horizontal pos
    }

    setOpenPopoverId(openPopoverId === jobId ? null : jobId);
  };

  return (
    <div className="overflow-x-auto w-full">
      <p className="text-sm text-gray-500 mb-3">
        A list of your recently posted jobs.
      </p>
      <table className="w-full min-w-[600px] text-sm text-gray-700 bg-white border border-gray-200 shadow rounded-lg">
        <thead className="bg-gray-100 text-xs text-gray-600 uppercase tracking-wider">
          <tr>
            <th className="py-3 px-4 text-left">Role</th>
            <th className="py-3 px-4 text-left">Location</th>
            <th className="py-3 px-4 text-left">Posted On</th>
            <th className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterJobs.length > 0 ? (
            filterJobs.map((job) => (
              <tr
                key={job._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{job?.title}</td>
                <td className="py-3 px-4">{job?.location}</td>
                <td className="py-3 px-4">
                  {job?.createdAt?.split("T")[0] || "--"}
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    ref={(el) => (buttonRefs.current[job._id] = el)}
                    onClick={() => handlePopover(job._id)}
                    className="popover-trigger inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-200 transition"
                  >
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-6 text-gray-400">
                No jobs found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Popover: use fixed position relative to button */}
      {openPopoverId && (
        <div
          className="popover-content fixed bg-white border border-gray-200 rounded-lg shadow-md w-[140px] z-50"
          style={{
            top: `${popoverPosition.top}px`,
            left: `${popoverPosition.left}px`,
          }}
        >
          <div
            onClick={() => {
              navigate(`/recruiter/companies/${openPopoverId}`);
              setOpenPopoverId(null);
            }}
            className="flex items-center gap-2 py-2 px-3 text-sm hover:bg-gray-100 cursor-pointer transition"
          >
            <Edit2 className="w-4 h-4 text-gray-600" />
            <span>Edit</span>
          </div>
          <div
            onClick={() => {
              navigate(`/recruiter/jobs/${openPopoverId}/applicants`);
              setOpenPopoverId(null);
            }}
            className="flex items-center gap-2 py-2 px-3 text-sm hover:bg-gray-100 cursor-pointer transition"
          >
            <Eye className="w-4 h-4 text-gray-600" />
            <span>Applicants</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruiterJobsTable;
