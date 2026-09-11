"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { Award, Code, Star, Zap } from "lucide-react";
import QuickFacts from "./QuickFacts";

const getLiveTime = () => new Date().toLocaleTimeString();
const getLearningDays = () => {
  const startDate = new Date("2025-03-23");
  const now = new Date();
  return Math.floor(Math.abs(now - startDate) / (1000 * 60 * 60 * 24));
};

// Reusable scroll-reveal hook — fires once when the element enters the viewport
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px", ...options },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

const timelineItems = [
  {
    title: "Early 2025",
    desc: "Learned the basics of how websites are built and styled.",
  },
  {
    title: "Spring 2025",
    desc: "Started building small interactive projects and learning how logic and code work together.",
  },
  {
    title: "Mid 2025",
    desc: "Built complete web applications with modern tools and real features like dashboards and authentication.",
  },
  {
    title: "Summer 2025",
    desc: "Launched multiple real projects and ran them on my own Linux servers.",
  },
  {
    title: "Late 2025",
    desc: "Deepened focus on performance, Core Web Vitals, and production-grade code quality.",
  },
  {
    title: "March 2026",
    desc: "🏆 Placed 37th at Hack for Humanity 2026 — built EcoTracker solo, an Backend Contoller waste classifier with gamified impact tracking, competing against 775 participants internationally.",
  },
  {
    title: "June 2026",
    desc: "Completing my first client and starting my new journey as a freelancer and sucessfully made a best debut in field of freelancing.",
  },
  {
    title: "Next",
    desc: "Building an end-to-end ML audio pipeline for speaker diarization and publishing original research.",
  },
];

