import React from "react";
import { FaRocket, FaBullseye, FaBolt } from "react-icons/fa";

const items = [
  {
    icon: <FaBullseye className="text-white text-2xl" />,
    title: "Our Vision",
    text: "To lead Nepal’s HR industry, fostering sustainable growth for all stakeholders.",
    bg: "bg-blue-600",
  },
  {
    icon: <FaRocket className="text-white text-2xl" />,
    title: "Our Mission",
    text: `At CareerKhoj, we lead with a commitment to excellence. Our aim is to uplift individuals and businesses, enriching their journey towards sustainability and prosperity.`,
    bg: "bg-green-600",
  },
  {
    icon: <FaBolt className="text-white text-2xl" />,
    title: "Slogan",
    text: `We serve as the most trusted partner anchored on values of growth, integrity, diversity, transparency, and commitment.`,
    bg: "bg-yellow-500",
  },
];

const VisionMission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-start space-y-4"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bg}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
