import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../features/user/userSlice"; // Your async thunk
import { toast } from "react-hot-toast";

const UserProfileForm = () => {
  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    bio: "",
    skills: "",
    profilePhoto: "",
    resume: null,
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        fullName: user.fullName || "",
        phoneNumber: user.phoneNumber || "",
        bio: user.profile?.bio || "",
        skills: user.profile?.skills || "",
        profilePhoto: user.profile?.profilePhoto || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append("fullName", formData.fullName);
    formPayload.append("phoneNumber", formData.phoneNumber);
    formPayload.append("bio", formData.bio);
    formPayload.append("skills", formData.skills);
    formPayload.append("profilePhoto", formData.profilePhoto);
    if (formData.resume) formPayload.append("resume", formData.resume);

    try {
      await dispatch(updateUser(formPayload)).unwrap();
      toast.success("Profile updated successfully");
    } catch (error) {
        console.log(error.message)
      toast.error("Update failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Update Your Profile
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        encType="multipart/form-data"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={3}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Skills
          </label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g. React, Node.js"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Profile Photo URL
          </label>
          <input
            type="text"
            name="profilePhoto"
            value={formData.profilePhoto}
            onChange={handleChange}
            placeholder="https://example.com/photo.jpg"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Resume (PDF)
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf"
            onChange={handleChange}
            className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-indigo-600 hover:file:bg-indigo-700"
          />
          {formData.resume && (
            <p className="mt-1 text-sm text-gray-500">
              Selected: {formData.resume.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition duration-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UserProfileForm;
