import React, { useState } from 'react';

const ResumeForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',  
    skills: '',
    experience: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for backend integration
    alert('Resume data saved! Ready to generate PDF.');
    console.log('Form Data:', formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="e.g., Susan Gautam"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="e.g., susan.gautam@example.com"
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Education</h3>
            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                Education Details
              </label>
              <textarea
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                rows="5"
                placeholder="e.g., B.S. Computer Science, Tribhuvan University, 2020-2024"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                Skills
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="e.g., JavaScript, Python, React, Node.js"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Experience</h3>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                Work Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                rows="5"
                placeholder="e.g., Software Intern at XYZ Tech, Kathmandu, 2023"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="flex justify-between mb-6">
        {['Personal', 'Education', 'Skills', 'Experience'].map((label, index) => (
          <div key={index} className="flex-1 text-center">
            <div
              className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-sm font-medium transition ${
                step > index + 1
                  ? 'bg-blue-600 text-white'
                  : step === index + 1
                  ? 'bg-blue-400 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {index + 1}
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600">{label}</p>
          </div>
        ))}
      </div>

      {/* Form Content */}
      <form onSubmit={step === 4 ? handleSubmit : (e) => e.preventDefault()} className="space-y-6">
        {renderStep()}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 1}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              step === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Back
          </button>
          <button
            type={step === 4 ? 'submit' : 'button'}
            onClick={step < 4 ? handleNext : undefined}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            {step === 4 ? 'Save & Generate Resume' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResumeForm;