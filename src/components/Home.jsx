import React from "react";

const Home = () => (
  <section className="bg-[#F9FAFB] py-16 px-4 md:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#4F46E5] leading-tight">
          Launch Your Career with <span className="text-[#EC4899]">CareerKhoj</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Build resumes, discover jobs, and showcase your portfolio—all in one place.
        </p>
        <div className="mt-8">
          <a href="/signup" className="inline-block bg-[#4F46E5] text-white px-6 py-3 rounded-xl font-medium hover:bg-opacity-90">
            Get Started
          </a>
          <a href="/features" className="ml-4 inline-block text-[#4F46E5] font-medium hover:underline">
            Learn More
          </a>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/06/00/47/laptop-2589420_1280.jpg"
          alt="Dashboard preview"
          className="rounded-2xl shadow-lg border-4 border-[#10B981]"
        />
      </div>
    </div>
  </section>
);

export default Home;
