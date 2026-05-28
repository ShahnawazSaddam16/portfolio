"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hackathon = () => {
  return (
    <section id="hackathon" className="py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/20 transform-gpu hover:-translate-y-1 hover:scale-[1.01] transition-all duration-500">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/3">
                  <div className="relative rounded-2xl overflow-hidden border border-cyan-400/20 shadow-cyan-600/20">
                    <Image src="/ProjectImages/Thumbnail.png" width={340} height={340} alt="Hackathon Achievement" className="w-full h-auto object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-3">
                      <p className="text-xs tracking-widest uppercase">Self-made, no AI use</p>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-2/3 space-y-5">
                  <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-[family-name:var(--font-poppins)]">
                    Hackathon Achievement
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg font-[family-name:var(--font-inter)]">
                    Proud to secure <span className="font-bold text-cyan-300">37th place</span> among <span className="font-bold text-blue-300">775 participants</span> in a competitive hackathon. This project is fully self-made and crafted with focused expertise in full-stack development, UI/UX, and system design.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-cyan-500/30 bg-slate-800/70 backdrop-blur-md">
                      <p className="text-sm text-gray-400 uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)]">Event</p>
                      <p className="text-xl font-semibold text-cyan-300 font-[family-name:var(--font-sora)]">Global Hack 2026</p>
                    </div>
                    <div className="p-4 rounded-xl border border-blue-500/30 bg-slate-800/70 backdrop-blur-md">
                      <p className="text-sm text-gray-400 uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)]">Rank</p>
                      <p className="text-xl font-semibold text-blue-300 font-[family-name:var(--font-sora)]">37 / 775</p>
                    </div>
                  </div>

                  <p className="text-gray-400 font-[family-name:var(--font-inter)]">
                    During the hackathon, the project showcased advanced interactive 3D UI effects, strong backend performance, and responsive user experience under tight timelines.
                  </p>

                  <a
                    href="https://devpost.com/software/ecotracker-p05z4d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 font-[family-name:var(--font-sora)]"
                  >
                    See Hackathon Results
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hackathon;