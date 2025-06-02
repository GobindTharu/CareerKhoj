// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
<<<<<<< HEAD
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Build Your Professional Resume in Minutes
=======
    <div className="min-h-screen bg-gray-200">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl mb-8 pt-22">
            Build professional resumes, explore job opportunities, and showcase your portfolio — all in one place.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/simple-form"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Build Your Resume
            </Link>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose CareerKhoj?
>>>>>>> 5a5e38249c33a1a96b9a68eb8dc753d4e3e36f3b
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a student starting your career or a professional aiming higher,
            CareerKhoj’s Smart Resume Builder creates polished, downloadable resumes tailored to your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Resume Preview Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto lg:mx-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Resume Preview</h3>
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
<<<<<<< HEAD

          {/* Call-to-Action */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to Stand Out?
            </h3>
            <p className="text-gray-600 mb-6">
              Create a resume that showcases your skills and experience with easy-to-use tools,
              downloadable as a PDF, and shareable on LinkedIn.
            </p>
            <Link
              to="/builder"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Start Building
            </Link>
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Resume Preview Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto lg:mx-0">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Resume Preview</h3>
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
                Create a resume that showcases your skills and experience with easy-to-use tools, downloadable as a PDF, and shareable on LinkedIn.
              </p>
              <Link
                to="/resume-builder"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Start Building
              </Link>
            </div>
>>>>>>> 5a5e38249c33a1a96b9a68eb8dc753d4e3e36f3b
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
