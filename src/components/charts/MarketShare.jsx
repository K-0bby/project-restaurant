import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MarketShare = () => {
  const data = {
    labels: ['Soft drinks', 'Beer', 'Wine & Spirit', 'Tots'],
    datasets: [
      {
        label: 'Market Share',
        data: [45, 25, 20, 10],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Market Share</h2>
      <Pie data={data} />
    </div>
  );
};

export default MarketShare;
