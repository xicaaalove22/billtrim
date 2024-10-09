import Image from "next/image";
import localFont from "next/font/local";
import React from 'react'
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function index() {
    return (
        // Nav
        <div className="">
            {/* nav */}
            <NavBar />

            {/* body */}
            <div className="min-h-screen">
                Sign up page
            </div>

            {/* footer */}
            <Footer />
        </div>

    )
}
