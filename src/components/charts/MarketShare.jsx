import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MarketShare = () => {
  // State to hold chart data and timeline selection
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });
  const [timeline, setTimeline] = useState('monthly'); // Default timeline

  // Dummy data for different timelines
  const marketShareData = {
    monthly: {
      labels: ['Soft drinks', 'Beer', 'Wine & Spirit', 'Tots'],
      data: [45, 25, 20, 10],
    },
    quarterly: {
      labels: ['Soft drinks', 'Beer', 'Wine & Spirit', 'Tots'],
      data: [40, 30, 20, 10],
    },
    yearly: {
      labels: ['Soft drinks', 'Beer', 'Wine & Spirit', 'Tots'],
      data: [50, 20, 15, 15],
    },
  };

  // Update chart data based on the selected timeline
  useEffect(() => {
    const fetchData = () => {
      // Get the appropriate data based on the selected timeline
      const selectedData = marketShareData[timeline];

      // Set the chart data
      setChartData({
        labels: selectedData.labels,
        datasets: [
          {
            label: 'Market Share',
            data: selectedData.data,
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
            hoverOffset: 4,
          },
        ],
      });
    };

    fetchData(); // Fetch data based on timeline
  }, [timeline]); // Re-run the effect when the timeline changes

  return (
    <div> 
      <h2 className="text-lg font-semibold mb-4">Market Share</h2>

      {/* Timeline Selector */}
      <div className="mb-4">
        <label className="mr-2 font-semibold">View:</label>
        <select
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)} // Update timeline state on change
          className="px-2 py-1 outline-none border border-gray-300 rounded"
        >
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Pie chart rendering based on the selected timeline */}
      <Pie data={chartData} />
    </div>
  );
};

export default MarketShare;
