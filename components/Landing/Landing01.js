import React from 'react';
import Layout from '../Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function Landing01() {
  return (
    <Layout showNavbar={false} showFooter={false}>
      <div className="bg-[#92D8F1] py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8">
          <div className="text-left w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
              Get the Best Price for Your Household Bills
            </h1>
            <p className="text-lg text-white mb-8">
              Welcome to BillTrim, where we help you find the best price for your household bills. Upload your bill, select features, compare offers, choose a provider, and start saving money today!
            </p>
            <div className="flex space-x-4">
              <Link href="/" className="bg-black text-white py-3 px-6 rounded-md font-semibold shadow-lg hover:bg-gray-800 transition">
                Try it out now!
              </Link>
              <Link href="/" className="bg-gradient-to-br from-green-400 to-blue-500 text-white py-3 px-6 rounded-md flex items-center space-x-2 shadow-lg font-bold hover:scale-105 transform transition">
                Explore BillTrim
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <Image src="/home/home01.svg" alt="Household Bills Illustration" width={500} height={500} />
          </div>
        </div>

        <div className="flex items-center justify-center space-x-8 mt-16">
          <Link href="https://www.kmart.com.au">
            <Image src="/home/kmart.png" alt="Kmart" width={80} height={50} />
          </Link>
          <Link href="https://www.jbhifi.com.au">
            <Image src="/home/jbhifi.png" alt="JB Hi-Fi" width={80} height={50} />
          </Link>
          <Link href="https://www.coles.com.au">
            <Image src="/home/coles.png" alt="Coles" width={80} height={50} />
          </Link>
          <Link href="https://www.woolworths.com.au">
            <Image src="/home/woolworths.png" alt="Woolworths" width={80} height={50} />
          </Link>
        </div>

        {/* <div className="text-center mt-16">
          <Link href="/landing02" className="bg-blue-600 text-white py-3 px-8 rounded-md font-semibold shadow-md hover:bg-blue-700 transition">
            Learn Why BillTrim?
          </Link>
        </div> */}
      </div>
    </Layout>
  );
}
