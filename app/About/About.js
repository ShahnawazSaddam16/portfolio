"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Award, Code, Star, Zap } from "lucide-react";
import QuickFacts from "../components/QuickFacts";

const getLiveTime = () => new Date().toLocaleTimeString();
const getLearningDays = () => {
  const startDate = new Date("2025-03-23");
  const now = new Date();
  return Math.floor(Math.abs(now - startDate) / (1000 * 60 * 60 * 24));
};

const About = () => {
  const [currentTime, setCurrentTime] = useState(getLiveTime());
  const [learningDays, setLearningDays] = useState(getLearningDays());
  const deployedProjects = 10;

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
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
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
          {/* Heading with Gradient */}
          <h1 className="text-5xl sm:text-6xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 animate-fadeIn">
            About Me
          </h1>

          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-16 animate-fadeIn leading-relaxed">
            I'm{" "}
            <span className="text-cyan-400 font-bold">
              Shahnawaz Saddam Butt
            </span>
            , a 16-year-old full-stack developer creating modern, responsive
            websites with cutting-edge technologies.
          </p>

          {/* Info Cards Grid - 3D */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Card 1 - Timer */}
            <div className="card-3d relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 group-hover:border-cyan-500/60 rounded-3xl p-8 text-center animate-float group-hover:animate-glow"
                style={{ animationDelay: "0s" }}
              >
                <div className="mb-4 inline-block p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold text-cyan-300 mb-3">
                  ⏰ Live Time
                </h2>
                <h4 className="text-4xl text-cyan-400 font-extrabold font-mono">
                  {currentTime}
                </h4>
                <p className="text-sm text-gray-400 mt-4">
                  Real-time coding timer
                </p>
              </div>
            </div>

            {/* Card 2 - Learning Days */}
            <div className="card-3d relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 group-hover:border-cyan-500/60 rounded-3xl p-8 text-center animate-float group-hover:animate-glow"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="mb-4 inline-block p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-blue-300 mb-3">
                  📚 Days Coding
                </h2>
                <h4 className="text-5xl text-blue-400 font-extrabold">
                  {learningDays}+
                </h4>
                <p className="text-sm text-gray-400 mt-4">
                  Days of learning journey
                </p>
              </div>
            </div>

            {/* Card 3 - Projects */}
            <div className="card-3d relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 group-hover:border-cyan-500/60 rounded-3xl p-8 text-center animate-float group-hover:animate-glow"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="mb-4 inline-block p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-purple-300 mb-3">
                  🚀 Projects
                </h2>
                <h4 className="text-5xl text-purple-400 font-extrabold">
                  {deployedProjects}+
                </h4>
                <p className="text-sm text-gray-400 mt-4">
                  Live & deployed projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts and Journey */}
      <section className="mt-20 max-w-6xl mx-auto px-4 sm:px-8 pb-20">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Facts & Figures
          </h2>
          <p className="text-gray-400 text-lg">
            A quick look at my journey, experience, and achievements.
          </p>
        </header>

        {/* Facts Grid - 3D */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { number: "10+", label: "Projects", icon: "🎯" },
            { number: "1+", label: "Year", icon: "⏳" },
            { number: "100%", label: "Dedication", icon: "💯" },
            { number: "10+", label: "Technologies", icon: "⚡" },
          ].map((stat, index) => (
            <div
              key={index}
              className="card-3d relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/50 rounded-2xl p-8 text-center group-hover:animate-glow">
                <p className="text-4xl mb-3">{stat.icon}</p>
                <h4 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h4>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <QuickFacts />

        {/* Journey Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="flex flex-col items-center justify-center mb-16 relative">
            <div className="absolute w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full top-[-120px]" />

            <div className="flex items-center gap-5 relative z-10">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full scale-150" />

                <h2
                  className="
          relative
          text-[clamp(28px,5vw,52px)]
          font-black
          tracking-[-0.04em]
          uppercase
          bg-gradient-to-r
          from-cyan-300
          via-sky-200
          to-violet-400
          bg-clip-text
          text-transparent
          font-[family-name:var(--font-urbanist)]
          drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]
        "
                >
                  Learning Timeline
                </h2>
              </div>

              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />
            </div>

            <p
              className="
      mt-5
      text-center
      max-w-2xl
      text-slate-400
      text-[14px]
      leading-7
      tracking-wide
      font-[family-name:var(--font-inter)]
    "
            >
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
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>

            <div className="space-y-10">
              {[
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
                  title: "Now",
                  desc: "Going deep on DSA, mathematics, and ML fundamentals — building the foundation for serious AI/ML research.",
                },
                {
                  title: "Next",
                  desc: "Building an end-to-end ML audio pipeline for speaker diarization and publishing original research.",
                },
              ].map((item, index, arr) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6 group"
                >
                  <div className="relative z-10">
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                        index === arr.length - 1
                          ? "bg-purple-500 border-purple-500"
                          : "bg-slate-900 border-cyan-400"
                      }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${
                          index === arr.length - 1 ? "bg-white" : "bg-cyan-400"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div className="flex-1 card-3d relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/40 rounded-2xl p-6 group-hover:animate-glow">
                      <h3 className="text-lg font-bold text-cyan-400 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
