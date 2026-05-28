'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  User2,
  FolderGit2,
  Phone,
  Code2,
  Home,
  Github,
  Instagram,
  Linkedin,
  Sparkles,
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <style>{`
        .navbar-container {
          background: rgba(15, 23, 42, 0.72);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(34, 211, 238, 0.12);
          box-shadow:
            0 10px 40px rgba(0,0,0,0.35),
            inset 0 1px 0 rgba(255,255,255,0.04);
        }

        .logo-box {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(34,211,238,0.18), rgba(59,130,246,0.15), rgba(168,85,247,0.18));
          border: 1px solid rgba(34,211,238,0.25);
          box-shadow:
            0 0 30px rgba(34,211,238,0.18),
            inset 0 0 18px rgba(255,255,255,0.04);
        }

        .logo-box::before {
          content: '';
          position: absolute;
          inset: -120%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.15),
            transparent
          );
          animation: shine 5s linear infinite;
        }

        @keyframes shine {
          0% {
            transform: rotate(0deg) translateX(-100%);
          }
          100% {
            transform: rotate(0deg) translateX(220%);
          }
        }

        .nav-link {
          position: relative;
          transition: all 0.35s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -6px;
          transform: translateX(-50%);
          width: 0%;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(to right, #22d3ee, #3b82f6, #a855f7);
          transition: width 0.35s ease;
          box-shadow: 0 0 20px rgba(34,211,238,0.7);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link:hover {
          color: #67e8f9;
          transform: translateY(-2px);
        }

        .social-icon {
          transition: all 0.35s ease;
          background: rgba(15,23,42,0.55);
          border: 1px solid rgba(34,211,238,0.12);
        }

        .social-icon:hover {
          transform: translateY(-4px) scale(1.08);
          border-color: rgba(34,211,238,0.45);
          box-shadow:
            0 0 25px rgba(34,211,238,0.28),
            inset 0 0 10px rgba(255,255,255,0.04);
        }

        .mobile-menu {
          background: rgba(15, 23, 42, 0.92);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(34,211,238,0.12);
          animation: mobileOpen 0.35s ease;
        }

        @keyframes mobileOpen {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }
      `}</style>

      <div className="navbar-container max-w-7xl mx-auto rounded-3xl px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="logo-box h-14 w-14 rounded-2xl flex items-center justify-center text-xl font-black text-white tracking-widest"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            SSB
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">

          <li>
            <Link
              href="#About"
              className="nav-link flex items-center gap-2 text-gray-300 font-medium"
            >
              <User2 size={18} />
              About
            </Link>
          </li>

          <li>
            <Link
              href="#skills"
              className="nav-link flex items-center gap-2 text-gray-300 font-medium"
            >
              <Code2 size={18} />
              Skills
            </Link>
          </li>

          <li>
            <Link
              href="#Projects"
              className="nav-link flex items-center gap-2 text-gray-300 font-medium"
            >
              <FolderGit2 size={18} />
              Projects
            </Link>
          </li>

          <li>
            <Link
              href="#Contact"
              className="nav-link flex items-center gap-2 text-gray-300 font-medium"
            >
              <Phone size={18} />
              Contact
            </Link>
          </li>

          <li>
            <Link
              href="#FAQ"
              className="nav-link flex items-center gap-2 text-gray-300 font-medium"
            >
              <Sparkles size={18} />
              FAQ
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-3">

          <Link
            href="https://github.com/ShahnawazSaddam16?tab=repositories"
            target="_blank"
            className="social-icon h-11 w-11 rounded-xl flex items-center justify-center text-gray-300 hover:text-cyan-400"
          >
            <Github size={19} />
          </Link>

          <Link
            href="https://www.instagram.com/shahnawaz_x_butt/?hl=en"
            target="_blank"
            className="social-icon h-11 w-11 rounded-xl flex items-center justify-center text-gray-300 hover:text-pink-400"
          >
            <Instagram size={19} />
          </Link>

          <Link
            href="https://linkedin.com/"
            target="_blank"
            className="social-icon h-11 w-11 rounded-xl flex items-center justify-center text-gray-300 hover:text-blue-400"
          >
            <Linkedin size={19} />
          </Link>

        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 hover:text-cyan-400 transition-all duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu lg:hidden mt-4 rounded-3xl p-6 max-w-7xl mx-auto">

          <ul className="flex flex-col gap-5 text-center">

            <li>
              <Link
                href="#About"
                className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400"
              >
                <User2 size={18} />
                About
              </Link>
            </li>

            <li>
              <Link
                href="#skills"
                className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400"
              >
                <Code2 size={18} />
                Skills
              </Link>
            </li>

            <li>
              <Link
                href="#Projects"
                className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400"
              >
                <FolderGit2 size={18} />
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="#Contact"
                className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400"
              >
                <Phone size={18} />
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="#FAQ"
                className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400"
              >
                <Sparkles size={18} />
                FAQ
              </Link>
            </li>

          </ul>

          <div className="flex items-center justify-center gap-4 mt-8">

            <Link
              href="https://github.com/ShahnawazSaddam16?tab=repositories"
              target="_blank"
              className="social-icon h-11 w-11 rounded-xl flex items-center justify-center text-gray-300 hover:text-cyan-400"
            >
              <Github size={18} />
            </Link>

            <Link
              href="https://www.instagram.com/shahnawaz_x_butt/?hl=en"
              target="_blank"
              className="social-icon h-11 w-11 rounded-xl flex items-center justify-center text-gray-300 hover:text-pink-400"
            >
              <Instagram size={18} />
            </Link>

            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="social-icon h-11 w-11 rounded-xl flex items-center justify-center text-gray-300 hover:text-blue-400"
            >
              <Linkedin size={18} />
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;