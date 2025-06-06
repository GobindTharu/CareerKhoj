import { Edit2 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const profileData = {
  fullName: "Gobind Tharu",
  email: "gobind@gmail.com",
  phone: "9816494422",
  about:
    "Passionate Fullstack developer with a knack for building responsive, performant web applications. developer with a knack for building responsive,",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "TailwindCSS",
    "Express",
    "Node.js",
  ],
  resumeLink: "#",
  profilePhoto: "./profile.avif",
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
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto p-6 pt-16 bg-white  shadow-md mt-16">
      <NavBar />
      {/* Profile Header */}
      <div className="flex items-center justify-between p-6 py-16 mb-6  shadow-xl rounded-xl">
        <div className="flex items-start gap-4">
          <img
            src={profileData.profilePhoto}
            alt="Avatar"
            className="w-16 h-16 md:w-52 md:h-52 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold p-4 border-b shadow-xl">
              {profileData.fullName}
            </h1>
            <p className="text-gray-600 py-8 font-sm">{profileData.about}</p>
            <div className="text-sm mt-2 space-y-1">
              <p className="text-md font-bold">
                <span className="text-md font-bold text-gray-700">Email: </span>
                {profileData.email}
              </p>
              <p className="text-md font-bold">
                <span className="text-md font-bold text-gray-700">Phone:</span>{" "}
                {profileData.phone}
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/profile-update")}
            className=" font-bold text-3xl text-gray-500 hover:text-blue-500 border-2 rounded-lg p-2"
          >
            <Edit2 />
          </button>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4 py-6">
        <h2 className="font-semibold my-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {profileData.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Resume */}
      <div className="mb-6">
        <h2 className="font-semibold my-2">Resume</h2>
        <a
          href={profileData.resumeLink}
          className="text-blue-600 hover:underline text-sm"
        >
          View Resume
        </a>
      </div>

      {/* Applied Jobs */}
      <div>
        <h2 className="font-semibold text-lg py-3">Applied Jobs</h2>
        <div className="overflow-x-auto  mb-16">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-4">Date</th>
                <th className="px-4 py-4">Job Role</th>
                <th className="px-4 py-4">Company</th>
                <th className="px-4 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {profileData.jobs.map((job, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-4">{job.date}</td>
                  <td className="px-4 py-4">{job.jobRole}</td>
                  <td className="px-4 py-4">{job.company}</td>
                  <td>
                    <span className="ml-4 inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
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
  );
};

export default ProfileView;
