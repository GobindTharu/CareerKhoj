import React from "react";

const teamMembers = [
  {
    name: "Arjun Ghimire",
    role: "UI/UX Designer",
    image: "",
    bio: "Creative UI/UX Designer focused on building intuitive, user-centered interfaces.",
  },
  {
    name: "Bal Gobind Chaudhary",
    role: "Lead Developer",
    image: "",
    bio: "Full-stack engineer specializing in scalable web apps and system design.",
  },
  {
    name: "Susan Gautam",
    role: "Frontend Developer",
    image: "",
    bio: "Passionate Frontend Developer focused on crafting fast, responsive, and user-friendly web experiences.",
  },
];

const TeamMember = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Meet Our Team</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Passionate people behind the Project. Brings experience and heart to every project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 group hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
