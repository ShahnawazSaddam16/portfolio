import React from "react";
import { Code2, Server, Database, Rocket, Globe, Cpu, Trophy, Award, Ship } from "lucide-react";

const facts = [
  { icon: <Trophy size={18} />, title: "Achievement", value: "37th Place — Hack for Humanity 2026 (775 participants)" },
  { icon: <Server size={18} />, title: "Devlopment", value: "Making Backend Saas - Code to Solutions" },
  { icon: <Ship size={18} />, title: "Delivery", value: "Ships full projects end-to-end — idea to production" },
  { icon: <Cpu size={18} />, title: "AI Integration", value: "Integrates AI & computer vision into real apps" },
  { icon: <Server size={18} />, title: "Infrastructure", value: "Manages Linux servers & self-hosted systems" },
  { icon: <Code2 size={18} />, title: "Engineering Focus", value: "Clean architecture & long-term scalable growth" },
];

const QuickFacts = () => {
  return (
    <section className="mt-20 px-6 mb-15">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Quick Facts
        </h1>
        <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3"></div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
          {facts.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-xl border border-cyan-500/20 bg-white/5 backdrop-blur-md hover:border-cyan-400/40 transition"
            >
              <div className="text-cyan-300">{item.icon}</div>
              <div>
                <h2 className="text-white font-bold text-sm">{item.title}</h2>
                <p className="text-gray-300 text-xs leading-relaxed">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;