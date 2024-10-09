import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TotalSavings = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Total Savings',
        data: [500, 800, 900, 1100, 1300, 1512],
        borderColor: '#4C6FFF',
        backgroundColor: 'rgba(76, 111, 255, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        title: { display: false },
      },
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="text-center bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">$1512</h3>
      <p className="text-sm text-gray-600 mb-4">Your total savings so far</p>
      <div className="relative w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TotalSavings;
