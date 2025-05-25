// pages/ResumeBuilder.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResumeBuilder = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          Build Your Professional Resume
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Create a standout resume in minutes with our easy-to-use, guided form. Perfect for students and professionals alike.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <button
            onClick={() => navigate('/resume-form')}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Start Building
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
