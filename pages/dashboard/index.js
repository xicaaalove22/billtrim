import React from 'react';
import Layout from '../../components/Layout/Layout';  // Adjust path as necessary
import OverallPerformance from '../../components/OverallPerformance';  // Import chart components
import VisitorsThisMonth from '../../components/VisitorsThisMonth';
import TotalSavings from '../../components/TotalSavings';
import GraphComponent from '../../components/GraphComponent';  // Import the graph component for "Savings Over Time"

export default function Dashboard() {
  return (
    <Layout showNavbar={true} showFooter={true}>
      <div className="bg-blue-100 py-20">
        {/* Welcome Section */}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8">
            <div className="text-left w-full lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Welcome Back! [Username]
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Here’s an overview of your bill savings and account status. Upload new bills, track your savings, and optimize your expenses all in one place.
              </p>
              <div className="flex space-x-4">
                <a href="/contact" className="bg-gray-800 text-white py-3 px-6 rounded-md font-semibold shadow-lg hover:bg-gray-600 transition">
                  Contact us
                </a>
                <a href="/try" className="bg-blue-600 text-white py-3 px-6 rounded-md font-semibold shadow-lg hover:bg-blue-500 transition">
                  Try BillTrim
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="/dashboard/dashboard-illustration.svg" alt="Dashboard Illustration" className="mx-auto" />
            </div>
          </div>
        </div>

        {/* Service Plans */}
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Your Service Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card Example */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold text-gray-900">Internet</p>
                <p className="text-sm text-blue-600">Potential Savings: $105</p>
              </div>
              <p className="text-gray-600">Current Bill: $85.20</p>
              <p className="text-gray-600">Previous Bill: $92.30</p>
              <p className="text-gray-600 mb-2">15 Jun 2023</p>
              <p className="text-sm font-semibold text-green-600">Status: Active</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md">Details</button>
            </div>
            {/* Service Card Example */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold text-gray-900">Internet</p>
                <p className="text-sm text-blue-600">Potential Savings: $105</p>
              </div>
              <p className="text-gray-600">Current Bill: $85.20</p>
              <p className="text-gray-600">Previous Bill: $92.30</p>
              <p className="text-gray-600 mb-2">15 Jun 2023</p>
              <p className="text-sm font-semibold text-green-600">Status: Active</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md">Details</button>
            </div>

            {/* Service Card Example */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold text-gray-900">Internet</p>
                <p className="text-sm text-blue-600">Potential Savings: $105</p>
              </div>
              <p className="text-gray-600">Current Bill: $85.20</p>
              <p className="text-gray-600">Previous Bill: $92.30</p>
              <p className="text-gray-600 mb-2">15 Jun 2023</p>
              <p className="text-sm font-semibold text-green-600">Status: Active</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md">Details</button>
            </div>

            {/* Service Card Example */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold text-gray-900">Internet</p>
                <p className="text-sm text-blue-600">Potential Savings: $105</p>
              </div>
              <p className="text-gray-600">Current Bill: $85.20</p>
              <p className="text-gray-600">Previous Bill: $92.30</p>
              <p className="text-gray-600 mb-2">15 Jun 2023</p>
              <p className="text-sm font-semibold text-green-600">Status: Active</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md">Details</button>
            </div>
          </div>
        </div>

        {/* Savings Analysis */}
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Savings Analysis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Total Savings */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Total Savings</h3>
              <p className="text-xl font-bold text-blue-600">$1512.50</p>
              <p className="text-sm text-gray-600">Last 7 months</p>
            </div>

            {/* Monthly Savings */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Savings</h3>
              <p className="text-xl font-bold text-blue-600">$512.50</p>
              <p className="text-sm text-gray-600">This month</p>
            </div>
          </div>
        </div>

        {/* Performance Indicators Section with Charts */}
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Performance Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            <OverallPerformance />   {/* Displaying Overall Performance Chart */}
            <VisitorsThisMonth />    {/* Displaying Visitors This Month Chart */}
            <TotalSavings />         {/* Displaying Total Savings Chart */}
          </div>
        </div>

        {/* Savings Over Time Chart */}
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Savings Over Time</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <GraphComponent />  {/* Render the savings over time chart here */}
          </div>
        </div>

        {/* Recent Bills */}
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Recent Bills</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="text-left text-gray-900 font-semibold">Bill Name</th>
                  <th className="text-left text-gray-900 font-semibold">Service Provider</th>
                  <th className="text-left text-gray-900 font-semibold">Status</th>
                  <th className="text-left text-gray-900 font-semibold">Potential Savings</th>
                  <th className="text-left text-gray-900 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Electric_Bill_May.pdf</td>
                  <td>Electricity</td>
                  <td className="text-green-600">Analyzed</td>
                  <td>$35.00</td>
                  <td>05/10/2024</td>
                </tr>
                <tr>
                  <td>Internet_Bill_June.pdf</td>
                  <td>Internet</td>
                  <td className="text-yellow-600">In Process</td>
                  <td>Pending</td>
                  <td>05/10/2024</td>
                </tr>
                <tr>
                  <td>Electric_Bill_May.pdf</td>
                  <td>Electricity</td>
                  <td className="text-green-600">Analyzed</td>
                  <td>$35.00</td>
                  <td>05/10/2024</td>
                </tr>
                <tr>
                  <td>Home_Insurance_Bill.pdf</td>
                  <td>Internet</td>
                  <td className="text-yellow-600">In Process</td>
                  <td>Pending</td>
                  <td>05/10/2024</td>
                </tr>
                <tr>
                  <td>Mobile_Bill.pdf</td>
                  <td>Electricity</td>
                  <td className="text-green-600">Analyzed</td>
                  <td>$35.00</td>
                  <td>05/10/2024</td>
                </tr>
                <tr>
                  <td>Gas_Bill_June.pdf</td>
                  <td>Internet</td>
                  <td className="text-yellow-600">In Process</td>
                  <td>Pending</td>
                  <td>05/10/2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
