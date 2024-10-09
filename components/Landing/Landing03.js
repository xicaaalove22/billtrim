import React from 'react';
import Layout from '../Layout/Layout';

export default function Landing03() {
  return (
    <Layout showNavbar={false} showFooter={false}>
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-center font-extrabold text-4xl mb-12 text-gray-900">
            What Our Customers Say
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16">
            <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3">
              <p className="text-lg font-light text-gray-700 mb-4">
                "BillTrim helped me save hundreds on my monthly bills!"
              </p>
              <p className="font-semibold text-gray-900">- John Doe</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3">
              <p className="text-lg font-light text-gray-700 mb-4">
                "A seamless experience that made bill comparison easy!"
              </p>
              <p className="font-semibold text-gray-900">- Jane Doe</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
              Start Saving with a Free Bill Analysis
            </h3>
            <p className="text-lg font-light text-gray-600 mb-6">
              Upload your bills and let us help you save more.
            </p>
            <button className="bg-blue-600 text-white py-3 px-8 rounded-md font-semibold shadow-md hover:bg-blue-400 transition">
              Upload Your Bill
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
