// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";

import ProfileUpdateForm from "./components/JobPortalSections/components/ProfileUpdateForm";
import ProfileView from "./components/JobPortalSections/components/ProfileView";
import SearchResults from "./components/JobPortalSections/components/SearchResults";
import ChooseTemplate from "./components/ResumeSections/ResumeTempletes/ChooseTemplate";
import AboutPage from "./Pages/AboutUs";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import BuildResume from "./Pages/BuildResume";
import HomePage from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import JobDetails from "./components/JobPortalSections/components/JobDetails";

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
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/profile-view" element={<ProfileView />} />
        <Route path="/profile-update" element={<ProfileUpdateForm />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/resume-builder" element={<BuildResume />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/choose-template" element={<ChooseTemplate />} />

        <Route path="/simple-form" element={<ResumeFormWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
