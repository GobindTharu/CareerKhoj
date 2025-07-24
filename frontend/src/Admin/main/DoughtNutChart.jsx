import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axiosInstance from "../../libs/axiosInstance";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axiosInstance.get("/application-status");
        setChartData({
          labels: ["Accepted", "Pending", "Rejected"],
          datasets: [
            {
              data: [res.data.accepted, res.data.pending, res.data.rejected],
              backgroundColor: ["#22c55e", "#facc15", "#ef4444"],
            },
          ],
        });
      } catch (err) {
        console.error("Error fetching status:", err);
      }
    };
    fetchStatus();
  }, []);

  return (
    <div className="bg-white rounded-lg  p-4">
      {chartData ? <Doughnut data={chartData} /> : <p>Loading...</p>}
    </div>
  );
};

export default DoughnutChart;
