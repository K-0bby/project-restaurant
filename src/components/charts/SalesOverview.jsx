import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesOverview = () => {
  // State to hold chart data and timeline selection
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });
  const [timeline, setTimeline] = useState('monthly'); // Default timeline

  // Data for each timeline
  const salesData = {
    daily: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      data: [50, 75, 60, 90, 100, 80, 110],
    },
    weekly: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [400, 600, 700, 500],
    },
    monthly: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      data: [1200, 1900, 3000, 5000, 2000],
    },
    yearly: {
      labels: ['2019', '2020', '2021', '2022', '2023'],
      data: [15000, 18000, 22000, 26000, 30000],
    }
  };

  // Update chart data based on selected timeline
  useEffect(() => {
    const fetchData = () => {
      // Get the appropriate data based on the timeline
      const selectedData = salesData[timeline];

      // Set chart data using the selected timeline's data
      setChartData({
        labels: selectedData.labels,
        datasets: [
          {
            label: 'Sales',
            data: selectedData.data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
          },
        ],
      });
    };

    fetchData();
  }, [timeline]); // Re-run the effect when the timeline changes

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>

      {/* Timeline Selector */}
      <div className="mb-4">
        <label className="mr-2 font-semibold">View:</label>
        <select
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)} // Update state on change
          className="px-2 py-1 border border-gray-300 rounded outline-none"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Line chart rendering the selected timeline's data */}
      <Line data={chartData} />
    </div>
  );
};

export default SalesOverview;
