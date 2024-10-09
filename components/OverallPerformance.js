import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const OverallPerformance = () => {
  const data = {
    labels: ['Progress', 'Remaining'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#4C6FFF', '#E5E7EB'],
        hoverBackgroundColor: ['#4C6FFF', '#E5E7EB'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '75%',
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="text-center bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Performance</h3>
      <div className="relative w-32 h-32 mx-auto">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">350</p>
            <p className="text-sm text-gray-600">Excellent</p>
          </div>
        </div>
      </div>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md">Details</button>
    </div>
  );
};

export default OverallPerformance;
