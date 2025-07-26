import React, { Children } from "react";
import NavBar from "../../components/JobPortalSections/components/NavBar";
import Sidebar from "./Sidebar";
import JobDashboard from "./JobDashboard";

const AllAdminJobs = () => {
  return (
    <>
      <NavBar />

      <div className="flex py-16">
        <Sidebar />
        <div className="flex-1 bg-gray-50 min-h-screen">All Jobs List</div>
      </div>
    </>
  );
};

export default AllAdminJobs;
