import React from "react";
import { FaRocket, FaBullseye, FaBolt } from "react-icons/fa";

const items = [
  {
    icon: <FaBullseye className="text-white text-xl" />,
    title: "Our vision",
    text: "To lead Nepal’s HR industry, fostering sustainable growth for all stakeholders.",
    bg: "bg-blue-500",
  },
  {
    icon: <FaRocket className="text-white text-xl" />,
    title: "Our mission",
    text: `At CareerKhoj, we lead with a commitment to excellence. Our aim is to uplift individuals and businesses, enriching their journey towards sustainability and prosperity.`,
    bg: "bg-green-500",
  },
  {
    icon: <FaBolt className="text-white text-xl" />,
    title: "Slogan",
    text: `We serve as the most trusted partner anchored on values of growth, integrity, diversity, transparency, and commitment.`,
    bg: "bg-yellow-500",
  },
];

const VisionMission = () => {
  return (
    <section className="py-16 bg-gray-100 my-10">
      <div className="items-center max-w-4xl mx-auto px-4 space-y-10">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${item.bg}`}>
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMission;
