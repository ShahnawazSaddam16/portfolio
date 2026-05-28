'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  User2,
  FolderGit,
  Phone,
  Code,
  GithubIcon,
  Home,
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50 backdrop-blur-xl bg-opacity-80">
      <style>{`
        .Navbar {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95));
          box-shadow:
            0 10px 40px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(148,163,184,0.1);
          border-bottom: 1px solid rgba(148,163,184,0.15);
          animation: navFloat 6s ease-in-out infinite;
        }

        @keyframes navFloat {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        .logo {
          font-weight: 800;
          font-size: 1.4rem;
          background: linear-gradient(90deg, #22d3ee, #3b82f6, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          display: inline-block;
          animation: logoGlow 3s ease-in-out infinite;
        }

        .logo::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 10px;
          filter: blur(12px);
          opacity: 0.5;
          background: linear-gradient(90deg, #22d3ee, #3b82f6, #a855f7);
          z-index: -1;
        }

        @keyframes logoGlow {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .nav-link {
          position: relative;
          transition: all 0.35s cubic-bezier(0.23, 1, 0.320, 1);
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .nav-link:hover {
          transform: translateY(-6px) rotateX(-12deg) rotateY(8deg) scale(1.08);
          filter: drop-shadow(0 10px 20px rgba(34, 211, 238, 0.3));
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #22d3ee, #3b82f6);
          transform: translateX(-50%) translateZ(5px);
          transition: width 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.6);
        }

        .nav-link:hover::after {
          width: 100%;
          box-shadow: 0 0 25px rgba(34, 211, 238, 0.8);
        }

        .mobileMenu {
          animation: slideDown 0.4s ease forwards;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="Navbar rounded-2xl mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="logo font-[family-name:var(--font-sora)]">
            SSB
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden min-[1021px]:flex gap-3 items-center mx-auto">

          <li>
            <Link href="/" className="nav-link flex items-center gap-2 text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 font-[family-name:var(--font-inter)]">
              <Home size={18} /> Home
            </Link>
          </li>

          <li>
            <Link href="#About" className="nav-link flex items-center gap-2 text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 font-[family-name:var(--font-inter)]">
              <User2 size={18} /> About
            </Link>
          </li>

          <li>
            <Link href="#Projects" className="nav-link flex items-center gap-2 text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 font-[family-name:var(--font-inter)]">
              <FolderGit size={18} /> Projects
            </Link>
          </li>

          <li>
            <Link href="#services" className="nav-link flex items-center gap-2 text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 font-[family-name:var(--font-inter)]">
              <Code size={18} /> Services
            </Link>
          </li>

          <li>
            <Link
              href="https://github.com/ShahnawazSaddam16?tab=repositories"
              target="_blank"
              className="nav-link flex items-center gap-2 text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 font-[family-name:var(--font-inter)]"
            >
              <GithubIcon size={20} /> GitHub
            </Link>
          </li>

          <li>
            <Link href="#Contact" className="nav-link flex items-center gap-2 text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 font-[family-name:var(--font-inter)]">
              <Phone size={18} /> Contact
            </Link>
          </li>

        </ul>

        {/* Mobile Toggle */}
        <button
          className="min-[1021px]:hidden text-gray-300 hover:text-cyan-400 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mobileMenu min-[1021px]:hidden mt-4 space-y-3 mx-auto text-center rounded-2xl py-6 backdrop-blur-xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/30 shadow-2xl font-[family-name:var(--font-inter)]">

          <li>
            <Link href="/" className="flex items-center justify-center gap-2 py-2 text-gray-300 hover:text-cyan-400">
              <Home size={18} /> Home
            </Link>
          </li>

          <li>
            <Link href="#About" className="flex items-center justify-center gap-2 py-2 text-gray-300 hover:text-cyan-400">
              <User2 size={18} /> About
            </Link>
          </li>

          <li>
            <Link href="#Projects" className="flex items-center justify-center gap-2 py-2 text-gray-300 hover:text-cyan-400">
              <FolderGit size={18} /> Projects
            </Link>
          </li>

          <li>
            <Link href="#services" className="flex items-center justify-center gap-2 py-2 text-gray-300 hover:text-cyan-400">
              <Code size={18} /> Services
            </Link>
          </li>

          <li>
            <Link
              href="https://github.com/ShahanwazSaddam144?tab=repositories"
              className="flex items-center justify-center gap-2 py-2 text-gray-300 hover:text-cyan-400"
            >
              <GithubIcon size={18} /> GitHub
            </Link>
          </li>

          <li>
            <Link href="#Contact" className="flex items-center justify-center gap-2 py-2 text-gray-300 hover:text-cyan-400">
              <Phone size={18} /> Contact
            </Link>
          </li>

        </ul>
      )}
    </nav>
  );
};

export default Navbar;