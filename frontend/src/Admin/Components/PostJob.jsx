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
  const companyId = company?.singleCompany?._id || "";

  const formik = useFormik({
    enableReinitialize: true,
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
      experience: "Fresher", // NOTE: backend expects 'experience' here
      position: "",
      category: "",
      deadline: "",
      offer: "",
      companyId,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Job title is required"),
      description: Yup.string().required("Description is required"),
      salary: Yup.string()
        .required("Salary is required")
        .matches(
          /^\d+(\.\d+)?$/,
          "Salary must be a positive number without + sign"
        )
        .test("is-positive", "Salary must be greater than zero", (value) =>
          value ? parseFloat(value) > 0 : false
        ),

      location: Yup.string().required("Location is required"),
      jobType: Yup.string().oneOf(jobTypes).required("Job type is required"),
      experience: Yup.string()
        .oneOf(experienceLevels)
        .required("Experience is required"),
      position: Yup.number()
        .typeError("Positions must be a number")
        .required("Positions are required")
        .min(1),
      category: Yup.string().oneOf(categories).required("Category is required"),
      requirements: Yup.object().shape({
        qualification: Yup.string(),
        skills: Yup.string(),
        resume: Yup.boolean(),
      }),
      companyId: Yup.string()
        .matches(/^[0-9a-fA-F]{24}$/, "Invalid company ID")
        .required("Company is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm, setStatus }) => {
      try {
        const skillsArray = values.requirements.skills
          .split(",")
          .map((s) => s.trim().toLowerCase())
          .filter(Boolean);

        const parsedSalary = Number(values.salary);
        const parsedPosition = Number(values.position);

        if (isNaN(parsedSalary) || parsedSalary <= 0) {
          setStatus({
            success: false,
            message: "Salary must be a positive number",
          });
          setSubmitting(false);
          return;
        }

        if (isNaN(parsedPosition) || parsedPosition < 1) {
          setStatus({
            success: false,
            message: "Positions must be a positive integer",
          });
          setSubmitting(false);
          return;
        }

        const payload = {
          title: values.title.trim(),
          description: values.description.trim(),
          requirements: {
            qualification: values.requirements.qualification.trim(),
            skills: skillsArray,
            resume: values.requirements.resume,
          },
          salary: parsedSalary,
          location: values.location.trim(),
          jobType: values.jobType,
          experience: values.experience, // matches backend
          position: parsedPosition, // matches backend
          category: values.category,
          deadline: values.deadline || null,
          offer: values.offer || "",
          companyId: values.companyId,
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
    "w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
  const errorClass = "text-sm text-red-500 mt-1";

  return (
    <div className="w-full py-32 bg-gray-100 min-h-screen">
      <NavBar />
      <div className="max-w-2xl mx-auto px-6 py-8 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Post a New Job
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Job Title */}
          <div>
            <label className="block font-medium">Job Title</label>
            <input
              type="text"
              name="title"
              className={fieldClass}
              {...formik.getFieldProps("title")}
            />
            {formik.touched.title && formik.errors.title && (
              <div className={errorClass}>{formik.errors.title}</div>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              rows={4}
              name="description"
              className={fieldClass}
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description && formik.errors.description && (
              <div className={errorClass}>{formik.errors.description}</div>
            )}
          </div>

          {/* Requirements */}
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Requirements
            </h2>
            <div>
              <label className="block font-medium">Qualification</label>
              <input
                type="text"
                name="requirements.qualification"
                className={fieldClass}
                value={formik.values.requirements.qualification}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="mt-4">
              <label className="block font-medium">
                Skills (comma separated)
              </label>
              <input
                type="text"
                name="requirements.skills"
                className={fieldClass}
                value={formik.values.requirements.skills}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="flex items-center space-x-2 mt-4">
              <input
                type="checkbox"
                name="requirements.resume"
                checked={formik.values.requirements.resume}
                onChange={(e) =>
                  formik.setFieldValue("requirements.resume", e.target.checked)
                }
              />
              <label className="text-sm text-gray-700">Require resume</label>
            </div>
          </div>

          {/* Job Details */}
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Job Details
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-medium">Salary</label>
                <input
                  type="number"
                  name="salary"
                  className={fieldClass}
                  {...formik.getFieldProps("salary")}
                />
                {formik.touched.salary && formik.errors.salary && (
                  <div className={errorClass}>{formik.errors.salary}</div>
                )}
              </div>
              <div className="flex-1">
                <label className="block font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  className={fieldClass}
                  {...formik.getFieldProps("location")}
                />
                {formik.touched.location && formik.errors.location && (
                  <div className={errorClass}>{formik.errors.location}</div>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="flex-1">
                <label className="block font-medium">Job Type</label>
                <select
                  name="jobType"
                  className={fieldClass}
                  {...formik.getFieldProps("jobType")}
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

              <div className="flex-1">
                <label className="block font-medium">Experience Level</label>
                <select
                  name="experience"
                  className={fieldClass}
                  {...formik.getFieldProps("experience")}
                >
                  {experienceLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="flex-1">
                <label className="block font-medium">Positions</label>
                <input
                  type="number"
                  name="position"
                  className={fieldClass}
                  {...formik.getFieldProps("position")}
                />
                {formik.touched.position && formik.errors.position && (
                  <div className={errorClass}>{formik.errors.position}</div>
                )}
              </div>

              <div className="flex-1">
                <label className="block font-medium">Category</label>
                <select
                  name="category"
                  className={fieldClass}
                  {...formik.getFieldProps("category")}
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
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Optional
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-medium">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  className={fieldClass}
                  {...formik.getFieldProps("deadline")}
                />
              </div>
              <div className="flex-1">
                <label className="block font-medium">Offer</label>
                <input
                  type="text"
                  name="offer"
                  className={fieldClass}
                  {...formik.getFieldProps("offer")}
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
            >
              {formik.isSubmitting ? "Posting..." : "Post Job"}
            </button>
            {formik.status && (
              <p
                className={`mt-3 text-center ${
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
