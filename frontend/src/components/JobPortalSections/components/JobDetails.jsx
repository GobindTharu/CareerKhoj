import React, { useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../libs/axiosInstance";
import { setSingleJob } from "../../../redux/jobSlice";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { getDaysLeftToApply, getPostedDaysAgo } from "./Job";

const JobDetails = () => {
  // const isApplied = true;
  const params = useParams();
  const jobId = params.id;
  const singleJob = useSelector((state) => state.job.singleJob);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(singleJob);

  const daysLeft = getDaysLeftToApply(singleJob?.deadline);
  const postedAgo = getPostedDaysAgo(singleJob?.createdAt);

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axiosInstance.get(`/job/detail/${jobId}`, {
          withCredentials: true,
        });

        console.log(res.data?.jobs);

        if (res.data.success) {
          dispatch(setSingleJob(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  console.log(singleJob?.title);

  return (
    <>
      <NavBar />
      <div className="p-4 md:p-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Main Job Details) */}
        <div className="py-16 lg:col-span-2 space-y-6">
          {/* Job Summary Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full border border-gray-100">
            <div className="flex items-center gap-2 my-2">
              <button className="py-1">
                <div className=" flex items-center justify-center w-16 h-16 md:w-32 md:h-32">
                  <img src="/company.png" alt="Company logo" />
                </div>
              </button>
              <div className="w-full mb-4 border-b  px-5 pb-2 border-gray-200">
                <h2 className="text-xl md:text-2xl font-bold text-blue-800">
                  {singleJob?.title}
                </h2>
                <p className="text-md md:text-xl font-bold  text-gray-600 py-1">
                  {singleJob?.company?.name}
                </p>
                <p className="flex items-center text-sm">
                  <FaMapMarkerAlt className="mr-1" /> {singleJob?.location}
                </p>
              </div>
            </div>
            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <div className="grid sm:grid-cols-2 gap-y-2 gap-x-4 mt-4">
                <span>
                  <strong className="mr-2">Offered Salary:</strong> Rs.
                  {singleJob?.salary}
                </span>
                <span>
                  <strong className="mr-2">Experience-Level:</strong>{" "}
                  {singleJob?.experienceLevel}
                </span>
                <span>
                  <strong className="mr-2">Industry:</strong>{" "}
                  {singleJob?.category}
                </span>
                <span>
                  <strong className="mr-2">Job Type:</strong>{" "}
                  {singleJob?.jobType}
                </span>
                <span>
                  <FaCalendarAlt className="inline mr-1" />{" "}
                  <strong> Posted: </strong>
                  {postedAgo}
                </span>
                <span>
                  <FaCalendarAlt className="inline mr-1" />{" "}
                  <strong>Valid Until:</strong> {daysLeft}
                </span>
              </div>
              <div className="flex justify-end mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-6 rounded-xl shadow-md">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* Job Specification Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full border border-gray-100">
            <div className="mb-4 border-b pb-2 border-gray-200">
              <h2 className="text-xl font-bold text-blue-800">
                Job Specification
              </h2>
            </div>
            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <p>
                <strong>Qualification Required:</strong>{" "}
                {singleJob?.requirements?.qualification}
              </p>
              <p>
                <strong className="">Key Skills:</strong>
                <ul className="list-disc list-inside pl-4 mt-1">
                  {singleJob?.requirements?.skills?.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </p>

              <p>
                <strong className="mr-2 ">Resume:</strong>
                {singleJob?.requirements?.resume == true
                  ? "Required "
                  : "Not Required"}
              </p>
            </div>
          </div>

          {/* Job Description Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full border border-gray-100">
            <div className="mb-4 border-b pb-2 border-gray-200">
              <h2 className="text-xl font-bold text-blue-800">
                Job Description
              </h2>
            </div>
            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <div>
                <strong>Job Responsibilities:</strong>
                <p className="py-3">{singleJob?.description}</p>
              </div>
              <div>
                {/* <strong>Requirements:</strong>
              <ul className="list-disc list-inside space-y-1">
                {jobData.jobDescription.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul> */}
              </div>
            </div>
          </div>

          {/* What We Offer Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full border border-gray-100">
            <div className="mb-4 border-b pb-2 border-gray-200">
              <h2 className="text-xl font-bold text-blue-800">What We Offer</h2>
            </div>
            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              {singleJob?.offer || "Not Specified"}{" "}
            </div>
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <aside className="w-full md:py-16 lg:max-w-sm space-y-6">
          {/* About Company */}
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full border border-gray-100">
            <div className="mb-4 border-b pb-2 border-gray-200">
              <h2 className="text-xl font-bold text-blue-800">About Company</h2>
            </div>
            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <p className="text-gray-500 italic">Not Available</p>
            </div>
          </div>

          {/* Similar Jobs */}
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full h-160 overflow-y-scroll border border-gray-100">
            <div className="mb-4 border-b pb-2 border-gray-200">
              <h2 className="text-xl font-bold text-blue-800">Similar Jobs</h2>
            </div>
            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <ul className="space-y-4 text-sm">
                {[
                  {
                    title: "Senior Finance Officer",
                    company: "MAW Expance Pvt. Ltd.",
                    views: 1371,
                    deadline: "11 days from now",
                  },
                  {
                    title: "IT Officer",
                    company: "Path Investment Pvt. Ltd.",
                    views: 1633,
                    deadline: "9 days from now",
                  },
                  {
                    title: "Regional Sales Manager",
                    company: "Pioneer Marketing",
                    views: 1030,
                    deadline: "14 days from now",
                  },
                  {
                    title: "Restaurant Supervisor",
                    company: "Newa Ghasa",
                    views: 840,
                    deadline: "4 days from now",
                  },
                  {
                    title: "Sales Person (Remote)",
                    company: "Mindrisers Institute of Tech.",
                    views: 319,
                    deadline: "Apply By Today",
                  },
                ].map((job, idx) => (
                  <li key={idx}>
                    <strong className="text-blue-700">{job.title}</strong>
                    <p className="text-gray-500">
                      {job.company} <br />
                      {job.views} views <br />
                      Deadline {job.deadline}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default JobDetails;
