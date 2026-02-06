"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0d1117] flex flex-col items-center justify-center z-[9999]">
      {/* Creattie Lottie Animation */}
      <div
        className="mb-8"
        style={{ width: "300px" }}
        dangerouslySetInnerHTML={{
          __html: `
            <creattie-embed
              src="https://d1jj76g3lut4fe.cloudfront.net/saved_colors/122527/r8uuhxagv6h6bPnr.json"
              delay="1"
              speed="100"
              frame_rate="24"
              trigger="loop"
              style="width:100%;background:transparent">
            </creattie-embed>
          `,
        }}
      />

      {/* Loading Text */}
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 tracking-wide animate-pulse">
        Summoning greatness…
      </h2>

      {/* Progress Bar Container */}
      <div className="w-64 sm:w-80 md:w-96 h-2 bg-gray-800 rounded-full overflow-hidden">
        {/* Progress Bar Fill */}
        <div
          className="h-full bg-gradient-to-r from-[#1C2541] via-[#3A506B] to-[#1C2541] rounded-full transition-all duration-300 ease-out animate-shimmer"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Progress Percentage */}
      <p className="text-gray-500 text-sm mt-4 font-mono">
        {Math.min(Math.round(progress), 100)}%
      </p>

      {/* Creattie Script */}
      <Script
        src="https://creattie.com/js/embed.js?id=3efa1fcb5d85991e845a"
        strategy="afterInteractive"
      />
    </div>
  );
}
