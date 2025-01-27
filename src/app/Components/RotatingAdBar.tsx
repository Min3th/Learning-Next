"use client";

import React from "react";

// Rotating Ad Bar Component
export default function RotatingAdBar() {
  return (
    <div className="relative w-full bg-green-500 text-white h-12 overflow-hidden">
      <div className="absolute w-full flex animate-scrollAd">
        <div className="flex-none w-full md:w-1/2 p-3 text-center">
          <span>Ad 1: Big Sale! Everything 50% off!</span>
        </div>
        <div className="flex-none w-full md:w-1/2 p-3 text-center">
          <span>Ad 2: Clearance items up to 70% off!</span>
        </div>
        <div className="flex-none w-full md:w-1/2 p-3 text-center">
          <span>Ad 3: New Arrivals are here!</span>
        </div>
        {/* Add more ads here if needed */}
      </div>
    </div>
  );
}
