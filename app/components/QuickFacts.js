"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  Server,
  Cpu,
  Trophy,
  Award,
  Ship,
  Rocket,
  Smartphone,
  Globe,
  Database,
  Gauge,
  Briefcase,
  FlaskConical,
  Terminal,
} from "lucide-react";

const useInView = () => {
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const stats = [
  { value: "37th", label: "Hack for Humanity 2026", sub: "Out of 775 participants" },
  { value: "Finalist", label: "USAII Global AI Hackathon", sub: "2026 · High School Level" },
  { value: "10+", label: "Projects Deployed", sub: "Live and in production" },
  { value: "2", label: "International Hackathons", sub: "Both placed, both solo" },
];

const highlights = [
  {
    icon: <Trophy size={22} />,
    tag: "March 2026",
    title: "Hack for Humanity 2026",
    value:
      "Placed 37th out of 775 international participants by building EcoTracker solo — an AI waste classifier with gamified impact tracking.",
    accent: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-300",
    tagColor: "text-cyan-400",
  },
  {
    icon: <Award size={22} />,
    tag: "June 2026",
    title: "USAII Global AI Hackathon",
    value:
      "Advanced to the Final Round at the High School Level, recognised for innovation, technical creativity and applied AI.",
    accent: "from-purple-500/20 to-blue-500/20",
    iconColor: "text-purple-300",
    tagColor: "text-purple-400",
  },
];

const facts = [
  {
    icon: <Ship size={18} />,
    title: "Delivery",
    value: "Ships full projects end-to-end — idea to production",
    color: "text-cyan-300",
    bg: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: <Server size={18} />,
    title: "Development",
    value: "Building backend SaaS — code to solutions",
    color: "text-blue-300",
    bg: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: <Cpu size={18} />,
    title: "AI Integration",
    value: "Integrates AI & computer vision into real apps",
    color: "text-purple-300",
    bg: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: <Terminal size={18} />,
    title: "Infrastructure",
    value: "Manages Linux servers & self-hosted systems",
    color: "text-cyan-300",
    bg: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: <Smartphone size={18} />,
    title: "Mobile",
    value: "Builds cross-platform apps with React Native",
    color: "text-blue-300",
    bg: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: <Globe size={18} />,
    title: "Web",
    value: "Crafts fast, modern web apps with Next.js",
    color: "text-purple-300",
    bg: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: <Database size={18} />,
    title: "Backend & Data",
    value: "Node.js, Express, MongoDB and Supabase APIs",
    color: "text-cyan-300",
    bg: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: <Gauge size={18} />,
    title: "Performance",
    value: "Obsessed with Core Web Vitals and production-grade quality",
    color: "text-blue-300",
    bg: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: <Briefcase size={18} />,
    title: "Freelancing",
    value: "First client completed — a strong debut in freelancing",
    color: "text-purple-300",
    bg: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: <Code2 size={18} />,
    title: "Engineering Focus",
    value: "Clean architecture & long-term scalable growth",
    color: "text-cyan-300",
    bg: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: <FlaskConical size={18} />,
    title: "Up Next",
    value: "End-to-end ML audio pipeline for speaker diarization",
    color: "text-blue-300",
    bg: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: <Rocket size={18} />,
    title: "Mindset",
    value: "Self-taught and shipping consistently since day one",
    color: "text-purple-300",
    bg: "from-purple-500/20 to-pink-500/20",
  },
];

const stack = [
  "React Native",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Supabase",
  "Cloudinary",
  "Linux",
];

const QuickFacts = () => {
  return (
    <section className="mt-20 px-4 sm:px-8 lg:px-16 mb-20">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
              At a Glance
            </span>
            <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Quick Facts
          </h1>
          <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4"></div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="group relative h-full rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl p-5 sm:p-6 text-center transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(34,211,238,0.25)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-bold text-white leading-snug">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-[11px] sm:text-xs text-gray-400">
                    {stat.sub}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 150}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_15px_50px_rgba(34,211,238,0.3)]">
                <div
                  className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${item.accent} blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative flex items-start gap-4 sm:gap-5">
                  <div
                    className={`shrink-0 p-4 rounded-2xl bg-gradient-to-br ${item.accent} ${item.iconColor}`}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <span
                      className={`text-xs font-bold tracking-[0.25em] uppercase ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                    <h2 className="mt-1 text-lg sm:text-xl font-bold text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {facts.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 100}>
              <div className="group relative h-full flex items-center gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_10px_35px_rgba(34,211,238,0.2)]">
                <div
                  className={`shrink-0 p-3 rounded-xl bg-gradient-to-br ${item.bg} ${item.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h2 className="text-white font-bold text-sm">{item.title}</h2>
                  <p className="mt-1 text-gray-300 text-xs sm:text-[13px] leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 sm:mt-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-cyan-300 border border-cyan-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default QuickFacts;