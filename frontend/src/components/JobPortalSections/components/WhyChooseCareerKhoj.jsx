import { CheckCircle } from "lucide-react";

const features = [
  "Personalized job matching",
  "Verified job listings",
  "Easy and fast application process",
  "Supportive career resources",
  "Trusted by job seekers and employers",
];

export default function WhyChooseCareerKhoj() {
  return (
    <section className="bg-gray-200 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose CareerKhoj?</h2>
        <p className="text-gray-600 text-lg mb-10">
          CareerKhoj is your trusted platform for discovering opportunities, connecting with the right employers,
          and shaping your career path with confidence.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition duration-300"
            >
              <CheckCircle className="text-green-500 mt-1" size={24} />
              <span className="text-gray-700 font-medium text-base">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
