"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

const navLinks = [
  { label: "About", href: "/#About" },
  { label: "Projects", href: "/#Projects" },
  { label: "Feedback", href: "/#Feedback" },
  { label: "Contact", href: "/#Contact" },
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/ShahanwazSaddam144?tab=repositories",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/your-profile",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:shahnawazsaddamb@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <>
      <style>{`
        @keyframes pulseLine {
          0%, 100% { opacity: .4; transform: scaleX(.88); }
          50% { opacity: 1; transform: scaleX(1); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 8px #22d3ee; }
          50% { box-shadow: 0 0 22px #22d3ee; }
        }
        .footer-social:hover svg {
          filter: drop-shadow(0 0 6px #22d3ee);
        }
      `}</style>

      <footer
        ref={ref}
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, transparent 0%, rgba(7,21,27,0.6) 100%)",
          borderTop: "1px solid rgba(34,211,238,0.1)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(34,211,238,0.05), transparent)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "56px 24px 32px",
            position: "relative",
            zIndex: 1,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s cubic-bezier(.22,1,.36,1), transform 0.8s cubic-bezier(.22,1,.36,1)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

            <div className="flex flex-col items-center sm:items-start gap-3">
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg, #67e8f9 0%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Shahnawaz Saddam Butt
              </div>
              <p style={{ color: "#475569", fontSize: "13px", fontWeight: 500 }}>
                Full Stack Developer · Open to work
              </p>
            </div>

            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "#64748b",
                    fontSize: "13px",
                    fontWeight: 600,
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#67e8f9")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer-social"
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(34,211,238,0.06)",
                    border: "1px solid rgba(34,211,238,0.16)",
                    color: "#67e8f9",
                    transition: "background 0.25s ease, border-color 0.25s ease, transform 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(34,211,238,0.14)";
                    e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(34,211,238,0.06)";
                    e.currentTarget.style.borderColor = "rgba(34,211,238,0.16)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 my-8">
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "linear-gradient(to right, transparent, rgba(34,211,238,0.25))",
                animation: "pulseLine 3s ease-in-out infinite",
              }}
            />
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#22d3ee",
                animation: "glowPulse 2.5s ease-in-out infinite",
              }}
            />
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "linear-gradient(to left, transparent, rgba(34,211,238,0.25))",
                animation: "pulseLine 3s ease-in-out infinite",
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p style={{ color: "#334155", fontSize: "12px", fontWeight: 500 }}>
              © {new Date().getFullYear()} Shahnawaz Saddam Butt. All rights reserved.
            </p>
            <p
              style={{
                color: "#334155",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              Built with{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #67e8f9, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                }}
              >
                Next.js & Tailwind CSS
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}