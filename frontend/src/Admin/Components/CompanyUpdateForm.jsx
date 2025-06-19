import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/JobPortalSections/components/NavBar";
import axiosInstance from "../../libs/axiosInstance";

const CompanyUpdateForm = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const company = useSelector((state) => state?.company);
  console.log(company);
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo") {
      setInput({ ...input, logo: files[0] });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await axiosInstance.get(`/company/get/${id}`, {
          withCredentials: true,
        });
        const { name, description, website, location } = res.data;
        setInput((prev) => ({
          ...prev,
          name,
          description,
          website,
          location,
        }));
      } catch (err) {
        console.error("Error fetching company:", err);
      }
    };

    if (company?._id) fetchCompany();
  }, [company?._id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", input.name);
      data.append("description", input.description);
      data.append("website", input.website);
      data.append("location", input.location);
      if (input?.logo) {
        data.append("logo", input.logo);
      }

      await axiosInstance.put(`/company/update/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Company updated successfully");
      navigate("/recruiter/companies");
    } catch (err) {
      console.error("Update error:", err?.response?.data || err?.message);
      alert("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />

      <div className="max-w-4xl  mx-auto p-6 pt-32 bg-white shadow-xl rounded-xl">
        <div className="h-100vh flex items-center justify-start mb-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
          >
            ← Back
          </button>
          <h2 className="text-2xl font-semibold px-6">Company Setup</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Company Name</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Description</label>
              <input
                type="text"
                name="description"
                value={input.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Website</label>
              <input
                type="text"
                name="website"
                value={input.website}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={input.location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="col-span-1 sm:col-span-2">
              <label className="block mb-1 font-medium">Logo</label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                accept="image/*"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } w-full font-semibold py-3 rounded-md transition duration-200`}
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CompanyUpdateForm;
