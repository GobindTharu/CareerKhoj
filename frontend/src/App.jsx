// App.jsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ChooseTemplate from "./components/ResumeSections/ResumeTempletes/ChooseTemplate";
import ResumeForm from "./components/ResumeSections/ResumeTempletes/ResumeForm";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import ResumeBuilder from "./Pages/Home/ResumeBuilder";
import HomePage from "./Pages/HomePage";

const ResumeFormWrapper = () => {
  const [submittedData, setSubmittedData] = React.useState(null);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (data) => {
    setSubmittedData(data);
    setSubmitted(true);
  };

  return submitted ? (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Your Resume Data</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(submittedData, null, 2)}
      </pre>
      <button
        onClick={() => setSubmitted(false)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Edit
      </button>
    </div>
  ) : (
    <div className="max-w-3xl mx-auto mt-8">
      <ResumeForm onSubmit={handleSubmit} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/choose-template" element={<ChooseTemplate />} />
          {/* Use the wrapper here so your onSubmit works */}
          <Route path="/simple-form" element={<ResumeFormWrapper />} />
          <Route path="/builder" element={<ResumeBuilder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
