import React from "react";

const RecruitmentProcess = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-gray-800">
          <h2 className="text-3xl font-bold mb-6">
            Streamlined <span className="text-blue-600">Recruitment Process</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Simplify your hiring journey with a structured flow designed to find top talent efficiently and effectively.
          </p>
          <ul className="space-y-4 text-gray-700">
            {[
              "Job Posting: Publish jobs on multiple platforms with a single click.",
              "Application Review: Automatically filter and score resumes with AI insights.",
              "Initial Screening: Schedule and conduct virtual or phone interviews.",
              "Technical Assessment: Evaluate skills using built-in coding or aptitude tests.",
              "Final Interview: Connect with the team and assess culture fit.",
              "Offer & Onboarding: Generate offers and digitally onboard new hires.",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✅</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Single Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
            alt="Recruitment Process"
            className="rounded-xl w-full max-w-md shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default RecruitmentProcess;
