import { useEffect, useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import ApplicantsTables from "./ApplicationTables";
import DoughnutChart from "./DoughtNutChart";
import LineChart from "./LineChart";
import StatCard from "./SidebarCard";

const JobDashboard = () => {
  const [stats, setStats] = useState(null);

  // Fetch data on mount
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // 1. Stats cards
        const statsRes = await axiosInstance.get("/stats");
        setStats(statsRes.data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Jobs"
          value={stats?.totalJobs}
          change={stats?.jobsChange}
        />
        <StatCard
          title="Active Companies"
          value={stats?.totalCompanies}
          change={stats?.companiesChange}
        />
        <StatCard
          title="Total Applicants"
          value={stats?.totalApplicants}
          change={stats?.applicantsChange}
        />
        <StatCard
          title="New Applications"
          value={stats?.newApplications}
          change={stats?.newApplicationsChange}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-4">
            Applications Trend 7days
          </h2>
          <LineChart />
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-4">Application Status</h2>
          <DoughnutChart />
        </div>
      </div>

      {/* Latest Applicants */}
      <ApplicantsTables />
    </div>
  );
};

export default JobDashboard;
