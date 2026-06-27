"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Trophy } from "lucide-react";
import Image from "next/image";

const messages = [
  "Full Stack Developer",
  "Web Developer",
  "React-Native Developer",
  "Software Engineer",
];

const techStacks = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "React-Native",
  "Express",
  "SQL",
  "C Language",
  "Python",
];

const Home_ = () => {
  const [text, setText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [techText, setTechText] = useState("");
  const [techIndex, setTechIndex] = useState(0);
  const [techChar, setTechChar] = useState(0);
  const [techDeleting, setTechDeleting] = useState(false);

  useEffect(() => {
    const current = messages[msgIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setMsgIndex((prev) => (prev + 1) % messages.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting]);

  useEffect(() => {
    const current = techStacks[techIndex];
    const speed = techDeleting ? 35 : 70;

    const timeout = setTimeout(() => {
      if (!techDeleting) {
        setTechText(current.slice(0, techChar + 1));
        setTechChar((prev) => prev + 1);

        if (techChar + 1 === current.length) {
          setTimeout(() => setTechDeleting(true), 1000);
        }
      } else {
        setTechText(current.slice(0, techChar - 1));
        setTechChar((prev) => prev - 1);

        if (techChar - 1 === 0) {
          setTechDeleting(false);
          setTechIndex((prev) => (prev + 1) % techStacks.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [techChar, techDeleting]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-24 pb-16 relative overflow-hidden">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center gap-8 md:gap-12 text-center">
          <div className="">
            <div className="relative inline-block">
              <div className="relative bg-transparent p-8 md:p-12 rounded-3xl">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-35 h-35 rounded-full overflow-hidden border border-cyan-500/30 mb-3">
                    <Image
                      src="/shahnawaz.jpeg"
                      alt="profile"
                      width={112}
                      height={112}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-xs text-cyan-400 uppercase tracking-widest">
                    Developer • Engineer • Freelancer
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 gradient-shift font-[family-name:var(--font-poppins)]">
                  Shahnawaz Saddam Butt
                </h1>

                <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-300 mb-6 font-[family-name:var(--font-sora)]">
                  Building Beautiful & Scalable Digital Solutions
                </p>

                <div className="flex justify-center items-center mb-8">
                  <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
                    <span className="text-lg md:text-2xl font-bold text-cyan-300 font-[family-name:var(--font-poppins)]">
                      {text}
                      <span className="animate-pulse text-cyan-400 ml-1">
                        |
                      </span>
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
                  I create modern, fast, and fully responsive web applications.
                  Specializing in React, Next.js, and full-stack development
                  with a focus on user experience and performance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/About">
                    <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg font-[family-name:var(--font-inter)]">
                      View My Work
                    </button>
                  </Link>

                  <Link href="/Contact">
                    <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg font-[family-name:var(--font-inter)]">
                      Get In Touch
                    </button>
                  </Link>
                </div>

                <div className="pt-8 border-t border-cyan-500/20">
                  <p className="text-gray-400 text-sm mb-4 flex items-center justify-center gap-2 font-[family-name:var(--font-inter)]">
                    <Code2 className="w-4 h-4" />
                    Currently working with
                  </p>
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600/30">
                    <span className="text-cyan-300 font-semibold text-sm md:text-base font-[family-name:var(--font-jetbrains-mono)]">
                      {techText}
                      <span className="animate-pulse text-blue-400 ml-1">
                        ▌
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500/10 to-amber-500/10">
              <div className="inline-flex items-center gap-3">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-300 font-semibold">
                  Hackathons & Achievements
                </span>
              </div>
              <p className="text-[17px] font-semibold">
                37th Rank Among 786 Participants
              </p>
              <div className="flex justify-center items-center text-center gap-3">
                <a
                  href="https://devpost.com/software/ecotracker-p05z4d"
                  target="_blank"
                >
                  <button
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center
                      font-semibold rounded-[5px] mt-3 px-4 py-1 cursor-pointer"
                  >
                    View Project <ArrowRight size={20} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_;
