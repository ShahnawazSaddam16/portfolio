"use client";
import React from "react";

// ICONS
import { FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiDocker,
  SiNginx,
  SiGithub,
  SiMysql,
  SiScikitlearn,
  SiC,
  SiCplusplus,
  SiNumpy,
  SiPandas,
  SiCss3,
} from "react-icons/si";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { icons } from "lucide-react";

// ================= DATA =================
const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <FaReact className="text-cyan-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "ReactNative", icon: <FaReact className="text-blue-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "SciketLearn", icon: <SiScikitlearn className="text-orange-500" /> },
      { name: "Language", icon: <SiC className="text-blue-500" /> },
      { name: "Language", icon: <SiCplusplus className="text-blue-700" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-800" /> },
      { name: "Pandas", icon: <SiPandas className="text-sky-500" /> },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: <SiDocker className="text-sky-500" /> },
      { name: "Nginx", icon: <SiNginx className="text-green-600" /> },
      { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ],
  },
];

// ================= COMPONENT =================
const Skills = () => {
  return (
    <section id="skills" className="py-20 px-5 max-w-7xl mx-auto">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.2); }
          50% { box-shadow: 0 0 50px rgba(34, 211, 238, 0.5); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .skill-card {
          animation: slideInUp 0.6s ease-out forwards;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          transform-style: preserve-3d;
        }
        .skill-card:hover {
          transform: rotateX(8deg) rotateY(-8deg) translateZ(20px);
          box-shadow: 0 20px 60px rgba(34, 211, 238, 0.3);
        }
        .skill-item {
          animation: float 3s ease-in-out infinite;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
          transform-style: preserve-3d;
        }
        .skill-item:hover {
          transform: translateZ(15px) rotateX(5deg) rotateY(5deg);
          box-shadow: 0 10px 30px rgba(34, 211, 238, 0.4);
        }
      `}</style>

      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 font-[family-name:var(--font-manrope)]">
          💼 Tech Stack
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
          Technologies and tools I specialize in for building scalable solutions
        </p>
      </div>

      <div className="hidden md:grid md:grid-cols-2 gap-8">
        {skillsData.map((category, idx) => (
          <SkillCard key={idx} category={category} idx={idx} />
        ))}
      </div>

      <div className="md:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {skillsData.map((category, idx) => (
            <SwiperSlide key={idx}>
              <SkillCard category={category} idx={idx} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SkillCard = ({ category, idx }) => (
  <div
    className="skill-card p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-500/60 group overflow-hidden"
    style={{ animationDelay: `${idx * 0.1}s` }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative z-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-[family-name:var(--font-poppins)]">
          {category.title}
        </h2>
        <span className="text-xs text-cyan-400/60 font-semibold font-[family-name:var(--font-jetbrains-mono)]">
          {category.skills.length} SKILLS
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {category.skills.map((skill, i) => (
          <div
            key={i}
            className="skill-item p-4 rounded-xl bg-slate-900/60 border border-blue-500/30 hover:border-cyan-400/60 flex flex-col items-center gap-2 group/item font-[family-name:var(--font-inter)]"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="text-3xl group-hover/item:scale-110 transition-all duration-300">
              {skill.icon}
            </div>
            <p className="font-semibold text-xs text-gray-300 group-hover/item:text-cyan-300 transition-colors text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:via-blue-500/20 group-hover:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </div>
);

export default Skills;