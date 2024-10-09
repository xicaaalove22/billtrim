import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const VisitorsThisMonth = () => {
  const data = {
    labels: ['Orange', 'Pink', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [25, 15, 25, 35],
        backgroundColor: ['#FFB74D', '#F48FB1', '#4C6FFF', '#FFEB3B'],
        hoverBackgroundColor: ['#FFB74D', '#F48FB1', '#4C6FFF', '#FFEB3B'],
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
      <h3 className="text-lg font-semibold text-gray-900 mb-4">March 2023</h3>
      <div className="relative w-32 h-32 mx-auto">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-sm text-gray-600">Bills paid this month</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <span className="text-sm text-blue-500">You are doing good!</span>
      </div>
    </div>
  );
};

export default VisitorsThisMonth;
