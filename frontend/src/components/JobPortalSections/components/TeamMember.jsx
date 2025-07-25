import React from "react";

const teamMembers = [
  {
    name: "Arjun Ghimire",
    role: "UI/UX Designer",
    image: "./arjun.jpeg",
    bio: "Creative UI/UX Designer focused on building intuitive, user-centered interfaces.",
  },
  {
    name: "Bal Gobind Chaudhary",
    role: "Backend Developer",
    image: "./balgobind.jpeg",
    bio: "Full-stack engineer specializing in scalable web apps and system design.",
  },
  {
    name: "Susan Gautam",
    role: "Frontend Developer",
    image: "./susan.jpeg",
    bio: "Passionate Frontend Developer focused on crafting fast, responsive, and user-friendly web experiences.",
  },
];

const TeamMember = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          The passionate individuals behind CareerKhoj – combining innovation, design, and technology to build better careers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover shadow-lg mb-4 hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
