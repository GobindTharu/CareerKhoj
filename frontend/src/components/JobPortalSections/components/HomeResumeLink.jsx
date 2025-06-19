import React from "react";
import { Link } from "react-router-dom";

const HomeResumeLink = () => (
  <>
    <div className=" bg-gray-100">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Build Your Professional Resume in Minutes
          </h2>
          <p className="text-lg md:text-xl mb-8 pt-4 text-gray-600 max-w-2xl mx-auto">
            Whether you're a student starting your career or a professional
            aiming higher, CareerKhoj’s Smart Resume Builder creates polished,
            downloadable resumes tailored to your goals.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/resume-builder"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Build Resume and Apply
            </Link>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default HomeResumeLink;
