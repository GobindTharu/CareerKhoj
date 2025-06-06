import { Edit2 } from "lucide-react";
import React, { useState } from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import ProfileUpdateForm from "./ProfileUpdateForm";

const profileData = {
  jobs: [
    {
      date: "17-07-2024",
      jobRole: "Frontend Developer",
      company: "Google",
      status: "Selected",
    },
    {
      date: "17-07-2024",
      jobRole: "Frontend Developer",
      company: "Microsoft",
      status: "Selected",
    },
  ],
};

const ProfileView = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const user = useSelector((state) => state.user?.user);

  return (
    <div className="relative bg-gray-100">
      <NavBar />

      {isPopupOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-auto">
            <ProfileUpdateForm onClose={() => setIsPopupOpen(false)} />
          </div>
        </>
      )}

      <div
        className={`max-w-7xl mx-auto p-6 pt-24 transition duration-300 ${
          isPopupOpen ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        <div className=" flex items-center justify-center bg-white p-6 rounded-2xl shadow-xl flex-col md:flex-row md:items-center gap-6 mb-6">
          <img
            src={user?.profile.profilePhoto || "./profileDefault.jpg"}
            alt="Avatar"
            className=" w-24 h-24 md:w-40 md:h-40 object-cover rounded-full border"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold border-b pb-2">
              {user?.fullName}
            </h1>
            <p className="text-gray-600 mt-4">{user?.profile?.bio}</p>
            <div className="text-sm mt-4 space-y-1">
              <p>
                <span className="font-semibold text-gray-700">Email: </span>
                {user?.email}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Phone: </span>
                {user?.phoneNumber}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsPopupOpen(true)}
            className=" absolute  top-28 lg:right-82 md:right-16 self-end  md:self-auto mt-2 text-gray-600 hover:text-blue-500 border p-2 rounded-lg"
          >
            <Edit2 size={24} />
          </button>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {Array.isArray(user?.profile?.skills) &&
            user.profile.skills.length > 0 ? (
              user.profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-sm text-gray-500">No skills listed.</p>
            )}
          </div>
        </div>

        {/* Resume */}
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Resume</h2>
          {user?.profile?.resume ? (
            <a
              href={`https://docs.google.com/gview?url=${encodeURIComponent(
                user.profile.resume
              )}&embedded=true`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              View Resume: <span>{user.profile.resumeOriginalName}</span>
            </a>
          ) : (
            <p className="text-sm text-gray-500">No resume uploaded.</p>
          )}
        </div>

        <div className="mb-16">
          <h2 className="font-semibold text-lg mb-3">Applied Jobs</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3">S.N</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3 ">Job Role</th>
                  <th className="px-4 py-3 ">Company</th>
                  <th className="px-4 py-3 ">Status</th>
                </tr>
              </thead>
              <tbody>
                {profileData.jobs.map((job, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-3 w-1/4 text-center">{index + 1}</td>
                    <td className="px-4 py-3 w-1/4 text-center ">{job.date}</td>
                    <td className="px-4 py-3 w-1/4 text-center">
                      {job.jobRole}
                    </td>
                    <td className="px-4 py-3 w-1/4 text-center">
                      {job.company}
                    </td>
                    <td className="px-4 py-3 w-1/4 text-center">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
