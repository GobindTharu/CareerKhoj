import React from 'react';
import {
  RocketIcon,
  MailIcon,
  MousePointerClickIcon,
} from 'lucide-react';

const features = [
  {
    title: 'Discover Ideal Opportunities',
    description:
      'Get smart insights directly on your dashboard – we surface job postings tailored for you instantly.',
    icon: <RocketIcon className="h-6 w-6 text-white" />,
    bg: 'bg-blue-600',
  },
  {
    title: 'Get Invited to Apply',
    description:
      'Increase visibility by showcasing your profile to top employers actively hiring for roles you want.',
    icon: <MailIcon className="h-6 w-6 text-white" />,
    bg: 'bg-indigo-600',
  },
  {
    title: '1-Click Apply',
    description:
      'Apply to jobs instantly without wasting time on repetitive forms — just 1 click and done.',
    icon: <MousePointerClickIcon className="h-6 w-6 text-white" />,
    bg: 'bg-green-600',
  },
];

const OpportunityFeatures = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Never miss a Job Opportunity with{' '}
            <span className="text-blue-600">CareerKhoj</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Simplify your job hunt with smart discovery, seamless apply,
            and increased visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border hover:shadow-xl transition-all duration-300 p-6 text-center"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-5 ${feature.bg}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunityFeatures;
