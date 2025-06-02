import React from 'react';
import { RocketIcon, MailIcon, MousePointerClickIcon } from 'lucide-react';

const features = [
  {
    title: 'Discover Ideal Opportunities',
    description:
      'We automatically show your job postings in a chart directly in your dashboard’s first view.',
    icon: <RocketIcon className="h-8 w-8 text-white" />,
  },
  {
    title: 'Get Invited to Apply',
    description:
      'By showcasing your profile to companies for the roles you desire, CareerKhoj enhances your visibility, enabling employers to connect with you directly.',
    icon: <MailIcon className="h-8 w-8 text-white" />,
  },
  {
    title: '1-Click Apply',
    description:
      'Say goodbye to tedious job applications with just 1-Click APPLY.',
    icon: <MousePointerClickIcon className="h-8 w-8 text-white" />,
  },
];

const OpportunityFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Never miss a Job opportunity – Thanks to <span className="text-blue-600">CareerKhoj</span>.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow hover:shadow-lg transition-all p-8"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunityFeatures;
