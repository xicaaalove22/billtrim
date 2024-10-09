import React from 'react';
import Layout from '../../components/Layout/Layout';  // Adjust path if necessary
import Image from 'next/image';

export default function AboutUs() {
  return (
    <Layout showNavbar={true} showFooter={true}>
      <div className="bg-blue-100 py-20">
        {/* Welcome Section */}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8">
            <div className="text-left w-full lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                What Is BillTrim And How Valid Is It?
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Welcome To Our Website, Where We Help You Find The Best Price For Your Household Bills. 
                Upload Your Bill, Select Features, Compare Offers, Choose A Provider, And Start Saving Money Today!
              </p>
              <div className="flex space-x-4">
                <a href="/contact" className="bg-gray-800 text-white py-3 px-6 rounded-md font-semibold shadow-lg hover:bg-gray-600 transition">
                  Contact Us
                </a>
                <a href="/team" className="bg-blue-600 text-white py-3 px-6 rounded-md font-semibold shadow-lg hover:bg-blue-500 transition">
                  Meet the Team
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image src="/about/about-us-illustration.svg" alt="About Us Illustration" width={500} height={500} />
            </div>
          </div>
        </div>

        {/* Company Overview Section */}
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Our Company Overview</h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
              Cras dignissim urna eget, fermentum justo, commodo nisi. Aenean imperdiet vehicula odio. 
              Vestibulum venenatis lectus lorem. Ut eget libero id turpis bibendum elementum. Sed pharetra 
              tempor justo, ut commodo purus ut amet.
            </p>
            <p className="text-gray-700 mb-6">
              Aenean imperdiet vehicula odio. Vestibulum venenatis lectus lorem. Ut eget libero id turpis bibendum 
              elementum. Sed pharetra tempor justo, ut commodo purus ut.
            </p>
            <div className="flex space-x-4">
              <a href="/explore" className="bg-blue-600 text-white py-3 px-6 rounded-md font-semibold shadow-lg hover:bg-blue-500 transition">
                Explore
              </a>
              <a href="/contact" className="bg-gray-800 text-white py-3 px-6 rounded-md font-semibold shadow-lg hover:bg-gray-600 transition">
                Contact Us
              </a>
              <a href="/team" className="bg-gray-300 text-gray-900 py-3 px-6 rounded-md font-semibold shadow-lg hover:bg-gray-200 transition">
                Our Team
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 lg:px-8 py-12 bg-blue-100">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">The Feature Of BillTrim That You Will Benefit From</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Smart Saving</h3>
              <p className="text-gray-700">Maximize your savings by using BillTrim's cost-cutting recommendations.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bill Analysis</h3>
              <p className="text-gray-700">Get in-depth insights into your monthly bills and spending habits.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Cutting</h3>
              <p className="text-gray-700">Find cost-saving deals with our professional negotiators.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <img src="/about/team-member-1.jpg" alt="John Doe" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor.</p>
            </div>
            <div className="text-center">
              <img src="/about/team-member-2.jpg" alt="Jane Doe" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Jane Doe</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor.</p>
            </div>
            <div className="text-center">
              <img src="/about/team-member-3.jpg" alt="Johnathan Doe" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Johnathan Doe</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor.</p>
            </div>
            <div className="text-center">
              <img src="/about/team-member-4.jpg" alt="Janeson Doe" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Janeson Doe</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor.</p>
            </div>
          </div>
        </div>

        {/* Articles & Resources Section */}
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Articles & Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-sm text-gray-600">Feb 13, 2024 - Lorem</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor vulputate ligula.
              </h3>
              <a href="/blogs" className="text-blue-500">View All Blogs</a>
            </div>
            <div>
              <ul>
                <li className="bg-white shadow-md rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600">Feb 13, 2024 - Lorem</p>
                  <h3 className="text-md font-semibold text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                </li>
                <li className="bg-white shadow-md rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600">Feb 13, 2024 - Lorem</p>
                  <h3 className="text-md font-semibold text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                </li>
                <li className="bg-white shadow-md rounded-lg p-4">
                  <p className="text-sm text-gray-600">Feb 13, 2024 - Lorem</p>
                  <h3 className="text-md font-semibold text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-8">Trusted By The Best</h2>
          <div className="flex justify-center space-x-6">
            <img src="/about/logo-1.png" alt="Company 1" className="w-24" />
            <img src="/about/logo-2.png" alt="Company 2" className="w-24" />
            <img src="/about/logo-3.png" alt="Company 3" className="w-24" />
            <img src="/about/logo-4.png" alt="Company 4" className="w-24" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
