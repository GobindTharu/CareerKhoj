import React from "react";

const RecruitmentProcess = () => {
  return (
    <section className="bg-transparent py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image / Illustration */}
        <div className="flex justify-center scale-105">
          <img
            src="/recruitment-process-hiring-find-choose-260nw-2410183141.webp"
            alt="Recruitment Process Illustration"
            className="w-full object-cover h-90 "
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Streamlined Recruitment Process
          </h2>
          <p className="text-gray-700 mb-4">
            Simplify your hiring journey with a structured recruitment flow
            designed to find top talent efficiently and effectively.
          </p>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed flex flex-col gap-4">
            <li>
              ✅ <strong>Job Posting:</strong> Publish multiple platforms jobs
              with a single click.
            </li>
            <li>
              ✅ <strong>Application Review:</strong> Filter and score resumes
              automatically insights.
            </li>
            <li>
              ✅ <strong>Initial Screening:</strong> Schedule and conduct
              virtual or phone interviews.
            </li>
            <li>
              ✅ <strong>Technical Assessment:</strong> Test skills with
              built-in coding or aptitude tools.
            </li>
            <li>
              ✅ <strong>Final Interview:</strong> Meet the team and assess
              culture fit.
            </li>
            <li>
              ✅ <strong>Offer & Onboarding:</strong> Generate offers and guide
              candidates through a digital onboarding process.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentProcess;
