// App.jsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ChooseTemplate from "./components/ResumeSections/ResumeTempletes/ChooseTemplate";
import ResumeForm from "./components/ResumeSections/ResumeTempletes/ResumeForm";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import ResumeBuilder from "./Pages/Home/ResumeBuilder";
import HomePage from "./Pages/HomePage";
import AuthGuard from "./guard/AuthGuard";
import GuestGuard from "./guard/GuestGuard";

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
        <Route
          path="/"
          element={
            <AuthGuard>
              <HomePage />
            </AuthGuard>
          }
        />
        <Route
          path="/login"
          element={
            <GuestGuard>
              <Login />
            </GuestGuard>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthGuard>
              <SignUp />
            </AuthGuard>
          }
        />
        <Route
          path="/choose-template"
          element={
            <AuthGuard>
              <ChooseTemplate />
            </AuthGuard>
          }
        />
        {/* Use the wrapper here so your onSubmit works */}
        <Route
          path="/simple-form"
          element={
            <AuthGuard>
              <ResumeFormWrapper />
            </AuthGuard>
          }
        />
        <Route
          path="/resume-builder"
          element={
            <AuthGuard>
              <ResumeBuilder />
            </AuthGuard>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
