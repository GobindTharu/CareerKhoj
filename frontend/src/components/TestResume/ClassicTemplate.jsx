import { Dot, Locate, Mail, MapPin, Phone } from "lucide-react";
import React, { forwardRef } from "react";

const ClassicTemplate = forwardRef(({ formData = {} }, ref) => {
  return (
    <div
      ref={ref}
      className="flex min-h-screen border shadow-md bg-white text-gray-800"
    >
      <div className="w-1/4 bg-gray-800 text-white p-6">
        {formData.photo ? (
          <img
            src={
              formData.photo instanceof File
                ? URL.createObjectURL(formData.photo)
                : formData.photo
            }
            alt="Preview"
            className="h-28 w-28 rounded-full object-cover mb-4"
          />
        ) : (
          <span className="h-28 w-28 rounded-full object-cover mb-4">
            No Photo
          </span>
        )}
        <div className="flex flex-col py-2 gap-2">
          <h2 className="border-b-1 pt-4 text-xl font-bold">Contact</h2>
          <p className="flex  items-center gap-1 text-sm">
            <Mail className="!w-5 !h-5" />
            {formData.email}
          </p>
          <p className="flex  items-center gap-1 text-sm">
            <Phone className="!w-5 !h-5" />
            {formData.phone}
          </p>
          <p className="flex items-center gap-1 text-sm">
            <MapPin className="!w-5 !h-5" /> {formData.address} ,{" "}
            {formData.city}
          </p>
        </div>
        <h1 className="border-b-1 pt-4 text-xl font-bold">Education</h1>
        {formData.education?.map((edu, index) => (
          <div key={index}>
            <div className="flex flex-col">
              <p className=" text-base pt-6">
                {edu.startDate} to {edu.endDate}
              </p>

              <p className="font-bold text-base">{edu.school}</p>
              <p className=" text-base ">({edu.degree})</p>
            </div>
          </div>
        ))}
        <h1 className="border-b-1 pt-4 text-xl font-bold">Expertise</h1>
        {formData.skills?.map((skills, index) => {
          return (
            <>
              <div key={index} className="flex  flex-col">
                {skills}
              </div>
            </>
          );
        })}
      </div>
      <div className="w-3/4 p-6">
        <h1 className="text-4xl font-bold">
          {formData.firstName} {formData.lastName}
        </h1>
        <h2 className="text-2xl font-bold  text-indigo-600">
          {formData.designation}
        </h2>
        <h1 className="border-b-1 border-dashed pt-4 text-2xl font-bold">
          Summary
        </h1>
        <p className="mt-4">{formData.summary}</p>
        <h1 className="border-b-1 border-dashed pt-4 text-2xl font-bold">
          Experience
        </h1>
        {formData.experience?.map((exp, index) => (
          <div key={index}>
            <div className="flex items-center justify-between px-4">
              <p className="text-lg font-semibold mt-4">{exp.company}</p>
              <p className="mt-4 font-xs">
                {exp.startDate} to{" "}
                {exp.currentlyWorking ? "Present" : exp.endDate}
              </p>
            </div>
            <p className=" px-4">{exp.role}</p>
            <p className="mt-2  px-6">{exp.description}</p>
          </div>
        ))}
        {/* trainging */}
        <h1 className="border-b-1 border-dashed pt-6 text-2xl font-bold">
          Training And Certifications
        </h1>

        {formData.trainings?.map((training, index) => {
          return (
            <>
              <div
                key={index}
                className="flex items-center justify-between px-4"
              >
                <p className="text-lg font-semibold mt-4">
                  {training.organization}
                </p>
                <p className="mt-4 font-xs">
                  {training.startDate} to{" "}
                  {training.currentlyWorking ? "Present" : training.endDate}
                </p>
              </div>
              <p className="px-4">{training.title}</p>
              <p className="mt-2 px-6">{training.description}</p>
            </>
          );
        })}

        {/* Projects */}
        <h1 className="border-b-1 border-dashed pt-6 text-2xl font-bold">
          Projects
        </h1>

        {formData.projects?.map((projects, index) => {
          return (
            <>
              <div
                key={index}
                className="flex items-center justify-between px-4"
              ></div>
              <p className="text-lg font-semibold mt-4">{projects.title}</p>
              <h1 className=" text-base">Tech Stacks</h1>
              <p className="px-4">{projects.technologies}</p>
              <p className="flex mt-2 px-6 ">{projects.description}</p>
            </>
          );
        })}
      </div>
    </div>
  );
});

export default ClassicTemplate;
