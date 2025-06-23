import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChooseTemplate = () => {
  const navigate = useNavigate();

  const handleTemplateClick = (idx) => {
   
    navigate(`/resume-template/${idx + 1}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="w-56 h-72 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex items-center justify-center text-gray-400 select-none"
            title={`Resume Template ${idx + 1}`}
            onClick={() => handleTemplateClick(idx)}
          >
            Resume Template {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseTemplate;
