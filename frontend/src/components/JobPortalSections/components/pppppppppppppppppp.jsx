// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-hot-toast";
// // import axios from "axios";
// import axiosInstance from "../../../libs/axiosInstance";
// import { setUser } from "../../../redux/userSlice";

// const ProfileUpdateForm = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const user  = useSelector((state) => state.user?.user);
//   const dispatch = useDispatch();

//   // const [image, setImage] = useState(null);

//   const [input, setInput] = useState({
//     fullName: user?.fullName,
//     email: user?.email,
//     phoneNumber: user?.phoneNumber,
//     bio: user?.profile?.bio,
//     skills: user?.profile?.skills?.map((skill) => skill),
//     file: user?.profile?.resume,
//   });

//   const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const fileHandleChange = (e) => {
//     const file = e.target.files?.[0];
//     setInput({ ...input, file });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // setIsLoading(true);

//     // const imgUrl = await uploadFile("image");

//     const formData = new FormData();

//     formData.append("fullName", input.fullName);
//     formData.append("phoneNumber", input.phoneNumber);
//     formData.append("bio", input.bio);
//     formData.append("skills", input.skills);

//     // if (imgUrl) {
//     //   formData.append("profilePhoto", imgUrl);
//     // }

//     if (input.file) {
//       formData.append("file", input.file);
//     }

//     try {
//       const res = await axiosInstance.post("/user/update-profile", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//         withCredentials: true,
//       });

//       if (res.data.success) {
//         dispatch(setUser(res.data.user.user));
//         toast.success("Profile updated successfully");
//       }
//     } catch (error) {
//       console.error(error.message);
//       toast.error("Update failed");
//     }
//     setIsLoading(false);
//     console.log(input);
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-16 pt-16 bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
//       <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
//         Update Your Profile
//       </h2>
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-5"
//         encType="multipart/form-data"
//       >
//         {/* {image && (
//           <div className="flex justify-center items-center ">
//             <img
//               className="h-25 max-h-40 object-cover border-1 rounded-full"
//               src={URL.createObjectURL(image)}
//               alt="Selected"
//             />
//           </div>
//         )} */}

//         <div>
//           <label
//             htmlFor="fullName"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Full Name
//           </label>
//           <input
//             type="text"
//             name="fullName"
//             value={input.fullName}
//             onChange={handleChange}
//             className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={input.email}
//             onChange={handleChange}
//             className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="phoneNumber"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Phone Number
//           </label>
//           <input
//             type="text"
//             name="phoneNumber"
//             value={input.phoneNumber}
//             onChange={handleChange}
//             className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="bio"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Bio
//           </label>
//           <textarea
//             name="bio"
//             value={input.bio}
//             onChange={handleChange}
//             rows={3}
//             className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="skills"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Skills
//           </label>
//           <input
//             type="text"
//             name="skills"
//             value={input.skills}
//             onChange={handleChange}
//             placeholder="e.g. React, Node.js"
//             className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

        // {/* <div>
        //   <label className="block text-sm font-medium text-gray-700">
        //     Profile Photo
        //   </label>
        //   <input
        //     type="file"
        //     onChange={(e) => {
        //       const file = e.target.files[0];
        //       console.log(file);

        //       if (!file) return;

        //       if (e.target.files.length > 0) {
        //         setImage(e.target.files[0]);
        //       }
        //     }}
        //     accept="image/*"
        //     className="w-full border px-4 py-2 rounded-lg focus:outline-none"
        //   />
        // </div> */}

//         <div>
//           <label
//             htmlFor="file"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Upload Resume (PDF)
//           </label>
//           <input
//             type="file"
//             name="file"
//             accept=".pdf"
//             onChange={fileHandleChange}
//             className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-indigo-600 hover:file:bg-indigo-700"
//           />
//           {input.file && input.file.name && (
//             <p className="mt-1 text-sm text-gray-500">
//               Selected: {input.file.name}
//             </p>
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={isLoading}
//           className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
//         >
//           {isLoading ? "Updating..." : "Save Changes"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProfileUpdateForm;


// //

// //   // useEffect(() => {
// //   //   if (user) {
// //   //     setInput({
// //   //       fullName: user.fullName || "",
// //   //       phoneNumber: user.phoneNumber || "",
// //   //       bio: user.profile?.bio || "",
// //   //       skills: Array.isArray(user.profile?.skills)
// //   //         ? user.profile.skills.join(", ")
// //   //         : typeof user.profile?.skills === "string"
// //   //         ? user.profile.skills
// //   //         : "",
// //   //       profilePhoto: user.profile?.profilePhoto || "",
// //   //       file: user.profile?.resume || null,
// //   //     });
// //   //   }
// //   // }, [user]);

// //   // const uploadFile = async () => {
// //   //   const formData = new FormData();
// //   //   formData.append("file", image);
// //   //   formData.append("upload_preset", "images_preset");

// //   //   try {
// //   //     const cloudName = "dwljdalyg";
// //   //     const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

// //   //     const res = await axios.post(api, formData);
// //   //     const { secure_url } = res.data;
// //   //     console.log("Upload successful:", secure_url);
// //   //     return secure_url;
// //   //   } catch (error) {
// //   //     console.error("Upload failed:", error.message);
// //   //     throw error;
// //   //   }
// //   // };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsLoading(true);

// //     try {
// //       // const imgUrl = await uploadFile("image");

// //       const formData = new FormData();
// //       formData.append("fullName", input.fullName);
// //       formData.append("phoneNumber", input.phoneNumber);
// //       formData.append("bio", input.bio);
// //       formData.append(
// //         "skills",
// //         input.skills.split(",").map((s) => s.trim())
// //       );
// //       // if (imgUrl) {
// //       //   formData.append("profilePhoto", imgUrl);
// //       // }

// //       if (input.file) {
// //         formData.append("file", input.file);
// //       }

// //       const res = await axiosInstance.post("/user/update-profile", formData, {
// //         headers: { "Content-Type": "multipart/form-data" },
// //         withCredentials: true,
// //       });

// //       if (res.data.success) {
// //         dispatch(setUser(res.data.user.user));
// //         toast.success("Profile updated successfully");
// //       }
// //     } catch (error) {
// //       console.error(error.message);
// //       toast.error("Update failed");
// //     } finally {
// //       setIsLoading(false);
// //       console.log(input);
// //     }
// //   };
