"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

const testimonials = [
  {
    quote:
      "Working with Shahnawaz was an absolute pleasure. He delivered our grocery store website ahead of schedule and the design exceeded every expectation we had. The responsiveness across all devices is flawless. Give quick feebacks and great ideas.",
    author: "Value Max Team",
    role: "Client · Grocery Retail",
    project: "Value Max",
    slug: "valuemax-website",
    image: "/ProjectImages/ValueMax/Image1.png",
    image2: "/ProjectImages/ValueMax/Image2.png",
    avatar: "/shahnawaz.jpeg",
  },
];

export default function Feedback() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.1);

  const [hovered, setHovered] = useState(false);
  const t = testimonials[0];

  return (
    <>
      <style>{`
        @keyframes pulseLine {
          0%, 100% { opacity: .5; transform: scaleX(.9); }
          50% { opacity: 1; transform: scaleX(1); }
        }
        @keyframes floatImg {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
        .feedback-img-main {
          animation: floatImg 5s ease-in-out infinite;
        }
        .quote-glow {
          animation: glowPulse 3s ease-in-out infinite;
        }
      `}</style>

      <section
        id="Feedback"
        ref={sectionRef}
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
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(34,211,238,0.07), transparent)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s cubic-bezier(.22,1,.36,1), transform 0.8s cubic-bezier(.22,1,.36,1)",
            textAlign: "center",
            marginBottom: "70px",
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
            Client Words
          </p>
          <h2
            style={{
              fontSize: "clamp(38px,6vw,58px)",
              fontWeight: 900,
              background: "linear-gradient(135deg,#f8fafc 0%,#67e8f9 45%,#818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.1,
              marginBottom: "24px",
              letterSpacing: "-0.04em",
            }}
          >
            What Clients Say
          </h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "70px", height: "1px", background: "linear-gradient(to left, rgba(34,211,238,0.8), transparent)", animation: "pulseLine 2.8s ease-in-out infinite" }} />
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 16px #22d3ee" }} />
            <div style={{ width: "70px", height: "1px", background: "linear-gradient(to right, rgba(34,211,238,0.8), transparent)", animation: "pulseLine 2.8s ease-in-out infinite" }} />
          </div>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "48px",
              alignItems: "center",
              background: "linear-gradient(135deg, rgba(7,21,27,0.98) 0%, rgba(8,38,47,0.97) 60%, rgba(11,47,59,0.97) 100%)",
              border: hovered ? "1px solid rgba(34,211,238,0.4)" : "1px solid rgba(34,211,238,0.12)",
              boxShadow: hovered
                ? "0 0 0 1px rgba(34,211,238,0.06), 0 40px 100px rgba(0,0,0,0.6), 0 0 60px rgba(34,211,238,0.1)"
                : "0 20px 60px rgba(0,0,0,0.45)",
              borderRadius: "28px",
              overflow: "hidden",
              backdropFilter: "blur(16px)",
              transition: "border 0.35s ease, box-shadow 0.35s ease",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
              transitionProperty: "opacity, transform, border, box-shadow",
              transitionDuration: "0.85s, 0.85s, 0.35s, 0.35s",
              transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
              transitionDelay: "0.1s",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: hovered
                  ? "radial-gradient(circle at top left, rgba(34,211,238,0.07), transparent 60%)"
                  : "none",
                transition: "0.5s ease",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                flex: "0 0 auto",
                width: "clamp(280px, 38%, 420px)",
                position: "relative",
                padding: "40px 0 40px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                alignSelf: "stretch",
                justifyContent: "center",
              }}
              className="feedback-left"
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(34,211,238,0.18)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.5), 0 0 32px rgba(34,211,238,0.08)",
                  aspectRatio: "16/10",
                }}
                className="feedback-img-main"
              >
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  autoplay={{ delay: 2800, disableOnInteraction: false }}
                  loop
                  allowTouchMove={false}
                  style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
                >
                  {[t.image, t.image2].map((src, i) => (
                    <SwiperSlide key={i}>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <Image src={src} alt={`${t.project} ${i + 1}`} fill style={{ objectFit: "cover" }} />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(135deg, transparent 50%, rgba(7,21,27,0.7) 100%)",
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "32px",
                  left: "24px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#22d3ee",
                  boxShadow: "0 0 20px #22d3ee",
                }}
                className="quote-glow"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "48px",
                  right: "0px",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#818cf8",
                  boxShadow: "0 0 14px #818cf8",
                }}
                className="quote-glow"
              />
            </div>

            <div
              style={{
                flex: 1,
                minWidth: "280px",
                padding: "48px 40px 48px 8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "28px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "16px",
                  background: "rgba(34,211,238,0.1)",
                  border: "1px solid rgba(34,211,238,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Quote size={24} color="#22d3ee" />
              </div>

              <blockquote
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontWeight: 500,
                  lineHeight: 1.8,
                  color: "rgba(226,232,240,0.9)",
                  fontStyle: "italic",
                  letterSpacing: "0.01em",
                  position: "relative",
                }}
              >
                {t.quote}
                <span
                  style={{
                    fontSize: "80px",
                    lineHeight: 0,
                    verticalAlign: "-0.4em",
                    color: "rgba(34,211,238,0.12)",
                    fontStyle: "normal",
                    fontWeight: 900,
                    fontFamily: "Georgia, serif",
                    marginLeft: "4px",
                  }}
                >
                  "
                </span>
              </blockquote>

              <div
                style={{
                  width: "48px",
                  height: "2px",
                  background: "linear-gradient(to right, #22d3ee, #818cf8)",
                  borderRadius: "2px",
                }}
              />

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid rgba(34,211,238,0.35)",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <Image src={t.avatar} alt={t.author} fill style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "15px",
                      background: "linear-gradient(135deg, #67e8f9, #818cf8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {t.author}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "12px", fontWeight: 600, marginTop: "3px", letterSpacing: "0.04em" }}>
                    {t.role}
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: "4px" }}>
                <Link
                  href={`/projects/${t.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                    color: "#fff",
                    padding: "13px 22px",
                    borderRadius: "14px",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "opacity 0.25s ease, transform 0.25s ease",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.88";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Check the Project
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .feedback-left {
            width: 100% !important;
            padding: 32px 24px 0 24px !important;
          }
        }
      `}</style>
    </>
  );
}