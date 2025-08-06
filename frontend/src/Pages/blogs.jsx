import React from "react";
import SEO from "../SEO/SEO";

export const BlogsCard = () => {
  return (
    <>
      <SEO
        title="About CareerKhoj"
        description="Learn more about CareerKhoj, our mission to connect job seekers and employers in Nepal, and how we’re transforming the hiring process."
        url="https://careerkhoj.balgobindchaudhary.com.np/about"
      />

      <SEO
        title="Contact CareerKhoj"
        description="Reach out to CareerKhoj for support, inquiries, and partnerships. We’re here to help you hire or find your dream job."
        url="https://careerkhoj.balgobindchaudhary.com.np/contact"
      />

      <SEO
        title="Post a Job – Hire Top Talent in Nepal"
        description="Post your job openings on CareerKhoj and hire skilled professionals across Nepal. Reach thousands of qualified candidates instantly."
        url="https://careerkhoj.balgobindchaudhary.com.np/post-job"
      />

      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Top Image */}
        <img
          src="/company.png"
          alt="Leapfrog Quality Alliance"
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">MAY 22, 2025</p>
          <h3 className="text-xl font-semibold text-gray-900 leading-snug mb-2">
            Leapfrog Quality Alliance 2025: Event highlights
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            An event that brought diverse groups of QA experts from across Nepal
            to discuss the evolving role of AI in software testing.
          </p>
          <a
            href="#"
            className="text-purple-600 hover:text-purple-800 text-sm font-medium inline-flex items-center"
          >
            Read more
            <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </>
  );
};
