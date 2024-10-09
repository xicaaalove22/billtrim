import React from 'react';
import Layout from '../Layout/Layout';
import { RiExchangeDollarFill } from "react-icons/ri";
import { MdOutlineSavings } from "react-icons/md";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import Link from 'next/link';

export default function Landing02() {
  return (
    <Layout showNavbar={false} showFooter={false}>
      <div className="bg-white py-60">
        <div className="container mx-auto px-4 lg:px-8 ">
          <h2 className="text-center font-extrabold text-4xl mb-12 text-gray-900">
            Why BillTrim?
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16">
            <div className="flex flex-col items-center">
              <RiExchangeDollarFill size={80} className="text-blue-500 mb-4" />
              <p className="text-lg font-semibold text-gray-700">Cost Cutting</p>
            </div>

            <div className="flex flex-col items-center">
              <MdOutlineSavings size={80} className="text-green-500 mb-4" />
              <p className="text-lg font-semibold text-gray-700">Smart Saving</p>
            </div>

            <div className="flex flex-col items-center">
              <LiaFileInvoiceDollarSolid size={80} className="text-yellow-500 mb-4" />
              <p className="text-lg font-semibold text-gray-700">Bill Analysis</p>
            </div>
          </div>

          {/* <div className="text-center mt-16">
            <Link href="/landing03" className="bg-green-500 text-white py-3 px-8 rounded-md font-semibold shadow-md hover:bg-green-600 transition">
              See What Our Customers Say
            </Link>
          </div> */}
        </div>
      </div>
    </Layout>
  );
}
