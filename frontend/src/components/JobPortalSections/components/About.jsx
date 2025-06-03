// install framer-motion if not already installed
import React from "react";
import OpportunityFeatures from "./OpportunityFeatures";
import TeamMember from "./TeamMember";
import VisionMission from "./VisionMission";

const AboutUs = () => {
  return (
    <div className=" bg-gray-50 min-h-screen py-32 px-4 sm:px-8 lg:px-16 text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
          About CareerKhoj
        </h1>
        <p className="max-w-4xl mx-auto text-lg text-gray-600">
          Your all-in-one career companion — helping you build resumes, search
          jobs, and grow professionally.
        </p>
      </div>

      {/* Mission Section */}
      <div className=" max:w-7xl grid md:grid-cols-2 gap-10 items-center mb-20 py-12">
        <img
          src="./job_search_portals.png"
          alt="Mission"
          className="w-full md:max-w-2xl  mx-auto rounded-lg"
        />
        <div className="w-full max:w-7xl my-16">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg">
            CareerKhoj is dedicated to guiding individuals toward successful and
            fulfilling careers by providing personalized career discovery,
            mentorship, and opportunity mapping. Its mission is to simplify the
            career decision-making process by leveraging data, technology, and
            expert insights, enabling students and job seekers to identify the
            right career paths aligned with their interests, skills, and goals.
            CareerKhoj strives to close the gap between talent and opportunity
            by making career choices more informed, accessible, and
            future-ready.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <VisionMission />
      {/* Opportunity */}
      <OpportunityFeatures />
      <TeamMember />

      {/* CTA Section */}
      <div className="pt-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 m-4">
          Ready to Launch Your Career?
        </h2>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          Get started with CareerKhoj today — your professional future begins
          here.
        </p>
        <a
          href="/auth"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition"
        >
          Join Now
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
