import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axiosInstance from "../../libs/axiosInstance";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [chartData, setChartData] = useState(null);
  const [days, setDays] = useState(7);

  useEffect(() => {
    const fetchChart = async () => {
      try {
        const res = await axiosInstance.get(`/applications-trend?days=${days}`);
        setChartData({
          labels: res.data.labels,
          datasets: [
            {
              label: "Applications",
              data: res.data.data,
              borderColor: "#4F46E5",
              tension: 0.3,
              fill: false,
            },
          ],
        });
      } catch (err) {
        console.error("Error fetching trend:", err);
      }
    };

    fetchChart();
  }, [days]);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setDays(7)}
          className={`px-3 py-1 rounded ${
            days === 7 ? "bg-indigo-500 text-white" : "bg-gray-200"
          }`}
        >
          Last 7 Days
        </button>
        <button
          onClick={() => setDays(30)}
          className={`px-3 py-1 rounded ${
            days === 30 ? "bg-indigo-500 text-white" : "bg-gray-200"
          }`}
        >
          Last 30 Days
        </button>
      </div>

      {chartData ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LineChart;
