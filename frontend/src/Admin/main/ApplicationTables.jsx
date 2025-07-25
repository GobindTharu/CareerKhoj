import { useEffect, useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

const ApplicantsTables = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axiosInstance.get("/applicants?limit=10");
        const mappedData = res.data.applicants.map((a) => ({
          name: a.applicant?.fullName || "N/A",
          job: a.job?.title || "N/A",
          company: a.job?.company?.name || "N/A", // if populated
          date: new Date(a.createdAt).toLocaleDateString(),
          status: a.status,
        }));
        setApplicants(mappedData);
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };

    fetchApplicants();
  }, []);

  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4">Latest Applicants</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 bg-gray-100 text-sm border-b">
            <th className="py-2">S.N</th>
            <th className="py-2">Name</th>
            <th>Job</th>
            <th>Company</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applicants.length > 0 ? (
            applicants.map((a, i) => (
              <tr key={i} className="border-b p-4">
                <td className="py-2 px-6">{i + 1}.</td>
                <td className="py-2">{a.name}</td>
                <td>{a.job}</td>
                <td>{a.company}</td>
                <td>{a.date}</td>
                <td
                  className={`${
                    a.status === "accepted"
                      ? "text-green-500"
                      : a.status === "rejected"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {a.status}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="py-4 text-center text-gray-500">
                No applicants found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicantsTables;
