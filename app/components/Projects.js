"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Code2,
  Server,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { projects } from "../Data/projectsData";

const statusConfig = {
  Completed: {
    dot: "#22c55e",
    bg: "rgba(34,197,94,0.12)",
    color: "#86efac",
  },
  "In Progress": {
    dot: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
    color: "#fcd34d",
  },
  default: {
    dot: "#60a5fa",
    bg: "rgba(96,165,250,0.12)",
    color: "#93c5fd",
  },
};

function useInView(ref) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);

  return inView;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsMobile(
        window.matchMedia("(hover: none) and (pointer: coarse)").matches
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

function RepoPopup({ frontendRepo, backendRepo }) {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [open]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        ref={btnRef}
        onClick={() => setOpen((v) => !v)}
        style={{
          border: "1px solid rgba(34,211,238,0.3)",
          color: "#a5f3fc",
          padding: "12px 18px",
          borderRadius: "14px",
          fontSize: "13px",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(255,255,255,0.02)",
          cursor: "pointer",
          outline: "none",
        }}
      >
        <Github size={15} />
        Repo
        <ChevronUp
          size={13}
          style={{
            transform: open ? "rotate(0deg)" : "rotate(180deg)",
            transition: "transform 0.25s ease",
          }}
        />
      </button>

      {open && (
        <div
          ref={popupRef}
          style={{
            position: "absolute",
            bottom: "calc(100% + 10px)",
            left: "0",
            background:
              "linear-gradient(135deg, rgba(7,21,27,0.98) 0%, rgba(8,38,47,0.98) 100%)",
            border: "1px solid rgba(34,211,238,0.25)",
            borderRadius: "14px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            minWidth: "160px",
            boxShadow:
              "0 -8px 32px rgba(0,0,0,0.55), 0 0 20px rgba(34,211,238,0.08)",
            backdropFilter: "blur(16px)",
            zIndex: 100,
            animation: "popupFadeIn 0.2s cubic-bezier(.22,1,.36,1)",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "-6px",
              left: "20px",
              width: "10px",
              height: "10px",
              background: "rgba(8,38,47,0.98)",
              border: "1px solid rgba(34,211,238,0.25)",
              borderTop: "none",
              borderLeft: "none",
              transform: "rotate(45deg)",
            }}
          />

          <a
            href={frontendRepo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid rgba(34,211,238,0.3)",
              color: "#a5f3fc",
              padding: "10px 14px",
              borderRadius: "10px",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(34,211,238,0.05)",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(34,211,238,0.12)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(34,211,238,0.05)")
            }
          >
            <Code2 size={14} />
            Frontend
          </a>

          <a
            href={backendRepo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid rgba(129,140,248,0.3)",
              color: "#c7d2fe",
              padding: "10px 14px",
              borderRadius: "10px",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(99,102,241,0.05)",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(99,102,241,0.12)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(99,102,241,0.05)")
            }
          >
            <Server size={14} />
            Backend
          </a>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const isMobile = useIsMobile();

  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const status = statusConfig[project.status] || statusConfig.default;

  const images = project.gallery?.length ? project.gallery : [project.image];

  const isActive = isMobile ? false : hovered;

  const isSpotify = project.slug === "spotifyclone-app";

  return (
    <div
      ref={ref}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(48px) scale(0.97)",
        transition: `all 0.8s cubic-bezier(.22,1,.36,1) ${index * 0.1}s`,
        background:
          "linear-gradient(135deg, rgba(7,21,27,0.98) 0%, rgba(8,38,47,0.98) 50%, rgba(11,47,59,0.98) 100%)",
        border: isActive
          ? "1px solid rgba(34,211,238,0.4)"
          : "1px solid rgba(34,211,238,0.12)",
        boxShadow: isActive
          ? "0 0 0 1px rgba(34,211,238,0.08), 0 35px 90px rgba(0,0,0,0.65), 0 0 55px rgba(34,211,238,0.12)"
          : "0 12px 40px rgba(0,0,0,0.45)",
        borderRadius: "24px",
        overflow: "hidden",
        position: "relative",
        backdropFilter: "blur(14px)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isActive
            ? "radial-gradient(circle at top, rgba(34,211,238,0.08), transparent 65%)"
            : "none",
          transition: isMobile ? "none" : "0.5s ease",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ position: "relative" }}>
          <Swiper
            modules={[Pagination, EffectFade]}
            slidesPerView={1}
            effect="fade"
            pagination={{ clickable: true }}
            loop={images.length > 1}
            style={{
              width: "100%",
              height: "240px",
            }}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "240px",
                    background: isSpotify ? "#000" : "transparent",
                  }}
                >
                  <Image
                    src={img}
                    alt={project.Heading}
                    fill
                    style={{
                      objectFit: isSpotify ? "contain" : "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(7,21,27,0.96))",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              zIndex: 10,
              background: status.bg,
              border: `1px solid ${status.dot}50`,
              padding: "7px 14px",
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backdropFilter: "blur(12px)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: status.dot,
                boxShadow: `0 0 12px ${status.dot}`,
              }}
            />
            <span
              style={{
                color: status.color,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {project.status}
            </span>
          </div>
        </div>

        <div
          style={{
            padding: "26px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              marginBottom: "12px",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 900,
                  lineHeight: 1.2,
                  background:
                    "linear-gradient(135deg,#67e8f9 0%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {project.Heading}
              </h2>
              <div
                style={{
                  color: "#94a3b8",
                  fontSize: "12px",
                  marginTop: "6px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {project.category}
              </div>
            </div>
          </div>

          <p
            style={{
              color: "rgba(226,232,240,0.8)",
              fontSize: "14px",
              lineHeight: 1.8,
              marginBottom: "18px",
            }}
          >
            {project.Text}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  background: "rgba(34,211,238,0.08)",
                  border: "1px solid rgba(34,211,238,0.18)",
                  color: "#a5f3fc",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "18px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "22px",
            }}
          >
            {[
              { label: "Author", val: project.author },
              { label: "Role", val: project.role },
              { label: "Start", val: project.startDate },
              { label: "End", val: project.endDate },
            ].map(({ label, val }) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: "10px",
                    color: "rgba(148,163,184,0.7)",
                    marginBottom: "5px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 700,
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    color: "#f1f5f9",
                    fontSize: "13px",
                    fontWeight: 700,
                    lineHeight: 1.6,
                  }}
                >
                  {val}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              border: "1px solid rgba(34,211,238,0.16)",
              outline: "none",
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.1), rgba(99,102,241,0.12))",
              borderRadius: "14px",
              padding: "14px 16px",
              color: "#e0f2fe",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: 700,
              cursor: "pointer",
              marginBottom: expanded ? "20px" : "0",
              transition: "0.3s ease",
            }}
          >
            Read More
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          <div
            style={{
              maxHeight: expanded ? "2000px" : "0px",
              overflow: "hidden",
              transition: "all 0.6s ease",
              opacity: expanded ? 1 : 0,
            }}
          >
            <div style={{ paddingTop: "18px" }}>
              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.9,
                  fontSize: "14px",
                  marginBottom: "24px",
                }}
              >
                {project.description}
              </p>

              {[
                { title: "Features", data: project.features },
                { title: "Challenges", data: project.challenges },
                { title: "Outcomes", data: project.outcomes },
              ].map((section, idx) => (
                <div key={idx} style={{ marginBottom: "22px" }}>
                  <h3
                    style={{
                      color: "#67e8f9",
                      fontSize: "15px",
                      fontWeight: 800,
                      marginBottom: "12px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {section.title}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {section.data.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                          color: "#cbd5e1",
                          fontSize: "13.5px",
                          lineHeight: 1.7,
                        }}
                      >
                        <div
                          style={{
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            background: "#22d3ee",
                            marginTop: "9px",
                            flexShrink: 0,
                            boxShadow: "0 0 10px #22d3ee",
                          }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "24px",
            }}
          >
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg,#06b6d4,#6366f1)",
                color: "#fff",
                padding: "12px 18px",
                borderRadius: "14px",
                fontSize: "13px",
                fontWeight: 700,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "0.3s ease",
              }}
              >
                <ExternalLink size={15} />
                Live Demo
            </a>

            <RepoPopup
              frontendRepo={project.frontendRepo}
              backendRepo={project.backendRepo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ limit = 10, single = false }) {
  const displayedProjects = single
    ? projects.slice(0, 1)
    : projects.slice(0, limit);

  const headingRef = useRef(null);
  const headingInView = useInView(headingRef);

  return (
    <>
      <style>{`
        .projects-swiper .swiper-button-next,
        .projects-swiper .swiper-button-prev {
          width: 48px;
          height: 48px;
          background: rgba(7,21,27,0.88);
          border: 1px solid rgba(34,211,238,0.2);
          border-radius: 999px;
          color: #67e8f9;
          backdrop-filter: blur(10px);
          transition: 0.3s ease;
        }
        .projects-swiper .swiper-button-next:hover,
        .projects-swiper .swiper-button-prev:hover {
          background: rgba(34,211,238,0.12);
          transform: scale(1.08);
          border-color: rgba(34,211,238,0.4);
        }
        .projects-swiper .swiper-button-next::after,
        .projects-swiper .swiper-button-prev::after {
          font-size: 14px;
          font-weight: 900;
        }
        .projects-swiper .swiper-pagination-bullet {
          background: rgba(103,232,249,0.4);
          opacity: 1;
        }
        .projects-swiper .swiper-pagination-bullet-active {
          background: #67e8f9;
          transform: scale(1.3);
        }
        .projects-swiper .swiper-wrapper {
          align-items: flex-start !important;
        }
        .projects-swiper .swiper-slide {
          height: auto !important;
          align-self: flex-start !important;
          display: block !important;
        }
        @keyframes pulseLine {
          0%, 100% { opacity: .5; transform: scaleX(.9); }
          50% { opacity: 1; transform: scaleX(1); }
        }
        @keyframes popupFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        id="Projects"
        style={{
          padding: "110px 24px 90px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top, rgba(34,211,238,0.08), transparent 50%)",
            pointerEvents: "none",
          }}
        />

        <div
          ref={headingRef}
          style={{
            textAlign: "center",
            marginBottom: "70px",
            opacity: headingInView ? 1 : 0,
            transform: headingInView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p
            style={{
              color: "#22d3ee",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Selected Work
          </p>

          <h1
            style={{
              fontSize: "clamp(38px,6vw,58px)",
              fontWeight: 900,
              background:
                "linear-gradient(135deg,#f8fafc 0%,#67e8f9 45%,#818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.1,
              marginBottom: "24px",
              letterSpacing: "-0.04em",
            }}
          >
            Featured Projects
          </h1>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "1px",
                background:
                  "linear-gradient(to left, rgba(34,211,238,0.8), transparent)",
                animation: "pulseLine 2.8s ease-in-out infinite",
              }}
            />
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#22d3ee",
                boxShadow: "0 0 16px #22d3ee",
              }}
            />
            <div
              style={{
                width: "70px",
                height: "1px",
                background:
                  "linear-gradient(to right, rgba(34,211,238,0.8), transparent)",
                animation: "pulseLine 2.8s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <Swiper
            className="projects-swiper"
            modules={[Navigation, Pagination]}
            spaceBetween={28}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: "60px" }}
          >
            {displayedProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}