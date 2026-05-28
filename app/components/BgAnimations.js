"use client";

import React, { useEffect, useState } from "react";

const BgAnimations = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) return null;

  return (
    <>
      <style>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.08); }
          66% { transform: translate(-30px, 40px) scale(0.94); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-50px, 30px) scale(1.05); }
          70% { transform: translate(35px, -45px) scale(0.96); }
        }
        @keyframes floatOrb3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(25px, 50px) scale(1.1); }
        }
        @keyframes driftLine1 {
          0% { stroke-dashoffset: 0; opacity: 0.18; }
          50% { opacity: 0.38; }
          100% { stroke-dashoffset: -320; opacity: 0.18; }
        }
        @keyframes driftLine2 {
          0% { stroke-dashoffset: 0; opacity: 0.1; }
          50% { opacity: 0.28; }
          100% { stroke-dashoffset: 280; opacity: 0.1; }
        }
        @keyframes driftLine3 {
          0% { stroke-dashoffset: -100; opacity: 0.12; }
          50% { opacity: 0.3; }
          100% { stroke-dashoffset: 220; opacity: 0.12; }
        }
        @keyframes pulseNode {
          0%, 100% { r: 2.5; opacity: 0.5; }
          50% { r: 4; opacity: 1; }
        }
        @keyframes pulseNodeSlow {
          0%, 100% { r: 1.8; opacity: 0.35; }
          50% { r: 3.2; opacity: 0.85; }
        }
        @keyframes hexFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.06; }
          50% { transform: translateY(-22px) rotate(8deg); opacity: 0.14; }
        }
        @keyframes hexFloat2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.05; }
          50% { transform: translateY(18px) rotate(-6deg); opacity: 0.12; }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="orb3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
            </radialGradient>
          </defs>

          <ellipse
            cx="280"
            cy="220"
            rx="380"
            ry="340"
            fill="url(#orb1)"
            style={{ animation: "floatOrb1 18s ease-in-out infinite" }}
          />
          <ellipse
            cx="1180"
            cy="680"
            rx="420"
            ry="360"
            fill="url(#orb2)"
            style={{ animation: "floatOrb2 22s ease-in-out infinite" }}
          />
          <ellipse
            cx="900"
            cy="150"
            rx="300"
            ry="260"
            fill="url(#orb3)"
            style={{ animation: "floatOrb3 26s ease-in-out infinite" }}
          />

          {[...Array(4)].map((_, i) => (
            <line
              key={i}
              x1={i * 300}
              y1={180 + i * 80}
              x2={1440}
              y2={340 + i * 60}
              stroke="#22d3ee"
              strokeWidth="0.5"
              strokeDasharray="80 180"
              style={{
                animation: `driftLine${(i % 3) + 1} ${12 + i * 2}s linear infinite`,
              }}
            />
          ))}

          {[...Array(10)].map((_, i) => (
            <circle
              key={i}
              cx={100 + i * 130}
              cy={200 + (i % 5) * 120}
              r="2.5"
              fill="#22d3ee"
              style={{
                animation: `pulseNode ${3 + (i % 2)}s ease-in-out infinite`,
              }}
            />
          ))}

          {[...Array(6)].map((_, i) => (
            <polygon
              key={i}
              points="720,100 780,150 780,230 720,280 660,230 660,150"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="0.6"
              style={{
                transform: `translate(${i * 120}px, ${i * 40}px)`,
                animation: `${i % 2 === 0 ? "hexFloat" : "hexFloat2"} 10s ease-in-out infinite`,
              }}
            />
          ))}
        </svg>
      </div>
    </>
  );
};

export default BgAnimations;