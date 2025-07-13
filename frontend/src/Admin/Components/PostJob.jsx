import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../libs/axiosInstance";
import { useSelector } from "react-redux";
import NavBar from "../../components/JobPortalSections/components/NavBar";
import { useNavigate } from "react-router-dom";

const jobTypes = ["Full-time", "Part-time", "Internship", "Contract", "Remote"];
const categories = [
  "IT",
  "Education",
  "Marketing",
  "Finance",
  "Restaurant",
  "Hospital",
  "Other",
];
const experienceLevels = ["Fresher", "Mid-Level", "Senior-Level", "Executive"];

const JobPostForm = () => {
  const navigate = useNavigate();
  const company = useSelector((state) => state.company);
  const companyId = company?.singleCompany?._id;



  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      requirements: {
        qualification: "",
        skills: "",
        resume: false,
      },
      salary: "",
      location: "",
      jobType: "",
      experience: "Fresher",
      position: "",
      category: "",
      deadline: "",
      offer: "",
      companyId: companyId,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Job title is required"),
      description: Yup.string().required("Description is required"),
      salary: Yup.number()
        .positive("Must be positive")
        .required("Salary is required"),
      location: Yup.string().required("Location is required"),
      jobType: Yup.string().oneOf(jobTypes).required("Job type is required"),
      position: Yup.number().required("Number of positions is required").min(1),
      category: Yup.string().oneOf(categories).required("Category is required"),
      requirements: Yup.object().shape({
        qualification: Yup.string(),
        skills: Yup.string(),
        resume: Yup.boolean(),
      }),
      companyId: Yup.string()
        .matches(/^[0-9a-fA-F]{24}$/, "Company ID must be a valid ObjectId")
        .required("Company is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm, setStatus }) => {
      try {
        const skillsArray = values.requirements.skills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);

        const payload = {
          ...values,
          salary: Number(values.salary),
          position: Number(values.position),
          requirements: {
            ...values.requirements,
            skills: skillsArray,
          },
        };

        await axiosInstance.post("/job/post", payload, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setStatus({ success: true, message: "Job posted successfully!" });
        resetForm();
        navigate("/recruiter/jobs");
      } catch (error) {
        setStatus({
          success: false,
          message: error.response?.data?.message || "Error posting job",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const fieldClass =
    "w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  const errorClass = "text-sm text-red-500 mt-1";

  return (
    <div className="w-full py-32">
      <NavBar />
      <div className="max-w-2xl mx-auto px-6 py-8 bg-white shadow-md rounded-xl">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Post a New Job
        </h1>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Basic Info */}
          <div>
            <label className="block font-medium">Job Title</label>
            <input
              name="title"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              className={fieldClass}
            />
            {formik.touched.title && formik.errors.title && (
              <div className={errorClass}>{formik.errors.title}</div>
            )}
          </div>

          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              rows={4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              className={fieldClass}
            />
            {formik.touched.description && formik.errors.description && (
              <div className={errorClass}>{formik.errors.description}</div>
            )}
          </div>

          {/* Requirements */}
          <div className="border-t pt-5">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Requirements
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block font-medium">Qualification</label>
                <input
                  name="requirements.qualification"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.requirements.qualification}
                  className={fieldClass}
                />
              </div>
              <div>
                <label className="block font-medium">
                  Skills (comma separated)
                </label>
                <input
                  name="requirements.skills"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.requirements.skills}
                  className={fieldClass}
                />
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="checkbox"
                  name="requirements.resume"
                  onChange={formik.handleChange}
                  checked={formik.values.requirements.resume}
                />
                <label
                  htmlFor="requirements.resume"
                  className="text-sm text-gray-700"
                >
                  Require resume
                </label>
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="border-t pt-5">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Job Details
            </h2>

            <div className="flex flex-wrap gap-4">
              <div className="w-full md:flex-1">
                <label className="block font-medium">Salary</label>
                <input
                  name="salary"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.salary}
                  className={fieldClass}
                />
                {formik.touched.salary && formik.errors.salary && (
                  <div className={errorClass}>{formik.errors.salary}</div>
                )}
              </div>

              <div className="w-full md:flex-1">
                <label className="block font-medium">Location</label>
                <input
                  name="location"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.location}
                  className={fieldClass}
                />
                {formik.touched.location && formik.errors.location && (
                  <div className={errorClass}>{formik.errors.location}</div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="w-full md:flex-1">
                <label className="block font-medium">Job Type</label>
                <select
                  name="jobType"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.jobType}
                  className={fieldClass}
                >
                  <option value="">Select type</option>
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {formik.touched.jobType && formik.errors.jobType && (
                  <div className={errorClass}>{formik.errors.jobType}</div>
                )}
              </div>

              <div className="w-full md:flex-1">
                <label className="block font-medium">Experience Level</label>
                <select
                  name="experience"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.experience}
                  className={fieldClass}
                >
                  {experienceLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="w-full md:flex-1">
                <label className="block font-medium">Positions</label>
                <input
                  name="position"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.position}
                  className={fieldClass}
                />
                {formik.touched.position && formik.errors.position && (
                  <div className={errorClass}>{formik.errors.position}</div>
                )}
              </div>

              <div className="w-full md:flex-1">
                <label className="block font-medium">Category</label>
                <select
                  name="category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                  className={fieldClass}
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {formik.touched.category && formik.errors.category && (
                  <div className={errorClass}>{formik.errors.category}</div>
                )}
              </div>
            </div>
          </div>

          {/* Optional Fields */}
          <div className="border-t pt-5">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Optional
            </h2>
            <div className="flex flex-wrap gap-4">
              <div className="w-full md:flex-1">
                <label className="block font-medium">Deadline</label>
                <input
                  name="deadline"
                  type="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.deadline}
                  className={fieldClass}
                />
              </div>

              <div className="w-full md:flex-1">
                <label className="block font-medium">Offer</label>
                <input
                  name="offer"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.offer}
                  className={fieldClass}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              {formik.isSubmitting ? "Posting..." : "Post Job"}
            </button>

            {formik.status && (
              <p
                className={`mt-2 text-center ${
                  formik.status.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {formik.status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPostForm;