// Individual timeline row — animates in on its own scroll trigger
const TimelineItem = ({ item, isLast }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="relative flex items-start gap-4 sm:gap-6 group transition-all duration-700 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-24px)",
      }}
    >
      <div className="relative z-10 shrink-0">
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
            isLast
              ? "bg-purple-500 border-purple-500"
              : "bg-slate-900 border-cyan-400"
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full ${isLast ? "bg-white" : "bg-cyan-400"}`}
          ></div>
        </div>
      </div>
      <div className="flex-1 card-3d relative min-w-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/40 rounded-2xl p-5 sm:p-6 group-hover:animate-glow">
          <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-2">
            {item.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

// Stat card wrapper — fades/slides up when the stats row scrolls into view
const StatCardWrapper = ({ delayMs, inView, children }) => (
  <div
    className="transition-all duration-700 ease-out"
    style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transitionDelay: inView ? `${delayMs}ms` : "0ms",
    }}
  >
    {children}
  </div>
);

const About = () => {
  const [currentTime, setCurrentTime] = useState(getLiveTime());
  const [learningDays, setLearningDays] = useState(getLearningDays());
  const deployedProjects = 10;
  const [statsRef, statsInView] = useInView();

  useEffect(() => {
    const timeInterval = setInterval(() => setCurrentTime(getLiveTime()), 1000);
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    const daysInterval = setInterval(
      () => setLearningDays(getLearningDays()),
      1000 * 60 * 60,
    );
    return () => clearInterval(daysInterval);
  }, []);

  return (
    <section id="About">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.6); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .card-3d {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          transform-style: preserve-3d;
        }
        .card-3d:hover {
          transform: rotateX(5deg) rotateY(8deg) translateZ(15px);
          box-shadow: 0 20px 50px rgba(34, 211, 238, 0.4);
        }
      `}</style>

      <section className="About py-16 px-4 mt-20 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* ── Two-column hero layout: eyebrow + heading on the left, bio card on the right ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
            {/* Left: eyebrow + heading */}
            <div className="animate-slideInRight text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-cyan-400" />
                <span className="text-cyan-400 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
                  About Me
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Turning Ideas into{" "}
                <span className="text-cyan-400">Shipped Products</span>
              </h1>
              <div className="flex items-center justify-center gap-2 w-fit mx-auto mt-3 px-5 py-2 rounded-full border border-cyan-400/40 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl shadow-[0_0_15px_rgba(34,211,238,0.25)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <h1 className="text-sm font-semibold text-cyan-300 tracking-wide">
                  Available for work
                </h1>
              </div>
            </div>

            {/* Right: bio card */}
            <div className="relative animate-slideInLeft">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-xl" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl px-6 sm:px-8 py-6 sm:py-8 text-center lg:text-left">
                <p className="text-sm sm:text-base font-sans text-gray-300 leading-7 sm:leading-8">
                  Hi, I'm Shahnawaz Saddam Butt — a self-taught full-stack
                  developer who started coding just over a year ago and hasn't
                  stopped shipping since. I build practical tools: web apps,
                  backend services, and AI-powered systems. Most recently I've
                  placed in two consecutive international hackathons — 37th out
                  of 775 participants at Hack for Humanity 2026 with EcoTracker.
                  Both solo builds. I care about making things that actually
                  work — fast, reliable, and grounded in real-world needs.
                  Completing my first client and starting my new journey as a
                  freelancer and sucessfully made a best debut in field of
                  freelancing.
                </p>
              </div>
            </div>
          </div>

          {/* Info Cards Grid - 3D, scroll-triggered */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-20"
          >
            {/* Card 1 - Timer */}
            <StatCardWrapper delayMs={0} inView={statsInView}>
              <div className="card-3d relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div
                  className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 group-hover:border-cyan-500/60 rounded-3xl p-6 sm:p-8 text-center animate-float group-hover:animate-glow h-full"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="mb-4 inline-block p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-3">
                    ⏰ Live Time
                  </h2>
                  <h4 className="text-3xl sm:text-4xl text-cyan-400 font-extrabold font-mono">
                    {currentTime}
                  </h4>
                  <p className="text-sm text-gray-400 mt-4">
                    Real-time coding timer
                  </p>
                </div>
              </div>
            </StatCardWrapper>

            {/* Card 2 - Learning Days */}
            <StatCardWrapper delayMs={150} inView={statsInView}>
              <div className="card-3d relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div
                  className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 group-hover:border-cyan-500/60 rounded-3xl p-6 sm:p-8 text-center animate-float group-hover:animate-glow h-full"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="mb-4 inline-block p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <Code className="w-8 h-8 text-blue-400" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-3">
                    📚 Days Coding
                  </h2>
                  <h4 className="text-4xl sm:text-5xl text-blue-400 font-extrabold">
                    {learningDays}+
                  </h4>
                  <p className="text-sm text-gray-400 mt-4">
                    Days of learning journey
                  </p>
                </div>
              </div>
            </StatCardWrapper>

            {/* Card 3 - Projects */}
            <StatCardWrapper delayMs={300} inView={statsInView}>
              <div className="card-3d relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div
                  className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 group-hover:border-cyan-500/60 rounded-3xl p-6 sm:p-8 text-center animate-float group-hover:animate-glow h-full"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="mb-4 inline-block p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <Award className="w-8 h-8 text-purple-400" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-300 mb-3">
                    🚀 Projects
                  </h2>
                  <h4 className="text-4xl sm:text-5xl text-purple-400 font-extrabold">
                    {deployedProjects}+
                  </h4>
                  <p className="text-sm text-gray-400 mt-4">
                    Live &amp; deployed projects
                  </p>
                </div>
              </div>
            </StatCardWrapper>
          </div>
        </div>
      </section>

      <QuickFacts />

      {/* Journey Timeline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center justify-center mb-16 relative">
          <div className="absolute w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full top-[-120px]" />

          <div className="flex items-center gap-3 sm:gap-5 relative z-10">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full scale-150" />
              <h2
                className="
                  relative text-[clamp(24px,6vw,52px)] font-black tracking-[-0.04em] uppercase
                  bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-400 bg-clip-text text-transparent
                  font-[family-name:var(--font-urbanist)] drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]
                "
              >
                Learning Timeline
              </h2>
            </div>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />
          </div>

          <p className="mt-5 text-center max-w-2xl text-slate-400 text-[13px] sm:text-[14px] leading-6 sm:leading-7 tracking-wide font-[family-name:var(--font-inter)]">
            A journey through my growth as a Full Stack Developer, building
            modern applications, scalable systems, and immersive digital
            experiences.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]" />
            <div className="w-16 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_18px_#a855f7]" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-violet-400 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />
          <div className="space-y-8 sm:space-y-10">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                isLast={index === timelineItems.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
