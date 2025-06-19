import React from "react";

export const BlogsCard = ({ blogs }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Top Image */}
      <img
        src="/company.png"
        alt="Leapfrog Quality Alliance"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">MAY 22, 2025</p>
        <h3 className="text-xl font-semibold text-gray-900 leading-snug mb-2">
          Leapfrog Quality Alliance 2025: Event highlights
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          An event that brought diverse groups of QA experts from across Nepal
          to discuss the evolving role of AI in software testing.
        </p>
        <a
          href="#"
          className="text-purple-600 hover:text-purple-800 text-sm font-medium inline-flex items-center"
        >
          Read more
          <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
};
