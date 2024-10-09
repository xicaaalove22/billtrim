import Image from "next/image";
import React from 'react'
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Landing01 from "@/components/Landing/Landing01";
import Landing02 from "@/components/Landing/Landing02";
import Landing03 from "@/components/Landing/Landing03";
import Landing04 from "@/components/Landing/Landing04";


export default function index() {
  return (
    // Nav
    <div className="">
      {/* nav */}
      <NavBar />

      {/* body */}
      <div className="min-h-screen">
        <Landing01 />
        <Landing02 />
        <Landing03 />
        <Landing04 />
      </div>


      {/* footer */}
      <Footer />
    </div>

  )
}
