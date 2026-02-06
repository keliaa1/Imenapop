"use client";

import Link from "next/link";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export function FooterSection() {
  return (
    <footer className="relative bg-[#1C2541] pt-16 pb-8 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-20">

        {/* Top Section: "f." and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full text-[#faf6f1] px-4">
          <div className="flex flex-col gap-4 mb-8 md:mb-0">
            <span className="font-serif italic text-5xl">f.</span>
            <p className="max-w-[220px] text-sm text-gray-300 leading-relaxed font-light">
              Inspire, educate and entertain entrepreneurs.
            </p>
          </div>

          <div className="flex gap-16 text-sm font-medium">
            <div className="flex flex-col gap-3">
              <Link href="#" className="hover:text-white transition-colors">Channels</Link>
              <Link href="#" className="hover:text-white transition-colors">The Vision</Link>
              <Link href="#" className="hover:text-white transition-colors">Gallery</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="#" className="hover:text-white transition-colors">Events</Link>
              <Link href="#" className="hover:text-white transition-colors">Partners</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>

        {/* The Card Container */}
        <div className="w-full flex flex-col md:flex-row items-stretch filter drop-shadow-2xl">

          {/* LEFT BLOCK: Tall, Wide, Rounded Left */}
          <div className="bg-[#faf6f1] w-full md:w-[62%] rounded-t-[3rem] rounded-bl-[3rem] md:rounded-br-none p-10 md:p-14 flex flex-col justify-between min-h-[420px] relative z-10">

            <div className="flex flex-col gap-10">
              <div className="relative">
                <h2 className="font-serif italic text-7xl md:text-8xl tracking-tight text-[#1C2541]">
                  imenapop
                </h2>
                <span className="absolute top-0 -right-8 text-sm font-bold text-[#1C2541]">TM</span>
              </div>

              <div className="mt-4">
                <h3 className="text-4xl font-bold text-[#1C2541] mb-6 tracking-tight">Newsletter</h3>
                {/* Input Pill */}
                <div className="flex items-center bg-[#1C2541] p-2 rounded-full max-w-md w-full shadow-lg">
                  <input
                    type="email"
                    placeholder="email"
                    className="bg-transparent text-[#faf6f1] placeholder-gray-400/80 px-6 py-2 flex-1 outline-none text-lg font-medium"
                  />
                  <button className="bg-[#e63946] text-white p-3 rounded-full hover:bg-[#d62839] transition-all cursor-pointer shadow-md">
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#1C2541]/70 font-medium mt-auto">
              We promise, no spaaaaaaam <span className="text-[#e63946]">(f*ck the spammers)</span>
            </p>
          </div>

          {/* RIGHT BLOCK: Short, Narrower, Rounded Right */}
          <div className="bg-[#faf6f1] w-full md:w-[38%] mt-0 md:mt-24 rounded-b-[3rem] md:rounded-tr-[3rem] md:rounded-bl-none p-10 md:p-12 flex flex-col justify-between relative z-10">

            {/* ATTRIBUTION TEXT - Sitting on top of the Right Block */}
            <div className="hidden md:block absolute -top-12 right-0 w-full text-right pb-4 pr-4">
              <p className="text-[11px] text-gray-400 font-medium tracking-wide">
                Website Made by ChronoTask, the best productivity platform in the world!
              </p>
            </div>

            {/* THE CONNECTOR - The Smooth Curve */}
            <div
              className="hidden md:block absolute -top-[40px] left-0 w-[40px] h-[40px] z-20"
              style={{
                background: 'radial-gradient(circle at 0 0, transparent 40px, #faf6f1 41px)'
              }}
            ></div>

            <div className="flex flex-col items-start md:items-end h-full justify-between pt-4">
              {/* CTA Button */}
              <button className="px-8 py-3 bg-[#e63946] text-white rounded-full font-bold text-sm shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">
                Work together?
              </button>

              <div className="flex flex-col items-start md:items-end gap-8 mt-auto">
                <p className="text-sm text-gray-600 text-left md:text-right leading-relaxed max-w-[260px]">
                  Every week, we share a ton of content to help you grow your business.
                  If you don&apos;t want to miss a thing, drop us your e-mail. <span className="text-[#e63946]">❤</span>
                </p>

                <div className="flex items-center gap-5">
                  <Link href="#" className="p-2 bg-transparent hover:bg-gray-200 rounded-full transition-colors"><Instagram className="w-6 h-6 text-[#1C2541]" /></Link>
                  <Link href="#" className="p-2 bg-transparent hover:bg-gray-200 rounded-full transition-colors"><Linkedin className="w-6 h-6 text-[#1C2541]" /></Link>
                  <Link href="#" className="p-2 bg-transparent hover:bg-gray-200 rounded-full transition-colors"><Twitter className="w-6 h-6 text-[#1C2541]" /></Link>
                  <Link href="#" className="p-2 bg-transparent hover:bg-gray-200 rounded-full transition-colors"><Youtube className="w-6 h-6 text-[#1C2541]" /></Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
)
}