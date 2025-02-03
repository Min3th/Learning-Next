"use client"; // Mark this file as a Client Component

import React from "react";
import Image from "next/image";
import logo from "../Images/headingrem.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white drop-shadow-lg h-14">
      <Link
        className="flex flex-row items-center justify-center relative"
        href="/"
      >
        <Image
          src={logo}
          alt="icon"
          width={150}
          height={100}
          className="absolute top-[-25px]"
        />
      </Link>
    </div>
  );
}
