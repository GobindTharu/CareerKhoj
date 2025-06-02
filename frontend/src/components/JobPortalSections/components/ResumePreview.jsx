// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const ResumePreview = () => {
  return (
    <>
      {/* Features Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose CareerKhoj?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Resume Preview Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto lg:mx-0">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Resume Preview
              </h3>
              <div className="border p-4 rounded-md bg-gray-50">
                <div className="h-12 bg-blue-100 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                Customize your resume with our intuitive templates
              </p>
            </div>

            {/* Call-to-Action */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Ready to Stand Out?
              </h3>
              <p className="text-gray-600 mb-6">
                Create a resume that showcases your skills and experience with
                easy-to-use tools, downloadable as a PDF, and shareable on
                LinkedIn.
              </p>
              <Link
                to="/resume-builder"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Start Building
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePreview;
