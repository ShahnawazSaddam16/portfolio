"use client";
import React from "react";
import Link from "next/link";
import {GitHubCalendar} from "react-github-calendar";
import { Sparkles } from "lucide-react";

export default function GithubSection() {
  const username = "ShahnawazSaddam16";

  return (
    <section id="github" className="py-12 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes glowSmall { 0%,100% { opacity: 0.6 } 50% { opacity: 1 } }
        .gh-card { transform-style: preserve-3d; transition: transform 0.5s cubic-bezier(0.23,1,0.32,1); }
        @media (min-width: 768px) { .gh-card:hover { transform: translateZ(12px) rotateX(3deg) rotateY(-4deg); } }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="gh-card bg-gradient-to-br from-slate-900/90 to-slate-800/85 border border-cyan-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              <h3 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 font-[family-name:var(--font-manrope)]">
                GitHub Contributions
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <Link href={`https://github.com/${username}`}>
                <button className="px-3 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-sm shadow-md hover:scale-105 transition font-[family-name:var(--font-inter)]">View Profile</button>
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-700/30">
            <div className="p-4 bg-slate-900/80">
              <GitHubCalendar username={username} />
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-300 font-[family-name:var(--font-inter)]">A snapshot of recent activity. Hover or tap days to see contribution counts. Styled to match the portfolio theme.</p>
        </div>
      </div>
    </section>
  );
}
