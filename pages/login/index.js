import Image from "next/image";
import localFont from "next/font/local";
import React from 'react'
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Login from "@/components/Login";


export default function index() {
    return (
        // Nav
        <div className="">
            {/* nav */}
            <NavBar />

            {/* body */}
            <Login />

            {/* footer */}
            <Footer />
        </div>

    )
}
