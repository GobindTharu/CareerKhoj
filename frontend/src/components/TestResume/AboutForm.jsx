import React from "react";

const AboutForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-2">About yourself</h2>
      <p className="text-gray-500 mb-6">Fill out your primary information.</p>

      <div className="flex items-center space-x-4 mb-4">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
          {formData.photo ? (
            <img
              src={URL.createObjectURL(formData.photo)}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span>No Photo</span>
          )}
        </div>
        <label className="cursor-pointer text-blue-600 font-medium">
          ↑ Upload Photo
          <input
            type="file"
            name="photo"
            accept="image/*"
            className="hidden"
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="border-b p-2 focus:outline-none"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="border-b p-2 focus:outline-none"
        />
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
          className="col-span-2 border p-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2"
        />
      </div>

      <div className="mt-4">
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          placeholder="How would you describe yourself?"
          className="w-full border p-2"
          rows={4}
        />
      </div>
    </div>
  );
};

export default AboutForm;
