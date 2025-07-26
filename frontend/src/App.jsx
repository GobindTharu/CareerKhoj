import { Route, Routes } from "react-router-dom";

import Applicants from "./Admin/Components/Applicants";
import Companies from "./Admin/Components/Companies";
import CompanyCreate from "./Admin/Components/CompanyCreate";
import CompanyUpdateForm from "./Admin/Components/CompanyUpdateForm";
import PostJob from "./Admin/Components/PostJob";
import ProtectedRoute from "./Admin/Components/ProtectedRoute";
import RecruiterJobs from "./Admin/Components/RecruiterJobs";
import Admin from "./Admin/main/Admin";
import AdminProtectedRoute from "./Admin/main/AdminProtected.";
import AllAdminJobs from "./Admin/main/AllData";
import JobsPage from "./components/JobPortalSections/components/AllJobs";
import JobDetails from "./components/JobPortalSections/components/JobDetails";
import ProfileUpdateForm from "./components/JobPortalSections/components/ProfileUpdateForm";
import ProfileView from "./components/JobPortalSections/components/ProfileView";
import SearchResults from "./components/JobPortalSections/components/SearchResults";
import ResumeFormWrapper from "./components/ResumeSections/Components/ResumeFormWrapper";
import ChooseTemplate from "./components/ResumeSections/ResumeTemplates/ChooseTemplate";
import ResumeTemplate1 from "./components/ResumeSections/ResumeTemplates/ResumeTemplate1";
import ResumeTemplate2 from "./components/ResumeSections/ResumeTemplates/ResumeTemplate2";
import ResumeTemplate3 from "./components/ResumeSections/ResumeTemplates/ResumeTemplate3";
import ResumeTemplate4 from "./components/ResumeSections/ResumeTemplates/ResumeTemplate4";
import ResumeTemplate5 from "./components/ResumeSections/ResumeTemplates/ResumeTemplate5";
import ResumeTemplateWrapper from "./components/TestResume/ResumeTemplateWrapper";
import ResumeBuilder from "./components/TestResume/TextResume";
import AboutPage from "./Pages/AboutUs";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import BuildResume from "./Pages/BuildResume";
import HomePage from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import AllUsers from "./Admin/main/AllData";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        {/* Auth Routes */}
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
        <Route path="/all-jobs" element={<JobsPage />} />

        {/* Test */}
        <Route path="/test" element={<ResumeBuilder />} />

        {/* Resume Templates */}
        <Route path="/resume-template/1" element={<ResumeTemplate1 />} />
        <Route path="/resume-template/2" element={<ResumeTemplate2 />} />
        <Route path="/resume-template/3" element={<ResumeTemplate3 />} />
        <Route path="/resume-template/4" element={<ResumeTemplate4 />} />
        <Route path="/resume-template/5" element={<ResumeTemplate5 />} />

        <Route path="/simple-form" element={<ResumeFormWrapper />} />

        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route
          path="/resume-template/:Classic"
          element={<ResumeTemplateWrapper />}
        />
        <Route
          path="/resume-template/:Professional"
          element={<ResumeTemplateWrapper />}
        />
        <Route
          path="/resume-template/:Modern"
          element={<ResumeTemplateWrapper />}
        />
        <Route
          path="/resume-template/:Minimal"
          element={<ResumeTemplateWrapper />}
        />

        {/* Recruiter Routes */}
        <Route
          path="/recruiter/companies"
          element={
            <ProtectedRoute>
              <Companies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/company/create"
          element={
            <ProtectedRoute>
              <CompanyCreate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/company-update/:id"
          element={
            <ProtectedRoute>
              <CompanyUpdateForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/jobs"
          element={
            <ProtectedRoute>
              <RecruiterJobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/jobs/create"
          element={
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/jobs/:id/applicants"
          element={
            <ProtectedRoute>
              <Applicants />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/all-user"
          element={
            <AdminProtectedRoute>
              <Admin />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/jobs"
          element={
            // <AdminProtectedRoute>
            <AllAdminJobs />
            // </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/all-user/list"
          element={
            // <AdminProtectedRoute>
            <AllUsers />
            // </AdminProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
