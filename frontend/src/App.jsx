// App.jsx
import { Route, Routes } from "react-router-dom";

import Companies from "./Admin/Components/Companies";
import CompanyCreate from "./Admin/Components/CompanyCreate";
import CompanyUpdateForm from "./Admin/Components/CompanyUpdateForm";
import JobDetails from "./components/JobPortalSections/components/JobDetails";
import ProfileUpdateForm from "./components/JobPortalSections/components/ProfileUpdateForm";
import ProfileView from "./components/JobPortalSections/components/ProfileView";
import SearchResults from "./components/JobPortalSections/components/SearchResults";
import ResumeFormWrapper from "./components/ResumeSections/Components/ResumeFormWrapper";
import ChooseTemplate from "./components/ResumeSections/ResumeTemplates/ChooseTemplate";
import AboutPage from "./Pages/AboutUs";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import BuildResume from "./Pages/BuildResume";
import HomePage from "./Pages/Home";
import Jobs from "./Pages/Jobs";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* JobSeeker Routes */}
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

        {/* Recruiter Routes */}
        <Route path="/recruiter/companies" element={<Companies />} />
        <Route path="/recruiter/company/create" element={<CompanyCreate />} />
        <Route path="/recruiter/company-update/:id" element={<CompanyUpdateForm />} />


        
      </Routes>
    </div>
  );
}

export default App;
