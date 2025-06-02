// App.jsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ChooseTemplate from "./components/ResumeSections/ResumeTempletes/ChooseTemplate";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import HomePage from "./Pages/Home";
import AuthGuard from "./guard/AuthGuard";
import GuestGuard from "./guard/GuestGuard";
import AboutPage from "./Pages/AboutUs";
import BuildResume from "./Pages/BuildResume";
import Jobs from "./Pages/Jobs";

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
            <GuestGuard>
              {" "}
              <SignUp />
            </GuestGuard>
          }
        />
        <Route
          path="/"
          element={
            <AuthGuard>
              <HomePage />
            </AuthGuard>
          }
        />
        <Route
          path="/jobs"
          element={
            <AuthGuard>
              <Jobs />
            </AuthGuard>
          }
        />
         <Route
          path="/resume-builder"
          element={
            <AuthGuard>
              <BuildResume />
            </AuthGuard>
          }
        />
        <Route
          path="/about-us"
          element={
            <AuthGuard>
              <AboutPage />
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

        <Route
          path="/simple-form"
          element={
            <AuthGuard>
              <ResumeFormWrapper />
            </AuthGuard>
          }
        />
       
      </Routes>
    </div>
  );
}

export default App;
