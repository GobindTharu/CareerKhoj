import OpportunityFeatures from "./OpportunityFeatures";
import RecruitmentProcess from "./RecruitmentProcess";
import TeamMember from "./TeamMember";
import VisionMission from "./VisionMission";

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 pt-32 px-4 sm:px-8 lg:px-20">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          About <span className="text-gray-900">CareerKhoj</span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Your all-in-one career companion — helping you build resumes, explore job opportunities, and grow professionally with confidence.
        </p>
      </div>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Career Mission"
          className="w-full max-w-xl rounded-xl shadow-lg mx-auto"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            CareerKhoj is dedicated to guiding individuals toward successful and fulfilling careers through personalized discovery, mentorship, and opportunity mapping. We simplify the career decision-making process using technology, data, and expert insights — helping students and job seekers find the right path aligned with their goals.
          </p>
        </div>
      </section>

      <VisionMission />
      <RecruitmentProcess />
      <OpportunityFeatures />
      <TeamMember />

      <section className="mt-28 text-center bg-gradient-to-r from-blue-50 to-indigo-100 py-20 rounded-xl shadow-inner">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">
          Ready to Launch Your Career?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
          Get started with CareerKhoj today — your professional future begins here.
        </p>
        <a
          href="/signup"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg"
        >
          Join Now
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
