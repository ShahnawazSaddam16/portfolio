"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { projects } from "../Data/projectsData";

const statusConfig = {
  Completed: { dot: "#22c55e", bg: "rgba(34,197,94,0.12)", color: "#86efac" },
  "In Progress": { dot: "#f59e0b", bg: "rgba(245,158,11,0.12)", color: "#fcd34d" },
  default: { dot: "#60a5fa", bg: "rgba(96,165,250,0.12)", color: "#93c5fd" },
};

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [hovered, setHovered] = useState(false);
  const status = statusConfig[project.status] || statusConfig.default;
  const images = project.gallery?.length ? project.gallery : [project.image];

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(48px) scale(0.97)",
        transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${index * 0.1}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${index * 0.1}s`,
        background: "linear-gradient(135deg, rgba(7,21,27,0.95) 0%, rgba(8,38,47,0.95) 50%, rgba(11,47,59,0.95) 100%)",
        border: hovered ? "1px solid rgba(34,211,238,0.35)" : "1px solid rgba(34,211,238,0.1)",
        boxShadow: hovered
          ? "0 0 0 1px rgba(34,211,238,0.08), 0 24px 64px rgba(0,0,0,0.55), 0 0 40px rgba(34,211,238,0.07)"
          : "0 8px 32px rgba(0,0,0,0.4)",
        transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${index * 0.1}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${index * 0.1}s, border 0.35s ease, box-shadow 0.35s ease`,
        borderRadius: "20px",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        height: "100%",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.06) 0%, transparent 65%)"
            : "none",
          transition: "background 0.5s ease",
          pointerEvents: "none",
          zIndex: 0,
          borderRadius: "20px",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            loop={images.length > 1}
            style={{ width: "100%", height: "210px" }}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div style={{ position: "relative", width: "100%", height: "210px" }}>
                  <Image
                    src={img}
                    alt={project.Heading}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom, transparent 40%, rgba(7,21,27,0.95) 100%)",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: status.bg,
              border: `1px solid ${status.dot}40`,
              borderRadius: "99px",
              padding: "4px 12px 4px 8px",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: status.dot,
                boxShadow: `0 0 8px ${status.dot}`,
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: "11px", fontWeight: 700, color: status.color, letterSpacing: "0.04em" }}>
              {project.status}
            </span>
          </div>
        </div>

        <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
          <h2
            style={{
              fontSize: "19px",
              fontWeight: 800,
              background: "linear-gradient(90deg, #67e8f9 0%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "10px",
              letterSpacing: "-0.01em",
              lineHeight: 1.25,
            }}
          >
            {project.Heading}
          </h2>

          <p
            style={{
              color: "rgba(203,213,225,0.8)",
              fontSize: "13.5px",
              lineHeight: 1.7,
              marginBottom: "16px",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.Text}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "18px" }}>
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  background: "rgba(34,211,238,0.07)",
                  color: "#a5f3fc",
                  padding: "4px 11px",
                  borderRadius: "99px",
                  fontSize: "11px",
                  fontWeight: 600,
                  border: "1px solid rgba(34,211,238,0.15)",
                  letterSpacing: "0.03em",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "12px",
              padding: "14px 16px",
              marginBottom: "20px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px 8px",
            }}
          >
            {[
              { label: "Author", val: project.author },
              { label: "Role", val: project.role },
              { label: "Start", val: project.startDate },
              { label: "End", val: project.endDate },
            ].map(({ label, val }) => (
              <div key={label}>
                <div style={{ fontSize: "10px", color: "rgba(148,163,184,0.7)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2px" }}>
                  {label}
                </div>
                <div style={{ fontSize: "12.5px", color: "#e2e8f0", fontWeight: 600 }}>{val}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                  color: "#fff",
                  padding: "9px 20px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "13px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.95 14.95 0 01-5.84 7.38" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 9a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {project.demoLink.endsWith(".apk") ? "Download App" : "Live Demo"}
              </a>
            )}
            {project.Repo && (
              <a
                href={project.Repo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: "1px solid rgba(34,211,238,0.35)",
                  color: "#a5f3fc",
                  padding: "9px 20px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "13px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  background: "transparent",
                  transition: "background 0.2s ease, color 0.2s ease, transform 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(34,211,238,0.1)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#a5f3fc";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ limit = 10, single = false }) {
  const displayedProjects = single ? projects.slice(0, 1) : projects.slice(0, limit);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef);

  return (
    <>
      <style>{`
        .projects-swiper .swiper-button-next,
        .projects-swiper .swiper-button-prev {
          width: 40px;
          height: 40px;
          background: rgba(7,21,27,0.88);
          border: 1px solid rgba(34,211,238,0.25);
          border-radius: 50%;
          color: #67e8f9;
          backdrop-filter: blur(8px);
          transition: background 0.25s, border-color 0.25s, transform 0.2s;
        }
        .projects-swiper .swiper-button-next:hover,
        .projects-swiper .swiper-button-prev:hover {
          background: rgba(34,211,238,0.12);
          border-color: rgba(34,211,238,0.5);
          transform: scale(1.08);
        }
        .projects-swiper .swiper-button-next::after,
        .projects-swiper .swiper-button-prev::after {
          font-size: 13px;
          font-weight: 700;
        }
        .projects-swiper .swiper-pagination-bullet {
          background: rgba(103,232,249,0.35);
          opacity: 1;
          transition: background 0.2s, transform 0.2s;
        }
        .projects-swiper .swiper-pagination-bullet-active {
          background: #67e8f9;
          transform: scale(1.3);
        }
        .projects-swiper .swiper-slide {
          height: auto;
        }
        @keyframes pulse-line {
          0%, 100% { opacity: 0.5; transform: scaleX(0.95); }
          50% { opacity: 1; transform: scaleX(1); }
        }
      `}</style>

      <section
        id="Projects"
        style={{
          padding: "96px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "500px",
            background: "radial-gradient(ellipse at center, rgba(8,38,47,0.6) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          ref={headingRef}
          style={{
            textAlign: "center",
            marginBottom: "64px",
            position: "relative",
            zIndex: 1,
            opacity: headingInView ? 1 : 0,
            transform: headingInView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s cubic-bezier(.22,1,.36,1), transform 0.8s cubic-bezier(.22,1,.36,1)",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "#22d3ee",
              textTransform: "uppercase",
              marginBottom: "12px",
              opacity: 0.8,
              fontFamily: "var(--font-jetbrains-mono)",
            }}
          >
            Selected Work
          </p>

          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 900,
              background: "linear-gradient(135deg, #f0f9ff 0%, #67e8f9 45%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "20px",
              fontFamily: "var(--font-urbanist)",
            }}
          >
            Projects
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "60px",
                background: "linear-gradient(to left, rgba(34,211,238,0.6), transparent)",
                animation: "pulse-line 2.8s ease-in-out infinite",
              }}
            />
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#22d3ee",
                boxShadow: "0 0 12px #22d3ee",
              }}
            />
            <div
              style={{
                height: "1px",
                width: "60px",
                background: "linear-gradient(to right, rgba(34,211,238,0.6), transparent)",
                animation: "pulse-line 2.8s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <Swiper
            className="projects-swiper"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: "48px" }}
          >
            {displayedProjects.map((project, index) => (
              <SwiperSlide key={index} style={{ height: "auto" }}>
                <ProjectCard project={project} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
