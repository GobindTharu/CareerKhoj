import React from "react";

const features = [
  {
    title: "Progressive Mobile Application",
    description:
      "Access Manatal from your computer, phone, or tablet to ensure you never miss any activity, wherever you are.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80", // mobile device close-up
    points: [
      "Recruit on the go: Access all Manatal features from all your devices.",
      "Receive notifications: Get notified for reminders, and specific events.",
    ],
    cta: "Try it For Free →",
  },
  {
    title: "Customize or Link your Branded Career Page",
    description:
      "Portray your company's brand in your favorite language and proudly communicate who you are to top talent. Showcase your company culture and display your values by creating or linking your Career Page for an efficient recruitment process.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", // workspace with laptop and notes
    points: [
      "No development required: Our Career Page can be set up and customized with no technical resources.",
      "Fast setup and compatibility with all web platforms: WordPress, Wix, Squarespace, and others.",
    ],
    cta: "Try it For Free →",
  },
  {
    title: "Candidate Onboarding & Placement Management",
    description:
      "Track and manage every new hire or placement throughout every step of their employment experience, from offer letter to onboarding and beyond. Leverage the full potential of Manatal's recruiting software and customize the onboarding milestones to reflect your own process.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", // team collaboration in office
    points: [
      "Keep track of onboarding events such as starting dates, probation periods, or end of employment.",
      "Customize onboarding milestones for a given job.",
    ],
    cta: "Try it For Free →",
  },
];

const CustomizePage = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      {features.map(({ title, description, image, points, cta }, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div
            key={title}
            className={`flex flex-col ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-12 mb-24 md:mb-32`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={image}
                alt={title}
                className="w-full max-w-md rounded-xl shadow-lg object-cover"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                {title}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
              <ul className="mb-8 space-y-4 text-gray-600 list-disc list-inside">
                {points.map((point, i) => (
                  <li key={i} className="font-medium">
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block text-blue-600 font-semibold text-lg hover:underline transition"
                aria-label={`Call to action for ${title}`}
              >
                {cta}
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CustomizePage;
