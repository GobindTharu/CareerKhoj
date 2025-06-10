import React, { useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../libs/axiosInstance";
import { setSingleJob } from "../../../redux/jobSlice";
import Footer from "./Footer";
import NavBar from "./NavBar";

// const jobData = {
//   title: "Software Developer",
//   company: "CareerKhoj Information Technology Co. Ltd.",
//   location: "Bagmati-kathmandu, Nepal",
//   postedOn: "Jun 02, 2025",
//   validUntil: "Jun 23, 2025",
//   experience: "3",
//   salary: "65000",
//   jobType: "Full-Time",
//   industry: "IT",
//   positions: 3,
//   applyBefore: "Jun 23, 2025",
//   jobSpecification: {
//     qualification:
//       "Bachelor's degree or above, with preference given to those with majors in Marketing, International Business, etc",
//     keySkills: [
//       "Excellent English listening",
//       "speaking",
//       "reading",
//       "and writing skills",
//       "proficiency in a second language (such as French",
//       "German) is a plus",
//       "Outstanding organizational and project management skills.",
//     ],
//     Resume: "Required",
//     functionalArea: "Marketing / Advertising.",
//   },
//   jobDescription: {
//     responsibilities:
//       "Responsible for formulating and executing the company's international marketing strategy, with a particular focus on promotion activities in North American and European markets. By deeply understanding local market dynamics and consumer behavior, enhance brand awareness and expand market share.",
//     requirements: [
//       "Bachelor's degree or above, with preference given to those with majors in Marketing, International Business, etc.",
//       "At least 3 years of experience in international marketing, familiar with digital marketing tools and social media platforms.",
//       "Excellent English listening, speaking, reading, and writing skills; proficiency in a second language (such as French, German) is a plus.",
//       "Outstanding organizational and project management skills.",
//     ],
//   },
//   offer: "As per company policies.",
// };

const JobDetails = () => {
  // const isApplied = true;
  const params = useParams();
  const jobId = params.id;
  const singleJob = useSelector((state) => state.job.singleJob);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(singleJob);

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
                <div className=" flex items-center justify-center w-12 h-12">
                  <img src="./company.png" alt=" company logo" />
                </div>
              </button>
              <div className="mb-4 border-b pb-2 border-gray-200">
                <h2 className="text-xl font-bold text-blue-800">
                  {singleJob?.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {singleJob?.company?.name}
                </p>
              </div>
            </div>
            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <p className="flex items-center text-sm">
                <FaMapMarkerAlt className="mr-2" /> {singleJob?.location}
              </p>
              <div className="grid sm:grid-cols-2 gap-y-2 gap-x-4 mt-4">
                <span>
                  <strong>Offered Salary:</strong> Rs. {singleJob?.salary}
                </span>
                <span>
                  <strong>Experience:</strong> {singleJob?.experienceLevel}
                </span>
                <span>
                  <strong>Industry:</strong> {singleJob?.category}
                </span>
                <span>
                  <strong>Job Type:</strong> {singleJob?.jobType}
                </span>
                <span>
                  <FaCalendarAlt className="inline mr-1" /> Posted:{" "}
                  {singleJob?.postedAgo}
                </span>
                <span>
                  <FaCalendarAlt className="inline mr-1" /> Valid Until:{" "}
                  {singleJob?.daysLeft}
                </span>
              </div>
              <div className="mt-6">
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
                {/* {singleJob.jobSpecification.qualification} */}
              </p>
              <p>
                <strong>Key Skills:</strong>{" "}
                {/* {jobData.jobSpecification.keySkills.join(", ")} */}
              </p>

              <p>
                <strong>Resume:</strong>
                {/* {.Resume} */}
              </p>
              <p>
                <strong>Functional Area:</strong>{" "}
                {/* {jobData.jobSpecification.functionalArea} */}
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
                {/* <p>{jobData.jobDescription.responsibilities}</p> */}
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
              {/* {jobData.offer} */}
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
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full border border-gray-100">
            <div className="mb-4 border-b pb-2 border-gray-200">
              <h2 className="text-xl font-bold text-blue-800">Similar Jobs</h2>
            </div>
            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <ul className="space-y-4 text-sm">
                <li>
                  <strong className="text-blue-700">
                    Senior Finance Officer
                  </strong>
                  <p className="text-gray-500">
                    MAW Expance Pvt. Ltd. <br />
                    1371 views <br />
                    Deadline 11 days from now
                  </p>
                </li>
                <li>
                  <strong className="text-blue-700">IT Officer</strong>
                  <p className="text-gray-500">
                    Path Investment Pvt. Ltd. <br />
                    1633 views <br />
                    Deadline 9 days from now
                  </p>
                </li>
                <li>
                  <strong className="text-blue-700">
                    Regional Sales Manager
                  </strong>
                  <p className="text-gray-500">
                    Pioneer Marketing <br />
                    1030 views <br />
                    Deadline 14 days from now
                  </p>
                </li>
                <li>
                  <strong className="text-blue-700">
                    Restaurant Supervisor
                  </strong>
                  <p className="text-gray-500">
                    Newa Ghasa <br />
                    840 views <br />
                    Deadline 4 days from now
                  </p>
                </li>
                <li>
                  <strong className="text-blue-700">
                    Sales Person (Remote)
                  </strong>
                  <p className="text-gray-500">
                    Mindrisers Institute of Tech. <br />
                    319 views <br />
                    Apply By Today
                  </p>
                </li>
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
