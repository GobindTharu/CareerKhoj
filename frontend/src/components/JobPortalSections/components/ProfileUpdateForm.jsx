import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { setUser } from "../../../redux/userSlice";
import axiosInstance from "../../../libs/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const ProfileUpdateForm = ({ onClose }) => {
  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  const { mutate, isLoading } = useMutation({
    mutationKey: ["update-profile"],
    mutationFn: async (formData) => {
      const response = await axiosInstance.put(
        "/user/update-profile",
        formData
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        dispatch(setUser(data.user));
        toast.success("Profile updated successfully");
      }
      onClose();
    },
    onError: (error) => {
      console.error("Profile update error:", error);
      toast.error(error.message || "Profile update failed");
    },
  });

  const [input, setInput] = useState({
    fullName: user?.fullName || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills:
      typeof user?.profile?.skills === "string"
        ? user.profile.skills
        : Array.isArray(user?.profile?.skills)
        ? user.profile.skills.join(", ")
        : "",
    file: null,
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileHandleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setInput({ ...input, file });
    }
  };

  const uploadImageToCloudinary = async () => {
    if (!image) return null;

    const cloudName = "dwljdalyg";
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "images_preset");

    try {
      const res = await axios.post(cloudinaryUrl, data);
      return res.data.secure_url;
    } catch (error) {
      toast.error("Image upload failed");
      console.error(error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadedImageUrl = await uploadImageToCloudinary();

    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append(
      "skills",
      JSON.stringify(
        input.skills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      )
    );

    if (uploadedImageUrl) {
      formData.append("profilePhoto", uploadedImageUrl);
    }

    if (input.file) {
      formData.append("file", input.file);
    }

    mutate(formData);
    onClose();
  };

  return (
    <div className="flex justify-center items max-w-7xl">
      <div className="absolute md:w-3xl  mx-auto mt-16 pt-16 bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Update Your Profile
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          encType="multipart/form-data"
        >
          {image && (
            <div className="flex justify-center items-center">
              <img
                className="h-25 w-25 object-cover border-1 rounded-full"
                src={URL.createObjectURL(image)}
                alt="Selected"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={input.fullName}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl"
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
              value={input.phoneNumber}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              name="bio"
              value={input.bio}
              onChange={handleChange}
              rows={3}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Skills
            </label>
            <input
              type="text"
              name="skills"
              value={input.skills}
              onChange={handleChange}
              placeholder="e.g. React, Node.js"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl"
            />
          </div>

          <div className="py-2">
            <label className="block text-sm font-medium text-gray-700 py-2">
              Profile Photo
            </label>
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setImage(file);
              }}
              accept="image/*"
              className="w-full border px-4 py-2 rounded-lg"
            />
          </div>

          <div className="py-2  ">
            <label className="block text-sm font-medium text-gray-700 py-2">
              Upload Resume (PDF)
            </label>
            <input
              type="file"
              name="file"
              accept=".pdf"
              onChange={fileHandleChange}
              className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-indigo-600 hover:file:bg-indigo-700"
            />
            {input.file && (
              <p className="mt-1 text-sm text-gray-500">
                Selected: {input.file.name}
              </p>
            )}
            {!input.file && user?.profile?.resume && (
              <p className="mt-12 text-sm text-gray-500">
                Current Resume:{" "}
                <a
                  href={`https://docs.google.com/gview?url=${encodeURIComponent(
                    user.profile.resume
                  )}&embedded=true`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline px-2"
                >
                  View Resume
                </a>
                |
                <a
                  href={
                    user.profile.resume.startsWith("http")
                      ? user.profile.resume
                      : `data:application/pdf;base64,${user.profile.resume}`
                  }
                  download={user.profile.resumeOriginalName || "resume.pdf"}
                  className="text-blue-500 underline px-2"
                >
                  Download
                </a>
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 bg-gray-200 text-black font-semibold rounded-xl hover:bg-gray-300 transition duration-300 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
          >
            {isLoading ? "Updating..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdateForm;
