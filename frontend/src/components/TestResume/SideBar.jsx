import React from "react";
const sections = ["About", "Education", "Experience", "Projects", "Skills"];

const Sidebar = ({ currentSection, setCurrentSection }) => {
  return (
    <aside className="w-20 md:w-48 bg-white shadow min-h-full">
      <div className="flex flex-col items-center py-6">
        <h2 className="hidden md:block text-xl font-bold mb-6">Templates</h2>
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setCurrentSection(section)}
            className={`w-full px-2 py-3 hover:bg-blue-100 text-sm md:text-base ${
              currentSection === section ? "bg-blue-200" : ""
            }`}
          >
            {section}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
