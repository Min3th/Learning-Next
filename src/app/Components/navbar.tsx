"use client"; // Mark this file as a Client Component

import React from "react";
import Image from "next/image";
import logo from "../Images/headingrem.png";

export default function Navbar() {
  return (
    <div className="bg-white drop-shadow-lg h-14">
      <div className="flex flex-row items-center relative">
        <Image src={logo} alt="icon" width={150} height={100} className="absolute top-[-28px]"/>
      </div>
    </div>
  );
}
