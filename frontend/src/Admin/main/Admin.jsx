import React from "react";
import NavBar from "../../components/JobPortalSections/components/NavBar";
import Sidebar from "./Sidebar";
import JobDashboard from "./JobDashboard";

const Admin = () => {
  return (
    <>
      <NavBar />

      <div className="flex py-16">
        <Sidebar />
        <div className="flex-1 bg-gray-50 min-h-screen">
          <JobDashboard />
        </div>
      </div>
    </>
  );
};

export default Admin;
