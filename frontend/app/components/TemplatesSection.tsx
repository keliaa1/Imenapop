"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap } from "lucide-react";
import { FadeInOnScroll } from "./AnimationComponents";

interface Template {
  id: string;
  title: string;
  category: string;
  price: string;
  code: string;
  image: string;
}

interface TemplatesSectionProps {
  isDarkMode: boolean;
  templates: Template[];
}

export function TemplatesSection({
  isDarkMode,
  templates,
}: TemplatesSectionProps) {
  return (
    <section
      className={`py-16 sm:py-24 md:py-32 px-4 overflow-hidden relative border-t transition-colors duration-300 ${isDarkMode ? "bg-[#0d1117] border-gray-800" : "bg-[#f8f8f8] border-gray-100"}`}
    >
      {/* Background Curves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-[0.4]"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 600 C 200 400, 600 800, 1540 500"
            stroke={isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-100 700 C 300 500, 700 900, 1540 600"
            stroke={isDarkMode ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)"}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-100 300 C 400 100, 900 600, 1540 300"
            stroke={isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"}
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        {/* Soft Blobs for depth */}
        <div
          className={`absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 ${isDarkMode ? "bg-blue-900/20" : "bg-blue-200/40"}`}
        />
        <div
          className={`absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 ${isDarkMode ? "bg-purple-900/20" : "bg-purple-200/40"}`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-[#1C2541] font-bold text-sm tracking-widest uppercase mb-4 block">
              Selected Templates
            </span>
            <h2
              className={`text-2xl sm:text-4xl md:text-6xl font-serif italic max-w-2xl mx-auto leading-tight tracking-tight transition-colors ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              Choose your theme and start creating
            </h2>
          </div>
        </FadeInOnScroll>

        <div className="perspective-1000 w-full overflow-hidden py-10">
          <div className="carousel-container preserve-3d">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 px-6 justify-center preserve-3d">
              {templates.map((template, idx) => (
                <div
                  key={idx}
                  className={`carousel-item relative w-64 md:w-80 aspect-[3/4] group ${idx === 0 ? "tilt-left-1" : idx === 1 ? "tilt-center" : "tilt-right-1"}`}
                >
                  {template.id === "kwibuka" ? (
                    <div className="absolute inset-0 bg-white overflow-hidden">
                      <Image
                        src="/kwibuka-bg.jpeg"
                        alt="Background"
                        fill
                        className="object-cover opacity-100"
                      />
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="bg-white/95 w-full h-[85%] rounded-lg flex flex-col items-center p-6 text-[#6d645f] shadow-2xl">
                          <Image
                            src="/kwibuka.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="mb-4"
                          />
                          <div className="text-[10px] uppercase tracking-widest opacity-80 mb-2 font-serif">
                            Commemoration
                          </div>
                          <div className="text-3xl font-extrabold leading-none text-center">
                            KWIBUKA
                            <br />
                            31
                          </div>
                          <div className="flex items-center w-full gap-2 my-4">
                            <div className="h-[1px] bg-[#6d645f]/30 flex-1" />
                            <div className="text-sm italic font-serif">
                              with
                            </div>
                            <div className="h-[1px] bg-[#6d645f]/30 flex-1" />
                          </div>
                          <div className="text-lg font-bold border-b border-[#6d645f]/30 pb-1 mb-4 whitespace-nowrap">
                            Imena Family
                          </div>
                          <div className="text-sm font-medium">
                            30 / 09 / 2023
                          </div>
                          <div className="w-16 h-[1px] bg-[#6d645f]/40 my-4" />
                          <div className="text-[10px] font-serif leading-tight">
                            Nyabihu Genocide
                            <br />
                            Memorial
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : template.id === "event" ? (
                    <div className="absolute inset-0 bg-white overflow-hidden flex flex-col items-center p-0 text-center">
                      {/* Textured Beige Background */}
                      <div className="absolute inset-0 bg-[#f4e8e0] opacity-100 z-0">
                        <Image
                          src="/event/beige-backgorund.png"
                          alt="Background"
                          fill
                          className="object-cover opacity-30"
                        />
                      </div>

                      {/* Arched Card */}
                      <div className="relative mt-12 w-[85%] h-[80%] bg-white rounded-t-full shadow-lg z-10 flex flex-col items-center p-6 pt-6">
                        <Image
                          src="/event/imenalogo2.png"
                          alt="Logo"
                          width={100}
                          height={100}
                          className="mb-2"
                        />
                        <div className="text-2xl font-serif italic mb-2 leading-tight text-[#5d707c]">
                          Saturday
                          <br />
                          Meetup
                        </div>
                        <div className="text-[9px] uppercase tracking-widest mb-4 text-[#5d707c]">
                          HOSTED BY WIHOGORA
                        </div>

                        <div className="flex items-center w-full gap-2 mb-4">
                          <div className="flex flex-col flex-1 items-center">
                            <div className="h-[1px] bg-[#5d707c]/40 w-full" />
                            <div className="text-[7px] uppercase tracking-widest text-[#5d707c]">
                              September
                            </div>
                            <div className="h-[1px] bg-[#5d707c]/40 w-full" />
                          </div>
                          <div className="text-3xl font-serif italic text-[#5d707c]">
                            16
                          </div>
                          <div className="flex flex-col flex-1 items-center">
                            <div className="h-[1px] bg-[#5d707c]/40 w-full" />
                            <div className="text-[7px] uppercase tracking-widest text-[#5d707c]">
                              2026
                            </div>
                            <div className="h-[1px] bg-[#5d707c]/40 w-full" />
                          </div>
                        </div>

                        <div className="text-[9px] mb-2 text-[#5d707c]">
                          Don&apos;t miss out
                        </div>
                        <div className="text-[10px] font-medium text-[#5d707c]">
                          Rwanda Coding Academy
                        </div>
                        <div className="text-[7px] italic opacity-60 text-[#5d707c]">
                          A courtesy of Imena family
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={template.image}
                        alt={template.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end text-left items-start">
                        <h3 className="text-white text-3xl font-bold mb-1 tracking-tight">
                          {template.title}
                        </h3>
                        <p className="text-white/60 text-sm font-medium mb-8">
                          {template.category}
                        </p>
                        <div className="flex items-center gap-4 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] w-full">
                          <Zap className="w-3 h-3" />
                          <span>{template.code}</span>
                          <span className="ml-auto text-white">
                            {template.price}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="card-drawer">
                    <div className="w-12 h-1 bg-gray-100 rounded-full mb-2" />
                    <Link
                      href={`/form?template=${template.id}`}
                      className="drawer-button"
                    >
                      Try Template
                    </Link>
                    <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                      Fast Generation
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
