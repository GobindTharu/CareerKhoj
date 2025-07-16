import React from "react";

const FeatureSection = () => {
  return (
    <div className="bg-[#f9f9f9] py-20 px-4 md:px-10 lg:px-20">
      {/* Feature 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div className="flex justify-center md:justify-start">
          <img
            src="https://assets.website-files.com/61e6d6b46058fe79ec5f7d7b/62038f3cc3929332fbdc38ef_Mobile.png"
            alt="Progressive Mobile App"
            className="w-full max-w-md"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Progressive Mobile Application
          </h2>
          <p className="text-gray-700 mb-4">
            Access Manatal from your computer, phone, or tablet to ensure you
            never miss any activity, wherever you are.
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>
              ✅ <strong>Recruit on the go:</strong> Access all Manatal features
              from all your devices.
            </li>
            <li>
              ✅ <strong>Receive notifications:</strong> Get notified for
              reminders, and specific events.
            </li>
          </ul>
          <a
            href="#"
            className="text-blue-600 font-semibold inline-flex items-center hover:underline"
          >
            Try it For Free →
          </a>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Customize or Link your Branded Career Page
          </h2>
          <p className="text-gray-700 mb-4">
            Portray your company's brand in your favorite language and proudly
            communicate who you are to top talent. Showcase your company culture
            and display your values by creating or linking your Career Page for
            an efficient recruitment process.
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>
              ✅ <strong>No development required:</strong> Our Career Page can
              be set up and customized with no technical resources.
            </li>
            <li>
              ✅{" "}
              <strong>
                Fast setup and compatibility with all web platforms:
              </strong>{" "}
              WordPress, Wix, Squarespace, and others.
            </li>
          </ul>
          <a
            href="#"
            className="text-blue-600 font-semibold inline-flex items-center hover:underline"
          >
            Try it For Free →
          </a>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src="https://assets.website-files.com/61e6d6b46058fe79ec5f7d7b/62038f7a7f796e20fc3377f4_BrandedCareerPage.png"
            alt="Branded Career Page"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
